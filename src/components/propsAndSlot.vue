<template>
  <div>
    <h1> props 传值 父=>子</h1>
    <h2>msg:{{msg}}</h2>
    <h2>title:{{title}}</h2>
    <h3 ref="box"> 拿到定义ref的元素</h3>
    <h1> @click 父给子传的单击事件 </h1>
    <button @click="dianji">点击调用方法</button>
    <h1> 拿到默认插槽</h1>
    <slot></slot>
    <h1> 拿到具名插槽</h1>
    <slot name="abc"></slot>
    <h1>{{attrs.id}}</h1>
  </div>
</template>
<script setup lang="ts">
import { defineProps,defineEmits,useAttrs,useSlots} from "vue";
/**
 *   利用defineProps 来接收 props 传来的参数
 *   利用defineEmits 来接收 父给子传的 单击事件
 *   利用useSlots 来接收插槽
 *   利用 useAttrs 来接收还没被props接收的值
 */
const attrs = useAttrs()
// const box = ref();
const slots=useSlots()
const props = defineProps({
  msg: String,
  title:String
})
const emit= defineEmits(["dj"])
  // console.log(attrs);
  
// console.log(slots);



const dianji = () => { 
  emit("dj")
}




</script>
