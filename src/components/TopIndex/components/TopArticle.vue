<template>
  <div class="article-top">
    <div class="introduce">
      <span><i class="iconfont icon-huo"></i> 置顶文章</span>
    </div>
    <el-divider></el-divider>
    <div class="article-top-title" v-for="(item, index) in watchedArticleList" :key="index">
      <span>{{ index + 1 }}</span>
      <span class="content">{{ item.title }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useArticleStore } from '@/stores/article';
const articleStore = useArticleStore();
const watchedArticleList = ref([]);

watchEffect(() => {
  if (articleStore.articleList.length > 0) {
    watchedArticleList.value = articleStore.articleList
      .slice()
      .sort((a, b) => b.watched - a.watched);
  }
});
</script>

<style scoped lang="less">
@import url(../styles/TopArticle.less);
</style>
