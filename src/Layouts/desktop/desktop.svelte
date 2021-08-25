<script>
  import { fade } from 'svelte/transition';
  import { cubicInOut } from 'svelte/easing';
  import { activeSection } from '../../store';
  import { disableScroll, enableScroll } from '../../utilities';

  import Header from './header.svelte';
  import PanelTab from './panelTab.svelte';

  let menuOpen = false;

  let windowsWidth;

  function handleClikMenu() {
    menuOpen = !menuOpen;

    if (menuOpen) {
      disableScroll();
    } else {
      enableScroll();
    }
  }
</script>

<svelte:window bind:innerWidth={windowsWidth} />

<div class="main-wrapper">
  <div
    class="menu-background"
    class:menu-open={menuOpen}
    on:click={handleClikMenu}
  />

  <Header on:clickMenu={handleClikMenu} {menuOpen} />

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
</div>

<style lang="scss">
  .main-wrapper {
    position: relative;

    .menu-background {
      z-index: 100;
      position: absolute;
      width: 100vw;
      height: 100vh;
      background-color: rgba($color: #000000, $alpha: 0.6);
      display: none;
    }

    .menu-background.menu-open {
      display: block;
    }
    main {
      background-color: #f3f8fc;
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
  }
</style>
