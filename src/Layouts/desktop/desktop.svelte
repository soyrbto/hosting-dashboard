<script>
  import Header from './header.svelte';
  import PanelTab from './panelTab.svelte';
  import Dashboard from './dashboard.svelte';
  import CloudOrder from './cloudOrder.svelte';

  let tab = CloudOrder;

  //   prop:
  // account name: string / fetch => store
</script>

<main>
  <PanelTab />
  <div class="main-wrapper">
    <Header />
    <svelte:component this={tab} />
  </div>
</main>

<style lang="scss">
  main {
    display: flex;

    .main-wrapper {
      display: flex;
      flex-direction: column;
    }
  }
</style>
