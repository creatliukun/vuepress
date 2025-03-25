      export const typesMap = {"article":{"/":{"path":"/article/","indexes":[4,3,2,5]}},"timeline":{"/":{"path":"/timeline/","indexes":[4,3,2]}}};
      
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

      