import { useWeatherStore } from '@/stores/weather';
import * as echarts from 'echarts';
export const useEchartsLine = () => {
  const store = useWeatherStore();
  const charts = echarts.init(document.querySelector('.echartsLine') as HTMLElement);
  charts.setOption({
    grid: {
      show: true,
      backgroundColor: 'transparent',
      opacity: 0.3,
      borderWidth: '0',
      top: '180',
      bottom: '0'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      show: false
    },
    xAxis: [
      // 日期
      {
        type: 'category',
        boundaryGap: false,
        position: 'top',
        offset: 130,
        zlevel: 100,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          interval: 0,
          formatter: ['{a|{value}}'].join('\n'),
          rich: {
            a: {
              // color: 'white',
              fontSize: 18
            }
          }
        },
        nameTextStyle: {},
        data: store.cityData.daily.map(v => v.date.slice(5, 10))
      },
      // 星期
      {
        type: 'category',
        boundaryGap: false,
        position: 'top',
        offset: 110,
        zlevel: 100,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          interval: 0,
          formatter: ['{a|{value}}'].join('\n'),
          rich: {
            a: {
              // color: 'white',
              fontSize: 14
            }
          }
        },
        nameTextStyle: {
          fontWeight: 'bold',
          fontSize: 19
        },
        data: store.cityData.daily.map(v => v.week)
      },
      // 天气图标
      {
        type: 'category',
        boundaryGap: false,
        position: 'top',
        offset: 20,
        zlevel: 100,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          interval: 0,
          formatter: function (value, index) {
            return '{' + index + '| }\n{b|' + value + '}';
          },
          rich: {
            b: {
              // color: 'white',
              fontSize: 12,
              lineHeight: 30,
              height: 20
            }
          }
        },
        nameTextStyle: {
          fontWeight: 'bold',
          fontSize: 19
        },
        // data: this.weatherdata.weather
        data: store.cityData.daily.map(v => v.day.weather)
      }
    ],
    yAxis: {
      type: 'value',
      show: false,
      axisLabel: {
        formatter: '{value} °C',
        color: 'white'
      }
    },

    series: [
      {
        name: '白天平均气温',
        type: 'line',
        data: store.cityData.daily.map(v => v.day.temphigh),
        symbol: 'emptyCircle',
        symbolSize: 10,
        showSymbol: true,
        smooth: true,
        itemStyle: {
          color: '#C95843'
        },
        label: {
          show: true,
          position: 'top',
          // color: 'white',
          formatter: '{c} °C'
        },
        lineStyle: {
          width: 1
          // color: 'white'
        },
        areaStyle: {
          opacity: 1,
          color: 'transparent'
        }
      },
      {
        name: '夜间平均气温',
        type: 'line',
        data: store.cityData.daily.map(v => v.night.templow),
        symbol: 'emptyCircle',
        symbolSize: 10,
        showSymbol: true,
        smooth: true,
        itemStyle: {
          color: 'blue'
        },
        label: {
          show: true,
          position: 'bottom',
          // color: 'white',
          formatter: '{c} °C'
        },
        lineStyle: {
          width: 1
          // color: 'white'
        },
        areaStyle: {
          opacity: 1,
          color: 'transparent'
        }
      }
    ]
  });
};
