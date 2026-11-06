# Suporte RH — Portal PWA

Portal interno com menu lateral configurável e uma área principal exclusiva para exibição dos módulos (VIEW).

## Arquivos

- `index.html`: estrutura da página, menu e área VIEW.
- `styles.css`: identidade visual azul e layout responsivo.
- `config.js`: **local para editar os nomes, grupos e endereços do menu**.
- `app.js`: funcionamento do menu, troca de módulos e abertura dos links.
- `manifest.webmanifest`: configuração de instalação como aplicativo.
- `service-worker.js`: cache do portal para uso offline da estrutura.
- `icons/`: ícones do PWA.

## Como editar o menu

Abra `config.js`. Cada grupo tem um título e uma lista de páginas:

```js
{
  title: "FLUXO ADM",
  items: [
    {
      id: "folgas",
      label: "Folgas",
      url: "https://endereco-do-seu-sistema",
      mode: "iframe"
    }
  ]
}
```

Para adicionar uma opção, copie um objeto de página e altere `id`, `label`, `url` e `mode`.

- `label`: nome que aparece no menu.
- `url`: endereço completo do sistema.
- `mode: "iframe"`: tenta abrir dentro do VIEW.
- `mode: "link"`: apresenta um botão para abrir o sistema em outra guia.

Os identificadores (`id`) devem ser únicos.

## Como editar o VIEW

A área de visualização está no `index.html`, dentro de:

```html
<section class="view-area" id="viewArea">
  ...
</section>
```

O `iframe` com `id="moduleView"` é a área onde os sistemas serão exibidos. Em geral, não é necessário alterar essa parte: basta configurar a URL no `config.js`.

**Importante:** alguns sistemas, especialmente páginas do Google Apps Script ou serviços com proteção de incorporação, podem bloquear iframe por política de segurança (`X-Frame-Options` ou `Content-Security-Policy`). Se isso ocorrer, altere `mode` para `"link"`.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub, por exemplo `suporte-rh`.
2. Envie todos os arquivos e a pasta `icons`.
3. Abra **Settings → Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Selecione a branch `main` e a pasta `/ (root)`.
6. Salve e aguarde a publicação.
7. Acesse o endereço informado pelo GitHub Pages.

O PWA e o Service Worker funcionam em HTTPS (o GitHub Pages fornece HTTPS). Se publicar em um subdiretório de projeto, mantenha os caminhos relativos `./` como estão.

## Atualizar depois de publicar

Altere os arquivos, faça commit e push. Se uma versão antiga continuar aparecendo, feche e abra o portal novamente ou limpe os dados/cache do site. Ao alterar os arquivos do app, atualize `CACHE_NAME` em `service-worker.js` (por exemplo, `suporte-rh-v2`) para forçar a renovação do cache.
