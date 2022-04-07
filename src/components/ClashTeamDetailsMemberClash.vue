<template>
  <div class="col">
    <div class="q-mt-md">
      <q-avatar>
        <img src="https://cdn.quasar.dev/img/boy-avatar.png" :alt="$t('summonerIcon')">
      </q-avatar> 14/10/23
    </div>

    <div class="q-mt-md">
      <q-avatar>
        <img src="https://cdn.quasar.dev/img/boy-avatar.png" :alt="$t('summonerIcon')">
      </q-avatar> 10/10/20
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "ClashTeamDetailsMemberClash",
  props: ["member"],
  setup() {
    return {
    }
  }
});
</script>
