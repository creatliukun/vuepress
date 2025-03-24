import comp from "/Users/lk/my-blog/vuepress/docs/.vuepress/.temp/pages/posts/sticky2.html.vue"
const data = JSON.parse("{\"path\":\"/posts/sticky2.html\",\"title\":\"关于前端js注意知识点：\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2025-3-25\",\"category\":[\"JS\"],\"tag\":[\"JS基础\"],\"excerpt\":\"<p>前端js注意优化</p>\"},\"headers\":[{\"level\":2,\"title\":\"js脚本运行机制\",\"slug\":\"js脚本运行机制\",\"link\":\"#js脚本运行机制\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"posts/sticky2.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
