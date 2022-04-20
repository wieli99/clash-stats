<template>
	<q-card class="fixed full-width window-height notes">
		<q-editor
			v-model="notes"
			:toolbar="[['bold', 'italic', 'underline', 'unordered', 'ordered']]"
			@update:model-value="sendNotes"
			:class="{ 'displaceByHeader' : $q.platform.is.electron}"
		/>
	</q-card>
</template>

<script>
import {defineComponent, ref} from "vue"
import {socket} from "boot/websocket"

export default defineComponent({
	name: "Notes",
	setup() {
		let notes = ref("")

		socket.emit("getNotes")

		socket.on("notes", (text) => (notes.value = text))

		const sendNotes = () => {
			socket.emit("notes", notes.value)
		}
		return {
			notes,
			sendNotes,
		}
	},
})
</script>

<style>
.q-editor__content {
	height: calc(100vh - 32px);
}

.displaceByHeader {
	margin-top: 32px;
}
</style>
