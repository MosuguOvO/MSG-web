<template>
  <div class="blog">
    <div class="blog-main">
      <h1 class="blog-title">{{ articleStore.articleDetail.title }}</h1>
      <h3 class="blog-author">{{ articleStore.articleDetail.author }}</h3>
      <pre class="blog-content">{{ articleStore.articleDetail.content }}</pre>
      <ElDivider />
      <div class="comment">
        <span>留言列表</span>
        <span>最新</span>
        <div class="comment-card" v-for="item in articleStore.articleCommentDetail">
          <el-card class="box-card">
            <template #header>
              <div class="card-header">
                <span>{{ item.nickname }}</span>
                <i class="iconfont icon-xiaolian"></i>
              </div>
            </template>
            <div class="text item">{{ item.comment }}</div>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { useArticleStore } from '@/stores/article';
//获取路由上:id这样传递的值
const id = router.currentRoute.value.params.id;
const articleStore = useArticleStore();
onBeforeMount(async () => {
  await articleStore.getArticleById(id);
  await articleStore.getArticle();
  await articleStore.getArticleCommentByArticleId(id);
});

watchEffect(() => {
  // const indentedText = text.replace(/\n/g, '\n  ');
  console.log(articleStore.articleDetail.content);
});
</script>
<style scoped lang="less">
.comment-card {
  margin-top: @margin-general;
  border: 2px solid #771b2f;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.blog {
  width: 75%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border: 4px solid #771b2f;
  border-radius: 2.5rem 2.5rem 0 0;
  box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.2);
  margin-top: 1rem;
  padding: @padding-general;
  &-title {
    padding: 2rem;
    text-align: center;
    font-size: @very-big-text;
  }
  &-author {
    text-align: center;
    border-bottom: 1px solid black;
    margin-bottom: @margin-general;
  }
  &-content {
    font-weight: 500;
    padding: @padding-general;
    white-space: pre-wrap;
    font-size: 1.8rem;
    line-height: 2.7rem;
  }
  .comment {
    span {
      margin: @padding-general 3rem @padding-general 0;
      font-size: @big-text;
      font-weight: 600;
    }
    :nth-child(1) {
      font-size: @big-text;
    }
  }
}
</style>
