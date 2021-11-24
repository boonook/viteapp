import { createStore } from 'vuex'
import {Session} from '@/utils/storage'
export default createStore({
  state: {
	isLogin:false,
	userInfo:{},
	token:''
  },
  mutations: {
	// 设置用户信息
	getUserInfos(state: any, data: object) {
		state.userInfo = data;
	},
  },
  actions: {
	// 设置用户信息
	async setUserInfos({ commit }, data: object) {
		if (data) {
			commit('getUserInfos', data);
		} else {
			if (Session.get('userInfo')) commit('getUserInfos', Session.get('userInfo'));
		}
	},
  },
  modules: {},
})