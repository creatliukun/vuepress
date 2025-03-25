import comp from "/Users/sh-mb-0018/my-blog/vuepress/docs/.vuepress/.temp/pages/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/get-started.html\",\"title\":\"vuepress搭建博客文档\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"手动创建\",\"slug\":\"手动创建\",\"link\":\"#手动创建\",\"children\":[]},{\"level\":2,\"title\":\"目录结构\",\"slug\":\"目录结构\",\"link\":\"#目录结构\",\"children\":[]},{\"level\":2,\"title\":\"开始使用 VuePress\",\"slug\":\"开始使用-vuepress\",\"link\":\"#开始使用-vuepress\",\"children\":[]},{\"level\":2,\"title\":\"自动化构建\",\"slug\":\"自动化构建\",\"link\":\"#自动化构建\",\"children\":[]},{\"level\":2,\"title\":\"注意事项\",\"slug\":\"注意事项\",\"link\":\"#注意事项\",\"children\":[]}],\"git\":{\"updatedTime\":1742837421000,\"contributors\":[{\"name\":\"creatliukun\",\"username\":\"creatliukun\",\"email\":\"952476356@qq.com\",\"commits\":4,\"url\":\"https://github.com/creatliukun\"}],\"changelog\":[{\"hash\":\"8f6b5f26188e9b6457af9608ad766e2bf1e91574\",\"time\":1742837421000,\"email\":\"952476356@qq.com\",\"author\":\"creatliukun\",\"message\":\"feat: 文档书写\"},{\"hash\":\"e66341443fd433f483d7839416de7bf35bf56224\",\"time\":1742831217000,\"email\":\"952476356@qq.com\",\"author\":\"creatliukun\",\"message\":\"feat: 新建文档信息\"},{\"hash\":\"0cdc5ded9f1c262bc19438a7ee98e04ab6293c5a\",\"time\":1742750963000,\"email\":\"952476356@qq.com\",\"author\":\"creatliukun\",\"message\":\"docs: 修改文件名\"},{\"hash\":\"89433a7fefe44fabd06c91b370f76e0a38ac31d3\",\"time\":1742748424000,\"email\":\"952476356@qq.com\",\"author\":\"creatliukun\",\"message\":\"feat: init\"}]},\"filePathRelative\":\"get-started.md\",\"excerpt\":\"\\n<h1>1.安装nodejs</h1>\\n<p>Node.js v18.19.0+\\n包管理器，如 pnpm、yarn、npm 等。</p>\\n<h2>手动创建</h2>\\n<ul>\\n<li>.1创建并进入一个新目录</li>\\n</ul>\\n<div class=\\\"language-bash line-numbers-mode\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"sh\\\"><pre><code><span class=\\\"line\\\"><span class=\\\"token function\\\">mkdir</span> vuepress-starter</span>\\n<span class=\\\"line\\\"><span class=\\\"token builtin class-name\\\">cd</span> vuepress-starter</span>\\n<span class=\\\"line\\\"></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\"}")
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
