<script setup lang="ts">
import HippodromeRow from "@components/HippodromeRow/HippodromeRow.vue";
</script>
<template>
  <div class="w-full py-12">
    <table class="table-fixed border w-full">
      <tbody>
        <hippodrome-row :number="1"></hippodrome-row>
        <hippodrome-row :number="2"></hippodrome-row>
        <hippodrome-row :number="3"></hippodrome-row>
        <hippodrome-row :number="4"></hippodrome-row>
        <hippodrome-row :number="5"></hippodrome-row>
        <hippodrome-row :number="6"></hippodrome-row>
        <hippodrome-row :number="7"></hippodrome-row>
        <hippodrome-row :number="8"></hippodrome-row>
        <hippodrome-row :number="9"></hippodrome-row>
        <hippodrome-row :number="10"></hippodrome-row>
      </tbody>
    </table>
  </div>
</template>
