const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "~@/styles/base.scss";',
        //prependData: '@import "~@/styles/base.scss";',
      },
    },
    sourceMap: true,
  },

  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "ar",
      localeDir: "locales",
      enableInSFC: true,
      includeLocales: false,
      enableBridge: true,
    },
  },
});
