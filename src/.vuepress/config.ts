import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
// import { docsearchPlugin } from '@vuepress/plugin-docsearch'
// import { externalLinkIconPlugin } from '@vuepress/plugin-external-link-icon'
import fullTextSearchPlugin from "vuepress-plugin-full-text-search2";


export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "JavaBlog",
  description: "",



  theme,
  plugins: [
    fullTextSearchPlugin({
      locales: {
        '/': {
          placeholder: '搜索',
        },
      },
    }),
    // externalLinkIconPlugin({
    //   // 配置项
    // }),
    // docsearchPlugin({
    //   appId: '<APP_ID>',
    //   apiKey: '<API_KEY>',
    //   indexName: '<INDEX_NAME>',
    //   locales: {
    //     '/': {
    //       placeholder: '搜索文档',
    //       translations: {
    //         button: {
    //           buttonText: '搜索文档',
    //         },
    //       },
    //     },
    //   },
    // }),
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
