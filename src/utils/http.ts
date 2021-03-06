import axios from 'axios';
import {Toast} from 'vant';
import { Session } from '@/utils/storage';

// 配置新建一个 axios 实例
const service = axios.create({
	baseURL: import.meta.env.VITE_API_URL as any,
	timeout: 10000,
	headers: { 'Content-Type': 'application/json' },
});

// 添加请求拦截器
service.interceptors.request.use(
	(config:any) => {
		// 在发送请求之前做些什么 token
		if (Session.get('token')) {
			config.headers.common['Authorization'] = `${Session.get('token')}`;
		}
		return config;
	},
	(error) => {
		// 对请求错误做些什么
		return Promise.reject(error);
	}
);

// 添加响应拦截器
service.interceptors.response.use(
	(response) => {
		// 对响应数据做点什么
		const res = response.data;
		if (res.code && res.code !== 0) {
			// `token` 过期或者账号已在别处登录
			if (res.code === 401 || res.code === 4001) {
				Session.clear(); // 清除浏览器全部临时缓存
				window.location.href = '/auth/login'; // 去登录页
				Toast('你已被登出，请重新登录');
			}
			return Promise.reject(service.interceptors.response);
		} else {
			return response.data;
		}
	},
	(error) => {
		// 对响应错误做点什么
		if (error.message.indexOf('timeout') != -1) {
			Toast('网络超时');
		} else if (error.message == 'Network Error') {
			Toast('网络连接错误');
		} else {
			if (error.response.data) Toast(error.response.statusText);
			else Toast('接口路径找不到');
		}
		return Promise.reject(error);
	}
);

// 导出 axios 实例
export default service;