<script setup lang="ts">
  import PerfComp11 from "./PerfComp11.vue";

  const props = defineProps(['content']);
</script>

<template>

  <PerfComp11 v-for="c in props.content.split('')"
              v-bind:content="c" />

</template>