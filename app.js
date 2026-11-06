(() => {
  "use strict";

  const config = window.APP_CONFIG || { menu: [] };
  const menuElement = document.getElementById("menu");
  const currentPageName = document.getElementById("currentPageName");
  const viewPlaceholder = document.getElementById("viewPlaceholder");
  const frameContainer = document.getElementById("viewFrameContainer");
  const frame = document.getElementById("moduleView");
  const linkMessage = document.getElementById("viewLinkMessage");
  const openLink = document.getElementById("viewOpenLink");
  const errorBox = document.getElementById("viewError");
  const errorLink = document.getElementById("viewErrorLink");
  const sidebar = document.getElementById("sidebar");
  const backdrop = document.getElementById("mobileBackdrop");
  const menuToggle = document.getElementById("menuToggle");

  let activeButton = null;

  function hideAllViews() {
    viewPlaceholder.hidden = true;
    frameContainer.hidden = true;
    linkMessage.hidden = true;
    errorBox.hidden = true;
  }

  function showEmptyView() {
    hideAllViews();
    viewPlaceholder.hidden = false;
    frame.removeAttribute("src");
    currentPageName.textContent = "Visualização";
  }

  function setActive(button) {
    if (activeButton) activeButton.classList.remove("active");
    activeButton = button;
    if (activeButton) activeButton.classList.add("active");
  }

  function closeMobileMenu() {
    sidebar.classList.remove("is-open");
    backdrop.classList.remove("is-visible");
    menuToggle.setAttribute("aria-expanded", "false");
  }

  function openModule(item, button) {
    setActive(button);
    currentPageName.textContent = item.label || "Módulo";
    closeMobileMenu();

    const url = (item.url || "").trim();
    console.log("PÁGINA:", item.label);
console.log("URL RECEBIDA:", item.url);
console.log("URL TRATADA:", url);
    hideAllViews();

    if (!url) {
      viewPlaceholder.hidden = false;
      viewPlaceholder.querySelector("span").textContent =
        "Configure o endereço desta página no arquivo config.js.";
      frame.removeAttribute("src");
      return;
    }

    if (item.mode === "link") {
      linkMessage.hidden = false;
      openLink.href = url;
      return;
    }

    frameContainer.hidden = false;
    frame.onload = () => {
      // O evento onload indica que o iframe recebeu uma resposta,
      // mas não garante que o site permita interação/incorporação.
    };
    frame.onerror = () => {
      frameContainer.hidden = true;
      errorBox.hidden = false;
      errorLink.href = url;
    };
    frame.src = url;
  }

  function createMenu() {
    menuElement.innerHTML = "";

    (config.menu || []).forEach((group, groupIndex) => {
      const section = document.createElement("section");
      section.className = "menu-group";

      if (group.title) {
        const heading = document.createElement("div");
        heading.className = "menu-group-title";
        heading.textContent = group.title;
        section.appendChild(heading);
      }

      (group.items || []).forEach((item, itemIndex) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "menu-item";
        button.textContent = item.label || `Página ${itemIndex + 1}`;
        button.dataset.pageId = item.id || `${groupIndex}-${itemIndex}`;
        button.addEventListener("click", () => openModule(item, button));
        section.appendChild(button);
      });

      menuElement.appendChild(section);
    });
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = sidebar.classList.toggle("is-open");
    backdrop.classList.toggle("is-visible", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  backdrop.addEventListener("click", closeMobileMenu);

  createMenu();
  showEmptyView();

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./service-worker.js")
        .catch(error => console.error("Falha ao registrar o Service Worker:", error));
    });
  }
})();
