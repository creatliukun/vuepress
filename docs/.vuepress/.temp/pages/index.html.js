import comp from "/Users/lk/my-blog/vuepress/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Hello VuePress\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1742748424000,\"contributors\":[{\"name\":\"creatliukun\",\"username\":\"creatliukun\",\"email\":\"952476356@qq.com\",\"commits\":1,\"url\":\"https://github.com/creatliukun\"}],\"changelog\":[{\"hash\":\"89433a7fefe44fabd06c91b370f76e0a38ac31d3\",\"time\":1742748424000,\"email\":\"952476356@qq.com\",\"author\":\"creatliukun\",\"message\":\"feat: init\"}]},\"filePathRelative\":\"README.md\"}")
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
