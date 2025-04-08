import { blogPlugin } from '@vuepress/plugin-blog'
import { viteBundler } from '@vuepress/bundler-vite' // 使用 Vite 作为打包工具，提升开发和构建速度。
import { defaultTheme } from '@vuepress/theme-default' // 引入默认主题配置，用于定义导航栏、侧边栏等页面布局。
import { defineUserConfig } from 'vuepress' // 定义用户配置的入口函数。

export default defineUserConfig({
  base: '/vuepress/', // 替换为仓库名称,解决样式丢失问题；指定站点的基础路径。如果站点托管在子目录下（如 GitHub Pages），需要设置此值以避免资源加载错误。
  lang: 'zh-CN',
  title: 'MuYang\'s Blog',
  description: '欢迎来到MuYang的博客',
  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: [
      '/', // 首页链接。
      {
        text: '文章',
        link: '/article/', // 指向 /article/ 页面。
      },
      {
        text: '分类',
        link: '/category/', // 指向 /category/ 页面。
      },
      {
        text: '标签',
        link: '/tag/', // 指向 /tag/ 页面。
      },
      {
        text: '时间排序',
        link: '/timeline/', // 指向 /timeline/ 页面。
      },
    ],
  }),
  // 插件配置
  plugins: [
    blogPlugin({
      // filter：过滤文章，仅将位于 posts/ 目录下的文件视为文章。
      filter: ({ filePathRelative }) =>
        filePathRelative ? filePathRelative.startsWith('posts/') : false,

      // getInfo：提取文章的元信息（frontmatter），包括标题、作者、日期、分类、标签和摘要。
      getInfo: ({ frontmatter, title, data }) => ({
        title,
        author: frontmatter.author || '',
        date: frontmatter.date || null,
        category: frontmatter.category || [],
        tag: frontmatter.tag || [],
        excerpt:
          // Support manually set excerpt through frontmatter
          typeof frontmatter.excerpt === 'string'
            ? frontmatter.excerpt
            : data?.excerpt || '',
      }),

      // excerptFilter：决定是否为某篇文章生成摘要。排除首页文章或手动禁用摘要的文章。
      excerptFilter: ({ frontmatter }) =>
        !frontmatter.home &&
        frontmatter.excerpt !== false &&
        typeof frontmatter.excerpt !== 'string',

      // 分类与标签配置
      category: [
        // category 和 tag：分别定义分类和标签的生成规则。
        {
          key: 'category',
          getter: (page) => page.frontmatter.category || [], // getter：从文章的 frontmatter 中提取分类或标签。
          layout: 'Category',
          itemLayout: 'Category', // layout 和 itemLayout：指定分类或标签页面的布局。
          frontmatter: () => ({
            title: 'Categories',
            sidebar: false,
          }),
          itemFrontmatter: (name) => ({
            title: `Category ${name}`,
            sidebar: false,
          }),
        },
        {
          key: 'tag',
          getter: (page) => page.frontmatter.tag || [],
          layout: 'Tag',
          itemLayout: 'Tag',
          frontmatter: () => ({
            title: 'Tags',
            sidebar: false,
          }),
          itemFrontmatter: (name) => ({
            title: `Tag ${name}`,
            sidebar: false,
          }),
        },
      ],
      //  文章类型与时间线配置
      type: [
        {
          key: 'article',
          // filter：排除标记为存档的文章。
          filter: (page) => !page.frontmatter.archive,
          layout: 'Article',
          frontmatter: () => ({
            title: 'Articles',
            sidebar: false,
          }),
          // sorter：根据文章的置顶优先级和发布时间排序。
          sorter: (pageA, pageB) => {
            if (pageA.frontmatter.sticky && pageB.frontmatter.sticky)
              return pageB.frontmatter.sticky - pageA.frontmatter.sticky

            if (pageA.frontmatter.sticky && !pageB.frontmatter.sticky) return -1

            if (!pageA.frontmatter.sticky && pageB.frontmatter.sticky) return 1

            if (!pageB.frontmatter.date) return 1
            if (!pageA.frontmatter.date) return -1

            return (
              new Date(pageB.frontmatter.date).getTime() -
              new Date(pageA.frontmatter.date).getTime()
            )
          },
        },
        {
          key: 'timeline',
          // filter：仅包含有发布日期的文章。
          filter: (page) => page.frontmatter.date instanceof Date,
          // sorter：按发布时间倒序排列。
          sorter: (pageA, pageB) =>
            new Date(pageB.frontmatter.date).getTime() -
            new Date(pageA.frontmatter.date).getTime(),
          layout: 'Timeline',
          frontmatter: () => ({
            title: 'Timeline',
            sidebar: false,
          }),
        },
      ],
      // 禁用热重载功能（hotReload）。如果启用，可以在开发过程中实时更新内容。
      hotReload: true,
    }),
  ],
  // 使用 Vite 作为打包工具，提升开发和构建性能。
  bundler: viteBundler(),
})