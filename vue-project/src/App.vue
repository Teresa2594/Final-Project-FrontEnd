<template>
  <div id="app">
    <RouterView></RouterView>
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import authJS from "./stores/auth.js";
import { mapActions } from "pinia";

export default {
  name: "app",
  components: {
    RouterView,
  },

  created() {
    this.authenticateUser();
  },

  methods: {
    ...mapActions(authJS, ["authenticateUser"]),
  },
};
</script>

<style></style>
