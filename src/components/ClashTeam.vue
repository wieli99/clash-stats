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
  props: ["team"],

  components: {
    ClashTeamMember,
  },
});
</script>
