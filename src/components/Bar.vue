<template>
	<q-bar class="q-electron-drag">
		<q-space />

		<q-btn dense flat icon="minimize" @click="minimize" />
		<q-btn dense flat icon="crop_square" @click="toggleMaximize" />
		<q-btn dense flat icon="close" @click="closeApp" />
	</q-bar>
</template>

<script>
export default {
	name: "Bar",
	setup() {
		const minimize = () => {
			if (process.env.MODE === 'electron') {
				window.myWindowAPI.minimize()
			}
		}

		const toggleMaximize = () => {
			if (process.env.MODE === 'electron') {
				window.myWindowAPI.toggleMaximize()
			}
		}

		const closeApp = () => {
			if (process.env.MODE === 'electron') {
				window.myWindowAPI.close()
			}
		}

		return {
			minimize,
			toggleMaximize,
			closeApp
		}
	}
}
</script>

<style scoped>

</style>
