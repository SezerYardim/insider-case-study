<script setup lang="ts">
import HippodromeNumber from "@components/HippodromeNumber/HippodromeNumber.vue";
import { HippodromeRowProps } from "./HippodromeRow.interface";
import IconHorseRunning from "@src/icons/IconHorseRunning.vue";
defineProps<HippodromeRowProps>();
</script>
<template>
  <tr>
    <td>
      <hippodrome-number :number="number"></hippodrome-number>
    </td>
    <td class="border-y-2 border-dashed border-black w-80">
      <icon-horse-running class="text-black w-16 h-16"></icon-horse-running>
    </td>
    <td class="border-r-8 border-r-red-500"></td>
  </tr>
</template>
