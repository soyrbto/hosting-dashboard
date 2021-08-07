<script>
  import Header from './header.svelte';
  import PanelTab from './panelTab.svelte';
  import Dashboard from './dashboard.svelte';

  let tab = Dashboard;

  //   prop:
  // account name: string / fetch => store
</script>

<Header />
<main>
  <PanelTab />
  <svelte:component this={tab} />
</main>

<style lang="scss">
  //some styles
</style>
