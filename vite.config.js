import { defineConfig } from 'vite'

import { defineNiceConfig } from './nice.config.js'

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  try {
    const niceConfig = await defineNiceConfig()
    return {
      plugins: [...niceConfig.Plugins],
      root: niceConfig.BuildConfig.root,
      base: niceConfig.BuildConfig.base,
      publicDir: niceConfig.BuildConfig.publicDir,
      server: {
        host: niceConfig.BuildConfig.host(mode, process.cwd())
      },
      build: {
        outDir: niceConfig.BuildConfig.outDir,
        assetsDir: niceConfig.BuildConfig.assetsDir,
        rollupOptions: niceConfig.BuildConfig.rollupOptions,
      },
      resolve: niceConfig.Resolve,
      css: niceConfig.Css,
    }
  } catch (err) {
    console.log(err)
  }
})
