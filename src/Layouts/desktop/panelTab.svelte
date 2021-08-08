<script>
  import { createEventDispatcher } from 'svelte';
  import c from '../../staticContent';
  import states from '../../store';
  import TabItem from '../../components/tabItem.svelte';

  let itemsTop = c.panelTab.top;
  let tabState = states.tabState;
  const dispatch = createEventDispatcher();

  function changeTab(tab) {
    tabState.update((states) => {
      states = [false, false, false];
      states[tab] = true;
      return states;
    });

    dispatch('changeComp', tab);
  }
</script>

<aside>
  <div class="fixed-container">
    <div class="logo-container">
      <img src="./img/logo.svg" alt="" />
    </div>

    <div class="top-container">
      {#each itemsTop as itemName, i}
        <TabItem
          {itemName}
          selected={$tabState[i]}
          on:clicked={() => changeTab(i)}
        />
      {/each}
    </div>

    <div class="bottom-container">
      <!-- tab button with icon x2-->
    </div>
  </div>
</aside>

<style lang="scss">
  aside {
    padding-left: 20px;
    padding-top: 16px;
    background-color: white;
    width: 380px;

    .fixed-container {
      position: fixed;
    }

    .logo-container {
      margin-bottom: 44px;
    }
  }
</style>
