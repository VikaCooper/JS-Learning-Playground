/**
 * 声明文件
 *
 * declare var 声明全局变量
 * declare function 声明全局方法
 * declare class 声明全局类
 * declare enum 声明全局枚举类型
 * declare namespace 声明（含有子属性的）全局对象
 * interface 和 type 声明全局类型
 * export 导出变量
 * export namespace 导出（含有子属性的）对象
 * export default ES6 默认导出
 * export = commonjs 导出模块
 * export as namespace UMD 库声明全局变量
 * declare global 扩展全局变量
 * declare module 扩展模块
 * /// <reference /> 三斜线指令
 */

/**
 * 声明文件必需以 .d.ts 为后缀
 */

// 声明全局变量
declare const jQuery: (selector: string) => any;

// 定义全局函数的类型
declare function jQuery(selector: string): any;
// 支持重载
declare function jQuery(domReadyCallback: () => any): any;

// 声明全局类

declare class Animal {
  name: string;
  constructor(name: string);
  sayHi(): string;
}

// 定义外部枚举
declare enum Directions {
  Up,
  Down,
  Left,
  Right
}

// namespace 是 ts 早期时为了解决模块化而创造的关键字，中文称为命名空间
// 随着 ES6 的广泛应用，现在已经不建议再使用 ts 中的 namespace，而推荐使用 ES6 的模块化方案了，故我们不再需要学习 namespace 的使用了
// namespace 被淘汰了，但是在声明文件中，declare namespace 还是比较常用的，它用来表示全局变量是一个对象，包含很多子属性
declare namespace jQuery {
  function ajax(url: string, settings?: any): void;
  // 如果对象拥有深层的层级，则需要用嵌套的 namespace 来声明深层的属性的类型
  namespace fn {
    function extend(object: any): void;
  }
}


// interface 和 type

declare namespace jQuery {
  // 防止命名冲突
  interface AjaxSettings {
    method?: 'GET' | 'POST'
    data?: any;
  }
  function ajax(url: string, settings?: AjaxSettings): void;
}

/**
 * npm 包的声明文件主要有以下几种语法：
 *
 * export 导出变量
 * export namespace 导出（含有子属性的）对象
 * export default ES6 默认导出
 * export = commonjs 导出模块
 */
export {
  jQuery,
  Animal,
  Directions
}
/**
 * UMD 库
 *
 * export as namespace
 */
export as namespace foo;
export default foo;

declare function foo(): string;
declare namespace foo {
  const bar: number;
}

/**
 * 模块插件
 * declare module
 * 如果是需要扩展原有模块的话，需要在类型声明文件中先引用原有模块，再使用 declare module 扩展原有模块
 */
declare module 'foo' {
  export interface Foo {
    foo: string;
  }
}

declare module 'bar' {
  export function bar(): string;
}
/**
 * 声明文件中的依赖
 *
 * 使用import语句或者三斜杠指令
 */
// 其中用到了 types 和 path 两种不同的指令。它们的区别是：types 用于声明对另一个库的依赖，而 path 用于声明对另一个文件的依赖。

// node_modules/@types/jquery/index.d.ts

/// <reference types="sizzle" />
/// <reference path="JQueryStatic.d.ts" />
/// <reference path="JQuery.d.ts" />
/// <reference path="misc.d.ts" />
/// <reference path="legacy.d.ts" />

/**
 * 自动生成
 * 在命令行中添加 --declaration（简写 -d），或者在 tsconfig.json 中添加 declaration 选项。
 */
