import { GitContributors } from "/Users/lk/my-blog/vuepress/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-rc.87_vuepress@2.0.0-rc.20_@vuepress+bundler-vite@2.0.0-rc.2_311a32859f3673f3c86c612f15f86fca/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "/Users/lk/my-blog/vuepress/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-rc.87_vuepress@2.0.0-rc.20_@vuepress+bundler-vite@2.0.0-rc.2_311a32859f3673f3c86c612f15f86fca/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
