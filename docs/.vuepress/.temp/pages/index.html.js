import comp from "/Users/lk/my-blog/vuepress/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"首页\",\"heroImage\":\"https://vuejs.press/images/hero.png\",\"actions\":[{\"text\":\"快速开始\",\"link\":\"/get-started.md\",\"type\":\"primary\"}]},\"headers\":[],\"git\":{\"updatedTime\":1742837421000,\"contributors\":[{\"name\":\"creatliukun\",\"username\":\"creatliukun\",\"email\":\"952476356@qq.com\",\"commits\":4,\"url\":\"https://github.com/creatliukun\"}],\"changelog\":[{\"hash\":\"8f6b5f26188e9b6457af9608ad766e2bf1e91574\",\"time\":1742837421000,\"email\":\"952476356@qq.com\",\"author\":\"creatliukun\",\"message\":\"feat: 文档书写\"},{\"hash\":\"e66341443fd433f483d7839416de7bf35bf56224\",\"time\":1742831217000,\"email\":\"952476356@qq.com\",\"author\":\"creatliukun\",\"message\":\"feat: 新建文档信息\"},{\"hash\":\"0cdc5ded9f1c262bc19438a7ee98e04ab6293c5a\",\"time\":1742750963000,\"email\":\"952476356@qq.com\",\"author\":\"creatliukun\",\"message\":\"docs: 修改文件名\"},{\"hash\":\"89433a7fefe44fabd06c91b370f76e0a38ac31d3\",\"time\":1742748424000,\"email\":\"952476356@qq.com\",\"author\":\"creatliukun\",\"message\":\"feat: init\"}]},\"filePathRelative\":\"README.md\"}")
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
