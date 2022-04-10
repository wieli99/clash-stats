<template>
	<q-page class="row flex-center">
		<q-space class="col-xs-0 col-md-3"></q-space>
		<ClashTeam v-if="ownTeam.id" :team="ownTeam" class="col-xs-10 col-md-5 q-ma-lg"></ClashTeam>
		<ClashTeamSkeleton v-else class="col-xs-10 col-md-5 q-ma-lg"></ClashTeamSkeleton>
		<q-space class="col-xs-0 col-md-3"></q-space>

		<ClashSearch class="col-10 q-mt-xl"></ClashSearch>

		<ClashTeam
			v-if="enemyTeam.id"
			:team="enemyTeam"
			class="col-xs-10 col-sm-5 col-lg-3 q-ma-lg"
		></ClashTeam>

		<ClashTeamSkeleton v-if="displayEnemyTeamSkeleton" class="col-xs-10 col-sm-5 col-lg-3 q-ma-lg"></ClashTeamSkeleton>
	</q-page>
</template>

<script>
import {defineComponent, ref} from "vue"
import ClashTeam from "components/ClashTeam"
import {socket} from "boot/websocket"
import ClashSearch from "components/ClashSearch"
import {useOwnClashTeamStore} from '../stores/ownClashTeam'
import {storeToRefs} from "pinia/dist/pinia"
import {useEnemyClashTeamStore} from "src/stores/enemyClashTeam"
import ClashTeamSkeleton from "components/ClashTeamSkeleton"

export default defineComponent({
	name: "PageIndex",
	components: {ClashTeamSkeleton, ClashSearch, ClashTeam},

	setup() {
		const ownStore = useOwnClashTeamStore()
		const {ownTeam} = storeToRefs(ownStore)

		const enemyStore = useEnemyClashTeamStore()
		const {enemyTeam, displayEnemyTeamSkeleton} = storeToRefs(enemyStore)

		socket.emit("initTeamBySummonerName", "wieli99", true)



		socket.on("initTeamBySummonerName", (team, isOwnTeam) => {
			if (isOwnTeam) ownStore.setTeam(team)
			else enemyStore.setTeam(team)
			enemyStore.setDisplayEnemyTeamSkeleton(false)
		})


		return {
			enemyTeam,
			ownTeam,
			displayEnemyTeamSkeleton
		}
	},
})
</script>
