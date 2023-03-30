<template>
  <div class="blog">
    <div class="blog-main">
      <h1 class="blog-title">{{ blogStore.blog.title }}</h1>
      <h3 class="blog-author">作者:{{ blogStore.blog.author }}</h3>
      <pre class="blog-content">{{ blogStore.blog.content }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useblogStore } from '@/stores/blog';
const blogStore = useblogStore();
onBeforeMount(async () => {
  await blogStore.getArticle();
});
onMounted(() => {});
</script>
<style scoped lang="less">
@import url(./styles/index.less);
</style>
