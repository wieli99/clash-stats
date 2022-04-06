<template>
  <q-item clickable v-ripple>
    <q-item-section avatar>
      <q-avatar>
        <img src="https://cdn.quasar.dev/img/boy-avatar.png" :alt="$t('summonerIcon')">
      </q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-bold">{{ member.summonerName }}</q-item-label>
      <q-item-label caption>{{ member.position }}</q-item-label>
    </q-item-section>

    <q-item-section>
      <q-item-label class="q-ml-auto">{{ member.rank }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "ClashTeamMember",
  props: ["member"],
  setup() {
    return {}
  }
});
</script>
