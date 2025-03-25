export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/lk/my-blog/vuepress/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"首页"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/Users/lk/my-blog/vuepress/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"vuepress搭建博客文档"} }],
  ["/posts/archive1.html", { loader: () => import(/* webpackChunkName: "posts_archive1.html" */"/Users/lk/my-blog/vuepress/docs/.vuepress/.temp/pages/posts/archive1.html.js"), meta: {"_blog":{"title":"前端js基础","author":"","date":"2025-3-25","category":["前端"],"tag":["js"],"excerpt":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},"title":"前端js基础"} }],
  ["/posts/archive2.html", { loader: () => import(/* webpackChunkName: "posts_archive2.html" */"/Users/lk/my-blog/vuepress/docs/.vuepress/.temp/pages/posts/archive2.html.js"), meta: {"_blog":{"title":"Archive Article2","author":"","date":"2025-3-25","category":["前端"],"tag":["js"],"excerpt":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},"title":"Archive Article2"} }],
  ["/posts/article1.html", { loader: () => import(/* webpackChunkName: "posts_article1.html" */"/Users/lk/my-blog/vuepress/docs/.vuepress/.temp/pages/posts/article1.html.js"), meta: {"_blog":{"title":"浏览器渲染","author":"","date":"2025-03-26T00:00:00.000Z","category":["浏览器"],"tag":["渲染"],"excerpt":"<p>浏览器渲染过程详解</p>"},"title":"浏览器渲染"} }],
  ["/posts/article2.html", { loader: () => import(/* webpackChunkName: "posts_article2.html" */"/Users/lk/my-blog/vuepress/docs/.vuepress/.temp/pages/posts/article2.html.js"), meta: {"_blog":{"title":"性能优化","author":"","date":"2025-03-26T00:00:00.000Z","category":["浏览器"],"tag":["渲染"],"excerpt":"<p>性能优化</p>"},"title":"性能优化"} }],
  ["/posts/sticky.html", { loader: () => import(/* webpackChunkName: "posts_sticky.html" */"/Users/lk/my-blog/vuepress/docs/.vuepress/.temp/pages/posts/sticky.html.js"), meta: {"_blog":{"title":"首屏优化","author":"","date":"2025-03-25T00:00:00.000Z","category":["浏览器"],"tag":["优化"],"excerpt":"<p>优化</p>"},"title":"首屏优化"} }],
  ["/posts/sticky2.html", { loader: () => import(/* webpackChunkName: "posts_sticky2.html" */"/Users/lk/my-blog/vuepress/docs/.vuepress/.temp/pages/posts/sticky2.html.js"), meta: {"_blog":{"title":"关于前端js注意知识点：","author":"","date":"2025-3-25","category":["JS"],"tag":["JS基础"],"excerpt":"<p>前端js注意优化</p>"},"title":"关于前端js注意知识点："} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/lk/my-blog/vuepress/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"/Users/lk/my-blog/vuepress/docs/.vuepress/.temp/pages/category/index.html.js"), meta: {"title":"Categories"} }],
  ["/category/%E5%89%8D%E7%AB%AF/", { loader: () => import(/* webpackChunkName: "category_前端_index.html" */"/Users/lk/my-blog/vuepress/docs/.vuepress/.temp/pages/category/前端/index.html.js"), meta: {"title":"Category 前端"} }],
  ["/category/%E6%B5%8F%E8%A7%88%E5%99%A8/", { loader: () => import(/* webpackChunkName: "category_浏览器_index.html" */"/Users/lk/my-blog/vuepress/docs/.vuepress/.temp/pages/category/浏览器/index.html.js"), meta: {"title":"Category 浏览器"} }],
  ["/category/js/", { loader: () => import(/* webpackChunkName: "category_js_index.html" */"/Users/lk/my-blog/vuepress/docs/.vuepress/.temp/pages/category/js/index.html.js"), meta: {"title":"Category JS"} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"/Users/lk/my-blog/vuepress/docs/.vuepress/.temp/pages/tag/index.html.js"), meta: {"title":"Tags"} }],
  ["/tag/js/", { loader: () => import(/* webpackChunkName: "tag_js_index.html" */"/Users/lk/my-blog/vuepress/docs/.vuepress/.temp/pages/tag/js/index.html.js"), meta: {"title":"Tag js"} }],
  ["/tag/%E6%B8%B2%E6%9F%93/", { loader: () => import(/* webpackChunkName: "tag_渲染_index.html" */"/Users/lk/my-blog/vuepress/docs/.vuepress/.temp/pages/tag/渲染/index.html.js"), meta: {"title":"Tag 渲染"} }],
  ["/tag/%E4%BC%98%E5%8C%96/", { loader: () => import(/* webpackChunkName: "tag_优化_index.html" */"/Users/lk/my-blog/vuepress/docs/.vuepress/.temp/pages/tag/优化/index.html.js"), meta: {"title":"Tag 优化"} }],
  ["/tag/js%E5%9F%BA%E7%A1%80/", { loader: () => import(/* webpackChunkName: "tag_js基础_index.html" */"/Users/lk/my-blog/vuepress/docs/.vuepress/.temp/pages/tag/js基础/index.html.js"), meta: {"title":"Tag JS基础"} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "article_index.html" */"/Users/lk/my-blog/vuepress/docs/.vuepress/.temp/pages/article/index.html.js"), meta: {"title":"Articles"} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "timeline_index.html" */"/Users/lk/my-blog/vuepress/docs/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"title":"Timeline"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
