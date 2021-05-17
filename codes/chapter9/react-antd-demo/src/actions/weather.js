import * as constObj from '../constants/base';

export function getWeather(yesterday) {
  return {
    type: constObj.WEATHER,
    yesterday,
  };
}

export const yesterdayWeather = () => {
  return (dispatch) => {
    fetch('http://wthrcdn.etouch.cn/weather_mini?city=长沙')
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data.data);
        dispatch(getWeather(data.data.yesterday));
      })
      .catch((err) => {
        console.log('err', err);
      });
  };
};
