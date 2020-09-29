/*1.1 概念解读
单例模式: 保证一个类只有一个实例, 一般先判断实例是否存在,如果存在直接返回, 不存在则先创建再返回,这样就可以保证一个类只有一个实例对象.
1.2 作用

模块间通信
保证某个类的对象的唯一性
防止变量污染

1.3 注意事项

正确使用this
闭包容易造成内存泄漏,所以要及时清除不需要的变量
创建一个新对象的成本较高

1.4 实际案例
单例模式广泛应用于不同程序语言中, 在实际软件应用中应用比较多的比如电脑的任务管理器,回收站, 网站的计数器, 多线程的线程池的设计等.
1.5 代码实现*/

(function(){
  // 养鱼游戏
  let fish = null

  function catchFish() {
    // 如果鱼存在,则直接返回
    if(fish) {
      return {
        fish,
        water: function() {
          // let water = this.fish.getAttribute('weight')
          // this.fish.setAttribute('weight', ++water)
          console.log("water");
        }
    } 
  } else {
      // 如果鱼不存在,则获取鱼再返回
      //fish = document.querySelector('#cat')
      fish = 'fish';
      return {
        fish,
        water: function() {
          // let water = this.fish.getAttribute('weight')
          // this.fish.setAttribute('weight', ++water)
          console.log("first water");
        }
      }
    }
  }

  // 每隔3分鐘喂一次水
  setInterval(() => {
    catchFish().water()
  }, 3*1000)
})()
