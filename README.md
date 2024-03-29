## 一些学习过程中的手写代码

### 进度管理

### Start from 2023/07/20
Vue
### 优先级：高
- 生命周期的理解：✅
- Vue实例挂载的过程：✅
- 通信方式：✅
- 双向绑定：✅
- Diff算法和虚拟DOM：✅
- Key的理解：✅
- Vue3和Vue2的区别：✅
- Proxy和defineProperties的区别：✅
### 优先级：中低
- 自定义指令：✅
- data为什么不是对象：✅
- v-if和v-show的区别：✅
- nextTick的理解：✅

## ES6
- Promise和async/await：✅
- 手写Promise和async/await：✅
- Proxy理解：✅
- var、let、const：✅
- 数组和对象的扩展：✅
- Set和Map的理解：✅
- Generator理解：✅
## JS
- 类型转换：✅
- toPrimitive、valueOf、toString和转换算法：✅
- 原型链和作用域链：✅
- 继承：✅
- new关键字原理：✅
- this的指向：✅
- bind、call、apply区别：✅
- 本地存储方式cookie、sessionStorage、localStorage的区别：✅
- BOM的理解：✅
- 宏任务和微任务(事件循环)：✅
- 事件代理、事件模型：✅
- 深拷贝和浅拷贝：✅
- 闭包：✅
- 垃圾回收机制：✅
- 防抖和节流：✅
- 模块化：✅


## CSS
- 盒子模型：✅
- 选择器有哪些：✅
- 像素单位em、rem、vh、vw、px：✅
- BFC的理解：✅
- 水平垂直居中：✅
- 回流和重绘：✅
## Webpack
- Webpack的理解：✅
- 构建流程：✅
- Loader和Plugin的区别：✅
- 热更新原理：✅
- 借助webpack优化前端性能：✅
## 设计模式
- 单例模式
- 发布订阅模式
- 观察者模式
## HTTP
- 强缓存和协商缓存：✅
- HTTPS加密过程：✅
- HTTPS加密算法：✅
- HTTP1.0/1.1/2.0区别：✅
- 常见请求方法：✅
- GET和POST区别：✅
- 常见请求头字段：✅
- TCP连接过程：✅
- HTTP和HTTPS区别：✅
## 项目
- 打印分页自适应：✅
- 页面性能优化：✅
- 移动端1px问题：✅
- 组件库开发
## TypeScript
## NodeJS
## 其它
- 微前端架构
- rollup、gulp、vite等其它构建工具
- 浏览器原理：✅


===========

### 2023/03/22

- [你是怎么理解 ES6 中 Proxy 的？使用场景?](./js/es6/proxy.js)
- [你是怎么理解ES6中Module的？使用场景？](./js/es6/module.js)
- [你是怎么理解ES6中 Decorator 的？使用场景](./js/es6/decorator.js)

#### JS系列
- 说说JavaScript中的数据类型？存储上的差别？
- [数组的常用方法有哪些？](./js/array.js)
- [JavaScript字符串的常用方法有哪些？](./js/string.js)


### 2023/03/20

#### ES6

- [怎么理解 ES6 中 Generator 的？使用场景？](./js/es6/generator.js)

### 2023/03/20 以前

#### Vue 系列

- 说说你对 vue 的理解?
- 说说你对 SPA（单页应用）的理解?
- Vue 中的 v-show 和 v-if 怎么理解？
- Vue 实例挂载的过程中发生了什么?
- 说说你对 Vue 生命周期的理解?
- 为什么 Vue 中的 v-if 和 v-for 不建议一起用?
- SPA（单页应用）首屏加载速度慢怎么解决？
- 为什么 data 属性是一个函数而不是一个对象？
- Vue 中给对象添加新属性界面不刷新?
- Vue 中组件和插件有什么区别？
- [Vue 组件间通信方式都有哪些?](./vue-demo/src/views/page/index.vue)
- 说说你对双向绑定的理解?
- 说说你对 nextTick 的理解?
- 说说你对 vue 的 mixin 的理解，有什么应用场景？
- 说说你对 slot 的理解？slot 使用场景有哪些？
- [Vue.observable 你有了解过吗？说说看](./vue-demo/src/stores.js)
- 你知道 vue 中 key 的原理吗？说说你对它的理解？
- 怎么缓存当前的组件？缓存后怎么更新？说说你对 keep-alive 的理解是什么？
- [Vue 常用的修饰符有哪些？有什么应用场景？](./vue-demo/src/views/page1/index.vue)
- 你有写过自定义指令吗？自定义指令的应用场景有哪些？
- Vue 中的过滤器了解吗？过滤器的应用场景有哪些？
- 什么是虚拟 DOM？如何实现一个虚拟 DOM？说说你的思路
- 你了解 vue 的 diff 算法吗？说说看
- [Vue 项目中有封装过 axios 吗？主要是封装哪方面的？](./vue-demo/src/lib/http/index.js)
- [你了解 axios 的原理吗？有看过它的源码吗？](./vue-demo/src/lib/MyAxios/MyAxios.js)
- SSR 解决了什么问题？有做过 SSR 吗？你是怎么做的？
- 说下你的 vue 项目的目录结构，如果是大型项目你该怎么划分结构和划分组件呢？
- vue 要做权限管理该怎么做？如果控制到按钮级别的权限怎么做？
- Vue 项目中你是如何解决跨域的呢？
- vue 项目本地开发完成后部署到服务器后报 404 是什么原因呢？
- 你是怎么处理 vue 项目中的错误的？
- Vue3 有了解过吗？能说说跟 Vue2 的区别吗？

#### Vue3系列
- Vue3.0的设计目标是什么？做了哪些优化
- Vue3.0性能提升主要是通过哪几方面体现的？
- Vue3.0里为什么要用 Proxy API 替代 defineProperty API ？
- Vue3.0 所采用的 Composition Api 与 Vue2.x 使用的 Options Api 有什么不同？
- 说说Vue 3.0中Treeshaking特性？举例说明一下？
- 用Vue3.0 写过组件吗？如果想实现一个 Modal你会怎么设计？


#### ES6

- [说说 var、let、const 之间的区别](./js/es6/variable.js)
- [ES6 中数组新增了哪些扩展?](./js/es6/arrary.js)
- [ES6 中对象新增了哪些扩展?](./js/es6/object.js)
- [ES6 中函数新增了哪些扩展?](./js/es6/function.js)
- ES6 中新增的 Set、Map 两种数据结构怎么理解?
- [你是怎么理解 ES6 中 Promise 的？使用场景？](./js/es6/promise.js)

