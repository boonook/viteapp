import {Session} from '@/utils/storage'
import { Module } from 'vuex';

const userModule: Module<any, any> = {
	namespaced: true,
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
		getToken(state: any, data:string) {
			state.token = data;
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
		async setToken({ commit }, data:string) {
			commit('getToken', data);
		},
	},
	modules: {},
};

export default userModule;