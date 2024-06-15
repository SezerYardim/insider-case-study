<script setup lang="ts">
import HippodromeNumber from "@components/HippodromeNumber/HippodromeNumber.vue";
import { HippodromeRowProps } from "./HippodromeRow.interface";
import IconHorseRunning from "@src/icons/IconHorseRunning.vue";
defineProps<HippodromeRowProps>();
</script>
<template>
  <tr>
    <td width="65">
      <hippodrome-number :number="number"></hippodrome-number>
    </td>
    <td
      class="border-y-2 border-y-dashed border-y-black w-80 border-r-8 border-r-red-500 border-r-solid"
    >
      <icon-horse-running class="text-black w-16 h-16"></icon-horse-running>
    </td>
  </tr>
</template>
