// nav 配置, 即上方导航栏

import { NavItem } from "vuepress/config";

export default <Array<NavItem>>[
  { text: "首页", link: "/" },
  {
    text: "前端",
    items: [
      {
        text: "项目配置",
        link: "/start/",
      },
      {
        text: "部署",
        link: "/deploy/",
      },
      {
        text: "更多参考",
        link: "/more/",
      },
      {
        text: "vue教程",
        link: "/vue/",
      },
      {
        text: "typescript教程",
        link: "/typescript/",
      },
    ],
  },
  {
    text: "数据库",
    items: [
      {
        text: "mysql教程",
        link: "/mysql/",
      },
    ],
  },
  {
    text: "友情链接",
    items: [
      {
        text: "vuepress",
        link: "https://vuepress.vuejs.org/",
      },
    ],
  },
];
