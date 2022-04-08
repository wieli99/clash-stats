<template>
  <q-item clickable v-ripple>
    <q-item-section avatar>
      <q-avatar>
        <img :src="require('assets/ranks/' + rankImages[Math.floor(Math.random()*rankImages.length)])" :alt="$t('summonerIcon')">
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
    let rankImages = ["Iron.png", "Bronze.png", "Silver.png", "Gold.png", "Platinum.png", "Diamond.png", "Grandmaster.png", "Challenger.png"]
    return {rankImages}
  }
});
</script>
