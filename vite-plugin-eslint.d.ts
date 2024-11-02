declare module 'vite-plugin-eslint' {
  import type { Plugin } from 'vite'
  
  interface ESLintOptions {
    cache?: boolean
    include?: string | string[]
    exclude?: string | string[]
    throwOnError?: boolean
    throwOnWarning?: boolean
    fix?: boolean
    formatter?: 'stylish' | 'pretty' | string | ((results: any[]) => string)
  }

  function eslintPlugin(options?: ESLintOptions): Plugin
  export default eslintPlugin
}
