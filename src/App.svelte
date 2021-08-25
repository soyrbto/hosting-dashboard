<script>
  import { onMount } from 'svelte';
  import Desktop from './Layouts/desktop/desktop.svelte';

  let loaded = false;

  onMount(() => {
    loaded = true;
  });

  window.onbeforeunload = function () {
    return 'Data will be lost if you leave the page, are you sure?';
  };
</script>

{#if loaded}
  <main>
    <Desktop />
  </main>
{/if}
