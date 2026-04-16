import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        services: "Our Services",
        products: "Products",
        partners: "Partners",
        contact: "Contact Us"
      },
      hero: {
        subtitle: "PREMIUM SEAFOOD DISTRIBUTOR",
        title: "FRESH CATCH\nFROM SOUTH AMERICA\nTO THE WORLD",
        btnProducts: "Our Products",
        btnContact: "Contact Sales",
        descTitle: "South American Export",
        descSubtitle: "WILD-CAUGHT FISH,\nGUARANTEED FRESHNESS\n& COLD CHAIN.",
        descP1: "SuriCatch is a leading fish distributor based in Suriname, specializing in exporting the finest wild-caught marine species. From the pristine waters of the Atlantic, right to your commercial market.",
        descP2: "Our dedicated fleet and strict cold-chain logistics ensure that high-demand varieties like Red Snapper, Grouper, and Whitemouth Croaker retain their absolute oceanic freshness upon global delivery.",
        btnCatalog: "View Catalog"
      },
      services: {
        title: "OUR PRODUCTS & DISTRIBUTION",
        subtitle: "We source, process, and distribute high-grade Suriname seafood worldwide.",
        snapperTitle: "Wild Red Snapper",
        snapperDesc: "Premium Suriname Lutjanus purpureus, caught daily.",
        coldchainTitle: "Global Cold-Chain",
        coldchainDesc: "State-of-the-art cold logistics guarantee ocean-to-market freshness anywhere in the world.",
        btnLearn: "Learn More",
        catfishTitle: "Koepila Catfish",
        catfishDesc: "Top grade sea catfish processed to international standards."
      },
      gallery: {
        title: "FRESH CATCH SHOWCASE",
        subtitle: "A glimpse into our pristine daily harvest, ready for export.",
        btnFull: "View Full Catalog"
      },
      testimonials: {
        title: "TRUSTED GLOBALLY",
        subtitle: "Feedback from our international B2B partners and seafood distributors.",
        partnerName: "Global Seafood Imports LLC",
        partnerRole: "US Distribution Partner",
        quote: "\"SuriCatch has transformed our South American supply chain. The fresh fish quality is unparalleled, and their cold-chain logistics are impressively reliable.\"",
        btnMore: "Read More Reviews"
      },
      contact: {
        title: "BECOME A PARTNER",
        placeholderCompany: "Company Name",
        placeholderPerson: "Contact Person",
        placeholderEmail: "Business E-mail",
        placeholderPhone: "Phone Number",
        placeholderInquiry: "Order Inquiry (e.g. 5 Tonnes Red Snapper)",
        placeholderMessage: "Message / Specifications",
        policy: "I agree to the B2B terms and privacy policy.",
        btnSubmit: "Request Quote",
        opTitle: "Export Operations",
        salesTitle: "Global Sales",
        hqTitle: "Headquarters"
      },
      footer: {
        logo: "SuriCatch",
        follow: "FOLLOW SURICATCH"
      }
    }
  },
  zh: {
    translation: {
      nav: {
        home: "首页",
        services: "我们的服务",
        products: "核心产品",
        partners: "合作伙伴",
        contact: "联系我们"
      },
      hero: {
        subtitle: "高端海鲜分销商",
        title: "源自南美的远洋鲜捕\n直达全球",
        btnProducts: "我们的产品",
        btnContact: "联系销售团队",
        descTitle: "南美远洋出口",
        descSubtitle: "野生捕捞,\n极致抗鲜冷链保障。",
        descP1: "SuriCatch 是苏里南领先的鱼类分销商，专业出口最优质的野生海洋物种。从大西洋的纯净水域，直接送达您的商业终端。",
        descP2: "我们的专属船队与严格的冷链物流保障，确保野生红鲷鱼、石斑鱼和黄鱼等高需求品种在交付全球各地的同时保持绝对的原产地新鲜度。",
        btnCatalog: "查看产品目录"
      },
      services: {
        title: "核心产品与分销",
        subtitle: "我们在全球范围内采购、加工并配送苏里南顶级海鲜。",
        snapperTitle: "野生大红鱼",
        snapperDesc: "每日鲜捕的顶级苏里南红鲷鱼。",
        coldchainTitle: "全球冷链物流",
        coldchainDesc: "顶尖的冷链技术确保原产地到全球市场的绝对新鲜。",
        btnLearn: "了解更多",
        catfishTitle: "高端海鲇鱼",
        catfishDesc: "符合国际标准的顶级海鲇鱼鲜切加工。"
      },
      gallery: {
        title: "生鲜产品图库",
        subtitle: "一览我们每日准备出口的纯净鲜获。",
        btnFull: "查看完整目录"
      },
      testimonials: {
        title: "备受全球信赖",
        subtitle: "来自国际 B2B 合作伙伴与海鲜分销商的反馈。",
        partnerName: "全球海产进口公司",
        partnerRole: "美国分销合作伙伴",
        quote: "“SuriCatch 彻底改变了我们的南美海产供应链。他们的鲜鱼质量无与伦比，且冷链物流体系极其可靠。”",
        btnMore: "查看更多评价"
      },
      contact: {
        title: "成为合作伙伴",
        placeholderCompany: "公司名称",
        placeholderPerson: "联系人",
        placeholderEmail: "企业邮箱",
        placeholderPhone: "电话号码",
        placeholderInquiry: "订货意向（如：求购5吨野生红鱼）",
        placeholderMessage: "留言与具体规格",
        policy: "我同意 B2B 服务条款与隐私政策。",
        btnSubmit: "索取报价",
        opTitle: "出口运营部",
        salesTitle: "全球销售部",
        hqTitle: "全球总部"
      },
      footer: {
        logo: "SuriCatch",
        follow: "关注 SURICATCH"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React already escapes by default
    }
  });

export default i18n;
