import { createStore } from 'vuex'
import axios from "axios";
import router from "@/router";

export default createStore({
  state: {
    user: null,
    token: undefined
  },
  getters: {
    getUser: (state) => state.user,
    getToken: (state) => state.token
  },
  mutations: {
    setUser(state,user) {return state.user = user},
    setToken(state,token) {return state.token=token}
  },
  actions: {
    async login({commit}, credentials){
      await axios.post('login',credentials).then(response => {
        commit('setUser',response.data.user);
        commit('setToken', response.data.token);
        localStorage.setItem('token',response.data.token)
        router.push('/');
      })
      .catch(error => {
        console.log(error.message)
      })

      // try {
      //   const result = await axios.post('login',credentials);
      //
      // }catch (e) {

    }
  },
  modules: {
  }
})
