<!-- App.svelte -->
<script>
    import PerfComp20 from './PerfComp20.svelte';
    import { count } from './PerfComp00.svelte';
</script>

<main>
    <PerfComp20 content="abcdefghijklmnopqrstuvwxyz" />
    <button on:click={() => console.log('Total components:', count)}>Log Count</button>
</main>