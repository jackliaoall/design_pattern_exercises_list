/*2. 构造器模式

概念解读
构造器模式: 用于创建特定类型的对象,以便实现业务逻辑和功能的可复用.
作用

创建特定类型的对象
逻辑和业务的封装

注意事项

注意划分好业务逻辑的边界
配合单例实现初始化等工作
构造函数命名规范,第一个字母大写
new对象的成本,把公用方法放到原型链上

实际案例
构造器模式我觉得是代码的格局,也是用来考验程序员对业务代码的理解程度.它往往用于实现javascript的工具库,比如lodash等以及javascript框架.
代码展示*/

function Tools(){
    if(!(this instanceof Tools)){
      return new Tools()
    }
    this.name = 'js工具库'
    // 获取dom的方法
    this.getEl = function(elem) {
      return document.querySelector(elem)
    }
    // 判断是否是数组
    this.isArray = function(arr) {
      return Array.isArray(arr)
    }
    // 其他通用方法...
  }