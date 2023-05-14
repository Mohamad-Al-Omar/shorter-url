<template>
  <v-app style="background-color: #f4f5fa">
    <default-bar style="background-color: #f4f5fa" />

    <default-view />

    <default-footer />
  </v-app>
</template>

<script setup>
import DefaultBar from "./AppBar.vue";
import DefaultView from "./ViewLayout.vue";
import DefaultFooter from "./DefaultFooter.vue";
</script>
