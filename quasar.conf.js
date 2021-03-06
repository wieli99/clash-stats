/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 */

// Configuration for your app
// https://quasar.dev/quasar-cli/quasar-conf-js

/* eslint-env node */
const ESLintPlugin = require("eslint-webpack-plugin")
const {configure} = require("quasar/wrappers")

module.exports = configure(function (ctx) {
	return {
		// https://quasar.dev/quasar-cli/supporting-ts
		supportTS: false,

		// https://quasar.dev/quasar-cli/prefetch-feature
		// preFetch: true,

		// app boot file (/src/boot)
		// --> boot files are part of "main.js"
		// https://quasar.dev/quasar-cli/boot-files
		boot: ["i18n", "axios", "websocket"],

		// https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-css
		css: ["app.css"],

		// https://github.com/quasarframework/quasar/tree/dev/extras
		extras: [
			// 'ionicons-v4',
			// 'mdi-v5',
			// 'fontawesome-v5',
			// 'eva-icons',
			// 'themify',
			// 'line-awesome',
			// 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

			"roboto-font", // optional, you are not bound to it
			"material-icons", // optional, you are not bound to it
		],

		// Full list of options: https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-build
		build: {
			vueRouterMode: "hash", // available values: 'hash', 'history'

			// transpile: false,
			// publicPath: '/',

			// Add dependencies for transpiling with Babel (Array of string/regex)
			// (from node_modules, which are by default not transpiled).
			// Applies only if "transpile" is set to true.
			// transpileDependencies: [],

			// rtl: true, // https://quasar.dev/options/rtl-support
			// preloadChunks: true,
			// showProgress: false,
			// gzip: true,
			// analyze: true,

			// Options below are automatically set depending on the env, set them if you want to override
			// extractCSS: false,

			// https://quasar.dev/quasar-cli/handling-webpack
			// "chain" is a webpack-chain object https://github.com/neutrinojs/webpack-chain
			chainWebpack(chain) {
				chain
					.plugin("eslint-webpack-plugin")
					.use(ESLintPlugin, [{extensions: ["js", "vue"]}])
			},
		},

		// Full list of options: https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-devServer
		devServer: {
			server: {
				type: "http",
			},
			port: 8080,
			open: true, // opens browser window automatically
		},

		// https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-framework
		framework: {
			config: {
				brand: {
					primary: "#88c0d0",
					secondary: "#8fbcbb",
					accent: "#81a1c1",

					dark: "#2e3440",
					dark1: "#3b4252",
					dark2: "#434c5e",
					dark3: "#4c566a",
					light: "#eceff4",
					light1: "#e5e9f0",
					light2: "#d8dee9",

					positive: "#a3be8c",
					negative: "#bf616a",
					info: "#b48ead",
					warning: "#ebcb8b",
				},
				dark: "auto",
			},

			// iconSet: 'material-icons', // Quasar icon set
			// lang: 'en-US', // Quasar language pack

			// For special cases outside of where the auto-import strategy can have an impact
			// (like functional components as one of the examples),
			// you can manually specify Quasar components/directives to be available everywhere:
			//
			// components: [],
			// directives: [],

			// Quasar plugins
			plugins: [
				'Notify',
				'LocalStorage',
			],
		},

		// animations: 'all', // --- includes all animations
		// https://quasar.dev/options/animations
		animations: [],

		// https://quasar.dev/quasar-cli/developing-ssr/configuring-ssr
		ssr: {
			pwa: false,

			// manualStoreHydration: true,
			// manualPostHydrationTrigger: true,

			prodPort: 3000, // The default port that the production server should use
			// (gets superseded if process.env.PORT is specified at runtime)

			maxAge: 1000 * 60 * 60 * 24 * 30,
			// Tell browser when a file from the server should expire from cache (in ms)

			chainWebpackWebserver(chain) {
				chain
					.plugin("eslint-webpack-plugin")
					.use(ESLintPlugin, [{extensions: ["js"]}])
			},

			middlewares: [
				ctx.prod ? "compression" : "",
				"render", // keep this as last one
			],
		},

		// https://quasar.dev/quasar-cli/developing-pwa/configuring-pwa
		pwa: {
			workboxPluginMode: "GenerateSW", // 'GenerateSW' or 'InjectManifest'
			workboxOptions: {}, // only for GenerateSW

			// for the custom service worker ONLY (/src-pwa/custom-service-worker.[js|ts])
			// if using workbox in InjectManifest mode
			chainWebpackCustomSW(chain) {
				chain
					.plugin("eslint-webpack-plugin")
					.use(ESLintPlugin, [{extensions: ["js"]}])
			},

			manifest: {
				name: `Clash Stats`,
				short_name: `Clash Stats`,
				description: `An app providing stats on my current clash team`,
				display: "standalone",
				orientation: "portrait",
				background_color: "#ffffff",
				theme_color: "#027be3",
				icons: [
					{
						src: "icons/icon-128x128.png",
						sizes: "128x128",
						type: "image/png",
					},
					{
						src: "icons/icon-192x192.png",
						sizes: "192x192",
						type: "image/png",
					},
					{
						src: "icons/icon-256x256.png",
						sizes: "256x256",
						type: "image/png",
					},
					{
						src: "icons/icon-384x384.png",
						sizes: "384x384",
						type: "image/png",
					},
					{
						src: "icons/icon-512x512.png",
						sizes: "512x512",
						type: "image/png",
					},
				],
			},
		},

		// Full list of options: https://quasar.dev/quasar-cli/developing-cordova-apps/configuring-cordova
		cordova: {
			// noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
		},

		// Full list of options: https://quasar.dev/quasar-cli/developing-capacitor-apps/configuring-capacitor
		capacitor: {
			hideSplashscreen: true,
		},

		// Full list of options: https://quasar.dev/quasar-cli/developing-electron-apps/configuring-electron
		electron: {
			bundler: "builder", // 'packager' or 'builder'

			packager: {
				// https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options
				// OS X / Mac App Store
				// appBundleId: '',
				// appCategoryType: '',
				// osxSign: '',
				// protocol: 'myapp://path',
				// Windows only
				// win32metadata: { ... }
			},

			builder: {
				// https://www.electron.build/configuration/configuration
				appId: "clash-stats",
				win: {
					target: "nsis"
				},
				mac: {
					target: "dmg"
				},
				linux: {
					target: "AppImage"
				},
				publish: {
					provider: 'github'
				}
			},

			// "chain" is a webpack-chain object https://github.com/neutrinojs/webpack-chain
			chainWebpackMain(chain) {
				chain
					.plugin("eslint-webpack-plugin")
					.use(ESLintPlugin, [{extensions: ["js"]}])
			},

			// "chain" is a webpack-chain object https://github.com/neutrinojs/webpack-chain
			chainWebpackPreload(chain) {
				chain
					.plugin("eslint-webpack-plugin")
					.use(ESLintPlugin, [{extensions: ["js"]}])
			},
		},
	}
})
