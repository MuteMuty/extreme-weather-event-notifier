export default defineNuxtConfig({
  'compatibilityDate': '2024-11-01',
  'devtools': { enabled: false },
  'eslint': {
    config: {
      stylistic: true,
    },
  },
  'graphql-client': {
    codegen: false,
  },
  'modules': ['@nuxt/eslint', 'nuxt-graphql-client', 'vuetify-nuxt-module', '@scalar/nuxt'],
  'nitro': {
    experimental: {
      openAPI: true,
    },
  },
  'runtimeConfig': {
    public: {
      GQL_HOST: 'http://storage:4000/graphql', // overwritten by process.env.GQL_HOST
    },
  },
  'scalar': {
    spec: {
      url: '/openapi',
    },
  },
})
