<script>
  import Header from './header.svelte';
  import PanelTab from './panelTab.svelte';
  import Dashboard from './dashboard.svelte';
  import CloudOrder from './cloudOrder.svelte';

  let tab = CloudOrder;

  //   prop:
  // account name: string / fetch => store
</script>

<Header />
<main>
  <PanelTab />
  <svelte:component this={tab} />
</main>

<style lang="scss">
  main {
    display: flex;
  }
</style>
