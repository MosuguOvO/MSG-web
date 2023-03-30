<template>
  <div class="box2">
    <div class="content-box">
      <div class="content-box-introduce">
        <el-container>
          <div class="main-box">
            <el-main v-for="item in articleStore.articleList" style="padding-bottom: 1.5rem">
              <router-link style="color: black" :to="`/article/` + item.id">
                <div class="blog-box">
                  <span class="tag">原创</span>
                  <div class="blog-box-img"></div>
                  <div class="blog-box-content">
                    <h1>{{ item.title }}</h1>
                    <p class="introduce">{{ item.descripe }}</p>
                    <div class="blog-box-history">
                      <span>
                        <i class="iconfont icon-shijian"></i>
                        {{ item.time.slice(0, 10) }}</span
                      >
                      <span>
                        <i class="iconfont icon-yanjing"></i>
                        {{ item.watched }}</span
                      >
                      <span>
                        <i class="iconfont icon-pinglun"></i>
                        {{ item.comment }}
                      </span>
                      <span>
                        <i class="iconfont icon-dianzan_kuai"></i>
                        {{ item.like }}</span
                      >
                      <span class="lastspan">
                        <i class="iconfont icon-zhuchiren"></i>
                        {{ item.author }}</span
                      >
                    </div>
                  </div>
                </div>
              </router-link>
            </el-main>
          </div>
          <div class="navside">
            <div class="nav-box">
              <el-aside width="27rem">
                <WeatherCard />
              </el-aside>
            </div>
            <div class="nav-box" style="margin-top: 1rem">
              <el-aside width="27rem">
                <TopArticle />
              </el-aside>
            </div>
          </div>
        </el-container>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useArticleStore } from '@/stores/article';
import { defineAsyncComponent, Suspense } from 'vue';

const articleStore = useArticleStore();
const WeatherCard = defineAsyncComponent(() => import('./WeatherCard.vue'));

onMounted(() => {
  //触发action来获取数据 待修改
  articleStore.getArticle();
  for (let i = 1; i <= articleStore.articleList.length; i++) {
    articleStore.getArticleComment(i);
    articleStore.getArticleLike(i);
  }
});
</script>
<style scoped lang="less">
@import url(../styles/ContentBox.less);
.nav-box {
  border: 4px solid #771b2f;
  border-radius: 2rem;
  padding: @padding-general;
}
.main-box {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.content-box-introduce {
  .el-container {
    padding-bottom: 0;
  }
}
.el-main {
  padding: 0;
  padding-right: 2rem;
}
.blog-box {
  width: 100%;
  display: flex;
  position: relative;
  margin-top: 0;
  padding-top: 0;
  height: 15rem;
  border: 4px solid #771b2f;
  border-radius: 2rem;
  padding: @padding-general;
  overflow: hidden;
  p {
    margin: 0;
    font-size: 1.2rem;
    color: rgba(0, 0, 0, 0.68);
  }
  &-img {
    width: 22rem;
    height: 100%;
    background: url(../imgs/01.png) no-repeat;
    background-size: cover;
  }
  &-content {
    display: flex;
    flex-direction: column;
    padding-left: 1.5rem;
    justify-content: space-between;
  }
  &-history {
    display: flex;
    span {
      padding-right: 6.2rem;
    }
    .lastspan {
      padding-right: 0;
    }
  }
  .tag {
    position: absolute;

    z-index: 999;
    background-color: #0088f5b3;
    color: white;
  }
  h2 {
    display: block;
  }
}
</style>
