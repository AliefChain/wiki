module.exports = {
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
              "/intro/bridge"
            ]
          }
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
            text: '简介',
            link: '/lang/zh/introduction/',
          },
          {
            text: '配置',
            link: '/lang/zh/config/'
          },
          {
            text: 'Validators',
            link: '/lang/zh/validators/'
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
            title: "Overview",
            collapsable: true,
            children: [
              "/lang/cn/intro/",
              "/lang/cn/intro/staking",
              "/lang/cn/intro/bridge"
            ]
          },
        ]
      }
    }
  }
}

