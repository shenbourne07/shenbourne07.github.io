export const categoriesMap = {"category":{"/":{"path":"/category/","map":{"使用指南":{"path":"/category/使用指南/","indexes":[0,1,2,3,4]},"指南":{"path":"/category/指南/","indexes":[5]},"樱桃":{"path":"/category/樱桃/","indexes":[6]},"火龙果":{"path":"/category/火龙果/","indexes":[7]},"水果":{"path":"/category/水果/","indexes":[8,7,9,10,11,12]},"草莓":{"path":"/category/草莓/","indexes":[8]},"蔬菜":{"path":"/category/蔬菜/","indexes":[13]},"苹果":{"path":"/category/苹果/","indexes":[11,12,14,15]},"香蕉":{"path":"/category/香蕉/","indexes":[16,17,9,10]}}}},"tag":{"/":{"path":"/tag/","map":{"禁用":{"path":"/tag/禁用/","indexes":[1]},"加密":{"path":"/tag/加密/","indexes":[2]},"布局":{"path":"/tag/布局/","indexes":[5]},"Markdown":{"path":"/tag/markdown/","indexes":[3]},"页面配置":{"path":"/tag/页面配置/","indexes":[0]},"使用指南":{"path":"/tag/使用指南/","indexes":[0]},"红":{"path":"/tag/红/","indexes":[13,8,7,6,11,12,14,15]},"小":{"path":"/tag/小/","indexes":[8,6]},"圆":{"path":"/tag/圆/","indexes":[13,6,11,12,14,15]},"大":{"path":"/tag/大/","indexes":[7,11,12,14,15]},"黄":{"path":"/tag/黄/","indexes":[16,17,9,10]},"弯曲的":{"path":"/tag/弯曲的/","indexes":[16,17,9,10]},"长":{"path":"/tag/长/","indexes":[16,17,9,10]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
  });


