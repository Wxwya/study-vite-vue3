<template>
  <div>
    <h1>cutsomRef,自定义类型</h1>
    <h3> {{num}}</h3>
  </div>
</template>
<script setup lang="ts">
import { ref,customRef } from "vue";
/**
 *  自定义一个ref的名
 * track 是通知vue去追踪变化用的 
 * trigger 是通知vue去解析模板 
 * 
 * 
 */
const myRef = (value: unknown) => { 
  let timer:number
  return customRef((track, trigger) => {
    return {
      get() {
        track(); // 通知vue追踪value的变化,提前和get上来一下让他认为这个value是有用的
        return value
       },
      set(newvalue) { 
        clearTimeout(timer)
        timer = setTimeout(() => { 
          value = newvalue,
          trigger() //通知vue去解析模板
        },1000)
      }
    }
   })
}
let num = myRef(600)

</script>
