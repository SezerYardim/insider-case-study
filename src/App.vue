<script setup lang="ts">
import AppHeader from "@components/Header/AppHeader.vue";
import AppHippodrome from "@components/Hippodrome/AppHippodrome.vue";
import HorseList from "@components/HorseList/HorseList.vue";
import ProgramList from "@components/ProgramList/ProgramList.vue";
</script>

<template>
  <div class="h-screen flex flex-col overflow-hidden">
    <app-header class="flex-grow-0 flex-shrink-0 basis-auto"></app-header>

    <div
      class="px-6 py-4 flex space-x-8 justify-around flex-auto overflow-auto"
    >
      <horse-list></horse-list>
      <app-hippodrome class="flex-1"></app-hippodrome>
      <div class="flex space-x-3 max-h-full overflow-auto">
        <program-list
          label="Program"
          label-class="bg-sky-800 text-white"
          :runs="$store.state.race.runs"
          class="flex-1"
        ></program-list>
        <program-list
          label="Results"
          label-class="bg-red-700 text-white"
          :runs="$store.state.race.results"
          class="flex-1"
        ></program-list>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
