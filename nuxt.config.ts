export default defineNuxtConfig({
  ssr: false, // 静的サイト生成を有効化
  app: {
    baseURL: './', // GitHub Pagesのルートパス
    buildAssetsDir: '/_nuxt/' // アセットのパス
  },
  generate: {
    dir: 'docs'
  },
  devtools: { enabled: true },
  css: ["bootstrap/dist/css/bootstrap.min.css"],
})