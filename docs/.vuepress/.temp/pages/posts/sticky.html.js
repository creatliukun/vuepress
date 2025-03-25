import comp from "/Users/lk/my-blog/vuepress/docs/.vuepress/.temp/pages/posts/sticky.html.vue"
const data = JSON.parse("{\"path\":\"/posts/sticky.html\",\"title\":\"首屏优化\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2025-03-25T00:00:00.000Z\",\"category\":[\"浏览器\"],\"tag\":[\"优化\"],\"sticky\":true,\"excerpt\":\"<p>优化</p>\"},\"headers\":[{\"level\":2,\"title\":\"减少请求\",\"slug\":\"减少请求\",\"link\":\"#减少请求\",\"children\":[]},{\"level\":2,\"title\":\"图片懒加载\",\"slug\":\"图片懒加载\",\"link\":\"#图片懒加载\",\"children\":[]},{\"level\":2,\"title\":\"删除多余代码\",\"slug\":\"删除多余代码\",\"link\":\"#删除多余代码\",\"children\":[]},{\"level\":2,\"title\":\"组件懒加载\",\"slug\":\"组件懒加载\",\"link\":\"#组件懒加载\",\"children\":[]}],\"git\":{\"updatedTime\":1742837421000,\"contributors\":[{\"name\":\"creatliukun\",\"username\":\"creatliukun\",\"email\":\"952476356@qq.com\",\"commits\":1,\"url\":\"https://github.com/creatliukun\"}],\"changelog\":[{\"hash\":\"8f6b5f26188e9b6457af9608ad766e2bf1e91574\",\"time\":1742837421000,\"email\":\"952476356@qq.com\",\"author\":\"creatliukun\",\"message\":\"feat: 文档书写\"}]},\"filePathRelative\":\"posts/sticky.md\"}")
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
