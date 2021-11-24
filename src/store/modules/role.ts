import { createStore } from 'vuex'
import {Session} from '@/utils/storage'
export default createStore({
  state: {
	roleList:[]
  },
  mutations: {
	// 设置用户信息
	getRoleInfos(state: any, data: object) {
		state.roleList = data;
	},
  },
  actions: {
	// 设置用户信息
	async setUserInfos({ commit }, data: object) {
		if (data) {
			commit('getRoleInfos', data);
		} else {
			if (Session.get('roleList')) commit('getRoleInfos', Session.get('roleList'));
		}
	},
  },
  modules: {},
})