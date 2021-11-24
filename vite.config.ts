import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import type { UserConfig } from 'vite';
import { loadEnv } from './src/utils/viteBuild';
import styleImport from 'vite-plugin-style-import';
const pathResolve = (dir: string): any => {
	return resolve(__dirname, '.', dir);
};

const { VITE_PORT, VITE_OPEN } = loadEnv();

const viteConfig: UserConfig = {
	plugins: [
		vue(),
		styleImport({
			libs:[
				{
					libraryName:'vant',
					esModule:true,
					resolveStyle:(name)=>`vant/es/${name}/style`
				}
			]
		})
	],
	root: process.cwd(),
	resolve: {
		alias:{
			'@':pathResolve('./src/'),
		},
		extensions: ['.js', '.mjs','.ts']
	},
	base: process.env.NODE_ENV === 'production' ? '/' : './',
	server: {
		host: '0.0.0.0',
		port: VITE_PORT,
		open: VITE_OPEN,
		proxy: {
			'/gitee': {
				target: 'https://gitee.com',
				ws: true,
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/gitee/, ''),
			},
		},
	},
	build: {
		outDir: 'dist',
		minify: 'esbuild',
		sourcemap: false,
		chunkSizeWarningLimit: 1500,
		assetsDir: 'static/img',
		rollupOptions: {
			output: {
				chunkFileNames: 'static/js/[name]-[hash].js',
				entryFileNames: 'static/js/[name]-[hash].js',
				assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
			},
		},
	},
	define: {
		__VUE_I18N_LEGACY_API__: JSON.stringify(false),
		__VUE_I18N_FULL_INSTALL__: JSON.stringify(false),
		__INTLIFY_PROD_DEVTOOLS__: JSON.stringify(false),
	},
};

export default viteConfig;