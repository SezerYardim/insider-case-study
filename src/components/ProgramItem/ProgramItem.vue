<script setup lang="ts">
import DataTable from "primevue/datatable";
import { ProgramItemProps } from "./ProgramItem.interface";
import Column from "primevue/column";
defineProps<ProgramItemProps>();
</script>
<template>
  <div class="card">
    <DataTable :value="run.participants">
      <template #header>
        <p>{{ run.name }}</p>
      </template>
      <template
        v-for="columnDefinition in columnDefinitions"
        :key="columnDefinition.field"
      >
        <Column
          body-class="text-sm h-10 p-2"
          header-class="text-sm bg-slate-100 h-10 p-2"
          v-bind="columnDefinition"
        ></Column>
      </template>
    </DataTable>
  </div>
</template>
