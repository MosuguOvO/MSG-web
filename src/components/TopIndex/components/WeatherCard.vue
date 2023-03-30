<template>
  <div class="card-container">
    <div class="box-card1">
      <div class="Loading" v-if="!showCard">Loading...</div>
      <div class="card-header" v-else>
        <div class="detail">
          <div class="weather-day">
            <span> {{ weatherStore.cityData.updatetime }}</span>
            <span style="font-weight: 600; font-size: 1.4rem">{{
              weatherStore.cityData.week
            }}</span>
          </div>
          <div class="card-header1" v-for="(item, index) in weatherStore.cityData.index">
            <span class="content1">
              <i v-if="item.iname === '空调指数'" class="iconfont icon-kongtiao"></i>
              <i v-if="item.iname === '运动指数'" class="iconfont icon-paobu"></i>
              <i v-if="item.iname === '紫外线指数'" class="iconfont icon-ziwaixian"></i>
              <i v-if="item.iname === '感冒指数'" class="iconfont icon-ganmaoyaowu"></i>
              <i v-if="item.iname === '洗车指数'" class="iconfont icon-xichekaidan"></i>
              <i v-if="item.iname === '空气污染扩散指数'" class="iconfont icon-kongqiqingxin"></i>
              <i v-if="item.iname === '穿衣指数'" class="iconfont icon-clothes-full"></i
              >{{ item.iname }}</span
            >
            <span class="value">{{ item.ivalue }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWeatherStore } from '@/stores/weather';
const weatherStore = useWeatherStore();
const showCard = ref(false);
watchEffect(() => {
  if (weatherStore.cityData.city) {
    showCard.value = true;
  }
});
onMounted(async () => {
  await weatherStore.setWeather();
});
</script>

<style lang="less" scoped>
.echartsLine {
  border-top: 1px solid black;
  margin-top: 1.2rem;
}

.weather-box {
  display: flex;
  flex-direction: column;
  font-size: 2rem;

  div {
    display: flex;
    justify-content: space-between;
    padding: @padding-general;
    align-items: baseline;

    .detail {
      font-weight: bold;
    }
  }
}

.card-container {
  display: flex;
  width: 100%;
  :deep(.el-card__body) {
    padding: 0 !important;
  }
}

.box-card1 {
  width: 100%;
  .title {
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
      font-size: 2.5rem;
    }
  }
}

.box-card2 {
  width: 30%;
}

.card-header {
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}

.card-header1 {
  font-weight: bold;

  .span {
    font-size: 0.5rem;
  }

  &-bottom {
    font-size: @mid-text;
  }

  &-top {
    font-size: @big-text;
    margin-bottom: @margin-general;
  }
}
.weather-day {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.card-header1-bottom {
  font-weight: 600;
  font-size: 0.6rem;
  padding: 0.3rem;
  background-color: rgba(255, 255, 255, 0.6);
}
.card-header1 {
  border-radius: 1rem;
  border: 1px solid #b36d61;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 4rem;
  &:nth-child(n) {
    margin: 0.6rem 0;
    padding: @padding-general;
  }

  .value {
    font-weight: 400;
  }
}

:deep(.card-container) {
  border: none;
}
</style>
