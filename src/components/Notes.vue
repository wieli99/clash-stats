<template>
  <q-card class="fixed full-width window-height notes">
    <q-editor v-model="notes" @update:model-value="sendNotes" />
  </q-card>
</template>

<script>
import {defineComponent, ref} from "vue";
import { socket } from "boot/websocket"

export default defineComponent({
  name: "Notes",
  setup() {
    let notes = ref("")

    socket.emit("getNotes");

    socket.on("notes", (text)=>notes.value = text)

    const sendNotes = () => {
      socket.emit("notes", notes.value);
    }
    return {
      notes,
      sendNotes
    }
  }
});
</script>

<style>
.notes {
  margin-top: 50px !important;
}
</style>
