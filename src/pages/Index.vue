<template>
  <q-page class="row flex-center">
    <q-space class="col-md-3 col-sm-0"></q-space>
    <ClashTeam :team="teams[0]" class="col-xs-10 col-md-5 q-ma-lg bg-primary text-white"></ClashTeam>
    <q-space class="col-md-3 col-sm-0"></q-space>

    <ClashTeam v-for="team in enemyTeams" :key="team.name" :team="team" class="col-xs-10 col-sm-5 col-lg-3 q-ma-lg bg-secondary text-white"></ClashTeam>
  </q-page>
</template>

<script>
import {computed, defineComponent, ref} from "vue";
import ClashTeam from "components/ClashTeam";

export default defineComponent({
  name: "PageIndex",
  components: {ClashTeam},

  setup() {
    let teams = ref([
      {
        name: "HerrenSauna",
        members: [
          {summonerName: "wieli99", rank: "Challenger", position: "MID"},
          {summonerName: "tazyo", rank: "Silver 2", position: "ADC"},
          {summonerName: "Eroor", rank: "Gold 3", position: "JGL"},
          {summonerName: "M1scha", rank: "Platinum 1", position: "SUP"},
          {summonerName: "Das Rind", rank: "Bronze 1", position: "TOP"}
        ]
      },
      {
        name: "Enemy1",
        members: [
          {summonerName: "noone", rank: "Challenger", position: "MID"},
          {summonerName: "notwo", rank: "Silver 2", position: "ADC"},
          {summonerName: "nothree", rank: "Gold 3", position: "JGL"},
          {summonerName: "nofour", rank: "Platinum 1", position: "SUP"},
          {summonerName: "nofive", rank: "Bronze 1", position: "TOP"}
        ]
      },
      {
        name: "Enemy2",
        members: [
          {summonerName: "noone", rank: "Challenger", position: "MID"},
          {summonerName: "notwo", rank: "Silver 2", position: "ADC"},
          {summonerName: "nothree", rank: "Gold 3", position: "JGL"},
          {summonerName: "nofour", rank: "Platinum 1", position: "SUP"},
          {summonerName: "nofive", rank: "Bronze 1", position: "TOP"}
        ]
      },
      {
        name: "Enemy3",
        members: [
          {summonerName: "noone", rank: "Challenger", position: "MID"},
          {summonerName: "notwo", rank: "Silver 2", position: "ADC"},
          {summonerName: "nothree", rank: "Gold 3", position: "JGL"},
          {summonerName: "nofour", rank: "Platinum 1", position: "SUP"},
          {summonerName: "nofive", rank: "Bronze 1", position: "TOP"}
        ]
      },
      {
        name: "Enemy4",
        members: [
          {summonerName: "noone", rank: "Challenger", position: "MID"},
          {summonerName: "notwo", rank: "Silver 2", position: "ADC"},
          {summonerName: "nothree", rank: "Gold 3", position: "JGL"},
          {summonerName: "nofour", rank: "Platinum 1", position: "SUP"},
          {summonerName: "nofive", rank: "Bronze 1", position: "TOP"}
        ]
      },
      {
        name: "Enemy5",
        members: [
          {summonerName: "noone", rank: "Challenger", position: "MID"},
          {summonerName: "notwo", rank: "Silver 2", position: "ADC"},
          {summonerName: "nothree", rank: "Gold 3", position: "JGL"},
          {summonerName: "nofour", rank: "Platinum 1", position: "SUP"},
          {summonerName: "nofive", rank: "Bronze 1", position: "TOP"}
        ]
      },
    ])

    const enemyTeams = computed(() => {
      return teams.value.slice(1, teams.value.length)
    })

    return {
      teams,
      enemyTeams
    }
  }
});
</script>
