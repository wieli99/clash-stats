<template>
	<div class="col">
		<div class="q-mt-md">
			<q-avatar rounded>
				<img :alt="$t('championIcon')" src="~assets/champions/Azir.png"/>
			</q-avatar>
			14/10/23
		</div>

		<div class="q-mt-md">
			<q-avatar rounded>
				<img :alt="$t('championIcon')" src="~assets/champions/Zoe.png"/>
			</q-avatar>
			10/10/20 //TODO: Most played, etc.
		</div>
	</div>
</template>

<script>
import {defineComponent} from "vue"

export default defineComponent({
	name: "ClashTeamDetailsMemberRanked",
	props: ["member"],
	setup() {
		return {}
	},
})
</script>
