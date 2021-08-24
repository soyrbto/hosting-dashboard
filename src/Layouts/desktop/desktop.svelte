<script>
  import { fade } from 'svelte/transition';
  import { cubicInOut } from 'svelte/easing';
  import { activeSection } from '../../store';

  import Header from './header.svelte';
  import PanelTab from './panelTab.svelte';

  let windowsWidth;
</script>

<svelte:window bind:innerWidth={windowsWidth} />

<Header />
<main>
  {#if windowsWidth > 1100}
    <div class="panel-tab">
      <PanelTab />
    </div>
  {/if}
  <div class="main-wrapper">
    <section transition:fade={{ duration: 800, easing: cubicInOut }}>
      <svelte:component this={$activeSection} />
    </section>
  </div>
</main>

<style lang="scss">
  main {
    background-color: #f3f8fc;
    height: 100%;
    position: relative;
    display: flex;

    .panel-tab {
      width: 20%;
      background-color: white;
    }

    .main-wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
  }
</style>
