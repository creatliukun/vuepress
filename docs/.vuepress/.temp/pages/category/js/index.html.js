import comp from "/Users/sh-mb-0018/my-blog/vuepress/docs/.vuepress/.temp/pages/category/js/index.html.vue"
const data = JSON.parse("{\"path\":\"/category/js/\",\"title\":\"Category JS\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Category JS\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"JS\",\"key\":\"category\"},\"layout\":\"Category\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
