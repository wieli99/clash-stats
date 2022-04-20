<template>
	<q-dialog v-model="displayDialog" persistent>
		<q-card>
			<q-card-section class="row items-center">
				<span class="q-ml-sm">{{ $t("electronPrompt") }}</span>
			</q-card-section>

			<q-card-actions align="right">
				<q-btn @click="hideDialogForever" flat :label="$t('no')" color="primary" v-close-popup />
				<q-btn @click="goToReleasesPage" flat :label="$t('yes')" color="primary" v-close-popup />
			</q-card-actions>
		</q-card>
	</q-dialog>
</template>

<script>
import {ref} from "vue"
import {useQuasar} from "quasar"

export default {
	name: "DialogElectron",
	setup() {
		const $q = useQuasar()
		const displayDialog = ref(true)

		if ($q.localStorage.getItem("displayDialog")) {
			displayDialog.value = false
		}

		const hideDialogForever = () => {
			$q.localStorage.set("displayDialog", true)
		}

		const goToReleasesPage = () => {
			window.open(
				"https://github.com/wieli99/clash-stats/releases/", "_blank")
			hideDialogForever()
		}

		return {
			displayDialog,
			goToReleasesPage,
			hideDialogForever
		}
	}
}
</script>

<style scoped>

</style>
