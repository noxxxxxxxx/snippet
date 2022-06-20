module.exports = {
    title: 'Snippet',
    description: 'simple code snippet',
    themeConfig: {
        nav: [
            {
                text: 'Home',
                link: '/'
            },
            { 
                text: 'Javascript', 
                ariaLabel: 'Javascript Menu',
                items: [
                    { text: 'Pure', link: '/javascript/pure/' },
                    { text: 'Vue', link: '/javascript/vue/' }
                ]
            },
            { 
                text: 'Mysql', 
                ariaLabel: 'Mysql Menu',
                items: [
                    { text: 'Sql', link: '/mysql/sql/' },
                ]
            },
            { 
                text: 'Shell', 
                ariaLabel: 'Shell Menu',
                items: [
                    { text: 'Shell', link: '/shell/' },
                ]
            }
        ],
        lastUpdated: 'Last Updated'
    }
}