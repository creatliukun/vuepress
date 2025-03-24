      export const typesMap = {"article":{"/":{"path":"/article/","indexes":[15,14,10,11,12,2,3,4,5,6,7,8,9,13]}},"timeline":{"/":{"path":"/timeline/","indexes":[10,11,12,2,3,4,5,6,7,8,9,13,14,1]}}};
      
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

      