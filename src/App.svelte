<script>
  import { onMount } from 'svelte';
  import Desktop from './Layouts/desktop/desktop.svelte';

  let loaded = false;

  onMount(() => {
    loaded = true;
  });
</script>

{#if loaded}
  <Desktop />
{/if}

<style lang="scss">
  // some styles
</style>
