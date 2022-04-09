<template>
	<q-card class="col-10 q-ma-lg">
		<q-splitter v-model="splitterModel">
			<template v-slot:before>
				<ClashTeamDetailsMemberGeneral
					:member="member"
				></ClashTeamDetailsMemberGeneral>
			</template>

			<template v-slot:after>
				<q-tabs
					v-model="tab"
					active-color="primary"
					align="justify"
					class="text-grey"
					dense
					indicator-color="primary"
					narrow-indicator
				>
					<q-tab :label="$t('ranked')" name="ranked"/>
					<q-tab :label="$t('clash')" name="clash"/>
				</q-tabs>

				<q-separator/>

				<q-tab-panels v-model="tab" animated swipeable>
					<q-tab-panel name="ranked">
						<div class="text-h6">{{ $t("ranked") }}</div>
						<ClashTeamDetailsMemberRanked
							:member="member"
						></ClashTeamDetailsMemberRanked>
					</q-tab-panel>

					<q-tab-panel name="clash">
						<div class="text-h6">{{ $t("clash") }}</div>
						<ClashTeamDetailsMemberClash
							:member="member"
						></ClashTeamDetailsMemberClash>
					</q-tab-panel>
				</q-tab-panels>
			</template>
		</q-splitter>
	</q-card>
</template>

<script>
import {defineComponent, ref} from "vue"
import ClashTeamDetailsMemberClash from "components/ClashTeamDetailsMemberClash"
import ClashTeamDetailsMemberRanked from "components/ClashTeamDetailsMemberRanked"
import ClashTeamDetailsMemberGeneral from "components/ClashTeamDetailsMemberGeneral"

export default defineComponent({
	name: "ClashTeamDetailsMember",
	components: {
		ClashTeamDetailsMemberGeneral,
		ClashTeamDetailsMemberRanked,
		ClashTeamDetailsMemberClash,
	},
	props: ["member"],
	setup() {
		return {
			tab: ref("ranked"),
			splitterModel: ref(25),
		}
	},
})
</script>
