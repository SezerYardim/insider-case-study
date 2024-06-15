<script setup lang="ts">
import HippodromeRow from "@components/HippodromeRow/HippodromeRow.vue";
</script>
<template>
  <div class="w-full py-12">
    <table class="table-fixed border w-full">
      <tbody>
        <hippodrome-row
          v-for="horse in $store.state.race.activeRun?.participants"
          :key="horse.horse?.name"
          :number="horse.position"
          :distance="horse.distance"
          :color="horse.horse?.color"
        />
      </tbody>
    </table>
    <div class="flex justify-end">
      <p class="mx-auto text-red-600 text-lg font-semibold">
        {{ $store.state.race.activeRun?.name }}
      </p>
      <p class="text-red-600 text-lg font-semibold">Finish</p>
    </div>
  </div>
</template>
