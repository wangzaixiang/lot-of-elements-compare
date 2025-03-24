<template>
  <div>{{ props.content }}</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import {count} from "./store.ts";

const props = defineProps(['content']);

onMounted(() => {
  count.value = count.value + 1;
});
</script>

<style scoped>
div {
  display: inline;
}
</style>