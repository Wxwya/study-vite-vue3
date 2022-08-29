/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module '@/components/ref.vue'
declare module "@/components/reactive"
declare module "@/components/propsAndSlot"
declare module "@/components/compe"
declare module "@/components/watch"
declare module "@/components/torefs"
declare module "@/components/shallow"
declare module "@/components/raw"