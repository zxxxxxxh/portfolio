# 小和 · 个人作品集

一个单页个人作品集网站，展示 AI 辅助开发与个人项目档案。不依赖任何前端框架，使用原生 HTML、CSS 和 JavaScript 手工完成，页面兼容桌面端和移动端。

## 技术栈

- **HTML5** — 语义化页面结构
- **CSS3** — 自定义属性实现深浅色主题、响应式布局、滚动显现动画
- **原生 JavaScript** — ES5/ES6 风格，无第三方库、无构建工具

## 主要功能

- **首屏个人介绍**：姓名、方向、项目与技能统计
- **作品档案**：由 `js/data.js` 中的 `PROJECTS` 数据驱动渲染，支持 4 种项目版式（全宽封面、文左图右、图左文右、上图下文），未指定版式时自动交替
- **关于我**：个人照片、技能列表与教育背景
- **联系方式**：邮箱、微信、GitHub 等
- **深浅色主题切换**：偏好保存到 `localStorage`，页面加载时立即应用，避免闪烁
- **移动端导航菜单**：汉堡按钮开合，点击链接自动收起
- **滚动交互**：导航栏滚动后显示底边线，内容区块进入视口时淡入
- **响应式设计**：兼容桌面端与移动端

## 项目结构

```
lab04/
├── index.html          # 页面入口
├── css/
│   └── style.css       # 全部样式（含主题变量）
├── js/
│   ├── theme.js        # 深浅色主题切换
│   ├── data.js         # 项目数据（PROJECTS 数组）
│   └── main.js         # 项目渲染与页面交互
└── assets/
    └── portrait.png    # 个人照片
```

## 运行方式

无需安装依赖或构建，直接用浏览器打开 `index.html` 即可；也可以启动任意静态服务器访问：

```bash
# 方式一：Python
python -m http.server 8000

# 方式二：Node.js
npx serve .
```

然后浏览器访问 `http://localhost:8000`。

## 如何新增项目

在 [js/data.js](js/data.js) 的 `PROJECTS` 数组末尾追加一个对象即可，页面会自动渲染并更新项目数量：

```js
{
  id: "my-project",        // 唯一标识（用于锚点）
  category: "Web 应用",     // 类别标签
  title: "项目名称",
  en: "PROJECT NAME",      // 图片下方英文小注
  desc: "项目简介",
  tech: ["Python", "Vue"], // 技术栈列表
  date: "2026.09",
  image: { src: "图片地址", alt: "图片描述" },
  layout: "right",         // 可选：feature / right / left / stack，省略则自动交替
  link: "#"                // 可选：「查看项目」链接
}
```
