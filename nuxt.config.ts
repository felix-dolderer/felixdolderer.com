// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxt/content",
    "@vueuse/nuxt",
    "nuxt-og-image",
    "motion-v/nuxt",
  ],
  css: ["~/assets/css/main.css"],

  nitro: {
    prerender: {
      routes: ["/"],
      crawlLinks: true,
    },
  },
});
