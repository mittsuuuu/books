export default defineNuxtConfig({
  ssr: false, // 静的サイト生成を有効化
  app: {
    baseURL: '/books/', // GitHub Pagesのサブパス
    buildAssetsDir: '/_nuxt/' // アセットのパス
  },
  devtools: { enabled: true },
  css: ["bootstrap/dist/css/bootstrap.min.css"],
})