<!-- PerfComp10.svelte -->
<script>
    import PerfComp01 from "./PerfComp01.svelte";
    import PerfComp10 from "./PerfComp10.svelte";

    export let content = "1";
    const upper = content.toUpperCase();
</script>

<PerfComp10 {content}/>