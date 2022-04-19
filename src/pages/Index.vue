<template>
	<q-page class="row">
		<ClashSearch class="col-10 q-mt-xl q-mx-auto search"></ClashSearch>

		<q-space class="col-10"></q-space>

		<ClashTeam
			v-if="enemyTeam.id"
			:team="enemyTeam"
			class="col-xs-10 col-sm-5 col-lg-3 q-mt-lg q-mx-auto"
		></ClashTeam>

		<ClashTeamSkeleton v-if="displayEnemyTeamSkeleton"
						   class="col-xs-10 col-sm-5 col-lg-3 q-mt-lg q-mx-auto"></ClashTeamSkeleton>

		<q-space class="col-10"></q-space>
	</q-page>
</template>

<script>
import {defineComponent} from "vue"
import ClashTeam from "components/ClashTeam"
import {socket} from "boot/websocket"
import ClashSearch from "components/ClashSearch"
import {storeToRefs} from "pinia/dist/pinia"
import {useEnemyClashTeamStore} from "src/stores/enemyClashTeam"
import ClashTeamSkeleton from "components/ClashTeamSkeleton"
import {useQuasar} from "quasar"
import {useI18n} from "vue-i18n"

export default defineComponent({
	name: "PageIndex",
	components: {ClashTeamSkeleton, ClashSearch, ClashTeam},

	setup() {
		const $q = useQuasar()
		const $t = useI18n()

		const enemyStore = useEnemyClashTeamStore()
		const {enemyTeam, displayEnemyTeamSkeleton} = storeToRefs(enemyStore)


		socket.on("initTeamBySummonerName", (team) => {
			enemyStore.setTeam(team)
			enemyStore.setDisplayEnemyTeamSkeleton(false)
		})

		socket.on("noTeamFound", () => {
			enemyStore.setDisplayEnemyTeamSkeleton(false)
			$q.notify({
				type: 'warning',
				message: $t.t("noTeamFoundNotification")
			})
		})


		return {
			enemyTeam,
			displayEnemyTeamSkeleton
		}
	},
})
</script>
<style>
.search {
	height: fit-content !important;
}
</style>
