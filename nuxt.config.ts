export default defineNuxtConfig({
  // 静的サイト生成を有効化
  // Nuxt 2の `target: 'static'` に相当
  ssr: false,

  app: {
    // アプリケーションのベースURLを設定
    // GitHub Pagesのプロジェクトサイトの場合、リポジトリ名がサブパスになる
    // 例: https://<username>.github.io/books/
    baseURL: '/books/', // ローカル確認用に相対パスに変更
    // アセットのパス (デフォルト値だが明示的に指定)
    buildAssetsDir: '/_nuxt/'
  },

  // 開発ツールを有効化
  devtools: { enabled: true },

  // グローバルCSSの指定
  css: ["bootstrap/dist/css/bootstrap.min.css"],

  // generateに関する設定 (Nuxt 3での一般的な運用についてコメント)
  // Nuxt 3では `nuxt generate` コマンドを実行すると、
  // デフォルトで `.output/public` ディレクトリに静的ファイルが出力されます。
  // GitHub Pagesの `docs` フォルダにデプロイする場合、
  // ビルド後に `.output/public` の内容をリポジトリの `docs` フォルダにコピーしてください。
  // 例: cp -R .output/public/* docs/
});