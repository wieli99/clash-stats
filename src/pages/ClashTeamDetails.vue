<template>
	<q-page class="row flex-center">
		<h1 class="col-10">Clash Team</h1>
		<ClashTeamDetailsMember
			v-for="member in team.players"
			:key="member.summonerName"
			:member="member"
		></ClashTeamDetailsMember>

		<ClashTeamMultiSearch :team="team" class="col-10 q-my-lg"></ClashTeamMultiSearch>
	</q-page>
</template>

<script>
import {defineComponent, ref} from "vue"
import {useRoute} from "vue-router"
import ClashTeamDetailsMember from "components/ClashTeamDetailsMember"
import {useOwnClashTeamStore} from "src/stores/ownClashTeam"
import {storeToRefs} from "pinia/dist/pinia"
import {useEnemyClashTeamStore} from "src/stores/enemyClashTeam"
import ClashTeamMultiSearch from "components/ClashTeamMultiSearch"

export default defineComponent({
	name: "ClashTeamDetails",
	components: {ClashTeamMultiSearch, ClashTeamDetailsMember},
	setup() {
		const route = useRoute()
		const teamId = route.params.id

		const ownStore = useOwnClashTeamStore()
		const {ownTeam} = storeToRefs(ownStore)

		const enemyStore = useEnemyClashTeamStore()
		const {enemyTeam} = storeToRefs(enemyStore)

		let team = ref({})

		if (teamId === ownTeam.value.id) team.value = ownTeam.value
		else team.value = enemyTeam.value


		return {teamId, team, ownTeam}
	},
})
</script>
