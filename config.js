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
          id: "FOLGAS",
          label: "FOLGAS",
          url: "",
          mode: "iframe"
        },
        {
          id: "TROCAS_ADM",
          label: "TROCAS_ADM",
          url: "",
          mode: "iframe"
        }
      ]
    },
    {
      title: "FLUXO COORDENADORA",
      items: [
        {
          id: "TROCAS_COORDENADORA",
          label: "TROCAS_COORDENADORA",
          url: "",
          mode: "iframe"
        },
        {
          id: "CALENDARIO GERAL",
          label: "Página Coordenadora 02",
          url: "",
          mode: "iframe"
        }
      ]
    }
  ]
};
