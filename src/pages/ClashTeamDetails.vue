<template>
	<q-page class="row flex-center">
		<h2 class="col-10 text-center">{{ team.name }} ({{ team.abbreviation }})</h2>
		<ClashTeamDetailsMember
			v-for="member in team.players"
			:key="member.summonerName"
			:member="member"
			class="q-my-xl"
		></ClashTeamDetailsMember>

		<ClashTeamMultiSearch :team="team" class="col-10 q-my-xl"></ClashTeamMultiSearch>

		<q-btn round color="primary" icon="arrow_back" class="fixed back_btn" @click="$router.push('/')" />
	</q-page>
</template>

<script>
import {defineComponent, ref} from "vue"
import {useRoute} from "vue-router"
import ClashTeamDetailsMember from "components/ClashTeamDetailsMember"
import {storeToRefs} from "pinia/dist/pinia"
import {useEnemyClashTeamStore} from "src/stores/enemyClashTeam"
import ClashTeamMultiSearch from "components/ClashTeamMultiSearch"

export default defineComponent({
	name: "ClashTeamDetails",
	components: {ClashTeamMultiSearch, ClashTeamDetailsMember},
	setup() {
		const route = useRoute()
		const teamId = route.params.id

		const enemyStore = useEnemyClashTeamStore()
		const {enemyTeam} = storeToRefs(enemyStore)

		let team = ref({})

		team.value = enemyTeam.value


		return {teamId, team}
	},
})
</script>
<style>
.back_btn {
	top: 60px;
	left: 60px;
}
</style>
