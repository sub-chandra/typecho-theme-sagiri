//file:page.php，独立页面模板
&lt;?php
//省略头部
&lt;div class="article_content"&gt;
    &lt;?php $this-&gt;widget('Widget_Archive@myCustomCategory', 'type=category', 'mid=1')-&gt;to($categoryPosts); ?&gt;
    &lt;?php  while($categoryPosts-&gt;next()):?&gt;
        &lt;h1&gt;&lt;?php $categoryPosts-&gt;title() ?&gt;&lt;/h1&gt;
        &lt;div&gt;&lt;?php $categoryPosts-&gt;content() ?&gt;&lt;/div&gt;
        &lt;?php //省略其他字段输出 ?&gt;
    &lt;?php endwhile;?&gt;
&lt;/div&gt;

//省略尾部