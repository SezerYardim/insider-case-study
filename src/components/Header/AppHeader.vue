<template>
  <Menubar>
    <template #start>
      <Button label="Horse Racing" text />
    </template>
    <template #end>
      <div class="flex align-items-center gap-2">
        <Button
          label="Generate Program"
          @click="$store.dispatch('generateRace')"
        />
        <Button label="Start / Pause" @click="$store.dispatch('startRace')" />
      </div>
    </template>
  </Menubar>
</template>

<script setup lang="ts">
import Button from "primevue/button";
import Menubar from "primevue/menubar";
</script>
