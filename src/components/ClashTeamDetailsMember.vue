<template>
	<q-card class="col-sm-4 col-md-2 q-ma-sm">
		<ClashTeamDetailsMemberGeneral
			:member="member"
		></ClashTeamDetailsMemberGeneral>
	</q-card>
</template>

<script>
import {defineComponent} from "vue"
import ClashTeamDetailsMemberGeneral from "components/ClashTeamDetailsMemberGeneral"

export default defineComponent({
	name: "ClashTeamDetailsMember",
	components: {
		ClashTeamDetailsMemberGeneral,
	},
	props: ["member"],
	setup() {
		return {}
	},
})
</script>
