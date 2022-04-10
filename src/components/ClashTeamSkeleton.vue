<template>
	<q-card>
		<q-card-section>
			<h5><q-skeleton type="text" /></h5>
		</q-card-section>

		<q-separator/>

		<q-card-section>
			<q-list bordered>
				<ClashTeamMemberSkeleton
					v-for="index in 5"
					:key="index"
				></ClashTeamMemberSkeleton>
			</q-list>
		</q-card-section>
	</q-card>
</template>

<script>
import {defineComponent} from "vue"
import ClashTeamMemberSkeleton from "components/ClashTeamMemberSkeleton"

export default defineComponent({
	name: "ClashTeamSkeleton",
	components: {ClashTeamMemberSkeleton},
	setup() {
		return {}
	},
})
</script>
