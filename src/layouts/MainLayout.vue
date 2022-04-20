<template>
	<q-layout view="hHh lpR fFf">
		<q-header v-if="$q.platform.is.electron" elevated>
			<Bar></Bar>
		</q-header>
		<q-splitter v-model="split">
			<template v-slot:before>
				<q-page-container >
					<router-view/>
				</q-page-container>
			</template>

			<template v-slot:after>
				<Notes></Notes>
			</template>
		</q-splitter>

		<Menu></Menu>
	</q-layout>
</template>

<script>
import {defineComponent, ref} from "vue"
import Notes from "components/Notes"
import Menu from "components/Menu"
import Bar from "components/Bar"

export default defineComponent({
	name: "MainLayout",
	components: {Bar, Menu, Notes},
	setup() {
		return {
			split: ref(75)
		}
	},
})
</script>
