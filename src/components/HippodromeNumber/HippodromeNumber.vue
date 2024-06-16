<script setup lang="ts">
import { HippodromeNumberProps } from "./HippodromeNumber.interface";

defineProps<HippodromeNumberProps>();
</script>
<template>
  <div
    class="py-4 px-3 flex items-center justify-center bg-green-500 border border-white"
  >
    <p class="-rotate-90 text-xl text-white font-semibold">
      {{ position }}
    </p>
  </div>
</template>
