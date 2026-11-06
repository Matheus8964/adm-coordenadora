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
          url: "https://script.google.com/a/*/macros/s/AKfycbxBwN3nOJNeof0sTV0bXmKwLAg7_RWGt2fo1qaQT9XOUePaY2m3AO7-C5u0rqKp7hM1/exec?page=admin",
          mode: "iframe"
        },
        {
          id: "TROCAS_ADM",
          label: "TROCAS_ADM",
          url: "https://script.google.com/a/*/macros/s/AKfycbzKcHVl2B-UyQjzz8i5Xc9BRCboX2-VoBWjUyKgjX_CttRY8PnpTsH41DE_oMrUszoA/exec",
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
          url: "https://script.google.com/a/*/macros/s/AKfycbzKcHVl2B-UyQjzz8i5Xc9BRCboX2-VoBWjUyKgjX_CttRY8PnpTsH41DE_oMrUszoA/exec?page=coordenacao",
          mode: "iframe"
        },
        {
          id: "CALENDARIO GERAL",
          label: "CALENDARIO GERAL",
          url: "https://script.google.com/a/*/macros/s/AKfycbyUTfLoWxhAFamCUmjQu1knQCMXqINzg6mzz111vbWxkkBssjYv6HljdMEp-Fkm94xAJw/exec",
          mode: "iframe"
        }
      ]
    }
  ]
};
