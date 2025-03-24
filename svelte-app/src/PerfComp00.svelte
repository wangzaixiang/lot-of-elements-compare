<!-- PerfComp00.svelte -->
<script module>
    export let count = 0;
</script>

<style>
    div {
        display: inline;
    }
</style>

<script>
    export let content = "0";
    import { onMount } from 'svelte';

    onMount(() => { count += 1 }); // 统计组件实例数量
</script>

<div>{content}</div>