##SVG Icon Animation
### 使用 animation 改变元素的中的属性
~~~html
<svg width="300" height="300" xmlns="http://www.w3.org/200/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100">
     <path d="M10,10 L80,10 L80,80 L10,80 Z" style="fill:#2ecc71">
    <animate attributeName="d" attributeType="XML"
                 from="M10,10 L80,10 L80,80 L10,80 Z"  to="M30,30 L70,30 L70,70 L30,70 Z"
                 begin="0s" dur="5s"
                 fill="remove" repeatCount="indefinate"/>
         </path>
    <desc>d="M10,10 L80,10 L80,80 L10,80 Z"</desc>
</svg>

~~~


