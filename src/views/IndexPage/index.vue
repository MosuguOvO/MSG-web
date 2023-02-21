<template>
  <main class="main">
    <div class="main-title">
      <h2>主要内容模块</h2>
    </div>
    <div class="main-content">
      <div class="main-content-box">
        <div class="main-content-box-vuedetail">
          <router-link class="VPNavBarTitle" to="/index/blog"
            ><!--[-->
            <div class="pic">
              <img src="@/assets/img/index4.png" style="width: 100%" />
            </div>
            <p>技术栈详情</p>
            <h2>详细地去了解本项目的开发过程</h2>
            <div class="bottom-box">
              <div class="bottomicon">
                <p>浏览详情</p>
                <i class="iconfont icon-jiantou_xiangyou"></i>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="main-content-box">
        <div class="main-content-box-vuedetail">
          <router-link class="VPNavBarTitle" to="/three"
            ><!--[-->
            <div class="pic">
              <img src="@/assets/img/index2.png" style="width: 100%" />
            </div>
            <p>3D</p>
            <h2>前端页面进行立体模块的展示页</h2>
            <div class="bottom-box">
              <div class="bottomicon">
                <p>浏览详情</p>
                <i class="iconfont icon-jiantou_xiangyou"></i>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="main-content-box">
        <div class="main-content-box-vuedetail">
          <router-link class="VPNavBarTitle" to="/weather"
            ><!--[-->
            <div class="pic">
              <img src="@/assets/img/index3.png" style="width: 100%" />
            </div>
            <p>天气预报</p>
            <h2>未来七天天气状况汇报表和建议</h2>
            <div class="bottom-box">
              <div class="bottomicon">
                <p>浏览详情</p>
                <i class="iconfont icon-jiantou_xiangyou"></i>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="main-content-box">
        <div class="main-content-box-vuedetail">
          <router-link class="VPNavBarTitle" to="/apilink"
            ><!--[-->
            <div class="pic">
              <img src="@/assets/img/index1.png" style="width: 100%" />
            </div>
            <p>ApiSource(待定)</p>
            <h2>收录一些资源网或接口来提供用</h2>
            <div class="bottom-box">
              <div class="bottomicon">
                <p>浏览详情</p>
                <i class="iconfont icon-jiantou_xiangyou"></i>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
// import SubTitle from './components/SubTitle.vue';
// import { getIndexBanner } from '@/api/article'
// import TopIndex from '@/views/IndexPage/components/TopIndex.vue'
// import MenuCard from '@/views/IndexPage/components/MenuCard.vue'
// // 文章头部图
// const bannerList = ref<ArticleItemInfo[]>([])
// const getBannerList = async () => {
//     const { data } = await getIndexBanner()
//     bannerList.value = data.data
// }
// onMounted(async () => {
//     getBannerList()
// })
</script>

<style scoped lang="less">
@import url(./styles/index.less);

@media screen and (min-width: @normal-device) {
  .main {
    &-title {
      h2 {
        margin-top: 0.2rem;
        text-align: center;
        font-size: @very-big-text;
      }
    }

    &-content {
      display: flex;
      height: 24rem;
      width: 75%;
      margin: 0 auto;
      flex-direction: row;

      &-box {
        border: 2px solid #771b2f;
        border-radius: 1rem;
        background-color: #f4ede4;
        height: 100%;
        width: 25%;
        margin: 0 @padding-general;
        display: flex;
        flex-direction: column;

        &-vuedetail {
          display: flex;
          margin: 0 auto;
          padding: @padding-general 0;

          p {
            padding: @padding-general 0 0 0;
            color: black;
          }

          h2 {
            color: black;
          }

          .VPNavBarTitle {
            .logo {
              background-color: #652366;
              width: 300px;
            }
          }

          .bottomicon {
            left: 0;
            bottom: -5px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            vertical-align: middle;

            p {
              color: #1264a3;
            }

            .iconfont {
              font-size: 37px;
            }
          }
        }
      }
    }
  }
}
</style>
