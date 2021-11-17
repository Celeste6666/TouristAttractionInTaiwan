import { createStore } from 'vuex';
import hmacSHA1 from 'crypto-js/hmac-sha1';
import Base64 from 'crypto-js/enc-base64';

export default createStore({
  state: {
    api: {
      base_url: 'https://ptx.transportdata.tw/MOTC/v2/Tourism',
      id: '0c672be3679e4f1e8441118a50a5d9f3',
      key: 'ovFaA4lsqC5GyOKZHEEo_IS1Vt4',
    },
    search: {
      city: '',
      type: 'ScenicSpot',
      data: [],
    },
    country: [
      {
        name: '臺北市',
        value: 'Taipei',
      },
      {
        name: '新北市',
        value: 'NewTaipei'
      },
      {
        name: '桃園市',
        value: 'Taoyuan'
      },
      {
        name: '臺中市',
        value: 'Taichung'
      },
      {
        name: '臺南市',
        value: 'Tainan'
      },
      {
        name: '高雄市',
        value: 'Kaohsiung'
      },
      {
        name: '新竹縣',
        value: 'HsinchuCounty'
      },
      {
        name: '新竹市',
        value: 'Hsinchu'
      },
      {
        name: '基隆市',
        value: 'Keelung'
      },
      {
        name: '苗栗縣',
        value: 'MiaoliCounty'
      },
      {
        name: '彰化縣',
        value: 'ChanghuaCounty'
      },
      {
        name: '南投縣',
        value: 'NantouCounty'
      },
      {
        name: '雲林縣',
        value: 'YunlinCounty'
      },
      {
        name: '嘉義縣',
        value: 'ChiayiCounty'
      },
      {
        name: '嘉義市',
        value: 'Chiayi'
      },
      {
        name: '屏東縣',
        value: 'PingtungCounty'
      },
      {
        name: '宜蘭縣',
        value: 'YilanCounty'
      },
      {
        name: '花蓮縣',
        value: 'HualienCounty'
      },
      {
        name: '臺東縣',
        value: 'TaitungCounty'
      },
      {
        name: '澎湖縣',
        value: 'PenghuCounty'
      },
      {
        name: '金門縣',
        value: 'KinmenCounty'
      },
      {
        name: '連江縣',
        value: 'LienchiangCounty'
      }
    ],
    cancelActivities: [],
    countryTopRecommand: [],
    randomTwoCity: [],
    location: {},
  },
  getters: {
    headers: (state) => {
      const GMTString = new Date().toUTCString();
      // eslint-disable-next-line prefer-template
      const HAMC = hmacSHA1('x-date: ' + GMTString, state.api.key);
      const base = Base64.stringify(HAMC);
      const headers = {
        Authorization: `hmac username="${state.api.id}", algorithm="hmac-sha1", headers="x-date", signature="${base}"`,
        'x-date': GMTString,
      };
      return headers;
    },
  },
  mutations: {
    getCancelActivities(state, payload) {
      state.cancelActivities = payload;
    },
    getCountryTopRecommand(state, payload) {
      state.countryTopRecommand = [...state.countryTopRecommand, payload];
      if (payload.City === '臺北市' || payload.City === '高雄市') {
        state.randomTwoCity = [...state.randomTwoCity, payload];
      }
    },
    changeSearchCity(state, payload) {
      state.search.city = payload;
    },
    changeSearchType(state, payload) {
      state.search.type = payload;
    },
    getSearchData(state, payload) {
      state.search.data = [];
      state.search.data = payload;
    },
    getLocation(state, payload) {
      state.location = payload;
    },
  },
  actions: {
    // 找出各縣市第一個推薦景點
    getCountryTopRecommand({ commit, state, getters }) {
      state.country.forEach(async (item) => {
        const api = `${state.api.base_url}/ScenicSpot/${item.value}?$select=ID,Name,City,Picture&$filter=Picture/PictureUrl1 ne null&$top=1&$format=JSON`;
        const res = await fetch(api, {
          method: 'GET',
          headers: getters.headers
        });
        const recommand = await res.json();
        if (res.ok && recommand.length !== 0 && recommand !== undefined) {
          commit('getCountryTopRecommand', ...recommand);
        }
      });
    },
    // 找出取消的活動
    async getCancelActivities({ commit, state, getters }) {
      const api = `${state.api.base_url}/Activity?$select=Name,Description,ID&$filter=contains(ActivityName ,'取消') and Description ne '無'&$top=5&$format=JSON`;
      const res = await fetch(api, {
        method: 'GET',
        headers: getters.headers
      });
      const activities = await res.json();
      if (res.ok) {
        commit('getCancelActivities', activities);
      }
    },
    async getSearchData({ commit, state, getters }, page = 1) {
      const { city, type } = state.search;
      const activityApi = `${state.api.base_url}/Activity?$select=Picture,City,ID&$filter=contains(City, '${city}') and Picture/PictureUrl1 ne null and Description ne '無'&$skip=${(page - 1) * 12}&$top=12&$format=JSON`;
      const scenicSpotApi = `${state.api.base_url}/ScenicSpot?$select=Picture,City,ID&$filter=contains(City, '${city}') and Picture/PictureUrl1 ne null and Description ne '無'&$skip=${(page - 1) * 12}&$top=12&$format=JSON`;
      if (type === 'Activity') {
        const res = await fetch(activityApi, {
          method: 'GET',
          headers: getters.headers
        });
        const data = await res.json();
        commit('getSearchData', data);
      } else if (type === 'ScenicSpot') {
        const res = await fetch(scenicSpotApi, {
          method: 'GET',
          headers: getters.headers
        });
        const data = await res.json();
        commit('getSearchData', data);
      }
    },
    // 取得單一地點
    async getLocation({ commit, state, getters }, id) {
      const scenicSpotApi = `${state.api.base_url}/ScenicSpot?$filter=ID eq '${id}'&$format=JSON`;
      const activityApi = `${state.api.base_url}/Activity?$filter=ID eq '${id}'&$format=JSON`;
      if (id.includes('C1')) {
        const res = await fetch(scenicSpotApi, {
          method: 'GET',
          headers: getters.headers
        });
        const data = await res.json();
        commit('getLocation', ...data);
      } else if (id.includes('C2')) {
        const res = await fetch(activityApi, {
          method: 'GET',
          headers: getters.headers
        });
        const data = await res.json();
        commit('getLocation', ...data);
      }
    },
  },
});
