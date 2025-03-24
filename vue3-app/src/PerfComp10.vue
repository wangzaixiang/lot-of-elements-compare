<script setup lang="ts">

  import PerfComp01 from "./PerfComp01.vue";
  const props = defineProps(['content']);
  const upper = props.content.toUpperCase();
</script>

<template>
  <div>
    <PerfComp01 v-for="i in Array(100)" :content />
  </div>

  <div>
    <PerfComp01 v-for="i in Array(100)" v-bind:content="upper" />
  </div>

</template>