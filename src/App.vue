<template>
  <div>
    <!-- 这是props和slot useattrs emit 的调用 -->
    <!-- <Noe msg="这是传来的" title="这是标题啊" id="阿达飒飒的三"   @dj="dj"> 
    <span>这是默认插槽</span>
    <template v-slot:abc>
      <div>
        这是具名插槽
      </div>
    </template>
    </Noe> -->
    <Noe />
    <!-- {{aa}} -->
  </div>
</template>
<script setup lang="ts">
// import {ref,reactive} from "vue"
import Noe from "@/components/proAndInje.vue";
import AA from "@/views/aa.vue"
import hook from "@/hooks"
import {provide} from "vue";
// let arrs = useAttrs()
let arrs = '这是父组件中的数据'
provide('arrs', arrs)
console.log(hook);
hook()
function dj() { 
  console.log(111);
}
</script>
