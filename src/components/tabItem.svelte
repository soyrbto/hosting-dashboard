<script>
  import { createEventDispatcher } from 'svelte';
  export let itemName;
  export let selected = false;
  export let icon = false;
  export let smallScreen;

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
  class:small-screen={smallScreen}
  on:click={() => {
    dispatch('clicked');
  }}
>
  <div class="tab">
    {#if icon}
      <img
        width="29"
        height="29"
        src="./img/{handleImageName(icon)}.svg"
        alt={icon == 'user' ? 'user settings' : 'support'}
      />
    {/if}

    <h3 class="tab-item">{smallScreen ? '' : itemName}</h3>
  </div>

  <div class="vertical-line" />
</div>

<style lang="scss">
  .main-wrapper {
    user-select: none;
    cursor: pointer;
    display: flex;
    flex-basis: 1;

    .tab {
      padding: 0 30px 0 0;
      display: flex;
      align-items: center;
      width: 95%;

      h3 {
        width: fit-content;
      }

      .tab-item {
        width: fit-content;
        padding: 22px 0 22px 10px;
        color: var(--greyLightMedium);
      }

      img {
        margin-left: 13px;
      }
    }

    .vertical-line {
      width: 4px;
      background-color: var(--blue);
      visibility: hidden;
      margin-left: auto;
    }
  }

  .selected {
    .tab {
      border-radius: 10px;
      transition: all 500ms ease-in-out;
      cursor: default;
      background-color: var(--blueLight);

      .tab-item {
        color: var(--blue);
      }

      img {
        filter: brightness(0) saturate(100%) invert(43%) sepia(85%)
          saturate(1777%) hue-rotate(199deg) brightness(102%) contrast(99%);
      }
    }

    .vertical-line {
      visibility: visible;
    }
  }

  .selected.small-screen {
    .vertical-line {
      visibility: hidden;
    }
  }

  .small-screen {
    .tab {
      margin: 10px 0;
    }
  }
</style>
