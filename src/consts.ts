// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Site title and description
export const SITE_TAB = "Liang-37";
export const SITE_TITLE = "Liang-37 🧊";
export const SITE_DESCRIPTION = "My blogs";
export const DATE_FORMAT = "ddd MMM DD YYYY";

// User profile information
export const USER_NAME = "EveSunMaple";
export const USER_AVATAR = "/profile.webp";

// Server and transition settings
export const SERVER_URL = "https://demo.saroprock.com";

// Some informative text on the site
export const infoTest = {
  tag: "标签: ",
  noTag: "未标记",
  tagCard: "标签",
  tagPage: "标签 - ",
  noCategory: "未分类",
  categoryCard: "分类",
  categoryPage: "类别 - ",
  link: "链接: ",
  prevPage: "最近的文章",
  nextPage: "更早的文章",
};

// Menu items for navigation
export const menuItems = [
  { id: "home", text: "主页", href: "/", svg: "home", target: "_self" }, // Home page
  { id: "about", text: "关于", href: "/about", svg: "about", target: "_self" }, // About page
  {
    id: "blog",
    text: "博客",
    href: "/blog",
    svg: "blog",
    target: "_self",
    subItems: [
      {
        id: "all",
        text: "所有博客",
        href: "/blog",
        svg: "post",
        target: "_self",
      }, // All blog
      {
        id: "tech",
        text: "技术博客",
        href: "/blog/categories/技术",
        svg: "cube",
        target: "_self",
      }, // Technology category
      {
        id: "life",
        text: "生活博客",
        href: "/blog/categories/生活",
        svg: "heart",
        target: "_self",
      }, // Life category
    ],
  }, // Blog page with sub-items
  {
    id: "project",
    text: "项目",
    href: "/project",
    svg: "project",
    target: "_self",
  }, // Projects page
  {
    id: "friend",
    text: "朋友",
    href: "/friend",
    svg: "friend",
    target: "_self",
  }, // Friends page
  // {
  //   id: "contact",
  //   text: "联系",
  //   href: "http://wpa.qq.com/msgrd?v=3&uin=3271302276&site=qq&menu=yes", // Contact email
  //   target: "_blank", // Open in a new tab
  //   svg: "contact",
  // },
];

// Social media and contact icons
export const socialIcons = [
  {
    href: "https://gitee.com/Liang-37",
    ariaLabel: "Gitee",
    title: "Gitee",
    svg: "support",
  },
  {
    href: "https://github.com/Liang-37",
    ariaLabel: "Github",
    title: "Github",
    svg: "github",
  },
  // {
  //   href: "https://space.bilibili.com/438392347",
  //   ariaLabel: "BiliBili",
  //   title: "BiliBili",
  //   svg: "bilibili",
  // },
  // {
  //   href: "/rss.xml",
  //   ariaLabel: "RSS Feed",
  //   title: "RSS Feed",
  //   svg: "rss",
  // },
];
