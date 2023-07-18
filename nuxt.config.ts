// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    prerender: {
      crawlLinks: true
    }
  },
  app: { 
    head:  {
      title: 'mobile gadget online-shop',
      meta:[
        {name:"description", content:"Mobile gadget online shop"}
      ]
    }
  }
})
