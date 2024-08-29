
module.exports = {
  seo: {
    "title": "FastStore",
    "description": "A fast and performant store framework",
    "titleTemplate": "%s | FastStore",
    "author": "FastStore"
  },

  // Theming
  theme: 'custom-theme',

  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: "faststorev2",
    workspace: 'master',
    environment: 'vtexcommercestable',
    hideUnavailableItems: false,
    incrementAddress: false,
  },

  // Default session
  session: {
    currency: {
      code: "BRL",
      symbol: "R$",
    },
    locale: "pt-BR",
    channel: '{"salesChannel":1,"regionId":""}',
    country: "BRA",
    deliveryMode: null,
    addressType: null,
    postalCode: null,
    geoCoordinates: null,
    person: null,
  },

  cart: {
    id: '',
    items: [],
    messages: [],
    shouldSplitItem: true,
  },

  // Production URLs
  storeUrl: "https://faststorev2.vtex.app",
  secureSubdomain: "https://secure.vtexfaststore.com/",
  checkoutUrl: "https://secure.vtexfaststore.com/checkout",
  loginUrl: "https://secure.vtexfaststore.com/api/io/login",
  accountUrl: "https://secure.vtexfaststore.com/api/io/account",

  previewRedirects: {
    home: '/',
    plp: "/bebidas",
    search: "/s?q=Coca%20Cola",
    pdp: "/produto-willy/p",
  },

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:3000',
    pages: {
      home: '/',
      pdp: "/produto-willy/p",
      collection: "/bebidas",
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: "/produto-willy/p",
      collection: "/bebidas",
      collection_filtered: "/bebidas/?category-1=bebidas&brand=Coca%20Cola&facets=category-1%2Cbrand%27",
      search: "/s?q=Coca%20Cola",
    },
    browser: 'electron',
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    gtmContainerId: "GTM-5KSSR9NK",
  },

  experimental: {
    nodeVersion: 18,
    cypressVersion: 12,
  },

  vtexHeadlessCms: {
    webhookUrls: [
      "https://faststorev2.myvtex.com/cms-releases/webhook-releases",
    ],
  },
}