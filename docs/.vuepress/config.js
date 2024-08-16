import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-TW',

  title: '貓窩雲',
  description: 'CatNest Cloud',

  theme: defaultTheme({
    logo: '/images/logo.jpg',

    navbar: ['/', '/system-instance'],

    // 不顯示貢獻者
    contributors: false,

    git: {
      // 顯示更新時區為GMT+8
      timezone: 'Asia/Taipei',
    }
  }),

  bundler: viteBundler(),
})
