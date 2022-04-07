<template>
  <q-page class="row flex-center">
    <ClashTeamDetailsMember></ClashTeamDetailsMember>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import ClashTeamDetailsMember from "components/ClashTeamDetailsMember";

export default defineComponent({
  name: "ClashTeamDetails",
  components: {ClashTeamDetailsMember},
  setup() {
    const route = useRoute();
    let teamId = route.params.id
    return { teamId }
  }
});
</script>
