<script>
  import { createEventDispatcher } from 'svelte';
  import ServerRow from '../components/serverRow.svelte';
  import Account from '../Layouts/desktop/account.svelte';
  export let content = [];

  $: detailOpen = new Array(content.length).fill(false);
  const dispatch = createEventDispatcher();

  function setPassword() {
    dispatch('setPassword');
  }

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
          title={false}
          content={row}
          lastRow={content.length == i + 1}
        />
      </div>
    </div>
  {/each}
{/if}

<style lang="scss">
  .table-wrapper {
    display: flex;
    .row-wrapper {
      display: flex;
      // flex-direction: column;
    }

    padding: 10px 10px;
    background-color: white;
    border-radius: 20px;
  }

  .table-wrapper {
    .table-item {
      display: flex;
    }
  }
</style>
