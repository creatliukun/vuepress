import comp from "/Users/lk/my-blog/vuepress/docs/.vuepress/.temp/pages/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/get-started.html\",\"title\":\"vuepress搭建博客文档\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"手动创建\",\"slug\":\"手动创建\",\"link\":\"#手动创建\",\"children\":[]},{\"level\":2,\"title\":\"目录结构\",\"slug\":\"目录结构\",\"link\":\"#目录结构\",\"children\":[]},{\"level\":2,\"title\":\"开始使用 VuePress\",\"slug\":\"开始使用-vuepress\",\"link\":\"#开始使用-vuepress\",\"children\":[]},{\"level\":2,\"title\":\"自动化构建\",\"slug\":\"自动化构建\",\"link\":\"#自动化构建\",\"children\":[]},{\"level\":2,\"title\":\"注意事项\",\"slug\":\"注意事项\",\"link\":\"#注意事项\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"get-started.md\",\"excerpt\":\"\\n<h1>1.安装nodejs</h1>\\n<p>Node.js v18.19.0+\\n包管理器，如 pnpm、yarn、npm 等。</p>\\n<h2>手动创建</h2>\\n<ul>\\n<li>.1创建并进入一个新目录</li>\\n</ul>\\n<div class=\\\"language-bash line-numbers-mode\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"sh\\\"><pre><code><span class=\\\"line\\\"><span class=\\\"token function\\\">mkdir</span> vuepress-starter</span>\\n<span class=\\\"line\\\"><span class=\\\"token builtin class-name\\\">cd</span> vuepress-starter</span>\\n<span class=\\\"line\\\"></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\"}")
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
