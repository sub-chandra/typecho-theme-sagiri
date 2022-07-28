<?php if (!defined('__TYPECHO_ROOT_DIR__')) exit; ?>



<article class="post" itemscope itemtype="http://schema.org/BlogPosting">
  <div class="post-badge">
    <span itemprop="about" itemscope="" itemtype="http://schema.org/Thing">
      <?php if ($this->category) $this->category(',');
      else _e('o_o ....') ?>
    </span>
  </div>
  <header class="post-header">
    <h1 class="post-title" itemprop="name headline"><a class="post-title-link" itemprop="url" href="<?php $this->permalink() ?>"><?php $this->title() ?></a></h1>
    <div class="post-meta">
      <span><?php _e('<i class="iconfont icon-time"></i> '); ?><time datetime="<?php $this->date('c'); ?>" itemprop="datePublished"><?php $this->date(); ?></time></span>
      <span>
        <i class="iconfont icon-view"></i>
        <?php
        i18n('浏览量 ');
        getPostView($this);
        ?></span>
      <span itemprop="interactionCount">
        <a itemprop="discussionUrl" href="<?php $this->permalink() ?>#comments">
          <i class="iconfont icon-Comments"></i>
          <?php $this->commentsNum(_i18n('暂无评论'), _i18n('评论数 1'), _i18n('%d 条评论')); ?>
        </a>
      </span>
    </div>
  </header> 
  
  <div class="post-content" itemprop="articleBody">
  <?php if ($this->is('post')) : ?>
  
    <?php if($this->fields->draft_post_tip=='display'):?>
        <center>
            <p style="background-color: #f9d27d;color:#0eb0c9"><strong>当您看到此句，说明本文章并不是最终版本</strong></p>
        </center>
    <?php endif;?>
    
    
    <?php if ($this->fields->postpage_footer_cp == 'display'): 
  //if (is_array($this->fields->cpright) && in_array('postpage_footer_cp', $this->fields->cpright)) : ?>
        <blockquote>
            <strong>本文作者：</strong><a target="_blank" href="https://www.chandrasekharlu.site">Chandrasekhar</a>
            <br>
            <strong>本文链接：</strong><a target="_blank" href="<?php $this->permalink() ?>"><?php $this->title() ?></a>
            <br>
            <strong>版权声明：</strong>本文为原创文章，版权归 <a href="<?php $this->options->siteUrl(); ?>" target="_blank"><?$this->options->title();?></a> 所有，转载请注明出处！
        </blockquote>
    <?php endif; ?>
    
    
    <?php if($this->fields->reship):?>
        <blockquote>
            <strong>版权声明：</strong>本文章转载于网络 <br>
            <strong>本文链接：</strong>
            <a rel="external nofollow" href=<?php $this->fields->reship();?></a>
            <!--<a target="_blank" href="<?php $str_reship = $this->fields->reship();?>"><?php $this->title() ?></a>-->
            
            </blockquote>
   <?php endif; ?>

      <?php replaceTag($this->content); ?><!--Here is the single page content-->
         <!--  require_once('./functions.php');-->
         <!--  if ($judge_cp):-->
         <!--echo $this->fields->cpright();-->
      
      <!--Copright-->
      <?php if($this->fields->clickboard_cp =='display'):?>
        <script>
        document.body.addEventListener('copy', function (e) {
            if (window.getSelection().toString() && window.getSelection().toString().length > 10)
            {
              setClipboardText(e);
              }
             }); 
           function setClipboardText(event) {
            var clipboardData = event.clipboardData || window.clipboardData;
            if (clipboardData) {
                event.preventDefault();
                var htmlData = ''
                  + '著作权归作者所有。<br>'
                  + '商业转载请联系作者获得授权，非商业转载请注明出处。<br>'
                  + '作者：<?php $this->author() ?><br>'
                  + '链接：' + window.location.href + '<br>'
                  + '来源：<?php $this->options->siteUrl(); ?><br><br>'
                  + window.getSelection().toString();
                var textData = ''
                  + '著作权归作者所有。\n'
                  + '商业转载请联系作者获得授权，非商业转载请注明出处。\n'
                  + '作者：<?php $this->author() ?>\n'
                  + '链接：' + window.location.href + '\n'
                  + '来源：<?php $this->options->siteUrl(); ?>\n\n'
                  + window.getSelection().toString();
                clipboardData.setData('text/html', htmlData);
                clipboardData.setData('text/plain',textData);
                }
            }
        </script>
        <?php endif;?>
   
    </div>
    
    
    
  <?php else : ?>

    <?php if (!empty($this->options->feature) && in_array('showThumb', $this->options->feature)) : ?>
      <?php showThumb($this); ?>
    <?php endif; ?>
    <div class="post-content" itemprop="articleBody">
      <p><?php $this->excerpt(); ?></p><!--Thisis the home page content-->
      <div text-center class="post-button">
        <a href="<?php $this->permalink() ?>" class="sheen">
          <?php _e('- ' . _i18n('阅读全文') . ' -'); ?>
        </a>
      </div>
    </div>
</article>

<?php endif; ?>