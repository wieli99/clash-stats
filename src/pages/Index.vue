<template>
	<q-page class="row flex-center">
		<q-space class="col-xs-0 col-md-3"></q-space>
		<ClashTeam :team="ownTeam" class="col-xs-10 col-md-5 q-ma-lg"></ClashTeam>
		<q-space class="col-xs-0 col-md-3"></q-space>

		<ClashSearch class="col-10 q-mt-xl"></ClashSearch>

		<ClashTeam
			v-if="enemyTeam"
			:team="enemyTeam"
			class="col-xs-10 col-sm-5 col-lg-3 q-ma-lg"
		></ClashTeam>
	</q-page>
</template>

<script>
import {defineComponent} from "vue"
import ClashTeam from "components/ClashTeam"
import {socket} from "boot/websocket"
import ClashSearch from "components/ClashSearch"
import {useOwnClashTeamStore} from '../stores/ownClashTeam'
import {storeToRefs} from "pinia/dist/pinia"
import {useEnemyClashTeamStore} from "src/stores/enemyClashTeam"

export default defineComponent({
	name: "PageIndex",
	components: {ClashSearch, ClashTeam},

	setup() {
		const ownStore = useOwnClashTeamStore()
		const {ownTeam} = storeToRefs(ownStore)

		const enemyStore = useEnemyClashTeamStore()
		const {enemyTeam} = storeToRefs(enemyStore)

		socket.emit("initTeamBySummonerName", "wieli99", true)



		socket.on("initTeamBySummonerName", (team, isOwnTeam) => {
			if (isOwnTeam) ownStore.setTeam(team)
			else enemyStore.setTeam(team)
		})


		return {
			enemyTeam,
			ownTeam
		}
	},
})
</script>
