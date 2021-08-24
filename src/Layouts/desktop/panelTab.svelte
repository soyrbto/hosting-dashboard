<script>
  import c from '../../staticContent';
  import { tabState, changeSection } from '../../store';
  import TabItem from '../../components/tabItem.svelte';

  let itemsTop = c.panelTab.top;
  let itemsBottom = c.panelTab.bottom;
</script>

<aside>
  <div class="fixed-container">
    <div class="top">
      <div class="top-container">
        {#each itemsTop as itemName, i}
          <TabItem
            icon={`${itemName}-icon`}
            {itemName}
            selected={$tabState[i]}
            on:clicked={() => changeSection(i)}
          />
        {/each}
      </div>
    </div>

    <div class="bottom-container">
      <TabItem
        itemName={itemsBottom[0]}
        icon="user"
        on:clicked={() => changeSection(3)}
        selected={$tabState[3]}
      />
      <TabItem itemName={itemsBottom[1]} icon="support" />
    </div>
  </div>
</aside>

<style lang="scss">
  aside {
    .fixed-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-left: 20px;
      padding-top: flexUnit(84px);
      padding-bottom: flexUnit(10px);
      height: 90vh;
      background-color: white;
      position: sticky;
    }
  }
</style>
