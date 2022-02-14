const categorias = ["economia", "esporte", "tecnologia", "atualidade"];

const noticias = [
  {
    imagemUrl:
      "https://s2.glbimg.com/4Ui1D_-9zxNX4LnkrGflletAXQY=/0x0:1353x761/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/A/U/DB9OVmRkiOb8KkDvblcA/postos-de-combustiveis-de-ribeirao-preto-sp-veem-vendas-de-gasolina-e-etanol-cair-queda-esta-ligada-a-alta-de-precos-diz-anp.png",
    titulo:
      "Preço do etanol tem queda de 3% nos postos na semana; gasolina cai 0,3%, aponta ANP",
    subtitulo:
      "O diesel, por sua vez, se manteve estável, com uma pequena variação de R$ 5,588 para R$ 5,589.",
    categoria: categorias[0],
    url: "https://g1.globo.com/economia/noticia/2022/02/11/preco-do-etanol-tem-queda-de-3percent-nos-postos-na-semana-gasolina-cai-03percent-aponta-anp.ghtml#G1-ECONOMIA-FEED-user-sel-11,rec-user-top-recent,bc86d6e5-f0e9-4812-a149-2d7ca269227d",
  },
  {
    imagemUrl:
      "https://s2.glbimg.com/8fsidjfTeO9FmatJcgD9C88NPfA=/5x3:603x408/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/b/8/Jfqkm9QE6jMIA5KCRHIw/cao.png",
    titulo:
      "Mercado pet 'dispara' e animais já têm até plano de saúde; conheça",
    subtitulo:
      "Com cachorros e gatos fazendo cada vez mais parte das famílias, empresas oferecem serviços para que os tutores tenham mais segurança na hora de emergências e também nos cuidados básicos com os bichinhos.",
    categoria: categorias[0],
    url: "https://g1.globo.com/empreendedorismo/noticia/2022/02/11/mercado-pet-dispara-e-animais-ja-tem-ate-plano-de-saude-conheca.ghtml#G1-ECONOMIA-FEED-user-sel-11,rec-user-top-recent,c2a143e9-cb69-4a99-aad0-77386cb530ae",
  },
  {
    imagemUrl:
      "https://s2.glbimg.com/B5MHXHJsDhp75a8TpvUoRNvd_W0=/0x0:4044x2696/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/g/j/AV6hYUTFABunNEIFybWA/000-9wc4vv.jpg",
    titulo:
      "Diamante negro de origem 'extraterrestre' é leiloado por R$ 22 milhões",
    subtitulo: '"O Enigma" foi arrematado com criptomoedas em Londres.',
    categoria: categorias[0],
    url: "https://g1.globo.com/economia/noticia/2022/02/11/maior-diamante-negro-do-mundo-e-leiloado-por-r-22-milhoes.ghtml#G1-ECONOMIA-FEED-user-sel-11,rec-user-top-recent,bf5173ad-487b-445e-a4b4-f83dbb950c17",
  },
  {
    imagemUrl:
      "https://s2.glbimg.com/MK79kIfbEuVsoZ45RMQh9qxprnU=/0x0:3000x2001/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/e/s/D7u2sCQQ2Let8Ap6TTRw/agif22021318031514.jpg",
    titulo:
      'Carille prevê reforços no Santos e admite problemas: "Não temos sabedoria para conduzir o jogo"',
    subtitulo:
      "Veja a entrevista do treinador depois da vitória de 2 a 1 sobre o Ituano.",
    categoria: categorias[1],
    url: "https://ge.globo.com/sp/santos-e-regiao/futebol/times/santos/noticia/noticias-santos-carille-reforcos-entrevista-ituano.ghtml",
  },
  {
    imagemUrl:
      "https://s2.glbimg.com/fvddZuayaEF1QByphEAJsHgxNoA=/0x0:1000x667/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/h/p/qmArMhSXm6vYp7iaTqnw/flacampeao.jpg",
    titulo:
      "Flamengo domina o Burgos e é bicampeão da Copa Intercontinental de basquete",
    subtitulo:
      "Rubro-negro derrota equipe espanhola e repete o título conquistado em 2014, no Rio, na competição que equivale ao Mundial de clubes da modalidade.",
    categoria: categorias[1],
    url: "https://ge.globo.com/basquete/noticia/flamengo-domina-o-burgos-e-e-bicampeao-da-copa-intercontinental-de-basquete.ghtml",
  },
  {
    imagemUrl:
      "https://s2.glbimg.com/6VCi2WpqLg-lOqQvNMVP3pqx50Y=/0x0:1366x708/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/4/E/WxEfg6TbCSIk7kGAvPVA/nzl.png",
    titulo: "Hipismo: bicampeão olímpico é investigado por agredir cavalo",
    subtitulo:
      "Neozelandês Mark Todd é flagrado batendo em um cavalo com um galho durante treinamento de cross-country na Grã-Bretanha.",
    categoria: categorias[1],
    url: "https://ge.globo.com/hipismo/noticia/hipismo-bicampeao-olimpico-e-investigado-por-agredir-cavalo.ghtml#GE-FEED-user-sel-38,editorial,20f205df-6f4d-46a0-88da-53bc7ae868f7",
  },
  {
    imagemUrl:
      "https://s2.glbimg.com/T25_WvMXKPASc4CRdKZGkf8Hx1A=/0x0:725x501/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/n/O/5B0eWKTBaqCEuuMjbfJQ/deepfake-mark-zuckerberg.jpg",
    titulo: "O que é deepfake e como ele é usado para distorcer realidade",
    subtitulo:
      "Técnica que usa inteligência artificial para criar adulterações realistas já serviu para espalhar nudes falsos e vídeo editado de Mark Zuckerberg.",
    categoria: categorias[2],
    url: "https://g1.globo.com/tecnologia/noticia/2022/02/11/o-que-e-deepfake-e-como-ele-e-usado-para-distorcer-realidade.ghtml#G1-TECNOLOGIA-FEED-user-sel-1,rec-top,7f66ee2f-9a16-411a-9725-6e9bea054984",
  },
  {
    imagemUrl:
      "https://s2.glbimg.com/6s9ZadgHzEJTfbaDXB_WM7gz2oM=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/3/T/OEEkk2Rg2Bf6Fs8Int5Q/google-fotos-app.jpg",
    titulo: "Como proteger fotos e vídeos com senha no Android",
    subtitulo:
      "Google Fotos e Files têm recursos que permitem restringir acesso de terceiros a arquivos.",
    categoria: categorias[2],
    url: "https://g1.globo.com/tecnologia/noticia/2022/02/09/como-proteger-fotos-e-videos-com-senha-no-android.ghtml#G1-TECNOLOGIA-FEED-user-sel-1,rec-top,c4c4318c-9fda-4533-8d0a-068cd189c63e",
  },
  {
    imagemUrl:
      "https://s2.glbimg.com/yhwGnVVrlg2Swusj6e1iakoFdUQ=/0x0:3500x2333/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/Q/a/0zYTpGQVmmlcmLpIgjUg/2021-08-20t192228z-1-lynxmpeh7j13p-rtroptp-4-nvidia-results.jpg",
    titulo:
      "Aquisição da fabricante de chips Arm pela Nvidia é cancelada após 'desafios regulatórios'",
    subtitulo:
      "Negócio foi anunciado em setembro de 2020 e foi avaliado em cerca de US$ 40 bilhões. Softbank, atual dona da Arm, vai listar a companhia na bolsa de valores.",
    categoria: categorias[2],
    url: "https://g1.globo.com/tecnologia/noticia/2022/02/08/aquisicao-da-fabricante-de-chips-arm-pela-nvidia-e-cancelada-apos-desafios-regulatorios.ghtml#G1-TECNOLOGIA-FEED-user-sel-1,rec-top,c4c4318c-9fda-4533-8d0a-068cd189c63e",
  },
  {
    imagemUrl:
      "https://s2.glbimg.com/lzQEmyFUGIxapZu0_KT3L49on24=/0x0:2000x1333/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/b/P/DbYrk6R7GPCKDqkzMV8w/treina-civis-ucrania.jpg",
    titulo: "Ucrânia treina civis para defesa em caso de invasão russa; FOTOS",
    subtitulo:
      "Fotos mostram pessoas na região de Donetsk participando de treinamento neste domingo (13) na região de Donetsk, incusive idosos e crianças. Prática já vinha antes da escalada da disputa nas últimas semanas.",
    categoria: categorias[3],
    url: "https://g1.globo.com/mundo/noticia/2022/02/13/ucrania-treina-civis-para-defesa-em-caso-de-invasao-russa.ghtml",
  },
  {
    imagemUrl:
      "https://s2.glbimg.com/chquNf75dx9uXRAKwKnAeonqTx8=/0x0:1385x923/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/Y/g/3rP2R0TgWArEdgdzoAAw/fk-xlr4xmagfyqu.jpeg",
    titulo:
      "Presidente da Macedônia do Norte leva à escola menina com síndrome de Down vítima de bullying",
    subtitulo:
      "Estudante de apenas 11 anos deixou de frequentar as aulas com todos os colegas por preconceito dos alunos e de alguns dos pais que não aceitavam a integração.",
    categoria: categorias[3],
    url: "https://g1.globo.com/mundo/noticia/2022/02/13/presidente-da-macedonia-do-norte-leva-a-escola-menina-com-sindrome-de-down-vitima-de-bullying.ghtml#G1-FEED-MUNDO-user-sel-11,rec-user-top,4cb906f8-76c8-42bf-a5ee-801c780f1cc2",
  },
  {
    imagemUrl:
      "https://s2.glbimg.com/uOdTk52iS6qr1qzz3hoFwfxZnRc=/0x0:1700x1065/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/v/H/l14ZzESoyilampQcALww/untitled-1.jpg",
    titulo: "Por que a América Latina se tornou novo 'lixão' dos EUA",
    subtitulo:
      "Desde 2018, os níveis americanos de exportação de resíduos plásticos para países da região aumentaram consideravelmente, e, em 2021, um novo recorde foi batido.",
    categoria: categorias[3],
    url: "https://g1.globo.com/mundo/noticia/2022/02/13/por-que-a-america-latina-se-tornou-novo-lixao-dos-eua.ghtml#G1-FEED-MUNDO-user-sel-11,rec-user-top,04b56422-d949-4fc4-a37f-11f7c8998bc8",
  },
];

const obterNoticiasPorCategoria = (categoria) => {
  return noticias.filter((noticia) => noticia.categoria === categoria);
};

for (const categoria of categorias) {
  var noticiasPorCategoria = obterNoticiasPorCategoria(categoria);

  const categoriaSectionElement = document.getElementById(
    `${categoria}-section`
  );

  categoriaSectionElement.innerHTML = noticiasPorCategoria
    .map(
      (noticia) => `
    <div class="col">
      <div class="card h-100">
        <img src="${noticia.imagemUrl}" class="card-img-top" style="width: 100%;height: 130px;object-fit: cover">
        <div class="card-body">
          <h5 class="card-title">${noticia.titulo}</h5>
          <small class="card-text text-muted">${noticia.subtitulo}</small>
        </div>
        <a href="${noticia.url}" target="_blank" class="stretched-link"></a>
      </div>
    </div>`
    )
    .join("");
}
