/*8. 迭代器模式

概念解读
迭代器模式: 提供一种方法顺序访问一个聚合对象中的各个元素,使用者并不需要关心该方法的内部表示.
作用

为遍历不同集合提供统一接口
保护原集合但又提供外部访问内部元素的方式

实际案例
迭代器模式模式最常见的案例就是数组的遍历方法如forEach, map, reduce.
代码展示
接下来笔者使用自己封装的一个遍历函数来让大家更加理解迭代器模式的使用,该方法不仅可以遍历数组和字符串,还能遍历对象.lodash里的_.forEach(collection, [iteratee=_.identity])方法也是采用策略模式的典型应用.
*/

function _each(el, fn = (v, k, el) => {}) {
  // 判断数据类型
  function checkType(target){
    return Object.prototype.toString.call(target).slice(8,-1)
  }

  // 数组或者字符串
  if(['Array', 'String'].indexOf(checkType(el)) > -1) {
    for(let i=0, len = el.length; i< len; i++) {
      fn(el[i], i, el)
    }
  }else if(checkType(el) === 'Object') {
    for(let key in el) {
      fn(el[key], key, el)
    }
  }
}