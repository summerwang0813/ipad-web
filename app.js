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

const membershipOptions = [
  {
    id: "stock-basic",
    name: "方德AI股票机 基础版",
    desc: "裸机-无投顾服务",
    price: 5880
  },
  {
    id: "silver-half",
    name: "白银会员（半年）",
    desc: "基础版学习机（活动赠送）",
    price: 8800
  },
  {
    id: "gold-half",
    name: "黄金会员（半年）",
    desc: "基础版学习机（活动赠送）",
    price: 28800
  },
  {
    id: "platinum-half",
    name: "铂金会员（半年）",
    desc: "基础版学习机（活动赠送）",
    price: 58800
  },
  {
    id: "diamond-half",
    name: "钻石会员（半年）",
    desc: "基础版学习机（活动赠送）",
    price: 99800
  },
  {
    id: "black-diamond-half",
    name: "黑钻会员（半年）",
    desc: "基础版学习机（活动赠送）",
    price: 168800
  }
];

function stockProduct(id, galleryTone = "base") {
  return {
    id,
    name: "方德AI股票机",
    badge: "极智终端",
    price: 5880,
    slogan: "全球行情随身掌控，AI辅助智能决策。",
    intro:
      "方德AI股票机，全球行情随身掌控，AI辅助智能决策，助您轻松实现行情到交易的一站式闭环。",
    cardCopy:
      "由人工智能驱动的一站式全球智能投资决策终端，覆盖行情、分析、决策与交易的完整链路。",
    tags: ["AI+投顾", "AI+量化", "AI+交易"],
    highlights: [
      {
        title: "AI+投顾",
        desc: "资深投顾结合AI大模型，摆脱信息过载，精准识别关键信号。"
      },
      {
        title: "AI+量化",
        desc: "机构级量化策略工具，精准辅助投资决策。"
      },
      {
        title: "AI+交易",
        desc: "多款自动化交易工具，大幅提升交易效率。"
      }
    ],
    metrics: [
      ["12.1 吋", "2.5K 高清大屏"],
      ["90Hz", "流畅刷新率"],
      ["5G 芯片", "强劲性能"],
      ["10200mAh", "长效续航"]
    ],
    galleryTone,
    optionGroups: [
      {
        key: "version",
        title: "选择版本",
        hint: "按会员服务体系选择适合的方案。",
        options: membershipOptions
      }
    ]
  };
}

const products = {
  base: stockProduct("base", "base"),
  pilot: stockProduct("pilot", "pilot")
};

const specRows = [
  {
    icon: "portable",
    label: "轻巧便携",
    desc: "金属铝背壳＋双色喷砂工艺，净重约540克，厚度仅6.29毫米"
  },
  {
    icon: "chip",
    label: "强劲性能",
    desc: "MediaTek天玑6400八核心处理器，主频高达2.5GHz，内置强劲5G芯片"
  },
  {
    icon: "display",
    label: "高清大屏",
    desc: "12.1吋2.5K高清屏幕，90Hz流畅刷新率，屏占比高达87.5%"
  },
  {
    icon: "sound",
    label: "沉浸音效",
    desc: "4组扬声器＋2组降噪麦克风，支持杜比全景声，音质更立体"
  },
  {
    icon: "eye",
    label: "专业护眼",
    desc: "通过德国莱茵TUV＋国家眼科权威认证，护眼模式双重保障"
  },
  {
    icon: "battery",
    label: "长效续航",
    desc: "10200mAh大容量电池，支持45W快速充电，可连续播放影片超过11小时"
  },
  {
    icon: "shield",
    label: "防护耐用",
    desc: "IP52防尘防水等级，适应多种商务环境"
  }
];

const paymentMethods = [
  { id: "alipay", name: "支付宝", desc: "即时到账，适合个人订单" },
  { id: "wechat", name: "微信支付", desc: "支持零钱、银行卡和分期入口" },
  { id: "unionpay", name: "银联云闪付", desc: "支持主流储蓄卡与信用卡" },
  { id: "company", name: "企业转账", desc: "提交后保留 24 小时订单库存" }
];

const phoneCodeOptions = [
  { code: "+852", label: "香港 +852" },
  { code: "+86", label: "中国大陆 +86" },
  { code: "+853", label: "澳门 +853" },
  { code: "+886", label: "台湾 +886" },
  { code: "+65", label: "新加坡 +65" }
];

const regionTree = [
  {
    name: "香港特别行政区",
    cities: [
      {
        name: "香港",
        districts: ["中西区", "湾仔区", "东区", "南区", "油尖旺区", "深水埗区", "九龙城区", "观塘区", "荃湾区", "沙田区"]
      }
    ]
  },
  {
    name: "广东省",
    cities: [
      { name: "深圳市", districts: ["南山区", "福田区", "罗湖区", "宝安区", "龙岗区"] },
      { name: "广州市", districts: ["天河区", "越秀区", "海珠区", "番禺区", "白云区"] }
    ]
  },
  {
    name: "上海市",
    cities: [
      { name: "上海市", districts: ["黄浦区", "徐汇区", "静安区", "浦东新区", "长宁区"] }
    ]
  },
  {
    name: "北京市",
    cities: [
      { name: "北京市", districts: ["朝阳区", "海淀区", "东城区", "西城区", "丰台区"] }
    ]
  },
  {
    name: "浙江省",
    cities: [
      { name: "杭州市", districts: ["西湖区", "滨江区", "上城区", "拱墅区", "余杭区"] },
      { name: "宁波市", districts: ["鄞州区", "海曙区", "江北区", "镇海区", "北仑区"] }
    ]
  }
];

const storageKeys = {
  accounts: "ipad_store_accounts",
  currentUser: "ipad_store_current_user",
  selections: "ipad_store_selections",
  checkoutDraft: "ipad_store_checkout_draft",
  addressBook: "ipad_store_address_book",
  orders: "ipad_store_orders",
  authReturn: "ipad_store_auth_return"
};

let notice = "";
let toastMessage = "";
let toastTimerId = null;
const galleryIndexes = {};
let lightboxProductId = null;
let addressModalMode = null;
let openSelectField = null;
let authMode = "code";
let authPhoneCode = "+852";
let authRegionOpen = false;
let authDraft = {
  phone: "",
  credential: "",
  newPassword: "",
  captcha: "",
  agreement: false
};
let authErrors = {
  password: "",
  captcha: ""
};
let authShowCaptcha = false;
let authCodeCountdownEnd = 0;
let authCodeTimerId = null;

const AUTH_CODE_SECONDS = 60;

const app = document.querySelector("#app");
const headerActions = document.querySelector("#headerActions");

const authRegionOptions = [
  { code: "+86", country: "中国(CN)", group: "常用地区" },
  { code: "+852", country: "中国香港(HK)", group: "常用地区" },
  { code: "+853", country: "中国澳门(MO)", group: "常用地区" },
  { code: "+886", country: "中国台湾(TW)", group: "常用地区" },
  { code: "+355", country: "阿尔巴尼亚(AL)", group: "A" },
  { code: "+213", country: "阿尔及利亚(DZ)", group: "A" },
  { code: "+376", country: "安道尔(AD)", group: "A" },
  { code: "+244", country: "安哥拉(AO)", group: "A" }
];

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

function normalizePhoneNumber(phone) {
  return String(phone || "").replace(/\D/g, "");
}

function syncAuthDraftFromForm(form = document.querySelector("#authForm")) {
  if (!form) return;
  const data = new FormData(form);
  const nextDraft = { ...authDraft };
  if (data.has("phone")) nextDraft.phone = String(data.get("phone") || "").trim();
  if (data.has("credential")) nextDraft.credential = String(data.get("credential") || "").trim();
  if (data.has("newPassword")) nextDraft.newPassword = String(data.get("newPassword") || "").trim();
  if (data.has("captcha")) nextDraft.captcha = String(data.get("captcha") || "").trim();
  if (data.has("agreement")) nextDraft.agreement = Boolean(data.get("agreement"));
  authDraft = nextDraft;
}

function resetAuthDraft() {
  authDraft = {
    phone: "",
    credential: "",
    newPassword: "",
    captcha: "",
    agreement: false
  };
}

function resetAuthErrors() {
  authErrors = {
    password: "",
    captcha: ""
  };
  authShowCaptcha = false;
}

function hasValidResetPasswordLength(password) {
  const value = String(password || "").trim();
  return value.length >= 8 && value.length <= 40;
}

function hasValidResetPasswordComposition(password) {
  const value = String(password || "");
  return /[a-z]/.test(value) && /[A-Z]/.test(value) && /\d/.test(value);
}

function isAuthSubmitReady() {
  const phoneReady = normalizePhoneNumber(authDraft.phone).length >= 4;
  if (authMode === "password") {
    return phoneReady && authDraft.credential.trim().length >= 6;
  }
  if (authMode === "resetVerify") {
    return phoneReady && authDraft.credential.trim().length > 0;
  }
  if (authMode === "resetPassword") {
    return hasValidResetPasswordLength(authDraft.newPassword) && hasValidResetPasswordComposition(authDraft.newPassword);
  }
  return phoneReady && authDraft.credential.trim().length > 0;
}

function updateAuthSubmitState() {
  const button = document.querySelector(".auth-submit");
  if (!button) return;
  button.disabled = !isAuthSubmitReady();
}

function updateAuthPasswordRules() {
  const rules = document.querySelectorAll(".auth-password-rules span");
  if (rules.length < 2) return;
  rules[0].classList.toggle("pass", hasValidResetPasswordLength(authDraft.newPassword));
  rules[1].classList.toggle("pass", hasValidResetPasswordComposition(authDraft.newPassword));
}

function showToast(message) {
  toastMessage = message;
  if (toastTimerId) clearTimeout(toastTimerId);
  toastTimerId = setTimeout(() => {
    toastMessage = "";
    toastTimerId = null;
    render();
  }, 2600);
}

function getAuthCodeRemaining() {
  return Math.max(0, Math.ceil((authCodeCountdownEnd - Date.now()) / 1000));
}

function getAuthCodeButtonLabel() {
  const remaining = getAuthCodeRemaining();
  return remaining > 0 ? `再次发送 ${remaining}s` : "发送验证码";
}

function stopAuthCodeCountdown() {
  authCodeCountdownEnd = 0;
  if (authCodeTimerId) {
    clearInterval(authCodeTimerId);
    authCodeTimerId = null;
  }
}

function updateAuthCodeButton() {
  const button = document.querySelector(".auth-send-code");
  if (!button) return;
  const remaining = getAuthCodeRemaining();
  button.textContent = getAuthCodeButtonLabel();
  button.disabled = remaining > 0;
  button.classList.toggle("is-counting", remaining > 0);
  if (remaining <= 0 && authCodeTimerId) {
    clearInterval(authCodeTimerId);
    authCodeTimerId = null;
  }
}

function startAuthCodeCountdown() {
  authCodeCountdownEnd = Date.now() + AUTH_CODE_SECONDS * 1000;
  updateAuthCodeButton();
  if (authCodeTimerId) clearInterval(authCodeTimerId);
  authCodeTimerId = setInterval(() => {
    if (getRoute() !== "/login" && getRoute() !== "/register") {
      stopAuthCodeCountdown();
      return;
    }
    updateAuthCodeButton();
  }, 1000);
}

function phoneAccountEmail(phoneCode, phone) {
  const digits = normalizePhoneNumber(phone);
  const code = String(phoneCode || phoneCodeOptions[0].code).replace(/\D/g, "");
  return `phone-${code}-${digits}@fangde.local`;
}

function findAccountByPhone(phoneCode, phone) {
  const digits = normalizePhoneNumber(phone);
  if (!digits) return null;
  return getAccounts().find((account) => {
    const accountDigits = normalizePhoneNumber(account.phone);
    return account.phoneCode === phoneCode && accountDigits === digits;
  }) || getAccounts().find((account) => account.email === phoneAccountEmail(phoneCode, phone)) || null;
}

function upsertPhoneAccount(phoneCode, phone, extra = {}) {
  const digits = normalizePhoneNumber(phone);
  if (!digits) return null;
  const accounts = getAccounts();
  const existingIndex = accounts.findIndex((account) => {
    const accountDigits = normalizePhoneNumber(account.phone);
    return (account.phoneCode === phoneCode && accountDigits === digits) || account.email === phoneAccountEmail(phoneCode, phone);
  });
  const fallbackName = `用户${digits.slice(-4)}`;
  const nextAccount = {
    ...(existingIndex >= 0 ? accounts[existingIndex] : {}),
    email: existingIndex >= 0 ? accounts[existingIndex].email : phoneAccountEmail(phoneCode, phone),
    name: existingIndex >= 0 ? accounts[existingIndex].name : fallbackName,
    phoneCode,
    phone: digits,
    address: existingIndex >= 0 ? accounts[existingIndex].address || "" : "",
    coupons: existingIndex >= 0 ? accounts[existingIndex].coupons || defaultCoupons() : defaultCoupons(),
    ...extra
  };
  if (existingIndex >= 0) {
    accounts[existingIndex] = nextAccount;
  } else {
    accounts.push(nextAccount);
  }
  saveAccounts(accounts);
  return nextAccount;
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
      name: "会员服务券",
      desc: "满 6000 元可用，适合会员服务方案",
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

function getProvinceData(province) {
  return regionTree.find((item) => item.name === province) || regionTree[0];
}

function getCityData(province, city) {
  const provinceData = getProvinceData(province);
  return provinceData.cities.find((item) => item.name === city) || provinceData.cities[0];
}

function composeAddress(address = {}) {
  return [address.province, address.city, address.district, address.detailAddress]
    .map((item) => String(item || "").trim())
    .filter(Boolean)
    .join(" ");
}

function hasStructuredAddress(address = {}) {
  return Boolean(address.province || address.city || address.district || address.detailAddress);
}

function normalizeAddress(address = {}) {
  const structured = hasStructuredAddress(address);
  const provinceData = getProvinceData(address.province || regionTree[0].name);
  const cityData = getCityData(provinceData.name, address.city);
  const district = cityData.districts.includes(address.district) ? address.district : cityData.districts[0];
  const detailAddress = structured ? String(address.detailAddress || "").trim() : "";
  const rawAddress = String(address.address || "").trim();
  const normalized = {
    name: String(address.name || "").trim(),
    phoneCode: String(address.phoneCode || phoneCodeOptions[0].code).trim(),
    phone: String(address.phone || "").trim(),
    province: structured ? provinceData.name : "",
    city: structured ? cityData.name : "",
    district: structured ? district : "",
    detailAddress,
    note: ""
  };
  normalized.address = structured ? composeAddress(normalized) : rawAddress;
  return normalized;
}

function isAddressComplete(address) {
  const normalized = normalizeAddress(address);
  if (hasStructuredAddress(normalized)) {
    return Boolean(normalized.name && normalized.phone && normalized.province && normalized.city && normalized.district && normalized.detailAddress);
  }
  return Boolean(normalized.name && normalized.phone && normalized.address);
}

function addressSignature(address) {
  const normalized = normalizeAddress(address);
  return [normalized.name, normalized.phoneCode, normalized.phone, normalized.province, normalized.city, normalized.district, normalized.detailAddress || normalized.address].join("|");
}

function formatPhone(address = {}) {
  const normalized = normalizeAddress(address);
  return `${normalized.phoneCode || phoneCodeOptions[0].code} ${normalized.phone}`.trim();
}

function formatAddress(address = {}) {
  return normalizeAddress(address).address;
}

function getAddressBooks() {
  return readJSON(storageKeys.addressBook, {});
}

function getAddressBook(user = getCurrentUser()) {
  if (!user) return [];
  const books = getAddressBooks();
  const addresses = books[user.email];
  return Array.isArray(addresses) ? addresses : [];
}

function saveAddressBook(user, addresses) {
  if (!user) return;
  const books = getAddressBooks();
  books[user.email] = addresses;
  writeJSON(storageKeys.addressBook, books);
}

function updateAccountDefaultAddress(user, address) {
  if (!user) return;
  const accounts = getAccounts();
  const index = accounts.findIndex((account) => account.email === user.email);
  if (index < 0) return;
  accounts[index] = {
    ...accounts[index],
    address: normalizeAddress(address).address
  };
  saveAccounts(accounts);
}

function saveAddressToBook(user, address, addressId) {
  if (!user || !isAddressComplete(address)) return null;
  const normalized = normalizeAddress(address);
  const addresses = getAddressBook(user);
  const byId = addressId ? addresses.findIndex((item) => item.id === addressId) : -1;
  const bySignature = addresses.findIndex((item) => addressSignature(item) === addressSignature(normalized));
  const index = byId >= 0 ? byId : bySignature;
  const saved = {
    ...(index >= 0 ? addresses[index] : {}),
    ...normalized,
    id: index >= 0 ? addresses[index].id : `addr_${Date.now()}_${Math.floor(Math.random() * 900 + 100)}`,
    updatedAt: Date.now()
  };
  const next = index >= 0
    ? [saved, ...addresses.filter((_, itemIndex) => itemIndex !== index)]
    : [saved, ...addresses];
  saveAddressBook(user, next);
  updateAccountDefaultAddress(user, saved);
  return saved;
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
  return status !== "已取消" && status !== "已发货" && status !== "待收货" && status !== "已签收" && status !== "已完成" && !order.afterSalesStatus;
}

function canApplyAfterSales(order) {
  const status = orderFulfillmentStatus(order);
  return (status === "已发货" || status === "待收货" || status === "已签收" || status === "已完成") && order.status !== "已取消" && !order.afterSalesStatus;
}

function orderStatusText(order) {
  if (order.status === "已取消" || orderFulfillmentStatus(order) === "已取消") return "已取消";
  if (order.afterSalesStatus) return "售后处理中";
  if (isPendingPayment(order)) return "待付款";
  const status = orderFulfillmentStatus(order);
  if (status === "待发货") return "待发货";
  if (status === "待收货") return "待收货";
  if (status === "已发货") return "待收货";
  if (status === "已签收") return "已签收";
  if (status === "已完成") return "已完成";
  return order.status || status;
}

function statusPillClass(status) {
  if (status === "待付款" || status === "待转账确认") return "status-warning";
  if (status === "待发货") return "status-processing";
  if (status === "待收货") return "status-info";
  if (status === "已签收" || status === "已完成") return "status-complete";
  if (status === "已取消") return "status-muted";
  if (status === "售后处理中") return "status-danger";
  return "status-neutral";
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
    selection[group.key] = group.defaultId || group.options[0].id;
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
      add: option.add,
      price: option.price
    };
  });
}

function itemUnitPrice(product, selection) {
  return product.optionGroups.reduce((price, group) => {
    const option = findOption(product, group.key, selection[group.key]);
    if (Number.isFinite(Number(option?.price))) return Number(option.price);
    return price + Number(option?.add || 0);
  }, product.price);
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
    name: user?.name || "",
    phoneCode: user?.phoneCode || phoneCodeOptions[0].code,
    phone: user?.phone || "",
    province: regionTree[0].name,
    city: regionTree[0].cities[0].name,
    district: regionTree[0].cities[0].districts[0],
    detailAddress: "",
    address: "",
    note: ""
  };
}

function emptyAddress(user) {
  return {
    name: user?.name || "",
    phoneCode: user?.phoneCode || phoneCodeOptions[0].code,
    phone: user?.phone || "",
    province: regionTree[0].name,
    city: regionTree[0].cities[0].name,
    district: regionTree[0].cities[0].districts[0],
    detailAddress: "",
    address: "",
    note: ""
  };
}

function checkoutDefaultAddress(user) {
  const [firstAddress] = getAddressBook(user);
  return firstAddress ? normalizeAddress(firstAddress) : defaultAddress(user);
}

function optionMarkup(options, selected) {
  return options
    .map((option) => `<option value="${esc(option)}" ${option === selected ? "selected" : ""}>${esc(option)}</option>`)
    .join("");
}

function selectOptionMarkup(field, options, selected) {
  return options
    .map((option) => {
      const value = typeof option === "string" ? option : option.value;
      const label = typeof option === "string" ? option : option.label;
      const checked = value === selected;
      return `
        <button
          type="button"
          class="select-option ${checked ? "selected" : ""}"
          data-action="select-option"
          data-select-field="${esc(field)}"
          data-select-value="${esc(value)}"
        >
          ${esc(label)}
        </button>
      `;
    })
    .join("");
}

function selectedOptionLabel(options, selected) {
  const option = options.find((item) => (typeof item === "string" ? item : item.value) === selected);
  if (!option) return selected || "请选择";
  return typeof option === "string" ? option : option.label;
}

function renderSelectControl(field, selected, options, ariaLabel) {
  const expanded = openSelectField === field;
  return `
    <div class="select-control ${expanded ? "open" : ""}">
      <input type="hidden" data-draft-field="${esc(field)}" value="${esc(selected)}" />
      <button
        type="button"
        class="select-trigger ${expanded ? "active" : ""}"
        data-action="toggle-select"
        data-select-field="${esc(field)}"
        aria-label="${esc(ariaLabel)}"
        aria-expanded="${expanded ? "true" : "false"}"
      >
        <span class="select-value">${esc(selectedOptionLabel(options, selected))}</span>
      </button>
      <div class="select-menu" role="listbox">
        ${selectOptionMarkup(field, options, selected)}
      </div>
    </div>
  `;
}

function renderAddressForm(address, title, options = {}) {
  const showHead = options.showHead !== false;
  const normalized = normalizeAddress(address);
  const provinceData = getProvinceData(normalized.province);
  const cityData = getCityData(normalized.province, normalized.city);
  const phoneOptions = phoneCodeOptions.map((item) => ({ value: item.code, label: item.label }));
  const provinceOptions = regionTree.map((item) => item.name);
  const cityOptions = provinceData.cities.map((item) => item.name);
  const districtOptions = cityData.districts;
  return `
    <div class="address-form">
      ${showHead ? `<div class="address-form-head"><strong>${title}</strong></div>` : ""}
      <div class="address-row address-row-contact">
        <div class="field">
          <label for="receiverName">收货人</label>
          <input id="receiverName" data-draft-field="name" value="${esc(normalized.name)}" />
        </div>
        <div class="field">
          <label for="receiverPhone">联系电话</label>
          <div class="phone-field">
            ${renderSelectControl("phoneCode", normalized.phoneCode, phoneOptions, "电话区号")}
            <input id="receiverPhone" data-draft-field="phone" value="${esc(normalized.phone)}" />
          </div>
        </div>
      </div>
      <div class="address-row address-row-location">
        <div class="field address-region-field">
          <label>所在地区</label>
          <div class="region-grid">
            ${renderSelectControl("province", normalized.province, provinceOptions, "省份")}
            ${renderSelectControl("city", normalized.city, cityOptions, "城市")}
            ${renderSelectControl("district", normalized.district, districtOptions, "区县")}
          </div>
        </div>
      </div>
      <div class="field address-detail-field">
        <label for="receiverDetailAddress">具体地址</label>
        <input id="receiverDetailAddress" data-draft-field="detailAddress" value="${esc(normalized.detailAddress)}" />
      </div>
    </div>
  `;
}

function renderAddressCard(address, draft, action = "") {
  const normalized = normalizeAddress(address);
  const selected = draft.addressMode !== "new" && draft.addressId === address.id;
  const tag = selected ? "已选择" : action ? "选择" : "当前使用";
  const attrs = action ? `button class="address-card ${selected ? "selected" : ""}" data-action="${action}" data-address-id="${esc(address.id)}"` : `div class="address-card selected address-summary-card"`;
  return `
    <${attrs}>
      <span class="address-content">
        <strong>${esc(normalized.name)} ${esc(formatPhone(normalized))}</strong>
        <span>${esc(formatAddress(normalized))}</span>
      </span>
      <span class="address-tag">${tag}</span>
    </${action ? "button" : "div"}>
  `;
}

function renderAddressBookList(addressBook, draft) {
  if (!addressBook.length) {
    return `
      <div class="empty-state compact">
        <h2>还没有保存地址</h2>
        <p>新增一个地址后，下次结算可以直接选择。</p>
        <button class="btn primary" data-action="open-address-new">新增地址</button>
      </div>
    `;
  }
  return `<div class="address-list">${addressBook.map((address) => renderAddressCard(address, draft, "select-address")).join("")}</div>`;
}

function renderCheckoutAddress(addressBook, draft) {
  const hasAddress = isAddressComplete(draft.address);
  return `
    <div class="checkout-address-box">
      ${hasAddress
        ? renderAddressCard({ ...draft.address, id: draft.addressId || "current" }, draft)
        : `<div class="checkout-address-form">${renderAddressForm(draft.address, "新增地址", { showHead: false })}</div>`}
    </div>
  `;
}

function renderAddressModal(addressBook, draft) {
  if (!addressModalMode) return "";
  const isBook = addressModalMode === "book";
  return `
    <div class="address-modal" role="dialog" aria-modal="true" aria-label="${isBook ? "地址簿" : "新增地址"}">
      <div class="address-modal-backdrop" data-action="close-address-modal"></div>
      <div class="address-modal-panel">
        <div class="address-modal-head">
          <div>
            <p class="section-kicker">收货信息</p>
            <h2>${isBook ? "选择地址簿" : "新增收货地址"}</h2>
          </div>
          <button class="address-modal-close" data-action="close-address-modal" aria-label="关闭地址弹窗">×</button>
        </div>
        <div class="address-modal-body">
          ${isBook ? renderAddressBookList(addressBook, draft) : renderAddressForm(draft.address, "新增地址")}
          ${!isBook && notice ? `<p class="message">${notice}</p>` : ""}
        </div>
        ${isBook
          ? `<div class="address-modal-foot"><button class="btn secondary" data-action="open-address-new">新增地址</button></div>`
          : `<div class="address-modal-foot"><button class="btn secondary" data-action="close-address-modal">取消</button><button class="btn primary" data-action="save-address-modal">保存并使用</button></div>`}
      </div>
    </div>
  `;
}

function updateHeader() {
  const user = getCurrentUser();
  const initial = user?.name?.slice(0, 1) || "账";
  headerActions.innerHTML = user
    ? `<a class="header-cta" href="#/product/base">立即訂購</a>
      <a class="header-icon-link account-entry" href="#/account" aria-label="进入个人中心">
        <span class="header-avatar" aria-hidden="true">${esc(initial)}</span>
      </a>
      <button class="header-icon-link" data-action="logout" aria-label="退出登录">退出</button>
      <span class="header-divider" aria-hidden="true"></span>
      <span class="header-globe" aria-hidden="true">◎</span>`
    : `<a class="header-cta" href="#/product/base">立即訂購</a>
      <a class="header-icon-link" href="#/login" aria-label="登录">登录</a>
      <span class="header-divider" aria-hidden="true"></span>
      <span class="header-globe" aria-hidden="true">◎</span>`;
}

function renderShell(content) {
  app.innerHTML = `${content}${toastMessage ? `<div class="toast-message" role="status">${esc(toastMessage)}</div>` : ""}`;
  app.focus({ preventScroll: true });
  updateHeader();
}

function homePage() {
  return `
    <section class="hero">
      <div class="container hero-copy">
        <p class="eyebrow">方德AI股票機</p>
        <h1>AI驱动的全球智能投资决策终端。</h1>
        <p class="hero-subtitle">全球行情随身掌控，AI辅助智能决策，覆盖行情、分析、决策与交易的一站式闭环。</p>
        <div class="hero-cta">
          <a class="text-link" href="#/product/base">立即订购</a>
          <a class="text-link" href="#/product/base">查看会员服务体系</a>
        </div>
      </div>
      <div class="hero-visual">
        <img src="${heroImage}" alt="方德AI股票机产品主视觉" />
      </div>
    </section>

    <section class="section home-page purchase-section" data-home-page="purchase-plan">
      <div class="container">
        <div class="section-head center">
          <p class="section-kicker">购买方案</p>
          <h2 class="section-title">选择适合你的会员服务。</h2>
          <p class="section-desc">从裸机入门到黑钻会员服务，按投研深度和服务周期选择适合你的方案。</p>
        </div>
        <div class="purchase-plan-grid">
          ${membershipOptions.map((option) => purchasePlanOptionCard(option)).join("")}
        </div>
      </div>
    </section>
  `;
}

function purchasePlanOptionCard(option) {
  return `
    <a class="plan-card membership-plan-card" href="#/product/base">
      <div class="plan-copy">
        <p class="plan-badge">${option.name.includes("基础版") ? "轻盈入门" : "会员服务"}</p>
        <h3>${option.name}</h3>
        <p>${option.desc}，适合希望获得更完整投资决策支持的用户。</p>
        <div class="product-card-meta">
          <span class="tag">${money(option.price)}</span>
          <span class="tag">AI投研服务</span>
          <span class="tag">活动赠送学习机</span>
        </div>
        <span class="plan-detail">查看详情</span>
      </div>
      <div class="plan-media">
        <img src="${heroImage}" alt="${option.name} 产品图" />
      </div>
    </a>
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
            ${product.highlights
              .map(
                (item) => `
              <li>
                <span>
                  <strong>${item.title}</strong>
                  <small>${item.desc}</small>
                </span>
              </li>
            `
              )
              .join("")}
          </ul>
          ${product.optionGroups.map((group) => optionGroup(product, selection, group)).join("")}
          ${quantitySelector(product.id, selection.qty)}
          <div class="sticky-buy-bar">
            <div class="sticky-buy-inner">
              <div>
                <p class="section-kicker">所选版本</p>
                <strong>${selectionDetails(product, selection)[0].name} · ${money(unit * selection.qty)}</strong>
              </div>
              <button class="btn primary" data-action="buy-now" data-product="${product.id}">立即购买</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    ${specCompareSection(product.id)}
    ${serviceSystemSection()}
    ${lightboxProductId === product.id ? galleryLightbox(product) : ""}
  `;
}

function specCompareSection(activeProductId) {
  return `
    <section class="section spec-compare-section">
      <div class="container">
        <div class="spec-dark-head">
          <p class="section-kicker">参数简介</p>
          <h2>方德AI股票机的具体参数，一眼看清。</h2>
        </div>
        <div class="spec-feature-panel">
          ${specRows.map((row) => specItem(row)).join("")}
        </div>
      </div>
    </section>
  `;
}

function specItem(row) {
  return `
    <article class="spec-item">
      ${specIcon(row.icon)}
      <h4>${row.label}</h4>
      <p>${row.desc}</p>
    </article>
  `;
}

function specIcon(name) {
  const icons = {
    display: '<rect x="4" y="5" width="40" height="26" rx="4"></rect><path d="M18 39h12"></path><path d="M24 31v8"></path>',
    portable: '<path d="M15 18h18v18H15z"></path><path d="M19 12h10l4 6H15l4-6z"></path><path d="M20 24h8"></path>',
    chip: '<rect x="13" y="13" width="22" height="22" rx="4"></rect><path d="M18 7v6M24 7v6M30 7v6M18 35v6M24 35v6M30 35v6M7 18h6M7 24h6M7 30h6M35 18h6M35 24h6M35 30h6"></path>',
    sound: '<path d="M10 29h7l10 8V11L17 19h-7v10z"></path><path d="M33 18c2 2 3 4 3 6s-1 4-3 6"></path><path d="M38 13c4 4 6 7 6 11s-2 8-6 11"></path>',
    eye: '<path d="M5 24s7-11 19-11 19 11 19 11-7 11-19 11S5 24 5 24z"></path><circle cx="24" cy="24" r="6"></circle>',
    storage: '<path d="M10 13c0-4 28-4 28 0v22c0 4-28 4-28 0V13z"></path><path d="M10 13c0 4 28 4 28 0"></path><path d="M10 24c0 4 28 4 28 0"></path>',
    camera: '<rect x="7" y="15" width="34" height="24" rx="5"></rect><path d="M17 15l3-6h8l3 6"></path><circle cx="24" cy="27" r="7"></circle>',
    battery: '<rect x="6" y="16" width="32" height="16" rx="4"></rect><path d="M38 21h4v6h-4"></path><path d="M13 24h16"></path>',
    shield: '<path d="M24 5l16 7v11c0 10-7 17-16 20-9-3-16-10-16-20V12l16-7z"></path><path d="M17 24l5 5 10-11"></path>',
    pencil: '<path d="M12 36l4-12 17-17a5 5 0 0 1 7 7L23 31 12 36z"></path><path d="M29 11l8 8"></path>',
    weight: '<path d="M14 20h20l4 20H10l4-20z"></path><path d="M18 20a6 6 0 0 1 12 0"></path>',
    service: '<circle cx="24" cy="17" r="8"></circle><path d="M9 42c2-10 28-10 30 0"></path><path d="M35 8l4-4"></path><path d="M39 14h5"></path>'
  };
  return `<span class="spec-icon" aria-hidden="true"><svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">${icons[name] || icons.display}</svg></span>`;
}

function serviceSystemSection() {
  return `
    <section class="section service-system-section" id="service-system">
      <div class="service-system-card">
        <h2>服务体系运营图占位</h2>
        <div class="service-system-board">
          <h3>港版股票机定价体系</h3>
          <table>
            <thead>
              <tr><th>服务方案</th><th>销售价（港币）</th></tr>
            </thead>
            <tbody>
              ${membershipOptions
                .map((option) => `<tr><td>${option.name} + ${option.desc}</td><td>${option.price}</td></tr>`)
                .join("")}
            </tbody>
          </table>
          <div class="service-policy-grid">
            <div>
              <strong>新客户</strong>
              <p>活动赠送学习机与基础投研服务，适合首次建立 AI 投研工作流。</p>
            </div>
            <div>
              <strong>老客户</strong>
              <p>会员服务可持续升级，结合投顾、量化与交易工具提升决策效率。</p>
            </div>
          </div>
          <p class="service-note">注：以上价格为初步规划，商业涉及财务部门确认最终定价策略。</p>
        </div>
      </div>
    </section>
  `;
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
        <span>基础版 ${money(products.base.price)} 起，会员服务最高 ${money(168800)}。</span>
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
            const priceText = Number.isFinite(Number(option.price))
              ? money(option.price)
              : option.add
                ? `+ ${money(option.add)}`
                : "已包含";
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
                <span class="option-desc">${option.desc} ${priceText}</span>
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
  const [firstAddress] = getAddressBook(user);
  const draft = {
    productId: product.id,
    selection,
    couponId: null,
    paymentMethod: "alipay",
    address: checkoutDefaultAddress(user),
    addressId: firstAddress?.id || null,
    addressMode: firstAddress ? "book" : "new"
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
    return emptyPage("还没有待确认的订单", "先选择方德AI股票机服务方案，再回到这里确认订单细节。", "#/", "返回产品首页");
  }

  const addressBook = getAddressBook(user);
  if (addressBook.length && addressModalMode !== "new" && !draft.addressId && !isAddressComplete(draft.address)) {
    draft.address = normalizeAddress(addressBook[0]);
    draft.addressId = addressBook[0].id;
    draft.addressMode = "book";
    saveDraft(draft);
  }
  if (!draft.addressMode) {
    draft.addressMode = draft.addressId ? "book" : "new";
    saveDraft(draft);
  }
  const product = products[draft.productId];
  const details = selectionDetails(product, draft.selection);
  const subtotal = draftSubtotal(draft);
  const selectedCoupon = (user.coupons || []).find((coupon) => coupon.id === draft.couponId);
  const discount = draftDiscount(draft, user);
  const total = draftTotal(draft, user);
  const coupons = user.coupons || [];

  return `
    <section class="process-page checkout-page">
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
                <h2>收货信息</h2>
                <div class="address-panel-actions">
                  <button class="text-link" data-action="open-address-new">+新增</button>
                  <button class="text-link" data-action="open-address-book">地址簿</button>
                </div>
              </div>
              <div class="panel-body">
                ${renderCheckoutAddress(addressBook, draft)}
              </div>
            </div>

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
                  <input aria-label="优惠码" placeholder="输入优惠码，如 FD300" name="couponCode" />
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
        ${renderAddressModal(addressBook, draft)}
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

function eyeIcon() {
  return `
    <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
      <path d="M2.5 12s3.4-5.5 9.5-5.5S21.5 12 21.5 12 18.1 17.5 12 17.5 2.5 12 2.5 12Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="12" cy="12" r="2.6" fill="none" stroke="currentColor" stroke-width="1.8"/>
    </svg>
  `;
}

function loginPage() {
  const isPassword = authMode === "password";
  const isResetVerify = authMode === "resetVerify";
  const isResetPassword = authMode === "resetPassword";
  const isReset = isResetVerify || isResetPassword;
  const codeRemaining = getAuthCodeRemaining();
  const codeButtonDisabled = codeRemaining > 0 ? "disabled" : "";
  const title = isPassword
    ? "密码登录"
    : isResetVerify
      ? "请验证您的手机号"
      : isResetPassword
        ? "请重新设置登录密码"
        : "登录/注册";
  const subtitle = isPassword || isReset ? "" : "首次登录的手机号将自动注册";
  const submitDisabled = isAuthSubmitReady() ? "" : "disabled";
  return `
    <section class="auth-shell">
      <div class="auth-brand-panel">
        <div class="auth-logo">
          <span class="auth-logo-head">
            <span class="auth-logo-symbol" aria-hidden="true"><i></i><i></i><i></i></span>
            <span class="auth-logo-mark">方德證券</span>
          </span>
          <span class="auth-logo-sub">九方智投控股旗下品牌</span>
        </div>
        <div class="auth-brand-copy">
          <p>极致体验</p>
          <h2>开启全新投资体验</h2>
          <span>免佣享受</span>
        </div>
      </div>
      <div class="auth-form-panel">
        <div class="auth-mobile-top">
          <span class="auth-mobile-mark" aria-label="方德證券"><i></i><i></i><i></i></span>
          <button type="button" class="auth-mobile-menu" aria-label="菜单"><span></span><span></span><span></span></button>
        </div>
        <div class="auth-card">
          <h1>${esc(title)}</h1>
          ${subtitle ? `<p>${esc(subtitle)}</p>` : ""}
          <form id="authForm" class="auth-form">
            ${!isResetPassword ? `<div class="auth-field">
              <label for="authPhone">手机号码</label>
              <div class="auth-input-row auth-phone-row ${authRegionOpen ? "active" : ""}">
                <button type="button" class="auth-code-select" data-action="auth-region-toggle" aria-expanded="${authRegionOpen ? "true" : "false"}">
                  ${esc(authPhoneCode)} <span aria-hidden="true">⌄</span>
                </button>
                <input id="authPhone" name="phone" inputmode="tel" autocomplete="tel" placeholder="请输入手机号" value="${esc(authDraft.phone)}" required />
              </div>
              ${authRegionOpen ? authRegionMenu() : ""}
            </div>` : ""}
            ${!isResetPassword ? `<div class="auth-field">
              <label for="authCredential">${isPassword ? "密码" : isReset ? "短信验证码" : "短信验证码"}</label>
              <div class="auth-input-row auth-credential-row">
                <input id="authCredential" name="credential" type="text" inputmode="${isPassword ? "text" : "numeric"}" placeholder="${isPassword ? "请输入密码" : "请输入短信验证码"}" value="${esc(authDraft.credential)}" required />
                ${isPassword ? `<button type="button" class="auth-password-eye" aria-label="查看密码">${eyeIcon()}</button>` : `<button type="button" class="auth-send-code ${codeRemaining > 0 ? "is-counting" : ""}" data-action="send-auth-code" ${codeButtonDisabled}>${esc(getAuthCodeButtonLabel())}</button>`}
              </div>
              ${authErrors.password ? `<div class="auth-error">${esc(authErrors.password)}</div>` : ""}
              ${isPassword && authShowCaptcha ? `
                <div class="auth-field auth-captcha-field">
                  <label for="authCaptcha">图形验证码</label>
                  <div class="auth-input-row auth-captcha-row">
                    <input id="authCaptcha" name="captcha" type="text" placeholder="请输入图形验证码" value="${esc(authDraft.captcha)}" />
                    <span class="auth-captcha-image" aria-hidden="true"></span>
                  </div>
                  ${authErrors.captcha ? `<div class="auth-error">${esc(authErrors.captcha)}</div>` : ""}
                </div>
              ` : ""}
              <div class="auth-mode-links ${isPassword ? "password-links" : ""}">
                ${isPassword
                  ? `<button type="button" data-action="switch-auth-mode" data-auth-mode="code">验证码登录</button><button type="button" data-action="switch-auth-mode" data-auth-mode="resetVerify">忘记密码？</button>`
                  : isResetVerify
                    ? `<button type="button" data-action="switch-auth-mode" data-auth-mode="code">返回登录</button>`
                    : isResetPassword
                      ? ""
                      : `<button type="button" data-action="switch-auth-mode" data-auth-mode="password">密码登录</button>`}
              </div>
            </div>` : ""}
            ${isResetPassword ? `
              <div class="auth-field auth-reset-password-field">
                <div class="auth-input-row">
                  <input id="authNewPassword" name="newPassword" type="text" placeholder="请输入密码" value="${esc(authDraft.newPassword)}" required />
                  <button type="button" class="auth-password-eye" aria-label="查看密码">${eyeIcon()}</button>
                </div>
                <div class="auth-password-rules">
                  <span class="${hasValidResetPasswordLength(authDraft.newPassword) ? "pass" : ""}">密码需有8-40位字符</span>
                  <span class="${hasValidResetPasswordComposition(authDraft.newPassword) ? "pass" : ""}">需要包括大小写字母、数字</span>
                </div>
              </div>
            ` : ""}
            ${!isReset ? `<label class="auth-agreement">
              <input type="checkbox" name="agreement" ${authDraft.agreement ? "checked" : ""} />
              <span>请阅读并同意《用户协议》《免责声明》《个人信息保护指引》《个人资料收集声明》</span>
            </label>` : ""}
            <button class="auth-submit" type="submit" ${submitDisabled}>${isResetVerify ? "下一步" : isResetPassword ? "完成修改" : "登录"}</button>
          </form>
          ${notice ? `<p class="message">${notice}</p>` : ""}
        </div>
      </div>
    </section>
  `;
}

function registerPage() {
  return loginPage();
}

function authRegionMenu() {
  const groups = authRegionOptions.reduce((acc, option) => {
    acc[option.group] = acc[option.group] || [];
    acc[option.group].push(option);
    return acc;
  }, {});
  return `
    <div class="auth-region-menu">
      <div class="auth-region-search"><span aria-hidden="true">⌕</span><input placeholder="请输入" /></div>
      ${Object.entries(groups)
        .map(
          ([group, options]) => `
        <div class="auth-region-group">${group}</div>
        ${options
          .map(
            (option) => `
          <button type="button" class="auth-region-option ${authPhoneCode === option.code ? "selected" : ""}" data-action="auth-region-select" data-code="${esc(option.code)}">
            <span>${esc(option.country)}</span><strong>${esc(option.code)}</strong>
          </button>
        `
          )
          .join("")}
      `
        )
        .join("")}
    </div>
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
                      ${draft.paymentMethod === method.id ? `<span class="status-pill status-selected">已选择</span>` : ""}
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
              <h2>订单管理</h2>
              <span class="muted">${orders.length} 笔订单</span>
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
          <h1 class="section-title">查看你的方德AI股票机订单。</h1>
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
                : `<div class="empty-state"><h2>暂无订单</h2><p>选好服务方案并完成支付后，订单会出现在这里。</p><a class="btn primary" href="#/">去选购</a></div>`
            }
          </div>
        </div>
      </div>
    </section>
  `;
}

function orderCard(order) {
  const status = orderStatusText(order);
  return `
    <div class="order-card">
      <div>
        <span class="status-pill ${statusPillClass(status)}">${status}</span>
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
        ${orderStatusSteps(order)}
        <div class="process-grid">
          <div>
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
                  <li>联系电话：${esc(formatPhone(order.address))}</li>
                  <li>地址：${esc(formatAddress(order.address))}</li>
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
    return `
      <div class="order-progress-global">
        <div class="order-progress-head">
          <strong>订单进度</strong>
          <span class="status-pill ${statusPillClass(current)}">${current}</span>
        </div>
        <ol class="order-status-steps single">
          <li class="order-step current"><span class="order-step-dot"></span><span>已取消</span></li>
        </ol>
      </div>
    `;
  }
  const steps = ["待付款", "待发货", "待收货", "已签收"];
  const fulfillmentStatus = orderFulfillmentStatus(order);
  const timelineCurrent = current === "售后处理中"
    ? (fulfillmentStatus === "已发货" ? "待收货" : fulfillmentStatus)
    : current;
  const activeIndex = Math.max(0, steps.indexOf(timelineCurrent));
  return `
    <div class="order-progress-global">
      <div class="order-progress-head">
        <strong>订单进度</strong>
        <span class="status-pill ${statusPillClass(current)}">${current}</span>
      </div>
      <ol class="order-status-steps">
      ${steps
        .map((step, index) => {
          const state = order.afterSalesStatus
            ? (index <= activeIndex ? "done" : "")
            : (index < activeIndex ? "done" : index === activeIndex ? "current" : "");
          return `<li class="order-step ${state}"><span class="order-step-dot"></span><span>${step}</span></li>`;
        })
        .join("")}
      ${order.afterSalesStatus ? `<li class="order-step current"><span class="order-step-dot"></span><span>售后处理中</span></li>` : ""}
      </ol>
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
          <a class="btn secondary" href="#/">继续浏览产品</a>
        </div>
      </div>
    </section>
  `;
}

function helpPage() {
  return `
    <section class="process-page">
      <div class="container">
        <div class="help-hero">
          <p class="section-kicker">帮助中心</p>
          <h1 class="section-title">方德AI股票机购买支持。</h1>
          <p class="section-desc">围绕服务方案、付款发票、配送、退货退款和售后服务等常见购买问题，购买前后都能快速找到答案。</p>
        </div>
        <div class="help-action-grid">
          <a class="help-action-card" href="#/orders">
            <span class="help-action-index">01</span>
            <strong>方案选择</strong>
            <span>对比基础版、白银、黄金、铂金、钻石和黑钻会员服务。</span>
          </a>
          <a class="help-action-card" href="#/help">
            <span class="help-action-index">02</span>
            <strong>服务权益</strong>
            <span>确认投顾服务、量化工具和活动赠送学习机的适用范围。</span>
          </a>
          <a class="help-action-card" href="#/help">
            <span class="help-action-index">03</span>
            <strong>售后保障</strong>
            <span>了解配送、退货、保修和售后申请的服务范围。</span>
          </a>
        </div>
        <div class="help-layout">
          <article class="panel help-main">
            <div class="panel-head">
              <h2>常见购买问题</h2>
              <span class="muted">6 个主题</span>
            </div>
            <div class="panel-body">
              <ol class="help-steps">
                <li><strong>方案怎么选</strong><span>基础版适合先体验 AI 投研终端；会员方案适合需要投顾、量化与交易服务的用户。</span></li>
                <li><strong>服务权益</strong><span>购买前请确认会员等级、服务周期、活动赠送设备和投研支持范围。</span></li>
                <li><strong>付款与发票</strong><span>支持常见在线支付方式，订单完成后可查看支付明细；发票会按订单与退款状态更新。</span></li>
                <li><strong>配送服务</strong><span>根据库存和收货地址展示可用配送方式、预计送达时间和配送限制。</span></li>
                <li><strong>退货退款</strong><span>符合条件的设备可在收货后 14 天内申请退货，商品需保持完好并包含原包装和配件。</span></li>
                <li><strong>保修与售后</strong><span>保留订单凭证可用于保修服务；发货后可在订单详情中发起售后或维修申请。</span></li>
              </ol>
            </div>
          </article>
          <aside class="help-side">
            <div class="panel help-contact">
              <div class="panel-head"><h2>购买保障</h2></div>
              <div class="panel-body">
                <div class="help-status-row"><span>配送</span><strong>按地址显示预计送达</strong></div>
                <div class="help-status-row"><span>退货</span><strong>收货后 14 天内可申请</strong></div>
                <div class="help-status-row"><span>发票</span><strong>随订单状态更新</strong></div>
                <div class="help-status-row"><span>售后</span><strong>凭订单享受保修</strong></div>
              </div>
            </div>
          </aside>
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
  const savedAddress = saveAddressToBook(user, draft.address, draft.addressId);
  if (savedAddress) {
    draft.address = normalizeAddress(savedAddress);
    draft.addressId = savedAddress.id;
    draft.addressMode = "book";
    saveDraft(draft);
  }
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

function persistAddressDraft(draft) {
  if (!draft) return null;
  draft.address = normalizeAddress(draft.address);
  const savedAddress = saveAddressToBook(getCurrentUser(), draft.address, draft.addressId);
  if (savedAddress) {
    draft.address = normalizeAddress(savedAddress);
    draft.addressId = savedAddress.id;
    draft.addressMode = "book";
  }
  saveDraft(draft);
  return draft;
}

function collectAddressFromPage() {
  const draft = getDraft();
  if (!draft) return null;
  document.querySelectorAll("[data-draft-field]").forEach((field) => {
    draft.address[field.dataset.draftField] = field.value.trim();
  });
  return persistAddressDraft(draft);
}

function updateDraftAddressField(field, value) {
  const draft = getDraft();
  if (!draft) return;
  draft.address = normalizeAddress(draft.address);
  if (field === "province") {
    const provinceData = getProvinceData(value);
    draft.address.province = provinceData.name;
    draft.address.city = provinceData.cities[0].name;
    draft.address.district = provinceData.cities[0].districts[0];
  } else if (field === "city") {
    const cityData = getCityData(draft.address.province, value);
    draft.address.city = cityData.name;
    draft.address.district = cityData.districts[0];
  } else {
    draft.address[field] = value;
  }
  persistAddressDraft(draft);
}

function applyCouponCode(code) {
  const user = getCurrentUser();
  if (!user) return;
  const normalized = code.trim().toUpperCase();
  const available = {
    FD300: {
      id: "FD300",
      name: "官网限时券",
      desc: "满 3000 元可用，适合任意方德AI股票机订单",
      value: 300,
      threshold: 3000
    },
    MEMBER800: {
      id: "MEMBER800",
      name: "会员升级券",
      desc: "满 8000 元可用，适合会员服务方案",
      value: 800,
      threshold: 8000
    }
  };
  const coupon = available[normalized];
  if (!coupon) {
    notice = "优惠码无效。可试试 FD300 或 MEMBER800。";
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
  const isAuthRoute = route === "/login" || route === "/register";
  document.body.classList.toggle("auth-route", isAuthRoute);
  if (route !== "/checkout") {
    addressModalMode = null;
    openSelectField = null;
  }
  if (!isAuthRoute) {
    authRegionOpen = false;
    authMode = "code";
    stopAuthCodeCountdown();
  }
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

  if (route === "/help") {
    renderShell(helpPage());
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
  if (target.matches("[data-option-input]")) {
    const productId = target.dataset.product;
    const selection = getSelection(productId);
    selection[target.dataset.key] = target.value;
    saveSelection(productId, selection);
    render();
    return;
  }
  if (target.matches("[data-draft-field]")) {
    collectAddressFromPage();
    if (target.dataset.draftField === "province" || target.dataset.draftField === "city") {
      render();
    }
    return;
  }
  if (target.closest("#authForm")) {
    syncAuthDraftFromForm(target.form);
    updateAuthSubmitState();
    updateAuthPasswordRules();
  }
});

document.addEventListener("input", (event) => {
  if (event.target.closest("#authForm")) {
    syncAuthDraftFromForm(event.target.form);
    updateAuthSubmitState();
    updateAuthPasswordRules();
    return;
  }
  if (event.target.matches("[data-draft-field]")) {
    collectAddressFromPage();
  }
});

document.addEventListener("click", (event) => {
  const actionTarget = event.target.closest("[data-action]");
  if (!actionTarget) {
    if (openSelectField) {
      openSelectField = null;
      render();
    }
    if (authRegionOpen) {
      authRegionOpen = false;
      render();
    }
    return;
  }

  const action = actionTarget.dataset.action;
  if (action === "auth-region-toggle") {
    syncAuthDraftFromForm();
    updateAuthSubmitState();
    authRegionOpen = !authRegionOpen;
    render();
  }

  if (action === "auth-region-select") {
    syncAuthDraftFromForm();
    authPhoneCode = actionTarget.dataset.code || "+852";
    authRegionOpen = false;
    resetAuthErrors();
    render();
  }

  if (action === "switch-auth-mode") {
    syncAuthDraftFromForm();
    authMode = actionTarget.dataset.authMode || "code";
    authRegionOpen = false;
    notice = "";
    resetAuthErrors();
    stopAuthCodeCountdown();
    render();
  }

  if (action === "send-auth-code") {
    syncAuthDraftFromForm(actionTarget.form);
    if (getAuthCodeRemaining() > 0) return;
    if (!normalizePhoneNumber(authDraft.phone)) {
      notice = "请输入手机号码。";
      authRegionOpen = false;
      render();
      return;
    }
    notice = "";
    authRegionOpen = false;
    render();
    startAuthCodeCountdown();
  }

  if (action === "toggle-select") {
    openSelectField = openSelectField === actionTarget.dataset.selectField ? null : actionTarget.dataset.selectField;
    render();
  }

  if (action === "select-option") {
    openSelectField = null;
    updateDraftAddressField(actionTarget.dataset.selectField, actionTarget.dataset.selectValue);
    notice = "";
    render();
  }

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

  if (action === "open-address-book") {
    addressModalMode = "book";
    openSelectField = null;
    notice = "";
    render();
  }

  if (action === "open-address-new") {
    const user = getCurrentUser();
    const draft = getDraft();
    if (!draft) return;
    draft.address = emptyAddress(user);
    draft.addressId = null;
    draft.addressMode = "new";
    saveDraft(draft);
    addressModalMode = "new";
    openSelectField = null;
    notice = "";
    render();
  }

  if (action === "close-address-modal") {
    addressModalMode = null;
    openSelectField = null;
    render();
  }

  if (action === "select-address") {
    const user = getCurrentUser();
    const draft = getDraft();
    if (!user || !draft) return;
    const address = getAddressBook(user).find((item) => item.id === actionTarget.dataset.addressId);
    if (!address) return;
    draft.address = normalizeAddress(address);
    draft.addressId = address.id;
    draft.addressMode = "book";
    saveDraft(draft);
    addressModalMode = null;
    openSelectField = null;
    notice = "";
    render();
  }

  if (action === "add-address") {
    const user = getCurrentUser();
    const draft = getDraft();
    if (!draft) return;
    draft.address = emptyAddress(user);
    draft.addressId = null;
    draft.addressMode = "new";
    saveDraft(draft);
    addressModalMode = "new";
    openSelectField = null;
    notice = "";
    render();
  }

  if (action === "save-address-modal") {
    const draft = collectAddressFromPage();
    if (!draft) return;
    if (!isAddressComplete(draft.address)) {
      notice = "请补充完整收货人、联系电话、省市区和具体地址。";
      render();
      return;
    }
    const savedAddress = saveAddressToBook(getCurrentUser(), draft.address, draft.addressId);
    if (savedAddress) {
      draft.address = normalizeAddress(savedAddress);
      draft.addressId = savedAddress.id;
      draft.addressMode = "book";
      saveDraft(draft);
    }
    addressModalMode = null;
    openSelectField = null;
    notice = "";
    render();
  }

  if (action === "go-pay") {
    const draft = collectAddressFromPage();
    if (!draft) return;
    if (!isAddressComplete(draft.address)) {
      notice = "请补充完整收货人、联系电话、省市区和具体地址后再支付。";
      addressModalMode = "new";
      openSelectField = null;
      render();
      return;
    }
    const savedAddress = saveAddressToBook(getCurrentUser(), draft.address, draft.addressId);
    if (savedAddress) {
      draft.address = normalizeAddress(savedAddress);
      draft.addressId = savedAddress.id;
      draft.addressMode = "book";
      saveDraft(draft);
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

  if (event.target.id === "authForm") {
    syncAuthDraftFromForm(event.target);
    const data = new FormData(event.target);
    const phone = normalizePhoneNumber(data.get("phone"));
    const credential = String(data.get("credential") || "").trim();
    const newPassword = String(data.get("newPassword") || "").trim();
    const captcha = String(data.get("captcha") || "").trim();
    const agreed = Boolean(data.get("agreement"));

    if (!isAuthSubmitReady()) {
      notice = authMode === "password" ? "" : "请填写完整登录信息。";
      updateAuthSubmitState();
      return;
    }

    if (authMode !== "resetPassword" && !phone) {
      notice = "请输入手机号码。";
      render();
      return;
    }
    if (authMode !== "resetPassword" && !credential) {
      notice = authMode === "password" ? "请输入登录密码。" : "请输入短信验证码。";
      render();
      return;
    }
    let account = findAccountByPhone(authPhoneCode, phone);
    if (authMode === "password") {
      if (authShowCaptcha && captcha !== "1234") {
        authErrors = {
          password: authErrors.password || "密码错误",
          captcha: "验证码错误"
        };
        authShowCaptcha = true;
        notice = "";
        render();
        return;
      }
      if (!account || !account.password) {
        authErrors = {
          password: "密码错误",
          captcha: "验证码错误"
        };
        authShowCaptcha = true;
        notice = "";
        render();
        return;
      }
      if (account.password !== credential) {
        authErrors = {
          password: "密码错误",
          captcha: "验证码错误"
        };
        authShowCaptcha = true;
        notice = "";
        render();
        return;
      }
    } else if (authMode === "resetVerify") {
      notice = "";
      authMode = "resetPassword";
      stopAuthCodeCountdown();
      render();
      return;
    } else if (authMode === "resetPassword") {
      if (!newPassword) {
        notice = "请设置新的登录密码。";
        render();
        return;
      }
      account = upsertPhoneAccount(authPhoneCode, authDraft.phone, { password: newPassword });
    } else {
      account = upsertPhoneAccount(authPhoneCode, phone);
    }

    if (!authMode.startsWith("reset") && !agreed) {
      notice = "请先阅读并同意相关协议。";
      render();
      return;
    }

    localStorage.setItem(storageKeys.currentUser, account.email);
    notice = "";
    if (authMode === "resetPassword") {
      showToast("密码设置成功");
    }
    authRegionOpen = false;
    authMode = "code";
    resetAuthErrors();
    stopAuthCodeCountdown();
    resetAuthDraft();
    const next = localStorage.getItem(storageKeys.authReturn) || "/account";
    localStorage.removeItem(storageKeys.authReturn);
    navigate(next);
    return;
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
