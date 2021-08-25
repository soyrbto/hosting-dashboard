<script>
  import { createEventDispatcher } from 'svelte';
  import ServerRow from '../components/serverRow.svelte';
  import ServerInfo from '../components/serverInfo.svelte';
  export let content = [];

  $: detailOpen = new Array(content.length).fill(false);
  const dispatch = createEventDispatcher();

  function setPassword() {
    dispatch('setPassword');
  }
  $: openState = new Array(content.length).fill(false);
  let windowsWidth;
</script>

<svelte:window bind:innerWidth={windowsWidth} />

{#if windowsWidth > 962}
  <div class="table-wrapper">
    <div class="row-wrapper">
      <ServerRow title={true} />
    </div>

    {#each content as row, i}
      <div class="row-wrapper">
        <ServerRow
          content={row}
          lastRow={content.length == i + 1}
          on:setPassword={() => setPassword()}
        />
      </div>
    {/each}
  </div>
{:else}
  {#each content as row, i}
    <div class="table-wrapper">
      <div class="table-item">
        <ServerRow title={true} />
        <ServerRow
          on:detail={() => {
            openState[i] = !openState[i];
          }}
          title={false}
          content={row}
          lastRow={content.length == i + 1}
        />
      </div>
      <ServerInfo open={openState[i]} />
    </div>
  {/each}
{/if}

<style lang="scss">
  .table-wrapper {
    margin-bottom: 50px;
    padding: 20px 20px;
    background-color: white;
    border-radius: 20px;
  }

  @media only screen and (max-width: 962px) {
    .table-wrapper {
      .table-item {
        justify-content: space-around;
        display: flex;
      }
    }
  }
</style>
