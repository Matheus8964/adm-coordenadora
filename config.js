/*
  CONFIGURAÇÃO DO PORTAL
  1. Para mudar o nome de um grupo, altere "title".
  2. Para mudar o nome de uma página, altere "label".
  3. Para adicionar uma página, copie um objeto dentro de "items".
  4. Para exibir um sistema dentro do VIEW, use mode: "iframe".
  5. Para abrir em outra guia, use mode: "link".

  Observação: alguns sites bloqueiam a exibição por iframe. Nesses casos,
  configure mode: "link".
*/

window.APP_CONFIG = {
  appName: "SUPORTE RH",

  menu: [
    {
      title: "FLUXO ADM",
      items: [
        {
          id: "pagina-adm-01",
          label: "Página ADM 01",
          url: "",
          mode: "iframe"
        },
        {
          id: "pagina-adm-02",
          label: "Página ADM 02",
          url: "",
          mode: "iframe"
        }
      ]
    },
    {
      title: "FLUXO COORDENADORA",
      items: [
        {
          id: "pagina-coord-01",
          label: "Página Coordenadora 01",
          url: "",
          mode: "iframe"
        },
        {
          id: "pagina-coord-02",
          label: "Página Coordenadora 02",
          url: "",
          mode: "iframe"
        }
      ]
    }
  ]
};
