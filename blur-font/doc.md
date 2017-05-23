### 实现日本网站字体模糊特效

如果经常浏览日本的网站，你会看到日本网站经常会实现在页面中字体添加从模糊到正常的特效。

推荐两个网站，浏览效果:

[koshiki-stay,是一家提供旅游的网站](http://koshiki-stay.jp/)

[houjyuen, 一家园林网站](http://houjyuen-zouen.com/#/home)

当然还有很多网站使用了类似效果，你可以 [iiiimg](https://www.iiiimg.com) 查看一些比较漂亮和充满创意交互的站点。

### 基本实现

想到模糊，目前前端有两种基本实现

+ canvas 

canvas 你需要写一个模糊算法，你可以参考 [Codepen](http://codepen.io/zhaojun/pen/zZmRQe) 的想法， 关于算法，你还能自行搜索实现。底层原理就是对像素的操作。

+ css3 filter:blur()

现在移动端和PC的主流浏览器都开始对 `CSS Filter` 进行支持了，详情可以参考 [浏览器的兼容性情况](https://caniuse.com/#search=filter) 

<img src="http://img1.vued.vanthink.cn/vued2a817369fcd1aecf761d0e728ac9ae87.png" />


filter 可以支持很多效果函数: 

+ blur

+ contrast

+ opacity

+ url

这里我们主要是用到 blur 这个函数，它可对当前元素进行高斯模糊，效果如下;

<iframe height='265' scrolling='no' title='Blur Filter' src='//codepen.io/grayghostvisuals/embed/Ivpto/?height=265&theme-id=light&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/grayghostvisuals/pen/Ivpto/'>Blur Filter</a> by GRAY GHOST (<a href='https://codepen.io/grayghostvisuals'>@grayghostvisuals</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### 基本样式











