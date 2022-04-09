<template>
  <router-view />
</template>
<script>
import { defineComponent } from "vue"

export default defineComponent({
  name: "App",
})
</script>

<style>
.q-dark,
.q-dark * {
  color: var(--q-light);
}

body.body--dark {
	background: var(--q-dark);
}

body.body--light {
	background: var(--q-light);
}

.body--dark :is(.q-tab-panel, .q-card, .q-editor) {
	background-color: var(--q-dark1);
}

.body--light :is(.q-tab-panel, .q-card, .q-editor) {
	background-color: var(--q-light1);
}
</style>
