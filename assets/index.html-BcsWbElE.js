import{_ as n,c as a,a as e,o as l}from"./app-BunU7GrL.js";const i={};function p(t,s){return l(),a("div",null,s[0]||(s[0]=[e(`<h1 id="vuepress搭建博客文档" tabindex="-1"><a class="header-anchor" href="#vuepress搭建博客文档"><span>vuepress搭建博客文档</span></a></h1><h1 id="_1-安装nodejs" tabindex="-1"><a class="header-anchor" href="#_1-安装nodejs"><span>1.安装nodejs</span></a></h1><p>Node.js v18.19.0+ 包管理器，如 pnpm、yarn、npm 等。</p><h2 id="手动创建" tabindex="-1"><a class="header-anchor" href="#手动创建"><span>手动创建</span></a></h2><ul><li>.1创建并进入一个新目录</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">mkdir</span> vuepress-starter</span>
<span class="line"><span class="token builtin class-name">cd</span> vuepress-starter</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>2.初始化项目</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">git</span> init</span>
<span class="line"><span class="token function">pnpm</span> init</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>3.安装 VuePress</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token comment"># 安装 vuepress</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> vuepress@next</span>
<span class="line"><span class="token comment"># 安装打包工具和主题</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> @vuepress/bundler-vite@next @vuepress/theme-default@next</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>4.创建 docs 目录和 docs/.vuepress 目录</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">mkdir</span> docs</span>
<span class="line"><span class="token function">mkdir</span> docs/.vuepress</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>5.创建 VuePress 配置文件 docs/.vuepress/config.js</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> viteBundler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/bundler-vite&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/theme-default&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">bundler</span><span class="token operator">:</span> <span class="token function">viteBundler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>6.创建你的第一篇文档</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&#39;# Hello VuePress&#39;</span> <span class="token operator">&gt;</span> docs/README.md</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构"><span>目录结构</span></a></h2><ul><li>创建完成后，你项目的目录结构应该是这样的：</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">├─ docs</span>
<span class="line">│  ├─ .vuepress</span>
<span class="line">│  │  └─ config.js</span>
<span class="line">│  └─ README.md</span>
<span class="line">└─ package.json</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docs/.vuepress 目录，即源文件目录下的 .vuepress 目录，是放置所有和 VuePress 相关的文件的地方。当前这里只有一个配置文件。默认还会在该目录下生成临时文件、缓存文件和构建输出文件。建议你把它们添加到 .gitignore 文件中</p><ul><li>示例 .gitignore 文件</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line"># VuePress 默认临时文件目录</span>
<span class="line">.vuepress/.temp</span>
<span class="line"># VuePress 默认缓存目录</span>
<span class="line">.vuepress/.cache</span>
<span class="line"># VuePress 默认构建生成的静态文件目录</span>
<span class="line">.vuepress/dist</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="开始使用-vuepress" tabindex="-1"><a class="header-anchor" href="#开始使用-vuepress"><span>开始使用 VuePress</span></a></h2><ul><li>启动开发服务器 你可以在 package.json 中添加一些 scripts ：</li></ul><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>运行 docs:dev 脚本可以启动开发服务器:</li><li>VuePress 会在 http://localhost:8080 启动一个热重载的开发服务器。当你修改你的 Markdown 文件时，浏览器中的内容也会自动更新。</li></ul><h2 id="自动化构建" tabindex="-1"><a class="header-anchor" href="#自动化构建"><span>自动化构建</span></a></h2><ul><li>在项目根目录，新增一个.github/workflows/deploy-docs.yml 文件;里面的配置如下</li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre><code><span class="line"></span>
<span class="line"><span class="token key atrule">name</span><span class="token punctuation">:</span> 部署文档</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">on</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">push</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">branches</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token comment"># 确保这是你正在使用的分支名称, 每当 push 到 main 分支时触发部署</span></span>
<span class="line">      <span class="token punctuation">-</span> main</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">permissions</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">contents</span><span class="token punctuation">:</span> write</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">jobs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">deploy-gh-pages</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span></span>
<span class="line">          <span class="token comment"># 如果你文档需要 Git 子模块，取消注释下一行</span></span>
<span class="line">          <span class="token comment"># submodules: true</span></span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 安装 pnpm</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> pnpm/action<span class="token punctuation">-</span>setup@v2</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">run_install</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line">          <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token number">8</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 设置 Node.js</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token number">20</span></span>
<span class="line">          <span class="token key atrule">cache</span><span class="token punctuation">:</span> pnpm</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 构建文档</span>
<span class="line">        <span class="token key atrule">env</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">NODE_OPTIONS</span><span class="token punctuation">:</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>max_old_space_size=8192</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token punctuation">-</span></span>
<span class="line">          pnpm run docs<span class="token punctuation">:</span>build</span>
<span class="line">          <span class="token punctuation">&gt;</span> docs/.vuepress/dist/.nojekyll</span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 部署文档</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> JamesIves/github<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>action@v4</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token comment"># 这是文档部署到的分支名称</span></span>
<span class="line">          <span class="token key atrule">branch</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>docs</span>
<span class="line">          <span class="token key atrule">folder</span><span class="token punctuation">:</span> docs/.vuepress/dist</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h2><ul><li>注意点1：当推送到main分支时，会自动化部署。这个时候等待一段时间即可；</li><li>注意点2: GitHub Pages 设置；GitHub Pages 是 GitHub 提供的静态网站托管服务。你需要在仓库设置中启用它。</li></ul><p>操作步骤：</p><div class="language-docs line-numbers-mode" data-highlighter="prismjs" data-ext="docs"><pre><code><span class="line">登录到 GitHub 并进入你的仓库。</span>
<span class="line">点击顶部菜单栏中的 Settings（设置）。</span>
<span class="line">在左侧导航栏中找到 Pages（页面）选项。</span>
<span class="line">在 Source（源）部分，选择以下内容：</span>
<span class="line">Branch: 选择 my-docs分支。</span>
<span class="line">Folder: 选择 / (root)。</span>
<span class="line">点击 Save（保存）按钮。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在刷新一下，就能看到部署后的网站了</p><ul><li>注意点3: 样式丢失问题： base 配置错误</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">VuePress 的 base 配置决定了生成的静态文件中资源路径的前缀。</span>
<span class="line">如果你的项目托管在非根目录</span>
<span class="line">（例如 https://<span class="token operator">&lt;</span>username<span class="token operator">&gt;</span>.github.io/<span class="token operator">&lt;</span>repository-name<span class="token operator">&gt;</span>/），</span>
<span class="line">而 base 未正确设置，则会导致资源路径错误。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36)]))}const u=n(i,[["render",p]]),r=JSON.parse('{"path":"/","title":"vuepress搭建博客文档","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"手动创建","slug":"手动创建","link":"#手动创建","children":[]},{"level":2,"title":"目录结构","slug":"目录结构","link":"#目录结构","children":[]},{"level":2,"title":"开始使用 VuePress","slug":"开始使用-vuepress","link":"#开始使用-vuepress","children":[]},{"level":2,"title":"自动化构建","slug":"自动化构建","link":"#自动化构建","children":[]},{"level":2,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]}],"git":{"updatedTime":1742831217000,"contributors":[{"name":"creatliukun","username":"creatliukun","email":"952476356@qq.com","commits":3,"url":"https://github.com/creatliukun"}],"changelog":[{"hash":"e66341443fd433f483d7839416de7bf35bf56224","time":1742831217000,"email":"952476356@qq.com","author":"creatliukun","message":"feat: 新建文档信息"},{"hash":"0cdc5ded9f1c262bc19438a7ee98e04ab6293c5a","time":1742750963000,"email":"952476356@qq.com","author":"creatliukun","message":"docs: 修改文件名"},{"hash":"89433a7fefe44fabd06c91b370f76e0a38ac31d3","time":1742748424000,"email":"952476356@qq.com","author":"creatliukun","message":"feat: init"}]},"filePathRelative":"README.md"}');export{u as comp,r as data};
