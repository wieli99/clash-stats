<template>
  <q-card>
    <q-editor v-model="notes" min-height="5rem" @update:model-value="sendNotes" />
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
