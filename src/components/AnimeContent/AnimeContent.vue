<template>
  <div class="anime" style="border: none">
    <div class="anime-header">
      <div class="anime-header-img">
        <img :src="animeInfo.imgTag" alt="" />
      </div>
      <div class="anime-header-introduce">
        <h4>{{ animeInfo.title }}</h4>
        <p>
          别名: <span>{{ animeInfo.othertittle }}</span>
        </p>
        <p>
          作者: <span>{{ animeInfo.author }}</span>
        </p>
        <p>
          热度: <span>{{ animeInfo.heat }}</span>
        </p>
        <p>
          更新: <span>{{ animeInfo.update }}</span>
        </p>
        <p>
          状态: <span>{{ animeInfo.state }}</span>
        </p>
      </div>
    </div>
    <div class="anime-introduce">
      <h3>内容简介</h3>
      <p>{{ animeInfo.contentintroduce }}</p>
    </div>
    <div class="anime-content">
      <h3>章节列表</h3>
      <div class="anime-content-list">
        <ul class="anime-content-list-content">
          <li v-for="(item, index) in animeStore.animeChapterInfo" :key="index">
            <!--  -->
            <router-link :to="`/animewatch?id=${item.anime_id}&title=${item.chapter_title} `">
              <span>{{ item.chapter_title }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { useAnimeStore } from '@/stores/anime';
const animeStore = useAnimeStore();
const props = defineProps({
  detail: {
    type: Object,
    required: true
  }
});
const animeInfo = props.detail;
animeStore.getAnimeChapterInfo(animeInfo.id);
onMounted(() => {
  window.scrollBy({
    top: 92
  });
});
</script>

<style scoped lang="less">
@import url(./styles/AnimeContent.less);
</style>
