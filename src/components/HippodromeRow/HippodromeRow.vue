<script setup lang="ts">
import HippodromeNumber from "@components/HippodromeNumber/HippodromeNumber.vue";
import { HippodromeRowProps } from "./HippodromeRow.interface";
import IconHorseRunning from "@src/icons/IconHorseRunning.vue";
import { colorCodes } from "@src/helpers/helpers";
defineProps<HippodromeRowProps>();
</script>
<template>
  <tr>
    <td width="30">
      <hippodrome-number :position="position || ' | '"></hippodrome-number>
    </td>
    <td
      class="border-y-2 border-y-dashed border-y-black w-80 border-r-8 border-r-red-500 border-r-solid"
    >
      <icon-horse-running
        :style="{
          left: distance + '%',
          color: color !== undefined ? colorCodes[color] : 'black',
        }"
        class="relative w-16 h-16 transition-[left] ease-linear"
      ></icon-horse-running>
    </td>
  </tr>
</template>
