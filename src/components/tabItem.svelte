<script>
  import { createEventDispatcher } from 'svelte';
  export let itemName;
  export let selected = 'true';

  const dispatch = createEventDispatcher();
</script>

<!-- 
        PROP: 
        CONTENT: STRING / STATIC
        ICON: BOOLEAN / STATIC
        IMAGE: URL / STATIC
        STATE: BOOLEAN / STATIC
 -->

<div
  class="main-wrapper"
  class:selected
  on:click={() => {
    dispatch('clicked');
  }}
>
  <h3 class="tab-item">{itemName}</h3>

  <div class="vertical-line" />
</div>

<style lang="scss">
  .main-wrapper {
    cursor: pointer;
    height: 74px;
    display: flex;
    justify-content: space-between;

    .tab-item {
      width: 95%;
      border-radius: 10px;
      color: var(--greyLightMedium);
      padding: 22px 0 22px 10px;
    }

    .vertical-line {
      width: 4px;
      background-color: var(--blue);
      visibility: hidden;
    }
  }

  .selected {
    cursor: default;

    .tab-item {
      color: var(--blue);
      background-color: var(--blueLight);
    }

    .vertical-line {
      visibility: visible;
    }
  }
</style>
