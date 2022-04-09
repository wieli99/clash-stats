<template>
	<q-card>
		<q-card-section @click="showDetails">
			<h5>{{ team.name }}</h5>
		</q-card-section>

		<q-separator/>

		<q-card-section>
			<q-list bordered>
				<ClashTeamMember
					v-for="member in team.players"
					:key="member"
					:member="member"
					@click="showDetails"
				></ClashTeamMember>
			</q-list>
		</q-card-section>
	</q-card>
</template>

<script>
import {defineComponent} from "vue"
import ClashTeamMember from "components/ClashTeamMember"
import {useRouter} from "vue-router"

export default defineComponent({
	name: "ClashTeam",
	props: ["team"],
	components: {
		ClashTeamMember,
	},
	setup(props) {
		const $router = useRouter()

		const showDetails = () => {
			$router.push({name: "TeamDetails", params: {id: props.team.id}})
		}

		return {
			showDetails,
		}
	},
})
</script>
