<script>
  import { activeSection } from '../../store';

  import Header from './header.svelte';
  import PanelTab from './panelTab.svelte';

  //   prop:
  // account name: string / fetch => store
</script>

<main>
  <div class="panel-tab">
    <PanelTab />
  </div>
  <div class="main-wrapper">
    <Header />
    <svelte:component this={$activeSection} />
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
      min-height: 100vh;
      width: 80%;
      display: flex;
      flex-direction: column;
    }
  }
</style>
