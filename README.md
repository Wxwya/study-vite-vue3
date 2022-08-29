# 一. reactive 对比 ref

- 从定义的数据角度对比
  - ref用来定义:[基本类型数据]()
  - reactive用来定义:[对象(或数组) 类型数据]()
  - 备注: ref也可以用来定义[对象(或数组)类型数据](),他内部会自动通过reactive转为代理对象

- 从原理角度对比
  - ref 通过`object.defineProperty()`的`get` 与 `set` 来实现响应式 (数据劫持)
  - reactive 通过使用[Proxy]()来实现响应式(数据劫持),并通过[Reflect]()操作[源对象]()内部的数据

- 从使用角度对比:
  - ref定义的数据: 操作数据需要`.value`,读取数据是模板中直接读取[不需要]()`.value`
  - reactive定义的数据: 操作数据与读取数据都[不需要]()`.value`

# 二. watch函数 
- 两个小坑
  - 监视reactive定义的响应式数据是: oldValue 无法正确获取,强制开启了深度监视(deep配置无效)
  - 监视reactive定义的响应式数据中的某个属性时,deep配置有效

# 三. watchEffect函数
 ```js
 //不需要写监视对象默认都不监视 在函数里面用到哪个数据就会去监视哪个数据
 watchEffect(() => { 
  console.log("发生变化了");
  const x = num.value
    console.log(x);
    
})
```

# 四. toRef 与 toRefs
作用: 创建一个ref对象,其与值指向另一个对象中的某一个属性
语法: ` const name = toRef(person,'name')`
应用: 要将响应式对象中的某个属性单独提供给外部使用时
扩展: `toRefs` 与 `toRef` 功能一致,但可以批量创建多个ref对象 `语法:toRefs(person)`


# 五. 其他API与composition API
## 1.shallowReactive 与 shallowRef
- shallowReactive只处理对象最外层属性的响应式(浅响应式)
- shallowRef:只处理基本数据类型的响应式,不进行对象的响应式处理
- 什么时候用? 
  - 如果有一个对象数据,结构比较深,但变化时只是外层属性变化使用`shallowReactive`
  - 如果有一个对象数据,后续功能不会修改该对象中的属性,而是新生的对象来替换使用 `shallowRef`


## 2.readonly 与 shallowReadonly
- readonly:让一个响应式数据变为只读的(深只读);
- shallowReadonly:让一个响应式数据变为只读的(浅只读)
- 应用场景: 不希望数据被修改

## 3.toRaw 与 markRaw
- toRaw:
  - 作用: 将一个由`reactive`生成的[响应式对象]() 转换为 [普通对象]()
  - 使用场景: 用于读取响应式对象对应的普通对象,对这个普通对象的所有操作,不会引起页面更新

- markRaw:
  - 作用:标记一个对象,使其永远不会在成为响应式对象
  - 应用场景: 
    1. 有些值不应被设置响应式的,例如复杂的第三方类库等
    2. 当渲染具有不可变数据源的大列表时,跳过响应式可以提升性能


## 4.customRef

作用: 创建一个自定义的ref,并对其依赖项跟踪和更新触发进行显式控制
```js
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
```
## 5.provide 与 inject
- 作用: [实现祖孙之间的通信]()
- 套路:父组件有一个provide选项来提供数据,子组件有一个inject选项来开始用这些数据

## 6.响应式数据的判断
- isRef:检测一个值是否为ref对象
- isReactive:检测一个对象是否是由`reactive`创建的响应式代理
- isReadonly:检测一个对象是否是由`readonly` 创建的只读代理
- isProxy:检测一个对象是否由`reactive`或`readonly` 方法创建的代理

# 六. 全局API的转移

`将全局的API,即:`Vue.xxx`调整到了实例(`app`)上`

|2.x全局API(Vue)|3.x实例API(app)|
|-|-|
|Vue.config.xxx|app.config.xxx|
|Vue.config.oridyctionTip|[移出]()|
|Vue.component|app.component|
|Vue.directive|app.directive|
|Vue.mixin|app.mixin|
|Vue.use|app.use|
|Vue.prototype|app.config.globalProperties|

