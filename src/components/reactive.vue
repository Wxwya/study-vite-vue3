<template>
  <div>
    <h1>reactive 响应式数据</h1>
    <h2>姓名:{{ user.name }}</h2>
    <h2>年龄:{{ user.age }}</h2>
    <h2>老婆姓名:{{ user.lp.name }}</h2>
    <h2>老婆年龄:{{ user.lp.age }}</h2>
    <ul>
      <li v-for="(p, i) in userList" :key="i">
        姓名:{{ p.name }}年龄:{{ p.age }}
      </li>
    </ul>
    <button @click="show">点击</button>
  </div>
</template>
<script setup lang="ts">
import {ref,reactive,onMounted} from "vue"
// import Noe from "@/components/ref.vue";
/**
 *
 *   reactive 作用:定义多个数据的响应式
 * const proxy = reactive(obj) 接收一个普通对象饭后返回改普通对象的响应式代理器对象
 * 响应式转换是深层的:会影响对象内部所有嵌套的属性
 * 内部基于es6 的proxy实现,通过代理对象操作源对象内部数据都是响应式的
 *
 *
 */
let arr = [
  {
    name: "张三",
    age:18,
  },
  {
    name: "李四",
    age:16,
  },
  {
    name: "王五",
    age:12,
  }
]
let user = reactive({
  name: '小吴',
  age: 22,
  lp: {
    name:"小王",
    age: 0
  }
})
let userList=reactive(arr)
const show = () => {
  userList.filter((itme) => itme.name=="王五"?itme.age+=2:itme.age)
   user.lp.age++
}
onMounted(() => { 
  console.log(111);
  
})
</script>
