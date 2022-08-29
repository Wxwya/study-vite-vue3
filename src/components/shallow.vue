<template>
  <div>
    <h1>shallowReactive 与 shallowRef | readonly 与 shallowReadonly</h1>
    <h3>{{name }}=={{age }}</h3>
    <h3>{{job.j1.gz }}</h3>
    <button @click="name += '!'">名字</button>
    <button @click="age++">年龄</button>
    <button @click="job.j1.gz += 200">工资</button>

  <h3>{{obj.name}}</h3>
  <button @click="obj.name+='!'">加</button>
  <button @click="obj={name:'小小小'}">替换</button>
  </div>
</template>
<script setup lang="ts">
import { reactive, toRef, toRefs,shallowReactive,shallowRef,readonly,shallowReadonly} from "vue";
/**
 *  
 * 
 * 用了shallowReactive 定义的对象那就只有第一层的数据是响应式的里面的就不是响应式的了改不了了
 * 用了shallowRef 定义的对象不会响应式, 但是可以替换
 * 用了shallowRef定义的字符串或数字可以响应式
 * 
 * 用了readonly(传对象,传值) 不管是什么都不让改 
 * 用了shallowReactive(传对象) 对像的第一层不让改 深层的允许改
 */
let person = reactive({
  name: "吴",
  age: 18,
  job: {
    j1: {
      gz:500
    }
  },
})
let num = shallowRef(0)
let obj = shallowRef({ name: "吴" })
num = readonly(num)
person =shallowReadonly(person)
// let gz = toRef(person.job.j1, "gz")
// let name = toRef(person, "name")
// let age=toRef(person,"age")

const { name, age, job } = toRefs(person)
// console.log(name,age,job);


</script>
