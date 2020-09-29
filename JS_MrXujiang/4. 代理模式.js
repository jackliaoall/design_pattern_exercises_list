/*4. 代理模式

概念解读
代理模式: 一个对象通过某种代理方式来控制对另一个对象的访问.
作用

远程代理(一个对象对另一个对象的局部代理)
虚拟代理(对于需要创建开销很大的对象如渲染网页大图时可以先用缩略图代替真图)
安全代理(保护真实对象的访问权限)
缓存代理(一些开销比较大的运算提供暂时的存储，下次运算时，如果传递进来的参数跟之前相同，则可以直接返回前面存储的运算结果)

注意事项
使用代理会增加代码的复杂度,所以应该有选择的使用代理.
实际案例
我们可以使用代理模式实现如下功能:

通过缓存代理来优化计算性能
图片占位符/骨架屏/预加载等
合并请求/资源

代码展示
接下来我们通过实现一个计算缓存器来说说代理模式的应用.*/

// 缓存代理
function sum(a, b){
    return a + b
  }
  let proxySum = (function(){
    let cache = {}
    return function(){
        let args = Array.prototype.join.call(arguments, ',');
        if(args in cache){
            return cache[args];
        }
  
        cache[args] = sum.apply(this, arguments)
        return cache[args]
    }
  })()