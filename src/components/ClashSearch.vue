<template>
	<q-input
		v-model="searchText"
		:label="$t('inputSearchLabel')"
		bottom-slots
		outlined
		@keyup="searchWhenNotTypedForSomeTime"
	>
		<template v-slot:append>
			<q-icon
				v-if="searchText !== ''"
				class="cursor-pointer"
				name="close"
				@click="searchText = ''"
			/>
			<q-icon name="search"/>
		</template>

		<template v-slot:hint>
			{{ $t("inputSearchHint") }}
		</template>
	</q-input>
</template>

<script>
import {ref} from "vue"
import {socket} from "boot/websocket"
import {useEnemyClashTeamStore} from "src/stores/enemyClashTeam"

export default {
	name: "ClashSearch",
	setup() {
		let searchText = ref("")
		let timer
		const enemyStore = useEnemyClashTeamStore()

		const searchWhenNotTypedForSomeTime = () => {
			if (searchText.value === "") enemyStore.setDisplayEnemyTeamSkeleton(false)
			else enemyStore.setDisplayEnemyTeamSkeleton(true)

			enemyStore.setTeam({})
			if (timer) {
				clearTimeout(timer)
				timer = null
			}
			timer = setTimeout(() => {
				socket.emit("initTeamBySummonerName", searchText.value)
			}, 800)
		}




		return {
			searchText,
			searchWhenNotTypedForSomeTime,
		}
	},
}
</script>

<style scoped></style>
