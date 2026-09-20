/* ==========================================================================
   项目数据 —— 新增项目时在数组末尾追加一个对象即可，页面自动扩展
   --------------------------------------------------------------------------
   字段说明：
   id       唯一标识（用于锚点）
   layout   排版版式，可省略（省略时按顺序自动交替 文左图右 / 图左文右）
            feature = 全宽封面大图
            right   = 文左图右（图占 7 列）
            left    = 图左文右（竖版大图）
            stack   = 上图下文（窄版横图）
   category 类别（显示为色点 + 文字）
   title    项目名称 / en 英文小注（图片下方）
   desc     简介文案
   tech     技术栈数组（渲染为索引式细线列表）
   date     完成时间
   image    { src, alt } 项目配图
   link     「查看项目」链接（可选）
   ========================================================================== */

const PROJECTS = [
  {
    id: "shiguang-market",
    layout: "feature",
    category: "Web 应用",
    title: "拾光集市",
    en: "SHIGUANG JISHI",
    desc: "面向校园场景的二手交易平台，提供商品发布、关键词检索、站内私信和信用评分等功能。从需求梳理、界面设计到主要接口开发均独立完成，上线测试后累计注册用户超过 300 人。",
    tech: ["Java", "Spring Boot", "MySQL", "TypeScript", "Vue"],
    date: "2025.09",
    image: {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
      alt: "笔记本电脑上的平台数据界面"
    },
    link: "#"
  },
  {
    id: "keyutong",
    layout: "right",
    category: "AI 应用",
    title: "课语通",
    en: "KEYUTONG",
    desc: "基于大语言模型的课程问答助手。用户上传课程资料后，系统能够建立知识索引，根据课程内容回答问题，并提供引用出处和知识点小测，帮助学生快速复习和整理课程重点。",
    tech: ["Python", "FastAPI", "RAG", "向量检索", "大语言模型 API", "Streamlit"],
    date: "2026.07",
    image: {
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop",
      alt: "课语通开发场景：屏幕上的代码"
    },
    link: "#"
  },
  {
    id: "light-book",
    layout: "left",
    category: "移动应用",
    title: "轻记账",
    en: "QING JIZHANG",
    desc: "面向日常生活场景的极简记账微信小程序，重点解决快速记录和查看个人收支的问题。支持语音快捷记账、月度收支统计和预算提醒，并使用微信云开发完成数据存储与后端能力。",
    tech: ["TypeScript", "微信小程序", "微信云开发", "ECharts"],
    date: "2025.04",
    image: {
      src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
      alt: "手机上的应用界面特写"
    },
    link: "#"
  },
  {
    id: "city-pulse",
    layout: "stack",
    category: "数据可视化",
    title: "城市脉搏",
    en: "CHENGSHI MAIMAI",
    desc: "城市实时交通与天气数据可视化大屏，集中展示交通、天气和城市运行信息。通过多数据源轮询聚合数据，并结合 SVG 图表、Canvas 粒子地图和响应式布局实现大屏可视化展示。",
    tech: ["TypeScript", "HTML/CSS", "Canvas", "SVG", "ECharts"],
    date: "2026.03",
    image: {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1800&auto=format&fit=crop",
      alt: "显示器上的数据可视化看板"
    },
    link: "#"
  }
];
