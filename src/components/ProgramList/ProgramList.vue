<script setup lang="ts">
import ProgramItem from "@components/ProgramItem/ProgramItem.vue";
import { ProgramListProps } from "./ProgramList.interface";
defineProps<ProgramListProps>();
</script>
<template>
  <div>
    <p class="px-6 py-3 text-white" :class="labelClass">{{ label }}</p>
    <template v-for="run in $store.state.race.runs" :key="run.name">
      <program-item
        v-if="run.participants.length"
        :run="run"
        :column-definitions="[
          {
            field: 'position',
            header: 'Position',
          },
          {
            field: 'horse.name',
            header: 'Name',
          },
        ]"
      ></program-item>
    </template>
  </div>
</template>
