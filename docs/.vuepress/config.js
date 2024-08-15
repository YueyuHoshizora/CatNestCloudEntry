import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-TW',

  title: 'CatNest Cloud',
  description: ' ',

  theme: defaultTheme({
    logo: '/images/logo.jpg',

    navbar: ['/', '/system-instance'],
  }),

  bundler: viteBundler(),
})
