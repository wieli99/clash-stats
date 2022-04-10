<template>
	<q-item v-ripple clickable>
		<q-item-section avatar>
			<q-avatar>
				<img
					:alt="$t('summonerIcon')"
					:src="require('assets/ranks/' + member.tier + '.png')"
				/>
			</q-avatar>
		</q-item-section>

		<q-item-section>
			<q-item-label class="text-bold">{{ member.summonerName }}</q-item-label>
			<q-item-label caption>{{ member.position }}</q-item-label>
		</q-item-section>

		<q-item-section>
			<q-item-label class="q-ml-auto">{{ member.tier }}</q-item-label>
		</q-item-section>
	</q-item>
</template>

<script>
import {defineComponent, ref} from "vue"
import {socket} from "boot/websocket"

export default defineComponent({
	name: "ClashTeamMember",
	props: ["member"],
	setup() {
		return {}
	},
})
</script>
