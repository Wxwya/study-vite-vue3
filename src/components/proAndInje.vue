<template>
  <div>
    <h1>provide 与 inject</h1>
    <h3> {{num}}</h3>
    <h1>传来的:{{arrs}}</h1>
  </div>
</template>
<script setup lang="ts">
import { ref,inject } from "vue";
/**
 *  
 *  给所有的后代组件中都能使用
 * 
 */
let arrs=inject('arrs')
let num = ref(600)

</script>
