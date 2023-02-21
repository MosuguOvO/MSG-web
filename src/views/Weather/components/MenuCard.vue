<template>
  <div class="card-container">
    <el-card class="box-card1">
      <template #header>
        <div class="card-header">
          <span>天气预报</span>
          <span style="font-weight: bold">{{ weatherStore.cityData.city }}</span>
        </div>
      </template>
      <section class="weather-box">
        <div>
          <span>当前气温:</span>
          <div class="detail">{{ weatherStore.cityData.temp }}°C</div>
        </div>
        <div>
          <span>天气现象:</span>
          <div class="detail">
            {{ weatherStore.cityData.weather }}
          </div>
        </div>
        <div class="detail">
          <span>当前风力:</span>
          <div>
            {{ weatherStore.cityData.windpower }}
          </div>
        </div>
        <div>
          <span>更新时间:</span>
          <div class="detail">
            {{ weatherStore.cityData.updatetime }}
          </div>
        </div>
      </section>
      <div class="title">
        <h2>未来7日天气预报</h2>
      </div>
      <div class="echartsLine"></div>
    </el-card>
    <el-card class="box-card2">
      <template #header>
        <div class="card-header1" v-for="(item, index) in weatherStore.cityData.index">
          <div class="card-header1-top">
            <span>{{ item.iname }}:&nbsp;</span>
            <span>{{ item.ivalue }}</span>
          </div>
          <span class="card-header1-bottom">{{ item.detail }}</span>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { useWeatherStore } from '@/stores/weather';
import { useEchartsLine } from '@/hooks/useWeather';
const weatherStore = useWeatherStore();
onMounted(async () => {
  await weatherStore.setWeather();
  useEchartsLine(); //折线图
});
</script>

<style lang="less" scoped>
.echartsLine {
  border-top: 1px solid black;
  margin-top: 1.2rem;
  height: 800px;
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
}

.box-card1 {
  width: 70%;
  margin-right: @margin-general;

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
  display: flex;
  justify-content: space-between;
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
  padding-bottom: 7rem;
  font-weight: bold;

  .span {
    font-size: 1rem;
  }

  &-bottom {
    font-size: @mid-text;
  }

  &-top {
    font-size: @big-text;
    margin-bottom: @margin-general;
  }
}
</style>
