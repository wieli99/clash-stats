<template>
  <q-card>
    <q-card-section>
      <h5>{{ team.name }}</h5>
    </q-card-section>

    <q-separator/>

    <q-card-section>
      <q-list bordered>
          <ClashTeamMember v-for="member in team.members" :key="member" :member="member"></ClashTeamMember>
      </q-list>
    </q-card-section>
  </q-card>
</template>

<script>
import {defineComponent, ref} from "vue";
import ClashTeamMember from "components/ClashTeamMember";

export default defineComponent({
  name: "ClashTeam",

  components: {
    ClashTeamMember,
  },

  setup() {
    let team = ref({
      name: "HerrenSauna",
      members: [{summonerName: "wieli99", rank: "Challenger", position: "MID"}, {summonerName: "tazyo", rank: "Silver 2", position: "ADC"}, {summonerName: "Eroor", rank: "Gold 3", position: "JGL"}, {summonerName: "M1scha", rank: "Platinum 1", position: "SUP"}, {summonerName: "Das Rind", rank: "Bronze 1", position: "TOP"}]
    })
    return {
      team
    }
  }
});
</script>
