<template>
  <div class="anime">
    <div class="anime-img" v-if="flag">
      <ul class="anime-img-list">
        <li v-for="(item, index) in animePage" :key="index">
          <img :src="item" alt="" />
        </li>
      </ul>
      <div class="anime-img-button">
        <el-button type="primary" @click="goLast" size="large">上一页</el-button>
        <el-button type="danger" size="large">
          <router-link to="/index">首页</router-link>
        </el-button>
        <el-button type="warning" @click="goNext" size="large">下一页</el-button>
      </div>
    </div>
    <div v-else class="anime-tips">
      <span>图片加载中</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAnimeStore } from '@/stores/anime';
const router = useRouter();
const route = useRoute();
const animeStore = useAnimeStore();
let animePage = ref([]);
let flag = ref(false);

watchEffect(async () => {
  await animeStore.getAnimePage(route.query.id, route.query.title);
  flag.value = true;
  animePage.value = JSON.parse(animeStore.animePage[0].chapter);
});
const goLast = () => {
  flag.value = false;
  let id = route.query.id;
  let title = route.query.title as string;
  let lastTitle = parseInt(title.slice(1, -1)) - 1;
  let lastTitleStr = '第' + lastTitle.toString().padStart(2, '0') + '话';
  if (lastTitle < 1) {
    return;
  } else {
    router.push(`/animewatch?id=${id}&title=${lastTitleStr}`);
  }
};
const goNext = async () => {
  flag.value = false;
  let id = route.query.id;
  let title = route.query.title as string;
  let nextTitle = parseInt(title.slice(1, -1)) + 1;
  let nextTitleStr = '第' + nextTitle.toString().padStart(2, '0') + '话';
  if (nextTitle < 1) {
    return;
  } else {
    console.log('获取成功');
  }
  await router.push(`/animewatch?id=${id}&title=${nextTitleStr}`);
};
router.beforeEach(() => {
  window.scrollTo({
    top: 0
  });
});
</script>

<style scoped lang="less">
@import url(./styles/index.less);
</style>
