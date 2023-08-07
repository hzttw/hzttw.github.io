import { defineUserConfig } from 'vuepress';
import recoTheme from 'vuepress-theme-reco';

export default defineUserConfig({
  title: '小王的Blogs',
  description: 'Just playing around',
  theme: recoTheme({
    style: '@vuepress-reco/style-default',
    logo: '/logo.png',
    author: 'hzttw',
    authorAvatar: '/head.png',
    docsRepo: 'https://github.com/vuepress-reco/vuepress-theme-reco-next',
    docsBranch: 'master',
    docsDir: 'example',
    lastUpdatedText: '',
    series: {
      '/docs/theme-reco/': [
        {
          text: 'module one',
          children: ['home', 'theme'],
        },
        {
          text: 'module two',
          children: ['api', 'plugin'],
        },
      ],
    },
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Categories', link: '/categories/reco/1/' },
      { text: 'Tags', link: '/tags/tag1/1/' },
      {
        text: 'Docs',
        children: [
          { text: 'vuepress-reco', link: '/docs/theme-reco/theme' },
          { text: 'vuepress-theme-reco', link: '/blogs/other/guide' },
        ],
      },
    ],
  }),
  // debug: true,
});
