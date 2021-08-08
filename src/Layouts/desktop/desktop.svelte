<script>
  import Header from './header.svelte';
  import PanelTab from './panelTab.svelte';
  import Dashboard from './dashboard.svelte';
  import CloudOrder from './cloudOrder.svelte';
  import DedicatedOrder from './dedicatedOrder.svelte';

  let tabs = [Dashboard, CloudOrder, DedicatedOrder];
  let selectedTab;

  //   prop:
  // account name: string / fetch => store
</script>

<main>
  <PanelTab
    on:changeComp={(e) => {
      selectedTab = e.detail;
    }}
  />
  <div class="main-wrapper">
    <Header />
    <svelte:component this={tabs[selectedTab]} />
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
