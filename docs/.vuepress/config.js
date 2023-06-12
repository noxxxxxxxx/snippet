import { defineUserConfig, defaultTheme } from 'vuepress'
import {
    navbarEn,
    navbarZh,
} from './config/index.ts'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'Snippet',
    description: 'simple code snippet',
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Snippet',
            description: 'simple code snippet',
        },
        '/zh/': {
            lang: 'zh-CN',
            title: '代码片段',
            description: '一段简单实用的代码片段',
        },
    },
    theme: defaultTheme({
        repo: 'https://github.com/noxxxxxxxx/snippet.git',
        contributors: false,
        locales: {
            '/': {
                navbar: navbarEn,
                // page meta
                editLinkText: 'Edit this page on GitHub',
            },
            '/zh/': {
                navbar: navbarZh,
                selectLanguageName: '简体中文',
                selectLanguageText: '选择语言',
                selectLanguageAriaLabel: '选择语言',
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdatedText: '上次更新',
                contributorsText: '贡献者',
                // custom containers
                tip: '提示',
                warning: '注意',
                danger: '警告',
                // 404 page
                notFound: [
                    '这里什么都没有',
                    '我们怎么到这来了？',
                    '这是一个 404 页面',
                    '看起来我们进入了错误的链接',
                ],
                backToHome: '返回首页',
                // a11y
                openInNewWindow: '在新窗口打开',
                toggleColorMode: '切换颜色模式',
                toggleSidebar: '切换侧边栏',
            }
        },
    }),
})