<template>
  <div class="col">
    <div class="q-mt-md">
      <q-avatar rounded>
        <img src="~assets/champions/Azir.png" :alt="$t('championIcon')" />
      </q-avatar>
      14/10/23
    </div>

    <div class="q-mt-md">
      <q-avatar rounded>
        <img src="~assets/champions/Zoe.png" :alt="$t('championIcon')" />
      </q-avatar>
      10/10/20 //TODO: Most played, etc.
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ClashTeamDetailsMemberRanked",
  props: ["member"],
  setup() {
    return {};
  },
});
</script>
