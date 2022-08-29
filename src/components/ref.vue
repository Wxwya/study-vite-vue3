<template>
  <div>
    <h1>ref 响应式数据</h1>
    {{ name }}{{ age }}
    {{ a }}
    <h3>对象名字:{{ obj.name }}</h3>
    <h3>对象年龄:{{ obj.age }}</h3>
    <button @click="diss">点击</button>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
/**
 *  ref 是一个函数,作用:定义一个响应式的数据:数据变化,页面也跟着渲染变化
 * 返回的是一个ref对象,对象中有一个value属性,需要对数据进行操作需要使用该ref对象调用的value属性的方式进行操作
 *
 *  如果ref中定义的是个对象返回的是个ref对象, ref中的value是proxy对象 用proxy来代理数据的
 */

let a = ref<number | undefined>();
a = ref(10);

let name = ref("李四");
let age = ref(12);
let obj = ref({
  name: "张三",
  age: 18,
});
const diss = () => {
  a.value!++;
  obj.value.name = "张三三";
  obj.value.age = 188;
  age.value++;
};
</script>
