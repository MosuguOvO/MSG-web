<template>
  <div class="box2">
    <div class="content-box">
      <video class="content-box-video" loop controls muted playsinline autoplay>
        <source src="@/assets/video/login.mp4" type="video/mp4" />
      </video>
      <div class="content-box-introduce">
        <h2>
          工具都在同一处
          <i class="iconfont icon-gongju" />
          有助
          <br />
          于提高搜索效率
        </h2>
        <p>
          基于Vue+TypeScript+Element-Plus+Vite&nbsp;
          实现,致力于解决日常工具散乱,近期热门电影,收集数据并统计的练习项目⭐
        </p>
        <p class="content-box-introduce-github">
          <a href="https://github.com/MosuguOvO"
            >Github源码地址
            <i class="iconfont icon-jiantou_xiangyou" />
            <div class="githubMove"></div>
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped lang="less">
@import url(../styles/ContentBox.less);
</style>
