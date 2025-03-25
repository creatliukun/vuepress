import comp from "/Users/sh-mb-0018/my-blog/vuepress/docs/.vuepress/.temp/pages/tag/js/index.html.vue"
const data = JSON.parse("{\"path\":\"/tag/js/\",\"title\":\"Tag js\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Tag js\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"js\",\"key\":\"tag\"},\"layout\":\"Tag\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
