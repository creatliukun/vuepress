export const categoriesMap = {"category":{"/":{"path":"/category/","map":{"前端":{"path":"/category/前端/","indexes":[0,1]},"浏览器":{"path":"/category/浏览器/","indexes":[2,3,4]},"JS":{"path":"/category/js/","indexes":[5]}}}},"tag":{"/":{"path":"/tag/","map":{"js":{"path":"/tag/js/","indexes":[0,1]},"渲染":{"path":"/tag/渲染/","indexes":[3,4]},"优化":{"path":"/tag/优化/","indexes":[2]},"JS基础":{"path":"/tag/js基础/","indexes":[5]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
  });


