import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarEn: NavbarConfig = [
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