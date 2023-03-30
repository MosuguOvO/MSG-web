declare global {
  interface WeatherIndex {
    iname: string;
    ivalue: string;
    detail: string;
  }

  interface Aqiinfo {
    level: string;
    color: string;
    affect: string;
    measure: string;
  }

  interface Aqi {
    so2: string;
    so224: string;
    no2: string;
    no224: string;
    co: string;
    co24: string;
    o3: string;
    o38: string;
    o324: string;
    pm10: string;
    pm1024: string;
    pm2_5: string;
    pm2_524: string;
    iso2: string;
    ino2: string;
    ico: string;
    io3: string;
    io38: string;
    ipm10: string;
    ipm2_5: string;
    aqi: string;
    primarypollutant: string;
    quality: string;
    timepoint: string;
    aqiinfo: Aqiinfo;
  }

  interface Night {
    weather: string;
    templow: string;
    img: string;
    winddirect: string;
    windpower: string;
  }

  interface Day {
    weather: string;
    temphigh: string;
    img: string;
    winddirect: string;
    windpower: string;
  }

  interface Daily {
    date: string;
    week: string;
    sunrise: string;
    sunset: string;
    night: Night;
    day: Day;
  }

  interface Hourly {
    time: string;
    weather: string;
    temp: string;
    img: number;
  }

  interface WeatherResult {
    city: string;
    cityid: number;
    citycode: string;
    date: string;
    week: string;
    temp: string;
    temphigh: string;
    templow: string;
    humidity: string;
    pressure: string;
    windspeed: string;
    winddirect: string;
    windpower: string;
    updatetime: string;
    index: Index[];
    aqi: Aqi;
    daily: Daily[];
    hourly: Hourly[];
    weather: string;
    img: string;
  }

  interface WeatherRootObject {
    status: number;
    msg: string;
    result: Result;
  }
}

export {};
