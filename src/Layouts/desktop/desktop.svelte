<script>
  import Header from './header.svelte';
  import PanelTab from './panelTab.svelte';
  import Dashboard from './dashboard.svelte';
  import CloudOrder from './cloudOrder.svelte';
  import DedicatedServer from './dedicatedServer.svelte';
  import CloudServer from './cloudServer.svelte';

  let tabs = [Dashboard, CloudServer, DedicatedServer];
  let selectedTab = 1;

  //   prop:
  // account name: string / fetch => store
</script>

<main>
  <div class="panel-tab">
    <PanelTab
      on:changeComp={(e) => {
        selectedTab = e.detail;
      }}
    />
  </div>
  <div class="main-wrapper">
    <Header />
    <svelte:component this={tabs[selectedTab]} />
  </div>
</main>

<style lang="scss">
  main {
    display: flex;

    .panel-tab {
      width: 20%;
      background-color: white;
    }

    .main-wrapper {
      width: 80%;
      display: flex;
      flex-direction: column;
    }
  }
</style>
