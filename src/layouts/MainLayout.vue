<template>
  <q-splitter
    v-model="split"
  >
    <template v-slot:before>
      <q-layout view="lHh Lpr lFf">
        <q-header elevated>
          <q-toolbar>
            <q-toolbar-title> Quasar App</q-toolbar-title>
          </q-toolbar>
        </q-header>


        <q-page-container>
          <router-view/>
        </q-page-container>
      </q-layout>
    </template>


    <template v-slot:after>
      <Notes style="
  height: 100vh;"></Notes>
    </template>
  </q-splitter>

</template>

<script>

import {defineComponent, ref} from "vue";
import Notes from "components/Notes";

export default defineComponent({
  name: "MainLayout",
  components: {Notes},
  setup() {
    return {
      split: ref(80)
    };
  },
});
</script>

<style>
body.body--dark {
  background: #2E3440
}

body.body--light {
  background: #ECEFF4
}

.q-splitter__panel.q-splitter__after {
  height: 100vh;
  position: sticky
}
</style>
