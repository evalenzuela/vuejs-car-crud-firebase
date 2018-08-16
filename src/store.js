/**
 * Created by aurasix on 8/15/18.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import axiosAuth from './config/auth'
import axiosContent from './config/content'
import router  from './router'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    fireBaseApiToken: 'AIzaSyC4CyJOMqB_EbZUEl1L2bU1umB270H5nCM',
    tokenId: null,
    userId: null,
    cars: []
  },
  mutations: {
    authUser: function(state, userData) {
      state.tokenId = userData.token,
      state.userId = userData.userId
    }
  },
  actions: {

    autoLogin: function({commit}, data) {
      commit('authUser', {
        'token': data.token,
        'userId':data.userId
      })
    },
    logout: function({commit}) {
      commit('authUser', {
        'token': null,
        'userId': null
      })

      localStorage.removeItem('cacheTokenId')
      localStorage.removeItem('cacheUserId');
    },
    login: function({commit}, data){
        axiosAuth.post('/verifyPassword?key=' + this.getters.getFireBaseApiToken, {
          email: data.email,
          password: data.password,
          returnSecureToken: true
        })
        .then(function (response) {
          console.log(response);

          localStorage.setItem('cacheTokenId', response.data.idToken);
          localStorage.setItem('cacheUserId', response.data.localId);

          commit('authUser', {
            token: response.data.idToken,
            userId: response.data.localId
          })

          router.push('/cars')

        })
        .catch(function(error) {
          console.log(error)
        })
    },
    register: function({commit}, data) {
        axiosAuth.post('/signupNewUser?key=' + this.getters.getFireBaseApiToken, {
          email: data.email,
          password: data.password,
          returnSecureToken: true

        })
        .then(response => {
          console.log(response)

          localStorage.setItem('cacheTokenId', response.data.idToken);
          localStorage.setItem('cacheUserId', response.data.localId);

          commit('authUser', {
            token: response.data.idToken,
            userId: response.data.localId
          })

          router.push('/cars')

        })
        .catch(error => {
          console.log(error)
        })

    },
    fetchCars: function({commit, state}, data) {
      axiosContent.get('/cars.json?auth=' + state.tokenId)
        .then(function(response) {
          console.log(response)
          const data = response.data;

          state.cars = []
          let i = 1;
          for(let key in data) {

            const car = data[key];
            car.order = i;
            car.id = key;

            state.cars.push(car);

            i++;
          }

        })
        .catch(function (error) {
          console.log(error)
        })
    }

  },
  fetchCar: function({commit, state}, data) {

  },
  getters: {
    getFireBaseApiToken: function(state) {
      return state.fireBaseApiToken;
    },
    isLoggedIn: function(state) {
      return state.tokenId?true:false
    }
  }
})
