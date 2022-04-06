<template>
  <q-page class="row flex-center">
    <ClashTeam class="col-5"></ClashTeam>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import ClashTeam from "components/ClashTeam";

export default defineComponent({
  name: "PageIndex",
  components: {ClashTeam},
});
</script>
