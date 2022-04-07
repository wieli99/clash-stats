<template>
  <div class="col q-ml-md">
    <div class="row">
      <h5>wieli99</h5>
      <q-space></q-space>
      <div class="self-center col-4">MID</div>
    </div>
    <div class="q-my-sm">
      Rank: Plat 4
    </div>
    <div class="q-my-sm">
      Flex Rank: Plat 4
    </div>
    <div class="q-my-sm">
      Last Season (solo/duo): Plat 4
    </div>
    <div class="q-my-sm">
      Winrate: 50%
    </div>
    <div class="q-my-sm">
      Games: 500
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "ClashTeamDetailsMemberGeneral",
  props: ["member"],
  setup() {
    return {
    }
  }
});
</script>
