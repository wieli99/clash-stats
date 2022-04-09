<template>
  <q-item clickable v-ripple>
    <q-item-section avatar>
      <q-avatar>
        <img
          :src="
            require('assets/ranks/' +
              rankImages[Math.floor(Math.random() * rankImages.length)])
          "
          :alt="$t('summonerIcon')"
        />
      </q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-bold">{{ name }}</q-item-label>
      <q-item-label caption>{{ member.position }}</q-item-label>
    </q-item-section>

    <q-item-section>
      <q-item-label class="q-ml-auto">{{ tier }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent, ref } from "vue";
import { socket } from "boot/websocket";

export default defineComponent({
  name: "ClashTeamMember",
  props: ["member"],
  setup(props) {
    let rankImages = [
      "Iron.png",
      "Bronze.png",
      "Silver.png",
      "Gold.png",
      "Platinum.png",
      "Diamond.png",
      "Grandmaster.png",
      "Challenger.png",
    ];

    let name = ref("");
    let tier = ref("");

    socket.emit("summonerById", props.member.summonerId);
    socket.on("summonerById", (summoner) => {
      name.value = summoner.name;
    });

    socket.emit("summonerRankedById", props.member.summonerId);
    socket.on("summonerRankedById", (summonerRanked) => {
      tier.value = summonerRanked[0].tier;
    });

    return { rankImages, tier, name };
  },
});
</script>
