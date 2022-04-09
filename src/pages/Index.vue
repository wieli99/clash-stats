<template>
  <q-page class="row flex-center">
    <q-space class="col-xs-0 col-md-3"></q-space>
    <ClashTeam :team="ownTeam" class="col-xs-10 col-md-5 q-ma-lg"></ClashTeam>
    <q-space class="col-xs-0 col-md-3"></q-space>

    <ClashSearch class="col-10 q-mt-xl"></ClashSearch>

    <ClashTeam
      v-for="team in enemyTeams"
      :key="team.name"
      :team="team"
      class="col-xs-10 col-sm-5 col-lg-3 q-ma-lg"
    ></ClashTeam>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import ClashTeam from "components/ClashTeam";
import { socket } from "boot/websocket";
import ClashSearch from "components/ClashSearch";

export default defineComponent({
  name: "PageIndex",
  components: { ClashSearch, ClashTeam },

  setup() {
    let ownTeam = ref("");

    socket.emit("initTeamBySummonerName", "wieli99");
    socket.on("initTeamBySummonerName", (team) => {
      console.log(team);
      ownTeam.value = team;
    });

    socket.on("summonerByName", (summoner) => {
      socket.emit("teamOfSummoner", summoner.id);
    });

    socket.on("summonerByName", (summoner) => {
      socket.emit("teamOfSummoner", summoner.id);
    });

    socket.on("teamOfSummoner", (team) => {
      console.log(team);
    });

    let enemyTeams = ref([]);
    return {
      ownTeam,
      enemyTeams,
    };
  },
});
</script>
