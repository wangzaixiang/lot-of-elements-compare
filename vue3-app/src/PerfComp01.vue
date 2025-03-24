<script setup lang="ts">
import PerfComp00 from "./PerfComp00.vue";

const props = defineProps(['content']);
</script>

<template>
  <PerfComp00 :content />
  <PerfComp00 content="" />
  <PerfComp00 content="" />
  <PerfComp00 content="" />
  <PerfComp00 content="" />

</template>