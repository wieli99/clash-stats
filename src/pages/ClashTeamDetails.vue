<template>
  <q-page class="row flex-center">
    <h1>{{ teamId }}</h1>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "ClashTeamDetails",

  setup() {
    const route = useRoute();
    let teamId = route.params.id
    return { teamId }
  }
});
</script>
