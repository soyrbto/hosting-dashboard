<script>
  import { onMount } from 'svelte';
  import Desktop from './Layouts/desktop/desktop.svelte';

  let loaded = false;

  onMount(() => {
    loaded = true;
  });
</script>

{#if loaded}
  <main>
    <Desktop />
  </main>
{/if}

<style lang="scss">
  main {
    height: 100vh;
    background-color: var(--blueBackground);
  }
</style>
