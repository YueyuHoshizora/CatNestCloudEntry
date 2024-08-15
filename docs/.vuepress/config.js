import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-TW',

  title: 'CatNest Cloud',
  description: '貓窩雲系統入口',

  theme: defaultTheme({
    logo: 'images/logo.png',

    navbar: ['/', '/list-instance'],
  }),

  bundler: viteBundler(),
})
