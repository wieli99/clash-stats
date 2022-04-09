<template>
  <q-input
    outlined
    bottom-slots
    v-model="searchText"
    :label="$t('inputSearchLabel')"
    @keyup="searchWhenNotTypedForSomeTime"
  >
    <template v-slot:append>
      <q-icon
        v-if="searchText !== ''"
        name="close"
        @click="searchText = ''"
        class="cursor-pointer"
      />
      <q-icon name="search" />
    </template>

    <template v-slot:hint>
      {{ $t("inputSearchHint") }}
    </template>
  </q-input>
</template>

<script>
import { ref } from "vue";
import { socket } from "boot/websocket";

export default {
  name: "ClashSearch",
  setup() {
    let searchText = ref("");
    let timer;

    const searchWhenNotTypedForSomeTime = () => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      timer = setTimeout(() => {
        socket.emit("teamBySummonerName", searchText.value);
      }, 800);
    };

    return {
      searchText,
      searchWhenNotTypedForSomeTime,
    };
  },
};
</script>

<style scoped></style>
