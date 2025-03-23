import { CodeTabs } from "/Users/lk/my-blog/vuepress/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.86_markdown-it@14.1.0_vuepress@2.0.0-rc.20_@vuep_4a9f4f4c73e0a6942ee08ce5a9e12748/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/Users/lk/my-blog/vuepress/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.86_markdown-it@14.1.0_vuepress@2.0.0-rc.20_@vuep_4a9f4f4c73e0a6942ee08ce5a9e12748/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/Users/lk/my-blog/vuepress/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.86_markdown-it@14.1.0_vuepress@2.0.0-rc.20_@vuep_4a9f4f4c73e0a6942ee08ce5a9e12748/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
