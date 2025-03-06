<!-- PerfComp20.svelte -->
<script>
    import PerfComp11 from "./PerfComp11.svelte";

    export let content = "helloworld";
</script>

<div>
    {#each content.split('') as c}
        <PerfComp11 content={c} />
    {/each}
</div>