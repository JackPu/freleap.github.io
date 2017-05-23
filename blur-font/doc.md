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

<iframe height='265' scrolling='no' title='Blur Filter' srcc='//codepen.io/grayghostvisuals/embed/Ivpto/?height=265&theme-id=light&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/grayghostvisuals/pen/Ivpto/'>Blur Filter</a> by GRAY GHOST (<a href='https://codepen.io/grayghostvisuals'>@grayghostvisuals</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### 基本样式

我们可以通过 `transition` 或者 `animation` 来实现动画效果，这里我们用 `transition`：

``` css
.blur-font{
  line-height: 2.2;
  letter-spacing: .12em;
  -webkit-transform-origin: left top;
  -ms-transform-origin: left top;
  transform-origin: left top;
  -webkit-transform: scale(0.94, 1);
  -ms-transform: scale(0.94, 1);
  transform: scale(0.94, 1);
  text-align: center;
  font-weight: 300;
  opacity: 0;
  -webkit-transform-origin: center center;
  -ms-transform-origin: center center;
  transform-origin: center center;
  -webkit-transform: scale(1.05);
  -ms-transform: scale(1.05);
  transform: scale(1.05);
  -webkit-filter: blur(10px);
  filter: blur(10px);
  -webkit-transition: .8s ease;
  transition: .8s ease .15s;
}
```

其中我们只需要关注  transition 和 filter 两个属性就行。然后我们设置 active 类，用于开始动画。

``` css
.blur-font.active{
  opacity: 1;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
  -webkit-filter: blur(0);
  filter: blur(0);
}

```

这个时候我们就可以在页面需要的时候激活 `class` 就好。比如你使用的 [jquery.fullPage](https://alvarotrigo.com/fullPage/)。你可以这样定义;

``` js
$('#fullpage').fullpage({
  onLeave(index, nextIndex) {
    $('.section').eq(index).find('.cover,.blur-font').addClass('active');
  }
});  
```



### 巧用 `transition-delay`

如果我们要想实现一个字一个字依次出现的效果也很简单，比如我们可以修改模糊动效的延迟时间:

``` css
.timeout1{
  transition-delay: .35s;
}
.timeout2{
  transition-delay: .65s;
}
```

``` html
<h3>
  <span class="blur-font">This</span>
  <span class="blur-font timeout1">is</span>
  <span class="blur-font timeout2">End</span>
</h3>

```

<img width="240" src="http://img1.vued.vanthink.cn/vued901d6ba738df3fc87d048966e1eefd8d.gif" />

查看 [Demo]()








