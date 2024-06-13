<script setup lang="ts">
import HippodromeNumber from "@components/HippodromeNumber/HippodromeNumber.vue";
import { HippodromeRowProps } from "./HippodromeRow.interface";

defineProps<HippodromeRowProps>();
</script>
<template>
  <tr>
    <td>
      <hippodrome-number :number="number"></hippodrome-number>
    </td>
    <td class="border-y-2 border-dashed border-black w-80">
      <img src="/horse-running.svg" alt="" width="80" height="80" />
    </td>
    <td class="border-r-8 border-r-red-500"></td>
  </tr>
</template>
