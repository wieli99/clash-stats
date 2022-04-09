<template>
	<q-page class="row flex-center">
		<ClashTeamDetailsMember
			v-for="member in team.members"
			:key="member.summonerName"
		></ClashTeamDetailsMember>
	</q-page>
</template>

<script>
import {defineComponent, ref} from "vue"
import {useRoute} from "vue-router"
import ClashTeamDetailsMember from "components/ClashTeamDetailsMember"

export default defineComponent({
	name: "ClashTeamDetails",
	components: {ClashTeamDetailsMember},
	setup() {
		const route = useRoute()
		let teamId = route.params.id

		let team = ref(
			//Todo: Get this from backend
			{
				id: 1,
				name: "HerrenSauna",
				members: [
					{summonerName: "wieli99", rank: "Challenger", position: "MID"},
					{summonerName: "tazyo", rank: "Silver 2", position: "ADC"},
					{summonerName: "Eroor", rank: "Gold 3", position: "JGL"},
					{summonerName: "M1scha", rank: "Platinum 1", position: "SUP"},
					{summonerName: "Das Rind", rank: "Bronze 1", position: "TOP"},
				],
			}
		)
		return {teamId, team}
	},
})
</script>
