/*3. 建造者模式

概念解读
建造者模式: 将一个复杂的逻辑或者功能通过有条理的分工来一步步实现.
作用

分布创建一个复杂的对象或者实现一个复杂的功能
解耦封装过程, 无需关注具体创建的细节

注意事项

需要有可靠算法和逻辑的支持
按需暴露一定的接口

实际案例
建造者模式其实在很多领域也有应用,笔者之前也写过很多js插件,大部分都采用了建造者模式, 可以在笔者github地址徐小夕的github学习参考. 其他案例如下:

jquery的ajax的封装
jquery插件封装
react/vue某一具体组件的设计

代码展示
笔者就拿之前使用建造者模式实现的一个案例:Canvas入门实战之用javascript面向对象实现一个图形验证码, 那让我们使用建造者模式实现一个非常常见的验证码插件吧!
*/

// canvas绘制图形验证码
(function(){
    function Gcode(el, option) {
        this.el = typeof el === 'string' ? document.querySelector(el) : el;
        this.option = option;
        this.init();
    }
    Gcode.prototype = {
        constructor: Gcode,
        init: function() {
            if(this.el.getContext) {
                isSupportCanvas = true;
                var ctx = this.el.getContext('2d'),
                // 设置画布宽高
                cw = this.el.width = this.option.width || 200,
                ch = this.el.height = this.option.height || 40,
                textLen = this.option.textLen || 4,
                lineNum = this.option.lineNum || 4;
                var text = this.randomText(textLen);
    
                this.onClick(ctx, textLen, lineNum, cw, ch);
                this.drawLine(ctx, lineNum, cw, ch);
                this.drawText(ctx, text, ch);
            }
        },
        onClick: function(ctx, textLen, lineNum, cw, ch) {
            var _ = this;
            this.el.addEventListener('click', function(){
                text = _.randomText(textLen);
                _.drawLine(ctx, lineNum, cw, ch);
                _.drawText(ctx, text, ch);
            }, false)
        },
        // 画干扰线
        drawLine: function(ctx, lineNum, maxW, maxH) {
            ctx.clearRect(0, 0, maxW, maxH);
            for(var i=0; i < lineNum; i++) {
                var dx1 = Math.random()* maxW,
                    dy1 = Math.random()* maxH,
                    dx2 = Math.random()* maxW,
                    dy2 = Math.random()* maxH;
                ctx.strokeStyle = 'rgb(' + 255*Math.random() + ',' + 255*Math.random() + ',' + 255*Math.random() + ')';
                ctx.beginPath();
                ctx.moveTo(dx1, dy1);
                ctx.lineTo(dx2, dy2);
                ctx.stroke();
            }
        },
        // 画文字
        drawText: function(ctx, text, maxH) {
            var len = text.length;
            for(var i=0; i < len; i++) {
                var dx = 30 * Math.random() + 30* i,
                    dy = Math.random()* 5 + maxH/2;
                ctx.fillStyle = 'rgb(' + 255*Math.random() + ',' + 255*Math.random() + ',' + 255*Math.random() + ')';
                ctx.font = '30px Helvetica';
                ctx.textBaseline = 'middle';
                ctx.fillText(text[i], dx, dy);
            }
        },
        // 生成指定个数的随机文字
        randomText: function(len) {
            var source = ['a', 'b', 'c', 'd', 'e',
            'f', 'g', 'h', 'i', 'j', 
            'k', 'l', 'm', 'o', 'p',
            'q', 'r', 's', 't', 'u',
            'v', 'w', 'x', 'y', 'z'];
            var result = [];
            var sourceLen = source.length;
            for(var i=0; i< len; i++) {
                var text = this.generateUniqueText(source, result, sourceLen);
                result.push(text)
            }
            return result.join('')
        },
        // 生成唯一文字
        generateUniqueText: function(source, hasList, limit) {
            var text = source[Math.floor(Math.random()*limit)];
            if(hasList.indexOf(text) > -1) {
                return this.generateUniqueText(source, hasList, limit)
            }else {
                return text
            }  
        }
    }
    new Gcode('#canvas_code', {
        lineNum: 6
    })
})();
// 调用
new Gcode('#canvas_code', {
  lineNum: 6
})