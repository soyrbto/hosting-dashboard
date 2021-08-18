<script>
  import ServerRow from '../components/serverRow.svelte';
  export let content = [];

  $: detailOpen = new Array(content.length).fill(false);
</script>

<div class="table-wrapper">
  <div class="row-wrapper">
    <ServerRow title={true} />
  </div>

  {#each content as content}
    <div class="row-wrapper">
      <ServerRow {content} />
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
