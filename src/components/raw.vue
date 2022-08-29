<template>
  <div>
    <h1>toRaw 与 markRaw</h1>
    <h3>{{name }}=={{age }}</h3>
    <h3>{{job.j1.gz }}</h3>
    <h3>{{person.car}}</h3>
    <button @click="name += '!'">名字</button>
    <button @click="age++">年龄</button>
    <button @click="job.j1.gz += 200">工资</button>
    <button @click="ys"> 输出原始的person</button>
    <button @click="add">添加</button>
    <button @click="xg"> 修改</button>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref, toRaw, toRefs, markRaw} from "vue";
/**
 *  
 * 

 */
 interface A {
    name:string,
     age: number,
     job: {
       j1: {
         gz:number
       }
     },
   car?: {
     [kye:string]:string
   }
}
let person = reactive<A>({
  name: "吴",
  age: 18,
  job: {
    j1: {
      gz: 500
    }
  },
})

// console.log(person.car);

const { name, age, job } = toRefs(person)
// console.log(name,age,job);
const ys = () => { 
  // console.log(person); //这输出的是响应式的
  let p = toRaw(person)
  p.age++
  console.log(p);  //虽然数据在变但是 页面不更新
  
}
const add = () => { 
  // console.log(person); //这输出的是响应式的
  let car= {yyy:'aaa',xxx:"22222"}
   person.car = markRaw(car) //添加了页面更新一次 在改的时候就不会在变了
  
  
}
const xg = () => { 
  person.car!.yyy += "!"
    console.log(person);  // 数据虽然改了但是页面不会更新
  // if (person.car) {
  //   person.car.yyy += "!"
  
  // } else { 
  //   console.log("没有定义");
  // }
  
}

</script>
