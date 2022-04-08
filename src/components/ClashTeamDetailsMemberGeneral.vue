<template>
  <div class="col q-pa-md">
    <p class="text-h6 q-my-md"><strong>wieli99</strong></p>

    <div class="q-my-sm row">
      <img src="~assets/positions/Silver-Mid.png" :alt="$t('positionIcon')"
           class="self-center col-4 q-mr-auto position-icon"/>

      <img src="~assets/ranks/Silver.png" :alt="$t('positionIcon')"
           class="self-center col-4 q-mr-auto position-icon"/>
    </div>

    <div class="q-my-sm">
      Flex Rank: Plat 4
    </div>

    <div class="q-my-sm">
      Highest ever (solo/duo): Plat 4
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
    return {}
  }
});
</script>

<style>
.position-icon {
  max-width: 3rem !important;
}
</style>
