<template>
  <div class="anime">
    <div class="animeinfo" v-if="!showDetail">
      <div class="anime-recommand">
        <span style="font-size: 2rem; font-weight: 600">漫画推荐</span>
        <ElDivider />
        <div class="anime-content">
          <ul class="anime-list">
            <li
              v-for="(item, index) in animeStore.anime.slice(0, 12)"
              :key="item.id"
              @mouseover="animeIntroduce(item.aTag, index, 'recommand')"
              @mouseleave="animeIntroduceClose('recommand')"
              :class="{ liactive: activeIndexRecommand === index }"
              style="position: relative"
            >
              <div class="anime-info">
                <img
                  :src="item.imgTag"
                  fit="fill"
                  :class="{ imgactive: activeIndexRecommand === index }"
                />
                <span v-if="activeIndexRecommand !== index">{{ item.title }}</span>
                <div class="anime-introduce" v-show="animeStore.animeUpdate">
                  <h3>{{ item.title }}</h3>
                  <p>
                    别名: <span class="span-size">{{ item.othertittle }}</span>
                  </p>
                  <p>
                    作者: <span class="span-size">{{ item.author }}</span>
                  </p>
                  <p>
                    热度: <span class="span-size"> {{ item.heat }}</span>
                  </p>
                  <p>
                    更新: <span class="span-size">{{ item.update }}</span>
                  </p>
                  <p>
                    状态: <span class="span-size">{{ item.state }}</span>
                  </p>
                  <textarea
                    style="
                      font-size: 18px;
                      resize: none;
                      line-height: 1.5;
                      overflow: hidden;
                      border: 0px;
                      margin-top: 1rem;
                      font-weight: 500;
                      background-color: white;
                      height: 6rem;
                      overflow: hidden;
                    "
                    rows="4"
                    cols="53"
                    readonly
                    disabled
                    >{{ item.contentintroduce }}</textarea
                  >
                  <p style="padding-left: 27rem">
                    <el-button type="primary" @click="passAnime(item)">开始阅读</el-button>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="anime-hotupdate" style="padding-top: 5rem">
        <span style="font-size: 2rem; font-weight: 600">熱門更新</span>
        <ElDivider />

        <div class="anime-content">
          <ul class="anime-list">
            <li
              v-for="(item, index) in animeStore.anime.slice(12, 24)"
              :key="item.id"
              @mouseover="animeIntroduce(item.aTag, index, 'hotupdate')"
              @mouseleave="animeIntroduceClose('hotupdate')"
              :class="{ liactive: activeIndexHotupdate === index }"
              style="position: relative"
            >
              <div class="anime-info">
                <img
                  :src="item.imgTag"
                  fit="fill"
                  :class="{ imgactive: activeIndexHotupdate === index }"
                />
                <span v-if="activeIndexRecommand !== index">{{ item.title }}</span>
                <div class="anime-introduce" v-show="animeStore.animeUpdate">
                  <h3>{{ item.title }}</h3>
                  <p>
                    别名: <span class="span-size">{{ item.othertittle }}</span>
                  </p>
                  <p>
                    作者: <span class="span-size">{{ item.author }}</span>
                  </p>
                  <p>
                    热度: <span class="span-size"> {{ item.heat }}</span>
                  </p>
                  <p>
                    更新: <span class="span-size">{{ item.update }}</span>
                  </p>
                  <p>
                    状态: <span class="span-size">{{ item.state }}</span>
                  </p>
                  <textarea
                    style="
                      font-size: 18px;
                      resize: none;
                      line-height: 1.5;
                      overflow: hidden;
                      border: 0px;
                      margin-top: 1rem;
                      font-weight: 500;
                      background-color: white;
                      height: 6rem;
                      overflow: hidden;
                    "
                    rows="4"
                    cols="53"
                    readonly
                    disabled
                    >{{ item.contentintroduce }}</textarea
                  >
                  <p style="padding-left: 27rem">
                    <el-button type="primary" @click="passAnime(item)">开始阅读</el-button>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="anime-newupdate" style="padding-top: 5rem">
        <span style="font-size: 2rem; font-weight: 600">全新上架</span>
        <ElDivider />
        <div class="anime-content">
          <ul class="anime-list">
            <li
              v-for="(item, index) in animeStore.anime.slice(24, 36)"
              :key="item.id"
              @mouseover="animeIntroduce(item.aTag, index, 'newupdate')"
              @mouseleave="animeIntroduceClose('newupdate')"
              :class="{ liactive: activeIndexNewupdate === index }"
              style="position: relative"
            >
              <div class="anime-info">
                <img
                  :src="item.imgTag"
                  fit="fill"
                  :class="{ imgactive: activeIndexNewupdate === index }"
                />
                <span v-if="activeIndexRecommand !== index">{{ item.title }}</span>
                <div class="anime-introduce" v-show="animeStore.animeUpdate">
                  <h3>{{ item.title }}</h3>
                  <p>
                    别名: <span class="span-size">{{ item.othertittle }}</span>
                  </p>
                  <p>
                    作者: <span class="span-size">{{ item.author }}</span>
                  </p>
                  <p>
                    热度: <span class="span-size"> {{ item.heat }}</span>
                  </p>
                  <p>
                    更新: <span class="span-size">{{ item.update }}</span>
                  </p>
                  <p>
                    状态: <span class="span-size">{{ item.state }}</span>
                  </p>
                  <textarea
                    style="
                      font-size: 18px;
                      resize: none;
                      line-height: 1.5;
                      overflow: hidden;
                      border: 0px;
                      margin-top: 1rem;
                      font-weight: 500;
                      background-color: white;
                      height: 6rem;
                      overflow: hidden;
                    "
                    rows="4"
                    cols="53"
                    readonly
                    disabled
                    >{{ item.contentintroduce }}</textarea
                  >
                  <p style="padding-left: 27rem">
                    <el-button type="primary" @click="passAnime(item)">开始阅读</el-button>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div clas="anime" v-else="showDetail">
      <AnimeContent :detail="animeDetail" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAnimeStore } from '@/stores/anime';
const animeStore = useAnimeStore();
animeStore.getAnime();
let activeIndexRecommand = ref(-1);
let activeIndexHotupdate = ref(-1);
let activeIndexNewupdate = ref(-1);
//给animeIntroduce添加防抖函数，防止鼠标快速移动导致的多次请求
let showDetail = ref(false);
const animeIntroduce = async (aTag: any, index: any, listName: string) => {
  if (listName === 'recommand') {
    activeIndexRecommand.value = index;
  } else if (listName === 'hotupdate') {
    activeIndexHotupdate.value = index;
  } else if (listName === 'newupdate') {
    activeIndexNewupdate.value = index;
  }
  animeStore.animeUpdate = true;
};
const animeIntroduceClose = (listName: string) => {
  animeStore.animeUpdate = false;
  if (listName === 'recommand') {
    activeIndexRecommand.value = -1;
  } else if (listName === 'hotupdate') {
    activeIndexHotupdate.value = -1;
  } else if (listName === 'newupdate') {
    activeIndexNewupdate.value = -1;
  }
  animeStore.animeIntroduce = {};
};
let animeDetail = ref(null);
const passAnime = anime => {
  animeDetail.value = anime;
  showDetail.value = true;
};
</script>

<style scoped lang="less">
.anime-introduce {
  position: absolute;
  top: 1rem;
  left: 26rem;
  font-size: 1.2rem;
  opacity: 0.9;
  & > p {
    padding: @padding-general 0;
  }

  .span-size {
    font-size: 0.9rem;
    width: 20rem;
    height: 2rem;
    margin-left: 1.2rem;
    white-space: pre-line;
  }
  h3 {
    font-size: 2rem;
  }
}
.imgactive {
  height: 40rem !important;
  transition: all 0.2s ease-in-out;
}
.liactive {
  opacity: 1;
  width: 60% !important;
  transition: all 0.3s ease-in-out;
}

//一个css3的动画width属性类
.anime {
  font-size: 2.5rem;
  border: 4px solid red;
  border-radius: 2rem;
  width: 78%;
  margin: 0 auto;
  justify-content: space-between;
  padding: @padding-general;
  margin-top: @margin-general;

  .anime-info {
    overflow: hidden;
    width: 24rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.2s ease-in-out;

    span {
      text-align: center;
    }
  }

  img {
    transition: all 1s ease-in-out;
    border-radius: 1.4rem;
    height: 32rem;
  }
  &-content {
    overflow-x: scroll;
    &::-webkit-scrollbar {
      height: 2rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #38b6ff;
      border-radius: 3rem;
    }

    &::-webkit-scrollbar-track {
      background-color: #f1f1f1;
      border-radius: 3rem;
    }
  }
  &-list {
    list-style: none;
    white-space: nowrap;
    li {
      height: 36rem;
      overflow: hidden;
      border: 0.5rem solid #cd3e3e;
      border-radius: 2rem;
      margin-right: 1.5rem;
      display: inline-block;
      width: 24.8rem;
      transition: all 0.5s ease-in-out;
    }
    span {
      font-size: 1.3rem;
      font-weight: 600;
    }
  }
  & > div {
    padding-bottom: 10rem;
  }
  span {
    padding: @padding-general 0;
  }
}
</style>
