<script>
  import { createEventDispatcher } from 'svelte';
  export let itemName;
  export let selected = false;
  export let icon = false;

  const dispatch = createEventDispatcher();

  function handleImageName(rawName) {
    let imageName;
    if (icon) {
      imageName = rawName.replace(' ', '-').toLowerCase();
      return imageName;
    } else {
      return false;
    }
  }
</script>

<div
  class="main-wrapper"
  class:selected
  on:click={() => {
    dispatch('clicked');
  }}
>
  {#if icon}
    <img
      width="29"
      height="29"
      src="./img/{handleImageName(icon)}.svg"
      alt={icon == 'user' ? 'user settings' : 'support'}
    />
  {/if}

  <h3 class="tab-item">{itemName}</h3>

  <div class="vertical-line" />
</div>

<style lang="scss">
  .main-wrapper {
    cursor: pointer;
    height: 74px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;

    img {
      margin-left: 13px;
    }

    .tab-item {
      padding: 22px 0 22px 10px;
      width: 95%;
      color: var(--greyLightMedium);
    }

    .vertical-line {
      height: 100%;
      width: 4px;
      background-color: var(--blue);
      visibility: hidden;
    }
  }

  .selected {
    transition: all 500ms ease-in-out;
    cursor: default;
    background-color: var(--blueLight);

    img {
      filter: brightness(0) saturate(100%) invert(43%) sepia(85%)
        saturate(1777%) hue-rotate(199deg) brightness(102%) contrast(99%);
    }

    .tab-item {
      color: var(--blue);
    }

    .vertical-line {
      visibility: visible;
    }
  }
</style>
