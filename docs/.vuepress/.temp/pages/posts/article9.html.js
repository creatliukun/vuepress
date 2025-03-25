import comp from "/Users/sh-mb-0018/my-blog/vuepress/docs/.vuepress/.temp/pages/posts/article9.html.vue"
const data = JSON.parse("{\"path\":\"/posts/article9.html\",\"title\":\"Article 9\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2022-01-09T00:00:00.000Z\",\"category\":[\"CategoryA\",\"CategoryB\"],\"tag\":[\"tag C\",\"tag D\"]},\"headers\":[{\"level\":2,\"title\":\"Heading 2\",\"slug\":\"heading-2\",\"link\":\"#heading-2\",\"children\":[{\"level\":3,\"title\":\"Heading 3\",\"slug\":\"heading-3\",\"link\":\"#heading-3\",\"children\":[]}]}],\"git\":{\"updatedTime\":1742837421000,\"contributors\":[{\"name\":\"creatliukun\",\"username\":\"creatliukun\",\"email\":\"952476356@qq.com\",\"commits\":1,\"url\":\"https://github.com/creatliukun\"}],\"changelog\":[{\"hash\":\"8f6b5f26188e9b6457af9608ad766e2bf1e91574\",\"time\":1742837421000,\"email\":\"952476356@qq.com\",\"author\":\"creatliukun\",\"message\":\"feat: 文档书写\"}]},\"filePathRelative\":\"posts/article9.md\",\"excerpt\":\"\\n<h2>Heading 2</h2>\\n<p>Here is the content.</p>\\n<h3>Heading 3</h3>\\n<p>Here is the content.</p>\\n\"}")
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
