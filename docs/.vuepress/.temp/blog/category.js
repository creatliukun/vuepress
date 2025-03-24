export const categoriesMap = {"category":{"/":{"path":"/category/","map":{"历史":{"path":"/category/历史/","indexes":[0]},"History":{"path":"/category/history/","indexes":[1]},"CategoryA":{"path":"/category/categorya/","indexes":[2,3,4,5,6,7,8,9,10,11,12,13]},"CategoryB":{"path":"/category/categoryb/","indexes":[2,3,4,5,6,7,8,10,11,12]},"CategoryC":{"path":"/category/categoryc/","indexes":[14]},"JS":{"path":"/category/js/","indexes":[15]}}}},"tag":{"/":{"path":"/tag/","map":{"WWI":{"path":"/tag/wwi/","indexes":[0]},"WWII":{"path":"/tag/wwii/","indexes":[1]},"tag A":{"path":"/tag/tag-a/","indexes":[5,6,7,8,9,13]},"tag B":{"path":"/tag/tag-b/","indexes":[5,6,7,8,9,13]},"tag C":{"path":"/tag/tag-c/","indexes":[2,3,4,10,11,12]},"tag D":{"path":"/tag/tag-d/","indexes":[2,3,4,10,11,12]},"tag E":{"path":"/tag/tag-e/","indexes":[14]},"JS基础":{"path":"/tag/js基础/","indexes":[15]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
  });


