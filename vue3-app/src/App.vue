<script setup lang="ts">
import PerfComp20 from "./PerfComp20.vue";
import {count} from "./store.ts";
</script>

<template>
  <main>
    <div>
  <PerfComp20 content="abcdefghijklmnopqrstuvwxyz" />
  <button @click="() => console.log('Total Components:', count)">Log Count</button>
    </div>
  </main>
</template>
