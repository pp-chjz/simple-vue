import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
let api_endpoint = 'data.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      // data:[
      //     {

      //       cash:{
      //         income_cash: '100',
      //         expenses_cash:  '20',
      //       },
      //       date: '03',
      //       note: 'test',
      //     },
      //     {
      //       cash:{
      //         income_cash: '200',
      //         expenses_cash:  '40',
      //       },
      //       date: '03',
      //       note: 'test',

      //     }
      // ],
  },

  getters:{
       incomes:(state) => state.data,
  },

  mutations: {
    fetch(state,{res}){
      state.data = res.data
    },
    add(state, {payload}){
      state.data.push(payload)

    },
    edit(state, { payload }){
      state.data[payload.index].income_cash = payload.income_cash
      state.data[payload.index].expenses_cash = payload.expenses_cash
      state.data[payload.index].date = payload.date
      state.data[payload.index].note = payload.note
    }
  },
  actions: {
    async fetchInput({ commit }) {
      //สมมุติ
      // let res = {
      //   data:[
      //     {

      //         income_cash: '100',
      //         expenses_cash:  '20',
      //       date: '03',
      //       note: 'test',
      //       number:30
      //     },
      //     {
      //         income_cash: '200',
      //         expenses_cash:  '40',
      //       date: '03',
      //       note: 'test',
      //       number: 10,

      //     }
      //   ],
      // }

      let res = await Axios.get(api_endpoint)

      commit("fetch", { res })
    },

    addIncome({ commit }, payload){
      //call api to add data
      commit('add',{ payload })
    },

    editIncome({ commit },payload){
      
      commit("edit",{payload})
    },
  },
  modules: {
  }
})