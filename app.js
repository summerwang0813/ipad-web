const heroImage = "./assets/ipad-hero.png";
const baseGalleryImages = [
  { src: "./assets/ipad-hero.png", label: "双版本展示" },
  { src: "./assets/ipad-gallery-front.png", label: "正面视角" },
  { src: "./assets/ipad-gallery-side.png", label: "侧边厚度" },
  { src: "./assets/ipad-gallery-back.png", label: "背面细节" }
];
const pilotGalleryImages = [
  { src: "./assets/ipad-pilot-hero.png", label: "金色主视觉" },
  { src: "./assets/ipad-pilot-front.png", label: "正面视角" },
  { src: "./assets/ipad-pilot-side.png", label: "侧边厚度" },
  { src: "./assets/ipad-pilot-back.png", label: "背面细节" }
];

const products = {
  base: {
    id: "base",
    name: "iPad 基础版",
    badge: "轻盈入门",
    price: 5999,
    slogan: "把学习、记录和日常创作做得更轻。",
    intro:
      "为课堂、办公和家庭娱乐准备的一台全能 iPad。11 英寸高清屏幕、全天续航和轻量机身，让阅读、批注、视频会议与手写笔记都更自然。",
    cardCopy:
      "轻薄机身搭配 11 英寸清透屏幕，适合学习、办公、追剧和日常创作。上手简单，预算友好，体验完整。",
    tags: ["11 英寸高清屏", "全天续航", "灵感笔支持"],
    highlights: [
      "11 英寸 Liquid 视网膜显示屏，文字锐利，色彩清爽。",
      "A17 智能芯片，覆盖笔记、网课、轻剪辑和多任务处理。",
      "横向前置摄像头，让视频会议和在线课堂更自然。",
      "兼容灵感笔二代与轻薄键盘保护套，学习办公一台就够。"
    ],
    metrics: [
      ["11 英寸", "清透全面屏"],
      ["477 克", "轻量随身"],
      ["10 小时", "典型使用续航"],
      ["灵感笔", "手写批注支持"]
    ],
    optionGroups: []
  },
  pilot: {
    id: "pilot",
    name: "iPad 领航版",
    badge: "创作旗舰",
    price: 6999,
    slogan: "为移动生产力和专业创作准备。",
    intro:
      "更大的高刷显示屏、更强的 Pro 级芯片与更快的存储响应。适合设计师、视频创作者、项目经理和需要随时展开工作的专业用户。",
    cardCopy:
      "高刷屏幕、旗舰芯片和专业配件生态，为绘图、剪辑、3D 预览和多窗口办公提供更宽的创作余量。",
    tags: ["12.9 英寸高刷屏", "Pro 级芯片", "专业键盘支持"],
    highlights: [
      "12.9 英寸 XDR 级高刷显示屏，画面更亮，滚动更顺。",
      "M 系列领航芯片，处理多轨视频、设计稿和大型文件更从容。",
      "四扬声器系统与录音棚级麦克风，适合远程协作和内容制作。",
      "兼容磁吸键盘与灵感笔 Pro，快速切换触控、键盘和手写工作流。"
    ],
    metrics: [
      ["12.9 英寸", "XDR 高刷屏"],
      ["高速存储", "创作项目空间"],
      ["M 系列", "领航芯片"],
      ["四扬声器", "沉浸影音"]
    ],
    optionGroups: []
  }
};

const homeImages = {
  highlightMarket: "./assets/home-highlight-market.png",
  highlightAi: "./assets/home-highlight-ai.png",
  highlightSecure: "./assets/home-highlight-secure.png",
  functions: "./assets/home-functions.png",
  aiDecision: "./assets/home-ai-decision.png",
  smartFeature2: "./assets/home-smart-feature-2.png",
  serviceOnboarding: "./assets/home-service-onboarding.png",
  serviceLive: "./assets/home-service-live.png",
  serviceSupport: "./assets/home-service-support.png",
  consulting: "./assets/home-consulting.png",
  valueSummary: "./assets/home-value-summary.png"
};

const homeHighlights = [
  {
    title: "实时投研工作台",
    desc: "行情、研报、课程笔记和自选池集中在一台设备里，打开即可进入当天的学习和研究节奏。",
    image: homeImages.highlightMarket,
    alt: "iPad 投研工作台场景图"
  },
  {
    title: "AI 辅助决策",
    desc: "围绕趋势、风险和机会生成可解释建议，让用户从信息收集更快进入判断和复盘。",
    image: homeImages.highlightAi,
    alt: "AI 辅助决策使用场景图"
  },
  {
    title: "个人研究资产",
    desc: "自选逻辑、历史复盘、课程标注和策略记录长期沉淀，形成只属于用户自己的研究档案。",
    image: homeImages.highlightSecure,
    alt: "个人研究资产管理场景图"
  }
];

const homeFunctions = [
  ["行情扫描", "自选池异动、板块热度和关键指标集中呈现，减少反复切换。"],
  ["智能选股", "按风格、行业、风险偏好筛选候选标的，辅助建立观察清单。"],
  ["风险预警", "价格波动、仓位偏离和重大事件触发提醒，先看到风险。"],
  ["组合跟踪", "记录持仓逻辑、目标区间和复盘节点，让决策过程可追踪。"],
  ["课程复盘", "直播、回放、笔记和重点片段归档，学习路径更清晰。"],
  ["报告生成", "把研究结论整理成结构化摘要，便于复盘、分享和再次检索。"]
];

const aiDecisionItems = [
  ["趋势归因", "把行情变化拆解到行业、事件和资金线索。"],
  ["场景推演", "围绕不同价格区间生成观察路径。"],
  ["风险阈值", "提前标记仓位、波动和事件风险。"],
  ["复盘建议", "把当次判断沉淀为下次可用的经验。"]
];

const smartFeatureItems = [
  ["语音问答", "用自然语言追问课程、研报和自选问题。"],
  ["研报摘要", "自动提炼重点、假设和需要验证的结论。"],
  ["课程重点", "把直播知识点同步到个人学习路径。"],
  ["自选提醒", "关注标的触发条件后及时提示下一步动作。"]
];

const homeServices = [
  {
    title: "到手配置",
    desc: "开机、账号、课程入口和常用模板一次配置好，新用户拿到设备即可开始使用。",
    image: homeImages.serviceOnboarding,
    alt: "到手配置服务场景图"
  },
  {
    title: "直播训练",
    desc: "围绕行情拆解、工具使用和策略复盘持续训练，让功能真正进入日常流程。",
    image: homeImages.serviceLive,
    alt: "直播训练服务场景图"
  },
  {
    title: "长期支持",
    desc: "订单、售后、系统更新和使用问题统一跟进，减少学习和使用过程中的断点。",
    image: homeImages.serviceSupport,
    alt: "长期支持服务场景图"
  }
];

const consultingItems = [
  ["方法梳理", "结合用户阶段和目标，整理适合自己的研究框架。"],
  ["案例拆解", "围绕真实市场案例分析信息、判断和执行过程。"],
  ["复盘建议", "把结果回看成可复用经验，持续优化下一次决策。"]
];

const finalValues = [
  ["学习路径更清晰", "从入门课程到实战复盘形成连续路径，每一步都有记录。"],
  ["决策流程更稳定", "把观察、判断、执行、复盘拆成固定动作，减少临时情绪干扰。"],
  ["研究资产可沉淀", "历史笔记、关注逻辑和报告长期保存，越用越了解自己的方法。"]
];

const specRows = [
  {
    icon: "display",
    label: "显示屏",
    base: "11 英寸 Liquid 视网膜显示屏，适合阅读、批注和日常学习。",
    pilot: "12.9 英寸 XDR 级高刷显示屏，适合多窗口研究和专业创作。"
  },
  {
    icon: "chip",
    label: "芯片性能",
    base: "A17 智能芯片，覆盖网课、笔记、轻剪辑和多任务处理。",
    pilot: "M 系列领航芯片，处理大型报告、多轨视频和复杂文件更从容。"
  },
  {
    icon: "storage",
    label: "存储与响应",
    base: "高速基础存储，满足课程资料、笔记和常用文档保存。",
    pilot: "更快存储响应，适合大量研报、素材库和专业项目归档。"
  },
  {
    icon: "camera",
    label: "协作影像",
    base: "横向前置摄像头，视频会议和在线课堂画面自然。",
    pilot: "四扬声器与录音棚级麦克风，远程协作和内容制作更稳定。"
  },
  {
    icon: "battery",
    label: "续航能力",
    base: "约 10 小时典型使用续航，覆盖一天学习和办公。",
    pilot: "长时间创作和多任务场景下保持稳定输出。"
  },
  {
    icon: "pencil",
    label: "配件支持",
    base: "兼容灵感笔二代和轻薄键盘保护套。",
    pilot: "兼容灵感笔 Pro、磁吸键盘和专业创作配件。"
  },
  {
    icon: "weight",
    label: "机身定位",
    base: "约 477 克，轻量随身，适合通勤、课堂和家庭使用。",
    pilot: "大屏专业尺寸，适合桌面生产力和移动创作。"
  },
  {
    icon: "service",
    label: "适合人群",
    base: "适合学生、家庭用户和需要高性价比全能设备的人群。",
    pilot: "适合投研学习、内容创作和高强度移动办公用户。"
  }
];

const paymentMethods = [
  { id: "alipay", name: "支付宝", desc: "即时到账，适合个人订单" },
  { id: "wechat", name: "微信支付", desc: "支持零钱、银行卡和分期入口" },
  { id: "unionpay", name: "银联云闪付", desc: "支持主流储蓄卡与信用卡" },
  { id: "company", name: "企业转账", desc: "提交后保留 24 小时订单库存" }
];

const storageKeys = {
  accounts: "ipad_store_accounts",
  currentUser: "ipad_store_current_user",
  selections: "ipad_store_selections",
  checkoutDraft: "ipad_store_checkout_draft",
  orders: "ipad_store_orders",
  authReturn: "ipad_store_auth_return",
  registerEmail: "ipad_store_register_email"
};

let notice = "";
const galleryIndexes = {};
let lightboxProductId = null;

const app = document.querySelector("#app");
const headerActions = document.querySelector("#headerActions");

function readJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function money(value) {
  return `¥${Number(value).toLocaleString("zh-CN")}`;
}

function esc(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getCurrentUserEmail() {
  return localStorage.getItem(storageKeys.currentUser);
}

function getAccounts() {
  return readJSON(storageKeys.accounts, []);
}

function saveAccounts(accounts) {
  writeJSON(storageKeys.accounts, accounts);
}

function getCurrentUser() {
  const email = getCurrentUserEmail();
  return getAccounts().find((account) => account.email === email) || null;
}

function defaultCoupons() {
  return [
    {
      id: "WELCOME300",
      name: "新用户购机券",
      desc: "满 3000 元可用，适合基础版首单",
      value: 300,
      threshold: 3000
    },
    {
      id: "PRO500",
      name: "领航创作券",
      desc: "满 6000 元可用，适合领航版与高配组合",
      value: 500,
      threshold: 6000
    }
  ];
}

function getOrders() {
  return readJSON(storageKeys.orders, []);
}

function saveOrders(orders) {
  writeJSON(storageKeys.orders, orders);
}

function orderFulfillmentStatus(order) {
  if (order.fulfillmentStatus) return order.fulfillmentStatus;
  const text = `${order.status || ""} ${order.logistics || ""}`;
  if (text.includes("已取消")) return "已取消";
  if (text.includes("已完成")) return "已完成";
  if (text.includes("签收")) return "已签收";
  if (text.includes("已发货") || text.includes("运输中") || text.includes("派送") || text.includes("在途") || text.includes("已揽收")) return "已发货";
  return "待发货";
}

function isPendingPayment(order) {
  const text = `${order.status || ""} ${order.paymentName || ""}`;
  return text.includes("待付款") || text.includes("待转账") || text.includes("待支付");
}

function canCancelOrder(order) {
  const status = orderFulfillmentStatus(order);
  return status !== "已取消" && status !== "已发货" && status !== "已签收" && status !== "已完成" && !order.afterSalesStatus;
}

function canApplyAfterSales(order) {
  const status = orderFulfillmentStatus(order);
  return (status === "已发货" || status === "已签收" || status === "已完成") && order.status !== "已取消" && !order.afterSalesStatus;
}

function orderStatusText(order) {
  if (order.status === "已取消" || orderFulfillmentStatus(order) === "已取消") return "已取消";
  if (order.afterSalesStatus) return "售后处理中";
  if (isPendingPayment(order)) return "待付款";
  const status = orderFulfillmentStatus(order);
  if (status === "待发货") return "待发货";
  if (status === "已发货") return "待收货";
  if (status === "已签收") return "已签收";
  if (status === "已完成") return "已完成";
  return order.status || status;
}

function getRoute() {
  return location.hash.replace(/^#/, "") || "/";
}

function navigate(route) {
  if (getRoute() === route) {
    render();
    return;
  }
  location.hash = route;
}

function defaultSelection(product) {
  const selection = { productId: product.id, qty: 1 };
  product.optionGroups.forEach((group) => {
    selection[group.key] = group.options[0].id;
  });
  return selection;
}

function getSelections() {
  return readJSON(storageKeys.selections, {});
}

function getSelection(productId) {
  const product = products[productId] || products.base;
  const selections = getSelections();
  const saved = selections[productId] || {};
  return { ...defaultSelection(product), ...saved, productId };
}

function getProductGallery(productId) {
  return productId === "pilot" ? pilotGalleryImages : baseGalleryImages;
}

function getProductImage(productId) {
  return getProductGallery(productId)[0].src;
}

function getGalleryIndex(productId) {
  const gallery = getProductGallery(productId);
  const saved = galleryIndexes[productId] || 0;
  return Math.min(gallery.length - 1, Math.max(0, saved));
}

function setGalleryIndex(productId, index) {
  const gallery = getProductGallery(productId);
  const nextIndex = (index + gallery.length) % gallery.length;
  galleryIndexes[productId] = nextIndex;
}

function saveSelection(productId, selection) {
  const selections = getSelections();
  selections[productId] = selection;
  writeJSON(storageKeys.selections, selections);
}

function findOption(product, key, id) {
  const group = product.optionGroups.find((item) => item.key === key);
  return group?.options.find((item) => item.id === id) || group?.options[0];
}

function selectionDetails(product, selection) {
  if (!product.optionGroups.length) {
    return [
      {
        key: "version",
        title: "版本",
        name: product.name,
        desc: product.slogan,
        add: 0
      }
    ];
  }
  return product.optionGroups.map((group) => {
    const option = findOption(product, group.key, selection[group.key]);
    return {
      key: group.key,
      title: group.title.replace("选择", ""),
      name: option.name,
      desc: option.desc,
      add: option.add
    };
  });
}

function itemUnitPrice(product, selection) {
  return (
    product.price +
    product.optionGroups.reduce((sum, group) => {
      const option = findOption(product, group.key, selection[group.key]);
      return sum + Number(option.add || 0);
    }, 0)
  );
}

function draftSubtotal(draft) {
  const product = products[draft.productId];
  return itemUnitPrice(product, draft.selection) * draft.selection.qty;
}

function usableCoupons(user, subtotal) {
  const coupons = user?.coupons || [];
  return coupons.filter((coupon) => subtotal >= coupon.threshold);
}

function draftDiscount(draft, user) {
  if (!draft?.couponId) return 0;
  const coupon = (user?.coupons || []).find((item) => item.id === draft.couponId);
  if (!coupon || draftSubtotal(draft) < coupon.threshold) return 0;
  return coupon.value;
}

function draftTotal(draft, user) {
  return Math.max(0, draftSubtotal(draft) - draftDiscount(draft, user));
}

function getDraft() {
  return readJSON(storageKeys.checkoutDraft, null);
}

function saveDraft(draft) {
  writeJSON(storageKeys.checkoutDraft, draft);
}

function clearDraft() {
  localStorage.removeItem(storageKeys.checkoutDraft);
}

function defaultAddress(user) {
  return {
    name: user?.name || "陈景然",
    phone: user?.phone || "138 0000 2026",
    address: user?.address || "上海市徐汇区漕溪北路 88 号 18 层",
    note: "工作日 10:00-18:00 可收货"
  };
}

function updateHeader() {
  const user = getCurrentUser();
  headerActions.innerHTML = user
    ? `<a class="header-link" href="#/account">${esc(user.name)}</a><button class="text-link" data-action="logout">退出</button>`
    : `<a class="header-link" href="#/login">登录</a>`;
}

function renderShell(content) {
  app.innerHTML = content;
  app.focus({ preventScroll: true });
  updateHeader();
}

function homePage() {
  return `
    <section class="hero">
      <div class="container hero-copy">
        <p class="eyebrow">新一代 iPad 系列</p>
        <h1>一块屏幕，装下你的学习、创作和工作。</h1>
        <p class="hero-subtitle">基础版轻盈全能，领航版面向专业创作。两款 iPad 都围绕真实使用场景设计，让灵感从打开屏幕的那一刻开始。</p>
        <div class="hero-cta">
          <a class="text-link" href="#/product/base">了解基础版</a>
          <a class="text-link" href="#/product/pilot">了解领航版</a>
        </div>
      </div>
      <div class="hero-visual">
        <img src="${heroImage}" alt="两款 iPad 产品主视觉" />
      </div>
    </section>

    <section class="section home-page home-highlights" data-home-page="2-core-highlights">
      <div class="container">
        <div class="section-head center">
          <p class="section-kicker">核心亮点</p>
          <h2 class="section-title">围绕学习、研究和决策的三条主线。</h2>
          <p class="section-desc">首页重点展示产品本身的价值，每个亮点独立呈现，避免把功能和购买流程混在一起。</p>
        </div>
        <div class="home-card-grid highlight-grid">
          ${homeHighlights.map(homeImageCard).join("")}
        </div>
      </div>
    </section>

    <section class="section home-page home-functions" data-home-page="3-core-functions">
      <div class="container">
        <div class="section-head center">
          <p class="section-kicker">6 大核心功能</p>
          <h2 class="section-title">从看见信息，到形成判断。</h2>
          <p class="section-desc">把高频投研动作拆成清晰模块，帮助用户建立稳定、可复盘的使用流程。</p>
        </div>
        <div class="function-showcase">
          <img src="${homeImages.functions}" alt="6 大核心功能使用场景图" />
          <div class="function-grid">
            ${homeFunctions.map(([title, desc], index) => featureMiniCard(index + 1, title, desc)).join("")}
          </div>
        </div>
      </div>
    </section>

    <section class="section home-page home-split" data-home-page="4-ai-decision">
      <div class="container split-feature">
        <div class="split-copy">
          <p class="section-kicker">AI 智能决策</p>
          <h2 class="section-title">把复杂信息整理成可以行动的判断。</h2>
          <p class="section-desc">AI 会围绕用户关注的标的、行业和课程内容，提炼趋势、风险点和下一步观察动作。</p>
        </div>
        <div class="split-media">
          <img src="${homeImages.aiDecision}" alt="AI 智能决策场景图" />
        </div>
      </div>
      <div class="container capability-grid four-grid">
        ${aiDecisionItems.map(([title, desc]) => capabilityCard(title, desc)).join("")}
      </div>
    </section>

    <section class="section home-page home-split alt" data-home-page="5-smart-feature-2">
      <div class="container split-feature reverse">
        <div class="split-copy">
          <p class="section-kicker">智能功能 2</p>
          <h2 class="section-title">把问答、摘要和提醒变成日常习惯。</h2>
          <p class="section-desc">通过语音问答、研报摘要、课程重点和自选提醒，减少重复整理，让学习和研究不断线。</p>
        </div>
        <div class="split-media">
          <img src="${homeImages.smartFeature2}" alt="智能功能使用场景图" />
        </div>
      </div>
      <div class="container capability-grid four-grid">
        ${smartFeatureItems.map(([title, desc]) => capabilityCard(title, desc)).join("")}
      </div>
    </section>

    <section class="section home-page home-services" data-home-page="6-services">
      <div class="container">
        <div class="section-head center">
          <p class="section-kicker">3 大服务</p>
          <h2 class="section-title">从购买到长期使用，都有人把关键环节接住。</h2>
          <p class="section-desc">服务模块不和产品参数混在一起，用户可以清楚理解买到的不只是设备。</p>
        </div>
        <div class="home-card-grid service-grid">
          ${homeServices.map(homeImageCard).join("")}
        </div>
      </div>
    </section>

    <section class="section home-page home-split" data-home-page="7-consulting">
      <div class="container split-feature">
        <div class="split-copy">
          <p class="section-kicker">专业投研咨询</p>
          <h2 class="section-title">把工具、课程和专家经验连接起来。</h2>
          <p class="section-desc">围绕用户的研究阶段和风险偏好，提供方法梳理、案例拆解和复盘建议，让设备真正服务于决策能力提升。</p>
        </div>
        <div class="split-media">
          <img src="${homeImages.consulting}" alt="专业投研咨询场景图" />
        </div>
      </div>
      <div class="container capability-grid three-grid">
        ${consultingItems.map(([title, desc]) => capabilityCard(title, desc)).join("")}
      </div>
    </section>

    <section class="section home-page home-values" data-home-page="8-values">
      <div class="container">
        <div class="section-head center">
          <p class="section-kicker">长期价值</p>
          <h2 class="section-title">三件事，让一台设备越用越有价值。</h2>
          <p class="section-desc">最后用三组独立描述收束产品价值，用户能快速判断它是否适合自己的学习和研究方式。</p>
        </div>
        <div class="value-media">
          <img src="${homeImages.valueSummary}" alt="三项核心价值场景图" />
        </div>
        <div class="value-list value-grid">
          ${finalValues.map(([title, desc]) => valueItem(title, desc)).join("")}
        </div>
      </div>
    </section>

    <section class="section home-page purchase-section" data-home-page="purchase-plan">
      <div class="container">
        <div class="section-head center">
          <p class="section-kicker">购买方案</p>
          <h2 class="section-title">选择适合你的版本。</h2>
          <p class="section-desc">基础版适合轻量学习和日常记录，领航版适合更高强度的投研学习与创作工作流。</p>
        </div>
        <div class="purchase-plan-grid">
          ${purchasePlanCard(products.base)}
          ${purchasePlanCard(products.pilot)}
        </div>
      </div>
    </section>
  `;
}

function homeImageCard(item) {
  return `
    <article class="home-image-card">
      <img src="${item.image}" alt="${item.alt}" />
      <div class="home-image-copy">
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </div>
    </article>
  `;
}

function featureMiniCard(index, title, desc) {
  return `
    <article class="function-card">
      <span class="function-index">${String(index).padStart(2, "0")}</span>
      <h3>${title}</h3>
      <p>${desc}</p>
    </article>
  `;
}

function valueItem(title, desc) {
  return `
    <article class="value-item">
      <h3>${title}</h3>
      <p>${desc}</p>
    </article>
  `;
}

function capabilityCard(title, desc) {
  return `
    <article class="capability-card">
      <h3>${title}</h3>
      <p>${desc}</p>
    </article>
  `;
}

function purchasePlanCard(product) {
  return `
    <a class="plan-card" href="#/product/${product.id}">
      <div class="plan-copy">
        <p class="plan-badge">${product.badge}</p>
        <h3>${product.name}</h3>
        <p>${product.cardCopy}</p>
        <div class="product-card-meta">
          ${product.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
        <span class="plan-detail">查看详情</span>
      </div>
      <div class="plan-media">
        <img src="${getProductImage(product.id)}" alt="${product.name} 产品图" />
      </div>
    </a>
  `;
}

function productCard(product) {
  return `
    <a class="product-card" href="#/product/${product.id}">
      <div class="product-card-copy">
        <p class="section-kicker">${product.badge}</p>
        <h3>${product.name}</h3>
        <p>${product.cardCopy}</p>
        <div class="product-card-meta">
          ${product.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
        <p class="text-link" style="margin-top:24px;">查看详情</p>
      </div>
      <div class="product-card-visual">
        <img src="${getProductImage(product.id)}" alt="${product.name} 产品图" />
      </div>
    </a>
  `;
}

function detailPage(productId) {
  const product = products[productId] || products.base;
  const selection = getSelection(product.id);
  const unit = itemUnitPrice(product, selection);
  return `
    <section class="detail-hero">
      <div class="container detail-layout">
        ${detailGallery(product)}
        <div class="detail-panel">
          <p class="eyebrow">${product.badge}</p>
          <h1 class="page-title">${product.name}</h1>
          <p class="page-subtitle">${product.intro}</p>
          <div class="price-line">
            <span class="price">${money(unit)} 起</span>
            <span class="price-note">所选版本单机价格，含税</span>
          </div>
          <ul class="highlights">
            ${product.highlights.map((item) => `<li>${item}</li>`).join("")}
          </ul>
          ${versionSelector(product.id)}
          ${quantitySelector(product.id, selection.qty)}
          <div class="sticky-buy-bar">
            <div class="sticky-buy-inner">
              <div>
                <p class="section-kicker">所选版本</p>
                <strong>${product.name} · ${money(unit * selection.qty)}</strong>
              </div>
              <button class="btn primary" data-action="buy-now" data-product="${product.id}">立即购买</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="feature-strip">
          ${product.metrics
            .map(
              ([value, label]) => `
              <div class="feature-item">
                <span class="feature-value">${value}</span>
                <span class="feature-label">${label}</span>
              </div>
            `
            )
            .join("")}
        </div>
      </div>
    </section>
    ${specCompareSection(product.id)}
    ${lightboxProductId === product.id ? galleryLightbox(product) : ""}
  `;
}

function specCompareSection(activeProductId) {
  return `
    <section class="section spec-compare-section">
      <div class="container">
        <div class="spec-dark-head">
          <p class="section-kicker">参数对比</p>
          <h2>两款 iPad 的具体差异，一眼看清。</h2>
          <p>按照显示、性能、协作、续航和配件能力拆分，让用户在详情页也能直接比较基础版与领航版。</p>
        </div>
        <div class="spec-compare">
          ${Object.values(products).map((product) => specProductColumn(product, activeProductId)).join("")}
        </div>
      </div>
    </section>
  `;
}

function specProductColumn(product, activeProductId) {
  const size = product.id === "base" ? "11 英寸" : "12.9 英寸";
  const display = product.id === "base" ? "高清 Liquid 视网膜显示屏" : "XDR 级高刷显示屏";
  return `
    <div class="spec-column ${activeProductId === product.id ? "active" : ""}">
      <div class="spec-column-head">
        <h3>${size}</h3>
        <p>${product.name}</p>
        <span>${display}</span>
        <strong>${money(product.price)} 起</strong>
      </div>
      ${specRows.map((row) => specItem(row, product.id)).join("")}
    </div>
  `;
}

function specItem(row, productId) {
  return `
    <article class="spec-item">
      ${specIcon(row.icon)}
      <h4>${row.label}</h4>
      <p>${productId === "base" ? row.base : row.pilot}</p>
    </article>
  `;
}

function specIcon(name) {
  const icons = {
    display: '<rect x="4" y="5" width="40" height="26" rx="4"></rect><path d="M18 39h12"></path><path d="M24 31v8"></path>',
    chip: '<rect x="13" y="13" width="22" height="22" rx="4"></rect><path d="M18 7v6M24 7v6M30 7v6M18 35v6M24 35v6M30 35v6M7 18h6M7 24h6M7 30h6M35 18h6M35 24h6M35 30h6"></path>',
    storage: '<path d="M10 13c0-4 28-4 28 0v22c0 4-28 4-28 0V13z"></path><path d="M10 13c0 4 28 4 28 0"></path><path d="M10 24c0 4 28 4 28 0"></path>',
    camera: '<rect x="7" y="15" width="34" height="24" rx="5"></rect><path d="M17 15l3-6h8l3 6"></path><circle cx="24" cy="27" r="7"></circle>',
    battery: '<rect x="6" y="16" width="32" height="16" rx="4"></rect><path d="M38 21h4v6h-4"></path><path d="M13 24h16"></path>',
    pencil: '<path d="M12 36l4-12 17-17a5 5 0 0 1 7 7L23 31 12 36z"></path><path d="M29 11l8 8"></path>',
    weight: '<path d="M14 20h20l4 20H10l4-20z"></path><path d="M18 20a6 6 0 0 1 12 0"></path>',
    service: '<circle cx="24" cy="17" r="8"></circle><path d="M9 42c2-10 28-10 30 0"></path><path d="M35 8l4-4"></path><path d="M39 14h5"></path>'
  };
  return `<span class="spec-icon" aria-hidden="true"><svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">${icons[name] || icons.display}</svg></span>`;
}

function detailGallery(product) {
  const gallery = getProductGallery(product.id);
  const activeIndex = getGalleryIndex(product.id);
  const activeImage = gallery[activeIndex];
  return `
    <div class="detail-visual detail-gallery">
      <button class="gallery-main" data-action="gallery-open" data-product="${product.id}" aria-label="查看${activeImage.label}大图">
        <img src="${activeImage.src}" alt="${product.name}${activeImage.label}" />
      </button>
      <button class="gallery-arrow gallery-arrow-left" data-action="gallery-prev" data-product="${product.id}" aria-label="上一张">‹</button>
      <button class="gallery-arrow gallery-arrow-right" data-action="gallery-next" data-product="${product.id}" aria-label="下一张">›</button>
      <div class="gallery-footer">
        <span>${activeImage.label}</span>
        <span>${activeIndex + 1} / ${gallery.length}</span>
      </div>
      <div class="gallery-thumbs" aria-label="产品图片缩略图">
        ${gallery
          .map(
            (image, index) => `
              <button class="gallery-thumb ${index === activeIndex ? "active" : ""}" data-action="gallery-select" data-product="${product.id}" data-index="${index}" aria-label="查看${image.label}">
                <img src="${image.src}" alt="${image.label}缩略图" />
              </button>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function galleryLightbox(product) {
  const gallery = getProductGallery(product.id);
  const activeIndex = getGalleryIndex(product.id);
  const activeImage = gallery[activeIndex];
  return `
    <div class="lightbox" role="dialog" aria-modal="true" aria-label="${product.name}产品大图">
      <div class="lightbox-backdrop" data-action="gallery-close"></div>
      <div class="lightbox-panel">
        <button class="lightbox-close" data-action="gallery-close" aria-label="关闭大图">×</button>
        <button class="gallery-arrow lightbox-arrow lightbox-arrow-left" data-action="gallery-prev" data-product="${product.id}" aria-label="上一张">‹</button>
        <img src="${activeImage.src}" alt="${product.name}${activeImage.label}大图" />
        <button class="gallery-arrow lightbox-arrow lightbox-arrow-right" data-action="gallery-next" data-product="${product.id}" aria-label="下一张">›</button>
        <div class="lightbox-caption">${activeImage.label} · ${activeIndex + 1} / ${gallery.length}</div>
      </div>
    </div>
  `;
}

function quantitySelector(productId, qty) {
  return `
    <div class="config-block quantity-block">
      <div class="config-title">
        <h3>选择数量</h3>
        <span>单次最多购买 5 台。</span>
      </div>
      <div class="quantity quantity-large" aria-label="购买数量">
        <button data-action="qty" data-product="${productId}" data-step="-1" aria-label="减少数量">-</button>
        <span>${qty}</span>
        <button data-action="qty" data-product="${productId}" data-step="1" aria-label="增加数量">+</button>
      </div>
    </div>
  `;
}

function versionSelector(activeProductId) {
  return `
    <div class="config-block">
      <div class="config-title">
        <h3>选择版本</h3>
        <span>基础版 ${money(products.base.price)}，领航版 ${money(products.pilot.price)}。</span>
      </div>
      <div class="option-grid version-grid">
        ${Object.values(products)
          .map(
            (item) => `
              <button class="option-card version-option ${activeProductId === item.id ? "checked" : ""}" data-action="route" data-route="/product/${item.id}">
                <span class="option-name">${item.name}</span>
                <span class="option-desc">${item.slogan} · ${money(item.price)}</span>
              </button>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function optionGroup(product, selection, group) {
  return `
    <div class="config-block">
      <div class="config-title">
        <h3>${group.title}</h3>
        <span>${group.hint}</span>
      </div>
      <div class="option-grid">
        ${group.options
          .map((option) => {
            const checked = selection[group.key] === option.id;
            const addText = option.add ? `+ ${money(option.add)}` : "已包含";
            return `
              <label class="option-card ${checked ? "checked" : ""}">
                <input
                  type="radio"
                  name="${group.key}"
                  value="${option.id}"
                  ${checked ? "checked" : ""}
                  data-option-input
                  data-product="${product.id}"
                  data-key="${group.key}"
                />
                <span class="option-name">${option.name}</span>
                <span class="option-desc">${option.desc} · ${addText}</span>
              </label>
            `;
          })
          .join("")}
      </div>
    </div>
  `;
}

function authRedirect(targetRoute) {
  localStorage.setItem(storageKeys.authReturn, targetRoute);
  navigate("/login");
}

function createCheckoutDraft(productId) {
  const user = getCurrentUser();
  const product = products[productId] || products.base;
  const selection = getSelection(product.id);
  const draft = {
    productId: product.id,
    selection,
    couponId: null,
    paymentMethod: "alipay",
    address: defaultAddress(user)
  };
  saveDraft(draft);
  if (!user) {
    authRedirect("/checkout");
    return;
  }
  navigate("/checkout");
}

function checkoutPage() {
  const user = getCurrentUser();
  if (!user) {
    authRedirect("/checkout");
    return "";
  }

  const draft = getDraft();
  if (!draft) {
    return emptyPage("还没有待确认的订单", "先选择一款 iPad，再回到这里确认订单细节。", "#/", "返回产品首页");
  }

  const product = products[draft.productId];
  const details = selectionDetails(product, draft.selection);
  const subtotal = draftSubtotal(draft);
  const selectedCoupon = (user.coupons || []).find((coupon) => coupon.id === draft.couponId);
  const discount = draftDiscount(draft, user);
  const total = draftTotal(draft, user);
  const coupons = user.coupons || [];

  return `
    <section class="process-page">
      <div class="container">
        <div class="section-head">
          <p class="section-kicker">确认订单</p>
          <h1 class="section-title">核对商品、优惠和收货信息。</h1>
          <p class="section-desc">订单提交前，你可以调整优惠券和配送信息。支付成功后，可在个人中心的订单管理查看。</p>
        </div>
        <div class="process-grid">
          <div>
            <div class="panel">
              <div class="panel-head">
                <h2>商品信息</h2>
                <a class="text-link" href="#/product/${product.id}">修改配置</a>
              </div>
              <div class="panel-body">
                <div class="line-product">
                  <img src="${getProductImage(product.id)}" alt="${product.name}" />
                  <div>
                    <h3>${product.name}</h3>
                    <p>${details.map((item) => `${item.title}：${item.name}`).join(" / ")}</p>
                    <p>数量：${draft.selection.qty} · 单价：${money(itemUnitPrice(product, draft.selection))}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="panel">
              <div class="panel-head">
                <h2>收货信息</h2>
                <span class="muted">可直接编辑</span>
              </div>
              <div class="panel-body">
                <div class="field">
                  <label for="receiverName">收货人</label>
                  <input id="receiverName" data-draft-field="name" value="${esc(draft.address.name)}" />
                </div>
                <div class="field">
                  <label for="receiverPhone">联系电话</label>
                  <input id="receiverPhone" data-draft-field="phone" value="${esc(draft.address.phone)}" />
                </div>
                <div class="field">
                  <label for="receiverAddress">收货地址</label>
                  <textarea id="receiverAddress" data-draft-field="address">${esc(draft.address.address)}</textarea>
                </div>
                <div class="field">
                  <label for="receiverNote">配送备注</label>
                  <input id="receiverNote" data-draft-field="note" value="${esc(draft.address.note)}" />
                </div>
              </div>
            </div>

            <div class="panel">
              <div class="panel-head">
                <h2>优惠券</h2>
                <span class="muted">${selectedCoupon ? `已选 ${selectedCoupon.name}` : "可选择可用优惠"}</span>
              </div>
              <div class="panel-body">
                <div class="coupon-grid">
                  <button class="coupon-card ${!draft.couponId ? "selected" : ""}" data-action="coupon" data-coupon="">
                    <span class="coupon-copy">
                      <strong class="coupon-title">不使用优惠券</strong>
                      <span class="coupon-desc">保持原价结算</span>
                    </span>
                    <span class="coupon-value">¥0</span>
                  </button>
                  ${coupons
                    .map((coupon) => {
                      const disabled = subtotal < coupon.threshold;
                      return `
                        <button class="coupon-card ${draft.couponId === coupon.id ? "selected" : ""}" data-action="coupon" data-coupon="${coupon.id}" ${disabled ? "disabled" : ""}>
                          <span class="coupon-copy">
                            <strong class="coupon-title">${coupon.name}</strong>
                            <span class="coupon-desc">${coupon.desc}</span>
                          </span>
                          <span class="coupon-value">-${money(coupon.value)}</span>
                        </button>
                      `;
                    })
                    .join("")}
                </div>
                <form class="coupon-form" id="couponForm">
                  <input aria-label="优惠码" placeholder="输入优惠码，如 IPAD300" name="couponCode" />
                  <button class="btn secondary" type="submit">添加优惠券</button>
                </form>
                ${notice ? `<p class="message">${notice}</p>` : ""}
              </div>
            </div>
          </div>

          <aside class="panel summary-panel">
            <div class="panel-head">
              <h3>订单汇总</h3>
            </div>
            <div class="panel-body">
              ${summaryRows(subtotal, discount, total)}
              <button class="btn primary full" data-action="go-pay">去支付</button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  `;
}

function summaryRows(subtotal, discount, total) {
  return `
    <div class="summary-row"><span>商品小计</span><span>${money(subtotal)}</span></div>
    <div class="summary-row"><span>标准配送</span><span>免费</span></div>
    <div class="summary-row"><span>优惠抵扣</span><span class="discount">-${money(discount)}</span></div>
    <div class="summary-row total"><span>应付金额</span><span>${money(total)}</span></div>
  `;
}

function loginPage() {
  return `
    <section class="container auth-shell">
      <div class="auth-visual">
        <img src="${heroImage}" alt="iPad 登录页产品图" />
      </div>
      <div class="auth-card">
        <h1>登录 iPad 官方商城</h1>
        <p>登录后将自动回到下单页。若邮箱尚未注册，系统会带你完成注册并继续结算。</p>
        <form id="loginForm">
          <div class="field">
            <label for="loginEmail">邮箱</label>
            <input id="loginEmail" name="email" type="email" autocomplete="email" placeholder="name@example.com" required />
          </div>
          <div class="field">
            <label for="loginCode">验证码</label>
            <input id="loginCode" name="code" placeholder="输入任意 6 位验证码" required />
          </div>
          <button class="btn primary full" type="submit">登录并继续</button>
        </form>
        ${notice ? `<p class="message">${notice}</p>` : ""}
      </div>
    </section>
  `;
}

function registerPage() {
  const email = localStorage.getItem(storageKeys.registerEmail) || "";
  return `
    <section class="container auth-shell">
      <div class="auth-visual">
        <img src="${heroImage}" alt="iPad 注册页产品图" />
      </div>
      <div class="auth-card">
        <h1>创建商城账户</h1>
        <p>只需要补充基本收货信息。注册完成后会自动回到订单确认页，不会丢失你选择的 iPad 配置。</p>
        <form id="registerForm">
          <div class="field">
            <label for="registerEmail">邮箱</label>
            <input id="registerEmail" name="email" type="email" autocomplete="email" value="${esc(email)}" required />
          </div>
          <div class="field">
            <label for="registerName">姓名</label>
            <input id="registerName" name="name" placeholder="例如：陈景然" required />
          </div>
          <div class="field">
            <label for="registerPhone">手机号</label>
            <input id="registerPhone" name="phone" placeholder="例如：138 0000 2026" required />
          </div>
          <button class="btn dark full" type="submit">完成注册并继续下单</button>
        </form>
        ${notice ? `<p class="message">${notice}</p>` : ""}
      </div>
    </section>
  `;
}

function paymentPage() {
  const user = getCurrentUser();
  if (!user) {
    authRedirect("/payment");
    return "";
  }
  const draft = getDraft();
  if (!draft) {
    return emptyPage("没有待支付订单", "当前没有需要支付的订单。", "#/", "返回产品首页");
  }
  const subtotal = draftSubtotal(draft);
  const discount = draftDiscount(draft, user);
  const total = draftTotal(draft, user);
  const product = products[draft.productId];

  return `
    <section class="process-page">
      <div class="container">
        <div class="section-head">
          <p class="section-kicker">支付订单</p>
          <h1 class="section-title">选择支付方式。</h1>
          <p class="section-desc">${product.name} 已为你保留 30 分钟。完成支付后，订单会进入个人中心。</p>
        </div>
        <div class="process-grid">
          <div class="panel">
            <div class="panel-head">
              <h2>支付方式</h2>
              <span class="muted">模拟支付链路</span>
            </div>
            <div class="panel-body">
              <div class="payment-grid">
                ${paymentMethods
                  .map(
                    (method) => `
                    <button class="payment-card ${draft.paymentMethod === method.id ? "selected" : ""}" data-action="payment-method" data-method="${method.id}">
                      <span>
                        <strong>${method.name}</strong>
                        <span class="muted">${method.desc}</span>
                      </span>
                      <span class="status-pill">${draft.paymentMethod === method.id ? "已选择" : "可选"}</span>
                    </button>
                  `
                  )
                  .join("")}
              </div>
            </div>
          </div>
          <aside class="panel summary-panel">
            <div class="panel-head">
              <h3>支付明细</h3>
            </div>
            <div class="panel-body">
              ${summaryRows(subtotal, discount, total)}
              <button class="btn primary full" data-action="pay-submit">确认支付 ${money(total)}</button>
              <p class="message">这是原型支付，不会发起真实扣款。</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  `;
}

function accountPage() {
  const user = getCurrentUser();
  if (!user) {
    authRedirect("/account");
    return "";
  }
  const orders = getOrders().filter((order) => order.userEmail === user.email);
  const recent = orders.slice(-3).reverse();
  return `
    <section class="process-page">
      <div class="container account-layout">
        <aside class="panel profile-box">
          <div class="avatar">${esc(user.name.slice(0, 1))}</div>
          <h1 class="section-title" style="font-size:28px;line-height:34px;">${esc(user.name)}</h1>
          <p class="section-desc" style="font-size:14px;line-height:22px;">${esc(user.email)}</p>
          <nav class="account-nav" aria-label="个人中心导航">
            <a href="#/orders">订单管理</a>
            <a href="#/checkout">继续结算</a>
            <a href="#/">返回产品首页</a>
          </nav>
        </aside>
        <div>
          <div class="panel">
            <div class="panel-head">
              <h2>账户概览</h2>
            </div>
            <div class="panel-body">
              <ul class="info-list">
                <li>手机号：${esc(user.phone)}</li>
                <li>默认收货地址：${esc(user.address || "尚未保存地址，结算时可填写。")}</li>
                <li>可用优惠券：${(user.coupons || []).length} 张</li>
              </ul>
            </div>
          </div>
          <div class="panel">
            <div class="panel-head">
              <h2>我的优惠券</h2>
            </div>
            <div class="panel-body">
              <div class="coupon-grid">
                ${(user.coupons || [])
                  .map(
                    (coupon) => `
                    <div class="coupon-card">
                      <span class="coupon-copy">
                        <strong class="coupon-title">${coupon.name}</strong>
                        <span class="coupon-desc">${coupon.desc}</span>
                      </span>
                      <span class="coupon-value">-${money(coupon.value)}</span>
                    </div>
                  `
                  )
                  .join("")}
              </div>
            </div>
          </div>
          <div class="panel">
            <div class="panel-head">
              <h2>最近订单</h2>
              <a class="text-link" href="#/orders">查看全部</a>
            </div>
            <div class="panel-body">
              ${
                recent.length
                  ? `<div class="order-grid">${recent.map(orderCard).join("")}</div>`
                  : `<div class="empty-state"><h2>还没有订单</h2><p>完成一次下单后，这里会展示你的购买记录。</p><a class="btn primary" href="#/">去选购</a></div>`
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function ordersPage(orderId) {
  const user = getCurrentUser();
  if (!user) {
    authRedirect("/orders");
    return "";
  }
  const orders = getOrders().filter((order) => order.userEmail === user.email).reverse();
  if (orderId) {
    const order = orders.find((item) => item.id === orderId);
    if (!order) {
      return emptyPage("没有找到订单", "该订单可能不属于当前账户，或已被清理。", "#/orders", "返回订单管理");
    }
    return orderDetailPage(order);
  }
  return `
    <section class="process-page">
      <div class="container">
        <div class="section-head">
          <p class="section-kicker">个人中心 / 订单管理</p>
          <h1 class="section-title">查看你的 iPad 订单。</h1>
          <p class="section-desc">支付成功的订单会自动进入这里。你可以查看配置、金额、支付方式和配送信息。</p>
        </div>
        <div class="panel">
          <div class="panel-head">
            <h2>全部订单</h2>
            <span class="muted">${orders.length} 笔订单</span>
          </div>
          <div class="panel-body">
            ${
              orders.length
                ? `<div class="order-grid">${orders.map(orderCard).join("")}</div>`
                : `<div class="empty-state"><h2>暂无订单</h2><p>选好 iPad 并完成支付后，订单会出现在这里。</p><a class="btn primary" href="#/">去选购</a></div>`
            }
          </div>
        </div>
      </div>
    </section>
  `;
}

function orderCard(order) {
  return `
    <div class="order-card">
      <div>
        <span class="status-pill">${orderStatusText(order)}</span>
        <h3>${order.productName}</h3>
        <p class="order-meta">订单号：${order.id} · ${order.createdAt} · 实付 ${money(order.total)}</p>
      </div>
      <div class="order-actions">
        ${orderActionButtons(order)}
        <a class="btn secondary" href="#/orders/${order.id}">查看详情</a>
      </div>
    </div>
  `;
}

function orderDetailPage(order) {
  const product = products[order.productId];
  return `
    <section class="process-page">
      <div class="container">
        <div class="section-head">
          <p class="section-kicker">订单详情</p>
          <h1 class="section-title">${order.productName}</h1>
          <p class="section-desc">订单号 ${order.id} · ${orderStatusText(order)}</p>
        </div>
        <div class="process-grid">
          <div>
            <div class="panel">
              <div class="panel-head"><h2>订单进度</h2></div>
              <div class="panel-body">
                ${orderStatusSteps(order)}
              </div>
            </div>
            <div class="panel">
              <div class="panel-head"><h2>商品配置</h2></div>
              <div class="panel-body">
                <div class="line-product">
                  <img src="${getProductImage(order.productId)}" alt="${order.productName}" />
                  <div>
                    <h3>${order.productName}</h3>
                    <p>${selectionDetails(product, order.selection)
                      .map((item) => `${item.title}：${item.name}`)
                      .join(" / ")}</p>
                    <p>数量：${order.selection.qty}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="panel">
              <div class="panel-head"><h2>配送信息</h2></div>
              <div class="panel-body">
                <ul class="info-list">
                  <li>收货人：${esc(order.address.name)}</li>
                  <li>联系电话：${esc(order.address.phone)}</li>
                  <li>地址：${esc(order.address.address)}</li>
                  <li>备注：${esc(order.address.note)}</li>
                  <li>物流状态：${order.logistics}</li>
                  <li>履约状态：${orderFulfillmentStatus(order)}</li>
                  ${order.afterSalesStatus ? `<li>售后状态：${order.afterSalesStatus}</li>` : ""}
                </ul>
              </div>
            </div>
          </div>
          <aside class="panel summary-panel">
            <div class="panel-head"><h3>付款信息</h3></div>
            <div class="panel-body">
              ${summaryRows(order.subtotal, order.discount, order.total)}
              <div class="summary-row"><span>支付方式</span><span>${order.paymentName}</span></div>
              <div class="order-actions detail-order-actions">
                ${orderActionButtons(order)}
                <a class="btn secondary" href="#/orders">返回订单管理</a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  `;
}

function orderStatusSteps(order) {
  const current = orderStatusText(order);
  if (current === "已取消") {
    return `<div class="order-status-steps single"><span class="order-step current">已取消</span></div>`;
  }
  const steps = ["待付款", "待发货", "待收货", "已签收"];
  const activeIndex = Math.max(0, steps.indexOf(current));
  return `
    <div class="order-status-steps">
      ${steps
        .map((step, index) => {
          const state = index < activeIndex ? "done" : index === activeIndex ? "current" : "";
          return `<span class="order-step ${state}">${step}</span>`;
        })
        .join("")}
      ${order.afterSalesStatus ? `<span class="order-step current">售后处理中</span>` : ""}
    </div>
  `;
}

function orderActionButtons(order) {
  if (canCancelOrder(order)) {
    return `<button class="btn secondary cancel-action" data-action="cancel-order" data-order="${order.id}">取消订单</button>`;
  }
  if (canApplyAfterSales(order)) {
    return `<button class="btn secondary" data-action="apply-after-sales" data-order="${order.id}">申请售后</button>`;
  }
  if (order.status === "已取消") {
    return `<span class="order-action-note">已取消</span>`;
  }
  if (order.afterSalesStatus) {
    return `<span class="order-action-note">${order.afterSalesStatus}</span>`;
  }
  return "";
}

function successPage(orderId) {
  return `
    <section class="success-page">
      <div class="success-card">
        <div class="success-mark">✓</div>
        <p class="section-kicker">支付成功</p>
        <h1 class="page-title">订单已提交。</h1>
        <p class="page-subtitle">我们已经生成订单 ${esc(orderId || "")}。你可以在个人中心的订单管理中查看订单状态、配置和配送信息。</p>
        <div class="hero-cta">
          <a class="btn primary" href="#/orders">查看订单</a>
          <a class="btn secondary" href="#/">继续浏览 iPad</a>
        </div>
      </div>
    </section>
  `;
}

function emptyPage(title, desc, href, actionText) {
  return `
    <section class="process-page">
      <div class="container">
        <div class="empty-state">
          <h2>${title}</h2>
          <p>${desc}</p>
          <a class="btn primary" href="${href}">${actionText}</a>
        </div>
      </div>
    </section>
  `;
}

function createOrder() {
  const user = getCurrentUser();
  const draft = getDraft();
  if (!user || !draft) return null;
  const product = products[draft.productId];
  const subtotal = draftSubtotal(draft);
  const discount = draftDiscount(draft, user);
  const total = draftTotal(draft, user);
  const payment = paymentMethods.find((method) => method.id === draft.paymentMethod) || paymentMethods[0];
  const id = `IP${new Date().toISOString().replace(/\D/g, "").slice(0, 14)}${Math.floor(Math.random() * 90 + 10)}`;
  const order = {
    id,
    userEmail: user.email,
    productId: product.id,
    productName: product.name,
    selection: draft.selection,
    address: draft.address,
    subtotal,
    discount,
    total,
    couponId: draft.couponId,
    paymentMethod: payment.id,
    paymentName: payment.name,
    status: payment.id === "company" ? "待转账确认" : "已支付",
    fulfillmentStatus: "待发货",
    logistics: "仓库处理中，预计 24 小时内发货",
    createdAt: new Date().toLocaleString("zh-CN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    })
  };
  const orders = getOrders();
  orders.push(order);
  saveOrders(orders);
  clearDraft();
  return order;
}

function collectAddressFromPage() {
  const draft = getDraft();
  if (!draft) return null;
  document.querySelectorAll("[data-draft-field]").forEach((field) => {
    draft.address[field.dataset.draftField] = field.value.trim();
  });
  saveDraft(draft);
  return draft;
}

function applyCouponCode(code) {
  const user = getCurrentUser();
  if (!user) return;
  const normalized = code.trim().toUpperCase();
  const available = {
    IPAD300: {
      id: "IPAD300",
      name: "官网限时券",
      desc: "满 3000 元可用，适合任意 iPad 订单",
      value: 300,
      threshold: 3000
    },
    PILOT800: {
      id: "PILOT800",
      name: "领航版升级券",
      desc: "满 8000 元可用，适合高配领航版",
      value: 800,
      threshold: 8000
    }
  };
  const coupon = available[normalized];
  if (!coupon) {
    notice = "优惠码无效。可试试 IPAD300 或 PILOT800。";
    render();
    return;
  }
  const accounts = getAccounts();
  const index = accounts.findIndex((account) => account.email === user.email);
  const exists = accounts[index].coupons.some((item) => item.id === coupon.id);
  if (!exists) {
    accounts[index].coupons.push(coupon);
    saveAccounts(accounts);
  }
  const draft = getDraft();
  if (draft && draftSubtotal(draft) >= coupon.threshold) {
    draft.couponId = coupon.id;
    saveDraft(draft);
    notice = "优惠券已添加并应用。";
  } else {
    notice = "优惠券已添加，但当前订单金额暂未达到使用门槛。";
  }
  render();
}

function updateOrder(orderId, updater) {
  const user = getCurrentUser();
  if (!user) return false;
  const orders = getOrders();
  const index = orders.findIndex((order) => order.id === orderId && order.userEmail === user.email);
  if (index < 0) return false;
  orders[index] = updater({ ...orders[index] });
  saveOrders(orders);
  return true;
}

function cancelOrder(orderId) {
  return updateOrder(orderId, (order) => {
    if (!canCancelOrder(order)) return order;
    return {
      ...order,
      status: "已取消",
      fulfillmentStatus: "已取消",
      logistics: "订单已取消，支付金额将按原支付方式退回。",
      cancelledAt: new Date().toLocaleString("zh-CN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      })
    };
  });
}

function applyAfterSales(orderId) {
  return updateOrder(orderId, (order) => {
    if (!canApplyAfterSales(order)) return order;
    return {
      ...order,
      afterSalesStatus: "售后申请已提交",
      afterSalesAppliedAt: new Date().toLocaleString("zh-CN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      })
    };
  });
}

function render() {
  const route = getRoute();
  notice = notice || "";
  updateHeader();

  if (route === "/") {
    renderShell(homePage());
    return;
  }

  if (route.startsWith("/product/")) {
    renderShell(detailPage(route.split("/")[2]));
    return;
  }

  if (route === "/checkout") {
    renderShell(checkoutPage());
    return;
  }

  if (route === "/login") {
    renderShell(loginPage());
    return;
  }

  if (route === "/register") {
    renderShell(registerPage());
    return;
  }

  if (route === "/payment") {
    renderShell(paymentPage());
    return;
  }

  if (route.startsWith("/success")) {
    const orderId = new URLSearchParams(route.split("?")[1] || "").get("order") || "";
    renderShell(successPage(orderId));
    return;
  }

  if (route === "/account") {
    renderShell(accountPage());
    return;
  }

  if (route === "/orders" || route.startsWith("/orders/")) {
    renderShell(ordersPage(route.split("/")[2]));
    return;
  }

  renderShell(emptyPage("页面不存在", "这个页面还没有建立。", "#/", "返回首页"));
}

document.addEventListener("change", (event) => {
  const target = event.target;
  if (!target.matches("[data-option-input]")) return;
  const productId = target.dataset.product;
  const selection = getSelection(productId);
  selection[target.dataset.key] = target.value;
  saveSelection(productId, selection);
  render();
});

document.addEventListener("input", (event) => {
  if (!event.target.matches("[data-draft-field]")) return;
  collectAddressFromPage();
});

document.addEventListener("click", (event) => {
  const actionTarget = event.target.closest("[data-action]");
  if (!actionTarget) return;

  const action = actionTarget.dataset.action;
  if (action === "logout") {
    localStorage.removeItem(storageKeys.currentUser);
    navigate("/");
  }

  if (action === "route") {
    lightboxProductId = null;
    navigate(actionTarget.dataset.route);
  }

  if (action === "gallery-prev" || action === "gallery-next") {
    const productId = actionTarget.dataset.product || lightboxProductId;
    if (!productId) return;
    const step = action === "gallery-prev" ? -1 : 1;
    setGalleryIndex(productId, getGalleryIndex(productId) + step);
    render();
  }

  if (action === "gallery-select") {
    const productId = actionTarget.dataset.product;
    setGalleryIndex(productId, Number(actionTarget.dataset.index));
    render();
  }

  if (action === "gallery-open") {
    lightboxProductId = actionTarget.dataset.product;
    render();
  }

  if (action === "gallery-close") {
    lightboxProductId = null;
    render();
  }

  if (action === "qty") {
    const productId = actionTarget.dataset.product;
    const step = Number(actionTarget.dataset.step);
    const selection = getSelection(productId);
    selection.qty = Math.min(5, Math.max(1, Number(selection.qty || 1) + step));
    saveSelection(productId, selection);
    render();
  }

  if (action === "buy-now") {
    createCheckoutDraft(actionTarget.dataset.product);
  }

  if (action === "coupon") {
    const draft = getDraft();
    if (!draft) return;
    draft.couponId = actionTarget.dataset.coupon || null;
    saveDraft(draft);
    notice = "";
    render();
  }

  if (action === "go-pay") {
    const draft = collectAddressFromPage();
    if (!draft) return;
    if (!draft.address.name || !draft.address.phone || !draft.address.address) {
      notice = "请补充完整收货信息后再支付。";
      render();
      return;
    }
    notice = "";
    navigate("/payment");
  }

  if (action === "payment-method") {
    const draft = getDraft();
    if (!draft) return;
    draft.paymentMethod = actionTarget.dataset.method;
    saveDraft(draft);
    render();
  }

  if (action === "pay-submit") {
    const order = createOrder();
    if (order) {
      navigate(`/success?order=${order.id}`);
    }
  }

  if (action === "cancel-order") {
    cancelOrder(actionTarget.dataset.order);
    render();
  }

  if (action === "apply-after-sales") {
    applyAfterSales(actionTarget.dataset.order);
    render();
  }
});

document.addEventListener("submit", (event) => {
  event.preventDefault();

  if (event.target.id === "loginForm") {
    const data = new FormData(event.target);
    const email = String(data.get("email") || "").trim().toLowerCase();
    const accounts = getAccounts();
    const account = accounts.find((item) => item.email === email);
    if (account) {
      localStorage.setItem(storageKeys.currentUser, account.email);
      notice = "";
      const next = localStorage.getItem(storageKeys.authReturn) || "/account";
      localStorage.removeItem(storageKeys.authReturn);
      navigate(next);
    } else {
      localStorage.setItem(storageKeys.registerEmail, email);
      notice = "这个邮箱还没有注册，请先创建账户。";
      navigate("/register");
    }
  }

  if (event.target.id === "registerForm") {
    const data = new FormData(event.target);
    const email = String(data.get("email") || "").trim().toLowerCase();
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const accounts = getAccounts();
    const exists = accounts.find((item) => item.email === email);
    if (exists) {
      localStorage.setItem(storageKeys.currentUser, exists.email);
    } else {
      accounts.push({
        email,
        name,
        phone,
        address: "",
        coupons: defaultCoupons()
      });
      saveAccounts(accounts);
      localStorage.setItem(storageKeys.currentUser, email);
    }
    localStorage.removeItem(storageKeys.registerEmail);
    notice = "";
    const next = localStorage.getItem(storageKeys.authReturn) || "/account";
    localStorage.removeItem(storageKeys.authReturn);
    navigate(next);
  }

  if (event.target.id === "couponForm") {
    const data = new FormData(event.target);
    applyCouponCode(String(data.get("couponCode") || ""));
  }
});

window.addEventListener("hashchange", () => {
  notice = "";
  lightboxProductId = null;
  render();
});

window.addEventListener("keydown", (event) => {
  if (!lightboxProductId) return;
  if (event.key === "Escape") {
    lightboxProductId = null;
    render();
  }
  if (event.key === "ArrowLeft") {
    setGalleryIndex(lightboxProductId, getGalleryIndex(lightboxProductId) - 1);
    render();
  }
  if (event.key === "ArrowRight") {
    setGalleryIndex(lightboxProductId, getGalleryIndex(lightboxProductId) + 1);
    render();
  }
});

render();
