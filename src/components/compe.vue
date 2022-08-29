<template>
  <div>
    <h1>计算属性</h1>
    姓: <input type="text" v-model="xing"> <br>
    名: <input type="text" v-model="ming"> <br>
    姓名: <span>{{name}}</span> <br>
    计算: <input type="text" v-model="name">
  </div>
</template>
<script setup lang="ts">
import { ref,computed } from "vue";
/**
 *  
 */

 
let xing = ref('');
let ming = ref('');
// 这是没有考虑到计算属性被修改的情况
// const name = computed(() => xing.value! + '-' + ming.value!)

// 计算属性完整的写法
const name = computed({
  get() { 
    return xing.value+"-"+ming.value
  },
  set(val:string) { 
    const res= val.split("-");
    xing.value = res[0]
    ming.value=res[1]
  }
})
</script>
