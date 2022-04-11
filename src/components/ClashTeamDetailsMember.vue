<template>
	<q-card class="col-sm-4 col-md-2 q-ma-sm">
		<div class="col q-pa-md">
			<p class="text-h6 text-center q-my-md"><strong>{{ member.summonerName }}</strong></p>

			<div class="q-my-sm row">
				<img
					:alt="$t('positionIcon')"
					class="self-center col-4 q-mx-auto position-icon"
					:src="require('assets/positions/' + member.position.toUpperCase() + '.png')"
				/>

				<img
					:alt="$t('positionIcon')"
					class="self-center col-4 q-mx-auto position-icon"
					:src="require('assets/ranks/' + member.tier + '.png')"
				/>
			</div>

			<div class="text-center q-mt-lg q-mb-sm">Winrate: {{ winRate }}%</div>
			<div class="text-center q-mb-sm">Games: {{ member.wins + member.losses }}</div>

			<div class="q-my-sm" v-if="isSmurf === 1"><strong class="text-negative">SMURF</strong></div>
			<div class="q-my-sm" v-if="isSmurf === 0"><strong class="text-warning">MAY BE SMURF</strong></div>
		</div>
	</q-card>
</template>

<script>
import {defineComponent} from "vue"

export default defineComponent({
	name: "ClashTeamDetailsMember",
	props: ["member"],
	setup(props) {
		let isSmurf
		let games = props.member.wins + props.member.losses
		let winRate = Math.round(props.member.wins / games * 100)

		if (winRate > 56 && games > 20) {
			isSmurf = 1
		} else if (winRate > 54 && games < 25) {
			isSmurf = 0
		} else {
			isSmurf = -1
		}


		return {winRate, isSmurf}
	},
})
</script>

<style>
.position-icon {
	max-width: 3rem !important;
}
</style>
