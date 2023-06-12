import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarZh: NavbarConfig = [
    {
        text: 'Home',
        link: '/zh/'
    },
    {
        text: 'Javascript',
        children: [
            { text: 'Pure', link: '/zh/javascript/pure/' },
            { text: 'Vue', link: '/zh/javascript/vue/' }
        ]
    },
    {
        text: 'CSS',
        children: [
            { text: 'Effect', link: '/zh/css/effect/' }
        ]
    },
    {
        text: 'DOM',
        link: '/zh/dom/'
    },
    {
        text: 'Mysql',
        children: [
            { text: 'Sql', link: '/zh/mysql/sql/' },
        ]
    },
    {
        text: 'Shell',
        children: [
            { text: 'Shell', link: '/zh/shell/' },
        ]
    },
    {
        text: 'ImageMagick',
        children: [
            { text: 'ImageMagick', link: '/zh/imagemagick/' },
        ]
    }
]