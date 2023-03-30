<template>
  <div class="carsouel-container">
    <!--  -->
    <el-carousel ref="carousel" arrow="always">
      <el-carousel-item v-for="item in items" :key="item.id" style="display: block">
        <!-- @click="$router.push(`/article/${item.id}` -->
        <div class="content">
          <div class="desc">
            <p class="title">{{ item.articleName }}</p>
            <p class="summary">{{ item.summary }}</p>
          </div>
          <!-- <MyElimage :img="item.banner" /> -->
          <el-image fit="cover" :src="item.banner"></el-image>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { ElCarousel } from 'element-plus';
const isLazy = false;
const props = defineProps({
  items: {
    type: Array as PropType<ArticleItemInfo[]>,
    default: () => []
  }
});
const carousel = ref<typeof ElCarousel>();
</script>

<style lang="less">
@import url(./styles/Carousel.less);

.gray {
  background-color: rgb(255, 255, 255);
  height: 100%;
  width: 100%;
  min-height: inherit;
  .flexbox(column);
}

.el_image__inner {
  height: 20%;
}
</style>
