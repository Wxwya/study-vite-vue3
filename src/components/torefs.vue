<template>
  <div>
    <h1>toRef与toRefs</h1>
    <h3>{{name }}=={{age }}</h3>
    <h3>{{gz }}</h3>
    <button @click="name += '!'">名字</button>
    <button @click="age++">年龄</button>
    <button @click="gz += 200">工资</button>
  </div>
</template>
<script setup lang="ts">
import { reactive, toRef, toRefs } from "vue";
/**
 *  
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
let gz = toRef(person.job.j1, "gz")
let name = toRef(person, "name")
let age=toRef(person,"age")

// const { name, age, job } = toRefs(person)
// console.log(name,age,job);


</script>
