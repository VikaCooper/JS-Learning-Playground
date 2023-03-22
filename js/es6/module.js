/**
 * Created by cooper on 2023/3/22.
 */

/**
 * AMD
 * Asynchronous ModuleDefinition（AMD），异步模块定义，采用异步方式加载模块。
 * 所有依赖模块的语句，都定义在一个回调函数中，等到模块加载完成之后，这个回调函数才会运行
 */

/** main.js 入口文件/主模块 **/
/**
 * // 首先用config()指定各模块路径和引用名
 * require.config({
 *   baseUrl: "js/lib",
 *   paths: {
 *     "jquery": "jquery.min",  //实际路径为js/lib/jquery.min.js
 *     "underscore": "underscore.min",
 *   }
 * });
 * // 执行基本操作
 * require(["jquery","underscore"],function($,_){
 *   // some code here
 * });
 */

/**
 * CommonJs
 * 一套 Javascript 模块规范，用于服务端
 *
 * 所有代码都运行在模块作用域，不会污染全局作用域
 * 模块是同步加载的，即只有加载完成，才能执行后面的操作
 * 模块在首次执行后就会缓存，再次加载只返回缓存结果，如果想要再次执行，可清除缓存
 * require返回的值是被输出的值的拷贝，模块内部的变化也不会影响这个值
 * // a.js
 * module.exports={ foo , bar}
 *
 * // b.js
 * const { foo,bar } = require('./a.js')
 */

import * as util from '../util.js'

util.printAnything('imported all util methods')
