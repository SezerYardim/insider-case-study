<template>
  <div class="card">
    <DataTable :value="store.state.horseList">
      <template #header>
        <p>Horse List</p>
      </template>
      <Column
        field="name"
        header="Name"
        body-class="text-sm"
        header-class="text-sm bg-slate-100"
      ></Column>
      <Column
        field="condition"
        header="Condition"
        body-class="text-sm"
        header-class="text-sm bg-slate-100"
      ></Column>
      <Column
        field="color"
        header="Color"
        body-class="text-sm"
        header-class="text-sm bg-slate-100"
      ></Column>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import { useAppStore } from "@src/stores/store";

const store = useAppStore();
</script>
