<script>
  import { createEventDispatcher } from 'svelte';
  import ServerRow from '../components/serverRow.svelte';
  export let content = [];

  $: detailOpen = new Array(content.length).fill(false);
  const dispatch = createEventDispatcher();

  function setPassword() {
    dispatch('setPassword');
  }
</script>

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

<style lang="scss">
  .table-wrapper {
    padding: 10px 10px;
    background-color: white;
    border-radius: 20px;
  }
</style>
