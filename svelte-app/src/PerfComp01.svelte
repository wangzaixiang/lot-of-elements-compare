<!-- PerfComp01.svelte -->
<script>
    import PerfComp00 from "./PerfComp00.svelte";

    export let content = "1";
</script>

<PerfComp00 {content} />
<PerfComp00 content="" />
<PerfComp00 content=""/>
<PerfComp00 content=""/>
<PerfComp00 content=""/>