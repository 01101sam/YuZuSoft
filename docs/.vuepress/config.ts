import type {DefaultThemeOptions} from 'vuepress'
import {defineUserConfig} from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    lang: 'zh-CN',
    title: '柚子社入坑指南',
    description: '提供 Steam 上架的柚子社游戏资讯',
    base: '/',
    plugins: [
        ['@vuepress/back-to-top'],
        [
            '@vuepress/pwa',
            {
                skipWaiting: true
            }
        ],
        [
            '@vuepress/plugin-pwa-popup',
            {
                locales: {
                    '/': {
                        message: '发现新内容',
                        buttonText: '刷新',
                    }
                }
            }
        ],
        [
            '@vuepress/plugin-search',
            {
                locales: {
                    '/': {
                        placeholder: '搜索',
                    }
                }
            }
        ]
    ],

    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        docsRepo: 'https://gitlab.com/sam01101/YuZuSoft',
        docsBranch: 'master',
        editLinkText: "编辑此页",
        lastUpdated: true,
        lastUpdatedText: '上一次编辑',
        contributors: true,
        tip: "提示",
        warning: "注意",
        danger: "警告",
        backToHome: "返回主页",
        navbar: [
            {
                text: '指南',
                link: '/guide/'
            }
        ],
        sidebar: [
            {
                text: "指南",
                children: [
                    "/guide/README.md",
                    "/guide/getting_started.md",
                    "/guide/download.md",
                ]
            }
        ],
    },

})
