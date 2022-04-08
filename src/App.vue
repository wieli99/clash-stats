<template>
  <router-view/>
</template>
<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style>
.q-dark, .q-dark * {
  color: var(--q-light);
}
</style>
