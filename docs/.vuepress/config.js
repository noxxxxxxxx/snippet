import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'Snippet',
    description: 'simple code snippet',
    theme: defaultTheme({
        repo: 'https://github.com/noxxxxxxxx/snippet.git',
        contributors: false,
        navbar: [
            {
                text: 'Home',
                link: '/'
            },
            {
                text: 'Javascript',
                children: [
                    { text: 'Pure', link: '/javascript/pure/' },
                    { text: 'Vue', link: '/javascript/vue/' }
                ]
            },
            {
                text: 'CSS',
                children: [
                    { text: 'Effect', link: '/css/effect/' }
                ]
            },
            {
                text: 'DOM',
                link: '/dom/'
            },
            {
                text: 'Mysql',
                children: [
                    { text: 'Sql', link: '/mysql/sql/' },
                ]
            },
            {
                text: 'Shell',
                children: [
                    { text: 'Shell', link: '/shell/' },
                ]
            },
            {
                text: 'ImageMagick',
                children: [
                    { text: 'ImageMagick', link: '/imagemagick/' },
                ]
            }
    ]
    }),
})