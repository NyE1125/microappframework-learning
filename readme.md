## 小程序运行框架

能够在浏览器中运行小程序的简易框架，区分视图层和逻辑层。

## 原理

#### 双线程通信

视图层和逻辑层通过web worker完成双线程通信

#### Vdom

基于vdom的小程序渲染， 使用 jsx 的方式， 通过babel编译成vdom

#### 组件

  利用 render function ，可以实现自定义组件，这里只实现了view和list

## 不足

目前只是一个很简易的框架，只能支持小程序的部分，并不能运行一个完整的小程序，没有样式支持，不包含生命周期...

## 运行

安装依赖

```powershell
npm install
```

运行

```powershell
npm run dev


Successfully compiled 4 files with Babel (458ms).
Available on: http://127.0.0.1:8000
```

点开网址查看渲染结果

## 参考

 [手写简易前端框架：function 和 class 组件_神光的编程秘籍的技术博客  _51CTO博客](https://blog.51cto.com/u_15506823/5113084) 

 [手写简易前端框架：vdom 渲染和 jsx 编译_神光的编程秘籍的技术博客 _   51CTO博客](https://blog.51cto.com/u_15506823/5113310) 

 [手写简易前端框架：patch 更新（1.0 完结篇）_神光的编程秘籍的技术博客  _51CTO博客](https://blog.51cto.com/u_15506823/5135633) 

项目参考，关于vdom部分的实现基本来自该项目

 [QuarkGluonPlasma/frontend-framework-exercize: 手写前端框架代码 (github.com)](https://github.com/QuarkGluonPlasma/frontend-framework-exercize) 