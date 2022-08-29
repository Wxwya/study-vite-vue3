<template>
  <div>
    <h1>数据监视属性</h1>
    值:{{num}} <br>
    <button @click="num++">点击加</button>
    <h3>{{msg}}</h3>
    <button @click="msg+='!'">点击</button>
    <h3>{{person.name}}=={{person.age}}</h3>
    <button @click="person.name+='!'">名字</button>
    <button @click="person.age++">年龄</button>
  </div>
</template>
<script setup lang="ts">
import { ref,watchEffect,watch, reactive  } from "vue";
/**
 *  
 */
let num = ref(0)
let msg = ref("你好啊")
let person = reactive({
  name: "吴",
  age: 18,
  job: {
    j1: {
      gz:500
    }
  },
})
//  watch监听ref数据 情况一
// watch(num,(newvalue,oldvalue) => {
//   console.log("改变了" ,newvalue,oldvalue)
// }, {deep:true,immediate:true})


// 这是watch监听ref数据  情况二 {但是返回来的也是数组形式的}
// watch([num,msg],(newvalue,oldvalue) => {
//   console.log("改变了" ,newvalue,oldvalue)
// }, {deep:true,immediate:true})

// 这是watch监听reactive数据  情况三
// 注意1:此处无法返回正确的oldvalue
// 注意2:强制开启了深度监视 deep配置无效
// 注意3:如果用ref对象 那就需要person.value
// watch(person,(newvalue,oldvalue) => {
//   console.log("改变了" ,newvalue,oldvalue)
// }, {deep:true,immediate:true})

// 这是watch监听reactive数据中的某个属性  情况四
// 正常写会提示不能监视 reactive 数据对象中的某一个属性 会不能用
//  要用函数的形式才行 ()=>person.age 而且返回正常
// watch(() => person.age,(newvalue,oldvalue) => {
//   console.log("改变了" ,newvalue,oldvalue)
// }, { deep: true, immediate: true })


// 这是watch监听reactive数据中的多个属性  情况五  返回数组形式 但是数据正常
// watch([() => person.age,()=>person.name],(newvalue,oldvalue) => {
//   console.log("改变了" ,newvalue,oldvalue)
// }, { deep: true, immediate: true })

// 特殊情况 情况六
// 必须开启deep属性不然会监视不到
// 由于监视的是reactive定义的对象中的某个属性,所以deep配置有效
// watch(() => person.job,(newvalue,oldvalue) => {
//   console.log("改变了" ,newvalue,oldvalue)
// }, { deep: true })


/*
  默认开启了immediate

*/
watchEffect(() => { 
  console.log("发生变化了");
  const x = num.value
    console.log(x);
    
})


</script>
