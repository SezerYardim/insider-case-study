<script setup lang="ts">
import AppHeader from "@components/Header/AppHeader.vue";
import Hippodrome from "@components/Hippodrome/Hippodrome.vue";
import HorseList from "@components/HorseList/HorseList.vue";
</script>

<template>
  <app-header></app-header>

  <div class="px-6 py-4 flex space-x-8 justify-around">
    <horse-list></horse-list>
    <hippodrome></hippodrome>
  </div>
</template>

<style scoped></style>
