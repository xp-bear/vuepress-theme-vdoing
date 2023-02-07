// nav 配置, 即上方导航栏

import { NavItem } from "vuepress/config";

export default <Array<NavItem>>[
  { text: "首页", link: "/" },
  {
    text: "前端系列",
    items: [
      {
        text: "vue教程",
        link: "/vue/",
      },
      {
        text: "react教程",
        link: "/react/",
      },
      {
        text: "typescript教程",
        link: "/typescript/",
      },
    ],
  },
  {
    text: "后端系列",
    items: [
      {
        text: "尽请期待",
        link: "javascript:;",
      },
    ],
  },
  {
    text: "数据库系列",
    items: [
      {
        text: "mysql教程",
        link: "/mysql/",
      },
    ],
  },
  {
    text: "Python系列",
    items: [
      {
        text: "django教程",
        link: "/django/",
      },
      {
        text: "flask教程",
        link: "/flask/",
      },
      {
        text: "爬虫教程",
        link: "/spider/",
      },
    ],
  },
  {
    text: "友情链接",
    items: [
      {
        text: "熊仔留言墙",
        link: "http://note.xxoutman.cn/",
      },
      {
        text: "熊仔图床",
        link: "http://pic.xxoutman.cn/",
      },
      {
        text: "熊仔聊天室",
        link: "http://150.158.21.251:3000/",
      },
      {
        text: "熊仔后台管理系统",
        link: "http://xp.xxoutman.cn/",
      },
    ],
  },
];
