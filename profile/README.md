## 个人简历模版

欢迎下载，直接修改。

预览地址: http://me.jackpu.com







> [Medium](https://medium.com/) 是全球非常知名的阅读平台，允许用户多人协作，并将自己的内容发布到平台上，让更多人知道自己所要表达的信息。
之前写过一篇关于Pinterest如何处理图片预加载的文章，有兴趣的可以点击[这里](http://www.jackpu.com/shi-xian-lei-si-pinterest-de-tu-pian-yu-jia-zai-gong-neng/) 阅读。今天我们主要分析下Medium在图片预加载油哪些值得大家学习的地方。

先来观察下效果吧：

<video  style="width:480px;height:360px;" src="https://jmperezperez.com/assets/images/posts/medium-progressive-loading.mp4"/>

其实我们可以看到在在那些文章中的图片，我们可以看到起初是一张非常小的并且模糊的图片，随后渐变成我们预期的大图。总之Po主是蛮喜欢这样的效果的。

如果你打开控制台去观察网络请求，就可以看到请求了一张小图然后加载了一张比较大的图片。

### 具体流程

1. 渲染一个展示图片的 div ，然后将他的padding-bottom设置成百分比，从而与图片长宽比一致。这样做可以避免在图片渲染的时候引起上下跳动的影响。这种加载也被称作[intrinsic placeholders](http://daverupert.com/2015/12/intrinsic-placeholders-with-picture/)


2. 加载一个较小的图片。他们大约会请求一张缩略的jpeg图(eg:20%)，实际上这是直接在代码中写了 img标签的，浏览器会正常请求；

3. 一旦图片加载了，它们会开始绘制一个canvas标签，图片的数据会传递给自定义的`blur`函数，这个函数与[StackBlur](http://www.quasimondo.com/StackBlurForCanvas/StackBlurDemo.html)有点相似，但不完全，这个同时，网络开始请求大图。

4. 大图加载完毕后，于是区域便展示大图，而canvas则会隐藏掉。

我们会使用`transition`从而让整个效果变得更加流畅。

### 基本结构

基本的html结构如下：

``` html
<figure>
  <div>
    <div/> <!-- this div keeps the aspect ratio so the placeholder doesn't collapse -->
    <img/> <!-- this is a tiny image with a resolution of e.g. ~27x17 and low quality -->
    <canvas/> <!-- takes the above image and applies a blur filter -->
    <img/> <!-- the large image to be displayed -->
    <noscript/> <!-- fallback for no JS -->
  </div>
</figure>
```

补充完相应的加载内容和样式后如下：
``` html 
<figure name="7012" id="7012" class="graf--figure graf--layoutFillWidth graf-after--h4">
  <div class="aspectRatioPlaceholder is-locked">
    <div class="aspect-ratio-fill" style="padding-bottom: 66.7%;"></div>
    <div class="progressiveMedia js-progressiveMedia graf-image is-canvasLoaded is-imageLoaded" data-image-id="1*sg-uLNm73whmdOgKlrQdZA.jpeg" data-width="2000" data-height="1333" data-scroll="native">
      <img src="https://cdn-images-1.medium.com/freeze/max/27/1*sg-uLNm73whmdOgKlrQdZA.jpeg?q=20" crossorigin="anonymous" class="progressiveMedia-thumbnail js-progressiveMedia-thumbnail">
        <canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="47"></canvas>
        <img class="progressiveMedia-image js-progressiveMedia-image __web-inspector-hide-shortcut__" data-src="https://cdn-images-1.medium.com/max/1800/1*sg-uLNm73whmdOgKlrQdZA.jpeg" src="https://cdn-images-1.medium.com/max/1800/1*sg-uLNm73whmdOgKlrQdZA.jpeg">
        <noscript class="js-progressiveMedia-inner">&lt;img class="progressiveMedia-noscript js-progressiveMedia-inner" src="https://cdn-images-1.medium.com/max/1800/1*sg-uLNm73whmdOgKlrQdZA.jpeg"&gt;</noscript>
    </div>
  </div>
</figure>
```

*注意请求图片大小和设备相关*


### 复原这种效果

原作者将代码放到了[codepen](http://codepen.io/jmperez/pen/yYjPER)上,而作者也适用了CSS的blur滤镜，没有采用canvas效果。




<p data-height="265" data-theme-id="0" data-slug-hash="yYjPER" data-default-tab="js,result" data-user="jmperez" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/jmperez/pen/yYjPER/">Reproducing Medium loading image effect</a> by José Manuel Pérez (<a href="http://codepen.io/jmperez">@jmperez</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

作者建议你禁用缓存，并且模拟网络比如(3G)。

<img src="https://jmperezperez.com/assets/images/posts/medium-codepen.png"/>
-------
 自己的[Demo](http://events.jackpu.com/medium-like-image-loading/)

### 是否值得这样做？

实际上，还有很多类似方式去渲染图片，一些年前，要添加一些动画，以及模糊的效果还有点困难，但是现在，很多时候我们都只是受限于加载延迟，而不再是设备的兼容性，从而我们可以利用这些视觉效果去提升用户体验。

控制图片的加载，有很多优点:

+ 延迟加载。使用JS控制图片加载可以自由的控制什么样的图片去完成加载，当所有的小图完成加载后，JS可以实现加载在所在可视区域的大图完成渲染。
+ 更好内容预置。那些缩略图很小，几乎2kb左右，再加模糊效果，这样的效果会比单纯的底色好很多。
+ 定制图片大小。Medium定制了很多不同的图片，根据用户的不同设备，从而展示出不一样大小的图片。

#### 使用Data URIs

对于缩略图，我们可以取消外在请求资源，从而使用Data URIs虽然增大了html的体积，但是却可以快速的完成缩略图的渲染。模糊的效果允许这些图片足够的笑，自己做了一个测试，0.5kb的图片与4kb的效果相差无几。

#### 模糊效果
默认情况下，浏览器将图片放大的在展示的时候会稍微用点模糊效果在图片上，这样的效果也可以[取消](http://superuser.com/questions/530317/how-to-prevent-chrome-from-blurring-small-images-when-zoomed-in)掉。

> [...]浏览器会使用这样一种方式去渲染它，从而避免让大家觉得如此“粗犷”的完成渲染。[参见Google Developers](https://developers.google.com/web/updates/2015/01/pixelated)

当然这种效果可以在Chrome,Firefox,Safari中工作(IE未测试)，不过Chrome的效果会更好点。

记住这样的图片只有27像素，并且质量非常低，这样反而可以带来一种极好的效果。但是，如果上面的效果对你而言还不够完美的话，我们可以考虑更为复杂的方案。

我们可以通过使用[CSS 滤镜](http://codepen.io/aniketpant/pen/DsEve).而且现在有很多[浏览器](http://caniuse.com/#feat=css-filters)都系支持该特性.我相信Medium的工程师在考虑用vanvas之前，一定想到过这样的方式，可能是她们觉得这种方式不值得鼓励，从而放弃使用Css了。

这种方式的主要优点就是你可以通过Css去控制你需要模糊的程度，而且相对容易实现。

还有一种方式是，你可以尝试SVG的模糊效果，详见[The “Blur Up” Technique for Loading Background Images](https://css-tricks.com/the-blur-up-technique-for-loading-background-images/)和[Textured Gradients in Pure CSS.])(http://rentafounder.com/textured-gradients-in-pure-css/)

### 谷歌是如何使用图片预加载的

当我们搜索图片的时候，我们会看到下面这种情况:

<img src=“https://jmperezperez.com/assets/images/posts/google-images-placeholder.png” />

谷歌在进行图片加载的时候会预先将背景渲染出一种固定的颜色，随后才显示完成加载的图片。

她们可能使用的是图片中最主要的色彩，然后将其运用在背景上，从而给人一种快速加载的效果。

### Facebook的 200 byte方案

早些时候facebook发表过一篇 [图片预览背后的技术](https://code.facebook.com/posts/991252547593574/the-technology-behind-preview-photos/)，里面阐述了它们是如何展示一张42px x 42px 的并且去掉JPEG头的图片。

由于这些图片是用于服务端，它们知道该如何去添加一个明确的压缩头部的JPEG。但是做网站的我们，只能依靠JavaScript去完成这样的工作。我们可以尝试使用Worker 去完成组装，然后在利用JS去发出图片内容的请求。

无论如何，这都看起来像是对于Web扼杀，但我还是建议大家阅读下[使用Webp](https://jmperezperez.com/webp-placeholder-images/)去生成小的的缩略图。

#### LQIP（压缩图片优先呈现）

不用等到最终的图片完成渲染，我们可以提供一张高度压缩的图片先展示出来，然后在将其替换掉.这大概就是[LQIP的主要内容](http://www.guypo.com/introducing-lqip-low-quality-image-placeholders/)。其实这和Medium的方式大同小异，只不过这个方案要求更高的图片压缩，但是维持和原图的一致的像素。

### 小结

如果你的站点需要加载大量的图片的话，我们就更改着手如何规划我们的加载流畅，因为这个关系到网站的性能以及用户体验。

如果你生成了不同大小的缩略图，那么你就可以试验下当图片加载时，将较小的图片作为背景。




-------

原文地址: https://jmperezperez.com/medium-image-progressive-loading-placeholder/ 

感谢作者[@José Manuel Pérez](José Manuel Pérez)授权翻译 💐💐🎆🎆。