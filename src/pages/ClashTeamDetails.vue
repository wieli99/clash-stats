<template>
	<q-page class="row flex-center">
		<ClashTeamDetailsMember
			v-for="member in team.players"
			:key="member.summonerName"
			:member="member"
		></ClashTeamDetailsMember>
	</q-page>
</template>

<script>
import {defineComponent, ref} from "vue"
import {useRoute} from "vue-router"
import ClashTeamDetailsMember from "components/ClashTeamDetailsMember"
import {useOwnClashTeamStore} from "src/stores/ownClashTeam"
import {storeToRefs} from "pinia/dist/pinia"
import {useEnemyClashTeamStore} from "src/stores/enemyClashTeam"

export default defineComponent({
	name: "ClashTeamDetails",
	components: {ClashTeamDetailsMember},
	setup() {
		const route = useRoute()
		const teamId = route.params.id

		const ownStore = useOwnClashTeamStore()
		const {ownTeam} = storeToRefs(ownStore)

		const enemyStore = useEnemyClashTeamStore()
		const {enemyTeam} = storeToRefs(enemyStore)

		let team= ref({})

		if (teamId === ownTeam.value.id) team.value = ownTeam.value
		else team.value = enemyTeam.value


		return {teamId, team, ownTeam}
	},
})
</script>
