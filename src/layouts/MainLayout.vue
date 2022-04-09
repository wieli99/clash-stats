<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> {{ $t("name") }}</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-splitter v-model="split">
      <template v-slot:before>
        <q-page-container>
          <router-view />
        </q-page-container>
      </template>

      <template v-slot:after>
        <Notes></Notes>
      </template>
    </q-splitter>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue"
import Notes from "components/Notes"

export default defineComponent({
  name: "MainLayout",
  components: { Notes },
  setup() {
    return {
      split: ref(80),
    }
  },
})
</script>

<style>
body.body--dark {
  background: #2e3440;
}

body.body--light {
  background: #eceff4;
}
</style>
