import comp from "/Users/lk/my-blog/vuepress/docs/.vuepress/.temp/pages/posts/article2.html.vue"
const data = JSON.parse("{\"path\":\"/posts/article2.html\",\"title\":\"性能优化\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2025-03-26T00:00:00.000Z\",\"category\":[\"浏览器\"],\"tag\":[\"渲染\"],\"sticky\":true,\"excerpt\":\"<p>性能优化</p>\"},\"headers\":[{\"level\":2,\"title\":\"可能的影响\",\"slug\":\"可能的影响\",\"link\":\"#可能的影响\",\"children\":[]},{\"level\":2,\"title\":\"优化建议\",\"slug\":\"优化建议\",\"link\":\"#优化建议\",\"children\":[]}],\"git\":{\"updatedTime\":1742888042000,\"contributors\":[{\"name\":\"creatliukun\",\"username\":\"creatliukun\",\"email\":\"952476356@qq.com\",\"commits\":1,\"url\":\"https://github.com/creatliukun\"},{\"name\":\"liukun\",\"username\":\"liukun\",\"email\":\"kun.liu@fullspeed.cn\",\"commits\":1,\"url\":\"https://github.com/liukun\"}],\"changelog\":[{\"hash\":\"a4c8a550cdb65a5cb280382c9cf4ac138546f5d9\",\"time\":1742888042000,\"email\":\"kun.liu@fullspeed.cn\",\"author\":\"liukun\",\"message\":\"feat: 增加页面，删除多余页面\"},{\"hash\":\"8f6b5f26188e9b6457af9608ad766e2bf1e91574\",\"time\":1742837421000,\"email\":\"952476356@qq.com\",\"author\":\"creatliukun\",\"message\":\"feat: 文档书写\"}]},\"filePathRelative\":\"posts/article2.md\"}")
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
