<template>
  <nav class="menu">
    <ul class="menu-list">
      <li @click="$router.push('/index')">
        <i class="iconfont icon-daohang"></i>
        <p>首页</p>
      </li>
      <li @click="$router.push('/index/movie')">
        <i class="iconfont icon-dianying"></i>
        <p>电影</p>
      </li>
      <li @click="$router.push('/index/anime')">
        <i class="iconfont icon-icon"></i>
        <p>漫画</p>
      </li>
      <!-- <li @click="$router.push('/index/message')">
        <i class="iconfont icon-liuyan"></i>
        <p>留言</p>
      </li> -->
    </ul>
  </nav>
</template>

<style scoped lang="less">
@import url(../styles/Menu.less);
</style>
