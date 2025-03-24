import comp from "/Users/lk/my-blog/vuepress/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"你好，我的样式丢失了\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1742750963000,\"contributors\":[{\"name\":\"creatliukun\",\"username\":\"creatliukun\",\"email\":\"952476356@qq.com\",\"commits\":2,\"url\":\"https://github.com/creatliukun\"}],\"changelog\":[{\"hash\":\"0cdc5ded9f1c262bc19438a7ee98e04ab6293c5a\",\"time\":1742750963000,\"email\":\"952476356@qq.com\",\"author\":\"creatliukun\",\"message\":\"docs: 修改文件名\"},{\"hash\":\"89433a7fefe44fabd06c91b370f76e0a38ac31d3\",\"time\":1742748424000,\"email\":\"952476356@qq.com\",\"author\":\"creatliukun\",\"message\":\"feat: init\"}]},\"filePathRelative\":\"README.md\"}")
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
