// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxt/content",
    "@nuxtjs/i18n",
    "@vueuse/nuxt",
    "nuxt-og-image",
    "motion-v/nuxt",
  ],
  css: ["~/assets/css/main.css"],
  i18n: {
    strategy: "prefix_and_default",
    defaultLocale: "en",
    detectBrowserLanguage: false,
    langDir: "../app/locales",
    vueI18n: "./i18n.config.ts",
    locales: [
      { code: "en", name: "English", language: "en-US", file: "en.json" },
      { code: "de", name: "Deutsch", language: "de-DE", file: "de.json" },
      { code: "es", name: "Español", language: "es-ES", file: "es.json" },
      { code: "fr", name: "Français", language: "fr-FR", file: "fr.json" },
    ],
  },

  nitro: {
    prerender: {
      routes: ["/"],
      crawlLinks: true,
    },
  },
});
