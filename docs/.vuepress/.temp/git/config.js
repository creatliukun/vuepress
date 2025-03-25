import { GitContributors } from "/Users/sh-mb-0018/my-blog/vuepress/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-rc.87_vuepress@2.0.0-rc.20_@vuepress+bundler-vite@2.0.0-rc.2_1837f41b44646d22be12f275fe2b240b/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "/Users/sh-mb-0018/my-blog/vuepress/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-rc.87_vuepress@2.0.0-rc.20_@vuepress+bundler-vite@2.0.0-rc.2_1837f41b44646d22be12f275fe2b240b/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
