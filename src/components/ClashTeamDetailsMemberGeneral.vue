<template>
	<div class="col q-pa-md">
		<p class="text-h6 q-my-md"><strong>{{ member.summonerName }}</strong></p>

		<div class="q-my-sm row">
			<img
				:alt="$t('positionIcon')"
				class="self-center col-4 q-mr-auto position-icon"
				:src="require('assets/positions/' + member.position.toUpperCase() + '.png')"
			/>

			<img
				:alt="$t('positionIcon')"
				class="self-center col-4 q-mr-auto position-icon"
				:src="require('assets/ranks/' + member.tier + '.png')"
			/>
		</div>

		<div class="q-my-sm">Winrate: {{ Math.round((member.wins / (member.wins + member.losses))*100)  }}%</div>

		<div class="q-my-sm">Games: {{ member.wins + member.losses }}</div>
	</div>
</template>

<script>
import {computed, defineComponent} from "vue"

export default defineComponent({
	name: "ClashTeamDetailsMemberGeneral",
	props: ["member"],
	setup() {
		return {}
	},
})
</script>

<style>
.position-icon {
	max-width: 3rem !important;
}
</style>
