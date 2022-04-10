<template>
	<q-item v-ripple clickable>
		<q-item-section avatar>
			<q-avatar>
				<q-skeleton type="circle" />
			</q-avatar>
		</q-item-section>

		<q-item-section>
			<q-item-label class="text-bold"><q-skeleton type="text" /></q-item-label>
			<q-item-label caption><q-skeleton type="text" /></q-item-label>
		</q-item-section>

		<q-item-section>
			<q-item-label class="q-ml-auto"><q-skeleton type="text" width="3rem" /></q-item-label>
		</q-item-section>
	</q-item>
</template>

<script>
import {defineComponent} from "vue"

export default defineComponent({
	name: "ClashTeamMemberSkeleton",
	setup() {
		return {}
	},
})
</script>
