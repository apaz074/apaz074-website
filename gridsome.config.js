module.exports = {
  siteName: "<apaz074/>",
  siteDescription: "Desarrollo web con ingenio.",
  siteUrl: "https://apaz074.com",
  remark: {
    plugins: [
      '@gridsome/remark-prismjs'
    ]
  },
  plugins: [/*{
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-72659574-11'
      }
    },*/
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    }
  ],
  css: {
    loaderOptions: {
      scss: {}
    }
  }
}