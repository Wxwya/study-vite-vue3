import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
console.log('111111111',path.resolve(__dirname,"./src"));
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname,"./src")
      }
    ],
    extensions:['.vue',".js",".json"]
  },
  server: {
    port: 3000,
    open:true
  }

})
