import { getWeatherData, getIP } from './../api/weather';
import { defineStore } from 'pinia';
export const useWeatherStore = defineStore('weather', {
  state: () => {
    return {
      list: <WeatherRootObject>{},
      cityData: <WeatherResult>{},
      ip: String
    };
  },
  actions: {
    async setWeather() {
      const ipCode = await getIP();
      if (ipCode.status === 200) {
        this.ip = ipCode.data.ip;
        console.log(this.ip);
        const result = await getWeatherData(this.ip);
        this.list = result.data;
        this.cityData = this.list.result;
      }
    }
  }
});
