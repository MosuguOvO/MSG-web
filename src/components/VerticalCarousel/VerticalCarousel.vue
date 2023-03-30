<template>
  <el-carousel height="200px" direction="vertical" :autoplay="false">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3 text="2xl" justify="center">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { ElCarousel } from 'element-plus';
const isLazy = false;
</script>

<style scoped lang="less">
@import url(./styles/VerticalCarousel.less);
</style>
