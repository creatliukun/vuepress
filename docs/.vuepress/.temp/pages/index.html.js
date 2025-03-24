import comp from "/Users/lk/my-blog/vuepress/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"vuepress搭建博客文档\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"手动创建\",\"slug\":\"手动创建\",\"link\":\"#手动创建\",\"children\":[]},{\"level\":2,\"title\":\"目录结构\",\"slug\":\"目录结构\",\"link\":\"#目录结构\",\"children\":[]},{\"level\":2,\"title\":\"开始使用 VuePress\",\"slug\":\"开始使用-vuepress\",\"link\":\"#开始使用-vuepress\",\"children\":[]},{\"level\":2,\"title\":\"自动化构建\",\"slug\":\"自动化构建\",\"link\":\"#自动化构建\",\"children\":[]},{\"level\":2,\"title\":\"注意事项\",\"slug\":\"注意事项\",\"link\":\"#注意事项\",\"children\":[]}],\"git\":{\"updatedTime\":1742750963000,\"contributors\":[{\"name\":\"creatliukun\",\"username\":\"creatliukun\",\"email\":\"952476356@qq.com\",\"commits\":2,\"url\":\"https://github.com/creatliukun\"}],\"changelog\":[{\"hash\":\"0cdc5ded9f1c262bc19438a7ee98e04ab6293c5a\",\"time\":1742750963000,\"email\":\"952476356@qq.com\",\"author\":\"creatliukun\",\"message\":\"docs: 修改文件名\"},{\"hash\":\"89433a7fefe44fabd06c91b370f76e0a38ac31d3\",\"time\":1742748424000,\"email\":\"952476356@qq.com\",\"author\":\"creatliukun\",\"message\":\"feat: init\"}]},\"filePathRelative\":\"README.md\"}")
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
