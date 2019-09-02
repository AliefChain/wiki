module.exports = {
    plugins: [
        ['mathjax', {
            target: 'svg',
            macros: {
                '*': '\\times',
            },
        }],
    ],
  dest: '.vuepress/dist',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Alief Wiki',
      description: 'Alief Document'
    },
    '/lang/cn/': {
      lang: 'zh-CN',
      title: 'Alief Wiki',
      description: 'Alief Document'
    }
  },
  serviceWorker: true,
  themeConfig: {
    repo: 'AliefChain/wiki',
    editLinks: false,
    docsDir: 'docs',
    docsBranch: '0.1',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        nav: [
          {
            text: 'WebSite',
            link: 'http://www.alief.io',
          },
          {
            text: 'Document',
            link: '/'
          },
          {
            text: 'Changelog',
            link: 'https://github.com/AliefChain/wiki/master/CHANGELOG.md'
          },
          {
            text: 'Tool',
            items: [
              { text: 'Block Explorer', link: 'http://explorer.alief.hbwallet.co' },
              { text: 'Wallet', link: 'http://www.alief.io' }
            ]
          }
        ],
        sidebar: [
            {
                title: "Overview",
                collapsable: true,
                children: [
                    "/intro/",
                    "/intro/staking",
                    "/intro/consensus",
                    "/intro/governance",
                    "/intro/roadmap",
                    "/intro/bridge",
                    "/intro/glossary"
                ]
            },
            {
                title: "Guide",
                collapsable: true,
                children: [
                    "/guide/"
                ]
            },
            {
                title: "Deploy",
                collapsable: true,
                children: [
                    "/deploy/",
                    "/deploy/node",
                    "/deploy/mainnet",
                    "/deploy/testnet",
                    "/deploy/wallet"
                ]
            },
            {
                title: "CLI",
                collapsable: true,
                children: [
                    "/cli/",
                ]
            },
            {
                title: "API",
                collapsable: true,
                children: [
                    "/api/",
                ]
            },
            {
                title: "SDK",
                collapsable: true,
                children: [
                    "/sdk/",
                ]
            },
            {
                title: "FAQ",
                collapsable: true,
                children: [
                    "/faq/",
                ]
            },
        ]
      },
      '/lang/cn/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新"
          }
        },
        nav: [
          {
            text: '官网',
            link: 'http://www.alief.io',
          },
          {
            text: '文档',
            link: '/lang/cn/',
          },
          {
            text: 'Changelog',
            link: 'https://github.com/AliefChain/wiki/master/CHANGELOG.md'
          },
          {
            text: '工具',
            items: [
              { text: '区块浏览器', link: 'http://explorer.alief.hbwallet.co' },
              { text: '钱包', link: 'http://www.alief.io' }
            ]
          },
        ],
        sidebar: [
            {
                title: "简介",
                collapsable: true,
                children: [
                    "/lang/cn/intro/",
                    "/lang/cn/intro/staking",
                    "/lang/cn/intro/consensus",
                    "/lang/cn/intro/governance",
                    "/lang/cn/intro/roadmap",
                    "/lang/cn/intro/bridge",
                    "/lang/cn/intro/glossary"
                ]
            },
            {
                title: "指南",
                collapsable: true,
                children: [
                    "/lang/cn/guide/"
                ]
            },
            {
                title: "部署",
                collapsable: true,
                children: [
                    "/lang/cn/deploy/",
                    "/lang/cn/deploy/node",
                    "/lang/cn/deploy/mainnet",
                    "/lang/cn/deploy/testnet",
                    "/lang/cn/deploy/wallet"
                ]
            },
            {
                title: "常用命令",
                collapsable: true,
                children: [
                    "/lang/cn/cli/",
                ]
            },
            {
                title: "API",
                collapsable: true,
                children: [
                    "/lang/cn/api/",
                ]
            },
            {
                title: "SDK",
                collapsable: true,
                children: [
                    "/lang/cn/sdk/",
                ]
            },
            {
                title: "FAQ",
                collapsable: true,
                children: [
                    "/lang/cn/faq/",
                ]
            },
        ]
      }
    }
  }
}

