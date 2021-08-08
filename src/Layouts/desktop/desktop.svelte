<script>
  import Header from './header.svelte';
  import PanelTab from './panelTab.svelte';
  import Dashboard from './dashboard.svelte';
  import CloudOrder from './cloudOrder.svelte';
  import DedicatedServer from './dedicatedServer.svelte';

  let tabs = [Dashboard, CloudOrder, DedicatedServer];
  let selectedTab = 2;

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
