<!-- PerfComp10.svelte -->
<script>
    import PerfComp01 from "./PerfComp01.svelte";

    export let content = "1";
    const upper = content.toUpperCase();
</script>

<div>
    {#each Array(100) as _, i}
        <PerfComp01 {content} />
    {/each}
</div>

<div>
    {#each Array(100) as _, i}
        <PerfComp01 content={upper} />
    {/each}
</div>