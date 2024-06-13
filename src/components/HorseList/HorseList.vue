<template>
  <div class="card">
    <DataTable :value="horseList">
      <template #header>
        <p>Horse List</p>
      </template>
      <Column
        field="name"
        header="Name"
        bodyClass="text-sm"
        headerClass="text-sm bg-slate-100"
      ></Column>
      <Column
        field="condition"
        header="Condition"
        bodyClass="text-sm"
        headerClass="text-sm bg-slate-100"
      ></Column>
      <Column
        field="color"
        header="Color"
        bodyClass="text-sm"
        headerClass="text-sm bg-slate-100"
      ></Column>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import DataTable from "primevue/datatable";
import { ref } from "vue";
import { HorseListItem } from "./HorseList.interface";
import Column from "primevue/column";

const horseList = ref<Array<HorseListItem>>([
  {
    name: "Ada Lovelace",
    condition: 20,
    color: "Blue",
  },
  {
    name: "Ada Lovelace",
    condition: 20,
    color: "Blue",
  },
  {
    name: "Ada Lovelace",
    condition: 20,
    color: "Blue",
  },
  {
    name: "Ada Lovelace",
    condition: 20,
    color: "Blue",
  },
  {
    name: "Ada Lovelace",
    condition: 20,
    color: "Blue",
  },
  {
    name: "Ada Lovelace",
    condition: 20,
    color: "Blue",
  },
]);
</script>
