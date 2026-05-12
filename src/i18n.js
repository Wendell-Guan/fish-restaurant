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
      homeVideo: {
        title: "SEE SURICATCH IN MOTION",
        subtitle: "From the Atlantic deck to the global cold chain — watch how a SuriCatch shipment really moves."
      },
      about: {
        eyebrow: "About SuriCatch",
        title: "ROOTED IN SURINAME,\nSINCE 1995",
        subtitle: "From a small Paramaribo operation to one of Suriname's largest fish processors and exporters — delivering Atlantic freshness worldwide.",
        backToHome: "Back to Home",
        storyTitle: "OUR STORY",
        storyBody: "SuriCatch is a Surinamese corporation established in 1995. We started out as a small company and are now one of the largest processors and exporters of frozen and fresh fish in Suriname. Our commitment to Food Safety, Food Quality and Continuity has made us a successful and fast growing company with a number of satisfied customers in different parts of the world.",
        videoTitle: "INSIDE OUR OPERATIONS",
        pillarsTitle: "WHAT WE STAND FOR",
        pillars: [
          { title: "Food Safety", desc: "Strict cold-chain discipline and full traceability — from the catch to your facility." },
          { title: "Food Quality", desc: "Wild-caught species, hand-graded and processed to meet international export standards." },
          { title: "Continuity", desc: "Reliable year-round supply that international B2B partners can plan their distribution around." }
        ],
        ctaTitle: "Partner with SuriCatch",
        ctaDesc: "From Paramaribo to your port — talk to us about volumes, specs, and shipping windows.",
        ctaBtn: "Contact Us"
      },
      products: {
        eyebrow: "Product Catalog",
        title: "WILD-CAUGHT\nSPECIES & CUTS",
        subtitle: "Complete range of premium Atlantic and Amazon species, processed and packed to international export grade.",
        backToHome: "Back to Home",
        cuts: {
          fltSkOn: "Fillet, skin-on",
          fltSkOff: "Fillet, skin-off",
          fltSkOnVp: "Fillet, skin-on (vacuum)",
          headlessGutted: "Headless & gutted",
          wholeRound: "Whole round",
          wholeGutted: "Whole, gutted",
          wholeGuttedGilled: "Whole, gutted & gilled",
          wholeGuttedGilledScaled: "Whole, gutted, gilled & scaled",
          steaks: "Steaks",
          ribs: "Ribs",
          sides: "Sides",
          chops: "Chops"
        },
        frozen: {
          title: "FROZEN CATALOG",
          desc: "IQF and block-frozen, processed at landing for export-grade shelf life.",
          items: [
            { name: "Golden Corvina / Grey Snapper", sci: "Cynoscion acoupa", cuts: ["fltSkOn", "fltSkOff", "headlessGutted"] },
            { name: "Silver Corvina", sci: "Cynoscion virescens", cuts: ["fltSkOn", "fltSkOff", "wholeGutted", "headlessGutted", "steaks"] },
            { name: "Red Snapper", sci: "Lutjanus purpureus", cuts: ["fltSkOnVp", "wholeGutted", "wholeGuttedGilledScaled"] },
            { name: "Dog Snapper", sci: "Lutjanus jocu", cuts: ["fltSkOnVp"] },
            { name: "B-Liner (Vermilion Snapper)", sci: "Rhomboplites aurorubens", cuts: ["wholeGutted", "wholeGuttedGilledScaled"] },
            { name: "Lane Snapper", sci: "Lutjanus synagris", cuts: ["wholeGutted", "wholeGuttedGilledScaled"] },
            { name: "King Fish", sci: "Scomberomorus cavalla", cuts: ["wholeGutted", "steaks"] },
            { name: "Spanish Mackerel", sci: "Scomberomorus brasiliensis", cuts: ["wholeGutted", "steaks"] },
            { name: "Triple Tail", sci: "Lobotes surinamensis", cuts: ["fltSkOff"] },
            { name: "Cobia", sci: "Rachycentron canadum", cuts: ["fltSkOff"] },
            { name: "Snook", sci: "Centropomus spp.", cuts: ["fltSkOff"] },
            { name: "Butterfish (Smalleye Croaker)", sci: "Nebris microps", cuts: ["fltSkOn", "wholeGuttedGilledScaled"] },
            { name: "Grunts", sci: "Haemulon spp.", cuts: ["wholeRound", "wholeGutted", "wholeGuttedGilledScaled"] },
            { name: "Silver Snapper (Shorthead Drum)", sci: "Larimus breviceps", cuts: ["wholeGutted", "wholeGuttedGilledScaled"] },
            { name: "Tambaqui", sci: "Colossoma macropomum", cuts: ["wholeGuttedGilled", "wholeGuttedGilledScaled", "ribs", "sides", "chops"] }
          ]
        },
        fresh: {
          title: "FRESH ON ICE",
          desc: "Iced at landing, air-freighted within 24h of harvest.",
          items: [
            { name: "Golden Corvina / Grey Snapper", sci: "Cynoscion acoupa", cuts: ["fltSkOn", "fltSkOff", "headlessGutted"] }
          ]
        },
        ctaTitle: "Need a custom spec or volume?",
        ctaDesc: "We process to buyer specification — size grades, packing, and cuts on request.",
        ctaBtn: "Request a Quote"
      },
      testimonials: {
        title: "TRUSTED GLOBALLY",
        subtitle: "Feedback from our international B2B partners and seafood distributors.",
        items: [
          {
            partnerName: "Beaver Street Fisheries",
            partnerRole: "Southeast US Import Partner",
            quote: "\"SuriCatch's wild Red Snapper consistently hits our spec on size grade and fat content. The Paramaribo-to-Jacksonville cold chain is the most dependable South American lane we run.\""
          },
          {
            partnerName: "Eastern Fish Company",
            partnerRole: "East Coast Distribution Partner",
            quote: "\"Traceability and landing documentation are best-in-class. Their vessel-to-buyer paperwork drops cleanly into our import workflow without rework.\""
          },
          {
            partnerName: "Slade Gorton & Co.",
            partnerRole: "New England Wholesale Partner",
            quote: "\"We've sourced seafood since 1928 — SuriCatch is among the most reliable Atlantic suppliers we've onboarded. Quality, timing, and paperwork all hold up.\""
          }
        ]
      },
      contact: {
        title: "CONTACT US",
        placeholderCompany: "Company Name",
        placeholderPerson: "Contact Person",
        placeholderEmail: "Business E-mail",
        placeholderPhone: "Phone Number",
        placeholderInquiry: "Order Inquiry (e.g. 5 Tonnes Red Snapper)",
        placeholderMessage: "Message / Specifications",
        policy: "I agree to the B2B terms and privacy policy.",
        btnSubmit: "Request Quote",
        btnSubmitting: "Sending...",
        msgSuccess: "Thanks — your inquiry has been sent. We'll get back to you shortly.",
        msgError: "Submission failed. Please try again or email us at kjacgor@gmail.com.",
        opTitle: "Export Operations",
        salesTitle: "Global Sales",
        hkTitle: "Hong Kong Office",
        hkAddress: "2401 Citicorp Centre, 18 Whitfield Road, Causeway Bay, Hong Kong",
        srTitle: "Suriname Office",
        srAddress: "J.D. Gompertstraat no. 88, Paramaribo, Suriname (South America)",
        chatTitle: "Message Us",
        chatHint: "Scan to chat on your preferred app",
        wechatTitle: "WeChat",
        whatsappTitle: "WhatsApp",
        lineTitle: "LINE"
      },
      footer: {
        logo: "SuriCatch"
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
      homeVideo: {
        title: "走进我们的远洋鲜捕",
        subtitle: "从大西洋甲板到全球冷链——看一批 SuriCatch 货物是如何流转的。"
      },
      about: {
        eyebrow: "关于 SuriCatch",
        title: "源自苏里南\n始于 1995",
        subtitle: "从一家帕拉马里博的小型作坊，到苏里南最大的鱼类加工与出口商之一——将大西洋的纯净鲜捕送达全球。",
        backToHome: "返回首页",
        storyTitle: "我们的故事",
        storyBody: "SuriCatch 是一家成立于 1995 年的苏里南企业。我们最初只是一家小公司，如今已成为苏里南最大的冷冻与鲜捕鱼类加工出口商之一。我们对食品安全、食品质量与稳定供应的坚持，让我们成为一家持续高速成长的企业，在全球多个地区赢得了众多满意客户。",
        videoTitle: "走进 SuriCatch",
        pillarsTitle: "我们的坚持",
        pillars: [
          { title: "食品安全", desc: "严格的冷链管控与全程可追溯——从远洋鲜捕到客户工厂，环环可查。" },
          { title: "食品质量", desc: "野生鲜捕物种，人工分级处理，符合国际出口标准。" },
          { title: "稳定供应", desc: "全年稳定的货源保障，让国际 B2B 合作伙伴可以从容规划分销。" }
        ],
        ctaTitle: "成为 SuriCatch 的合作伙伴",
        ctaDesc: "从帕拉马里博到您的港口——欢迎就规格、订货量与发运时间与我们沟通。",
        ctaBtn: "联系我们"
      },
      products: {
        eyebrow: "完整产品目录",
        title: "野生捕捞品种\n与切割规格",
        subtitle: "完整的大西洋与亚马逊水域野生鱼种，按出口级别加工与包装。",
        backToHome: "返回首页",
        cuts: {
          fltSkOn: "带皮鱼柳",
          fltSkOff: "去皮鱼柳",
          fltSkOnVp: "带皮鱼柳（真空包装）",
          headlessGutted: "去头去内脏",
          wholeRound: "整鱼原条",
          wholeGutted: "整鱼去内脏",
          wholeGuttedGilled: "整鱼去内脏去鳃",
          wholeGuttedGilledScaled: "整鱼去内脏去鳃去鳞",
          steaks: "切段（鱼排）",
          ribs: "鱼排骨",
          sides: "鱼腩",
          chops: "鱼块"
        },
        frozen: {
          title: "冷冻目录",
          desc: "上岸后即处理，IQF 或砖冻包装，达到出口级保鲜期。",
          items: [
            { name: "金鲷 / 灰鲷", sci: "Cynoscion acoupa", cuts: ["fltSkOn", "fltSkOff", "headlessGutted"] },
            { name: "银鲷", sci: "Cynoscion virescens", cuts: ["fltSkOn", "fltSkOff", "wholeGutted", "headlessGutted", "steaks"] },
            { name: "大红鱼（红鲷）", sci: "Lutjanus purpureus", cuts: ["fltSkOnVp", "wholeGutted", "wholeGuttedGilledScaled"] },
            { name: "狗齿笛鲷", sci: "Lutjanus jocu", cuts: ["fltSkOnVp"] },
            { name: "红尾笛鲷", sci: "Rhomboplites aurorubens", cuts: ["wholeGutted", "wholeGuttedGilledScaled"] },
            { name: "条纹笛鲷", sci: "Lutjanus synagris", cuts: ["wholeGutted", "wholeGuttedGilledScaled"] },
            { name: "大马鲛鱼（王鲭）", sci: "Scomberomorus cavalla", cuts: ["wholeGutted", "steaks"] },
            { name: "巴西马鲛鱼", sci: "Scomberomorus brasiliensis", cuts: ["wholeGutted", "steaks"] },
            { name: "苏里南三尾鱼", sci: "Lobotes surinamensis", cuts: ["fltSkOff"] },
            { name: "军曹鱼", sci: "Rachycentron canadum", cuts: ["fltSkOff"] },
            { name: "锥鲈（Snook）", sci: "Centropomus spp.", cuts: ["fltSkOff"] },
            { name: "小眼石首鱼", sci: "Nebris microps", cuts: ["fltSkOn", "wholeGuttedGilledScaled"] },
            { name: "石鲈", sci: "Haemulon spp.", cuts: ["wholeRound", "wholeGutted", "wholeGuttedGilledScaled"] },
            { name: "短头石首鱼", sci: "Larimus breviceps", cuts: ["wholeGutted", "wholeGuttedGilledScaled"] },
            { name: "大盖巨脂鲤", sci: "Colossoma macropomum", cuts: ["wholeGuttedGilled", "wholeGuttedGilledScaled", "ribs", "sides", "chops"] }
          ]
        },
        fresh: {
          title: "冰鲜目录",
          desc: "上岸即冰镇，24 小时内空运出口。",
          items: [
            { name: "金鲷 / 灰鲷", sci: "Cynoscion acoupa", cuts: ["fltSkOn", "fltSkOff", "headlessGutted"] }
          ]
        },
        ctaTitle: "需要定制规格或大额订单？",
        ctaDesc: "我们可按买家规格处理 —— 尺寸分级、包装方式、切割形式均可定制。",
        ctaBtn: "立即索取报价"
      },
      testimonials: {
        title: "备受全球信赖",
        subtitle: "来自国际 B2B 合作伙伴与海鲜分销商的反馈。",
        items: [
          {
            partnerName: "Beaver Street Fisheries",
            partnerRole: "美国东南部进口合作伙伴",
            quote: "“SuriCatch 的野生红鲷鱼在规格分级与脂肪含量上始终稳定达标。从帕拉马里博到杰克逊维尔的冷链，是我们运行过最稳定的南美航线之一。”"
          },
          {
            partnerName: "Eastern Fish Company",
            partnerRole: "美东分销合作伙伴",
            quote: "“可追溯性与上岸单据做得相当扎实。船到买家的全套文件无缝对接我们的进口流程，不需要重新整理。”"
          },
          {
            partnerName: "Slade Gorton & Co.",
            partnerRole: "新英格兰批发合作伙伴",
            quote: "“我们自 1928 年起做海产采购——SuriCatch 是我们合作过最稳定的大西洋供应商之一。质量、时效、单据，三项都过关。”"
          }
        ]
      },
      contact: {
        title: "联系我们",
        placeholderCompany: "公司名称",
        placeholderPerson: "联系人",
        placeholderEmail: "企业邮箱",
        placeholderPhone: "电话号码",
        placeholderInquiry: "订货意向（如：求购5吨野生红鱼）",
        placeholderMessage: "留言与具体规格",
        policy: "我同意 B2B 服务条款与隐私政策。",
        btnSubmit: "索取报价",
        btnSubmitting: "提交中...",
        msgSuccess: "已收到您的询盘，我们会尽快与您联系。",
        msgError: "提交失败，请重试或直接发邮件至 kjacgor@gmail.com。",
        opTitle: "出口运营部",
        salesTitle: "全球销售部",
        hkTitle: "香港办公室",
        hkAddress: "香港 銅鑼灣 威非路道18號 萬國寶通中心2401室",
        srTitle: "苏里南办公室",
        srAddress: "J.D. Gompertstraat no. 88, Paramaribo, Suriname（南美洲）",
        chatTitle: "扫码联系我们",
        chatHint: "扫描下方任一二维码与我们沟通",
        wechatTitle: "微信",
        whatsappTitle: "WhatsApp",
        lineTitle: "LINE"
      },
      footer: {
        logo: "SuriCatch"
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
