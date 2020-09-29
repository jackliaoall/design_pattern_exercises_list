/*6. 观察者模式

概念解读
观察者模式: 定义了一种一对多的关系, 所有观察对象同时监听某一主题对象,当主题对象状态发生变化时就会通知所有观察者对象,使得他们能够自动更新自己.
作用

目标对象与观察者存在一种动态关联,增加了灵活性
支持简单的广播通信, 自动通知所有已经订阅过的对象
目标对象和观察者之间的抽象耦合关系能够单独扩展和重用

注意事项
观察者模式一般都要注意要先监听, 再触发(特殊情况也可以先发布,后订阅,比如QQ的离线模式)
实际案例
观察者模式是非常经典的设计模式,主要应用如下:

系统消息通知
网站日志记录
内容订阅功能
javascript事件机制
react/vue等的观察者

代码展示
接下来我们我们使用原生javascript实现一个观察者模式:*/

class Subject {
    constructor() {
      this.subs = {}
    }
  
    addSub(key, fn) {
      const subArr = this.subs[key]
      if (!subArr) {
        this.subs[key] = []
      }
      this.subs[key].push(fn)
    }
  
    trigger(key, message) {
      const subArr = this.subs[key]
      if (!subArr || subArr.length === 0) {
        return false
      }
      for(let i = 0, len = subArr.length; i < len; i++) {
        const fn = subArr[i]
        fn(message)
      }
    }
  
    unSub(key, fn) {
      const subArr = this.subs[key]
      if (!subArr) {
        return false
      }
      if (!fn) {
        this.subs[key] = []
      } else {
        for (let i = 0, len = subArr.length; i < len; i++) {
          const _fn = subArr[i]
          if (_fn === fn) {
            subArr.splice(i, 1)
          }
        }
      }
    }
  }
  
  // 测试
  // 订阅
  let subA = new Subject()
  let A = (message) => {
    console.log('订阅者收到信息: ' + message)
  }
  subA.addSub('A', A)
  
  // 发布
  subA.trigger('A', '我是徐小夕')   // A收到信息: --> 我是徐小夕