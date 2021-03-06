<script>
  import { createEventDispatcher } from 'svelte';
  import { changeSection, tabState } from '../../store';
  import { slide, fade } from 'svelte/transition';
  import { cubicInOut } from 'svelte/easing';
  import c from '../../staticContent';
  import { handleImageName } from '../../utilities';

  const dispatch = createEventDispatcher();

  let items = [...c.panelTab.top, ...c.panelTab.bottom];

  export let menuOpen = false;
  let windowsWidth;
  $: {
    open = windowsWidth > 1100 ? false : open;
  }

  function handleClick(sectionIndex) {
    dispatch('clickMenu', open);
    if (!isNaN(sectionIndex)) changeSection(sectionIndex);
  }

  let stateArray = new Array(items.length).fill(false);
  stateArray[0] = true;
</script>

<svelte:window bind:innerWidth={windowsWidth} />

<header>
  {#if menuOpen && windowsWidth < 1100}
    <div
      class="floating-menu"
      transition:slide={{ duration: 300, easing: cubicInOut }}
    >
      <nav>
        <ul>
          {#each items as item, i}
            <li
              on:click={() => {
                handleClick(i);
                stateArray.fill(false);
                stateArray[i] = !stateArray[i];
              }}
            >
              <img
                class:selected={stateArray[i]}
                transition:fade
                src="./img/{handleImageName(item)}-icon.svg"
                alt={item}
                width="18"
                height="18"
              />
              <h3 class:select={$tabState[i]}>{item}</h3>
            </li>
          {/each}
        </ul>
      </nav>
    </div>
  {/if}
  <img src="./img/menu.svg" alt="" class="menu" on:click={handleClick} />
  <div class="logo-container">
    <img src="./img/logo.svg" alt="" />
  </div>
  <div class="container-user">
    <h4>{windowsWidth > 962 ? 'Sergio Gonzales' : ''}</h4>
    <img src="/img/icon-logout.svg" alt="logout" />
  </div>
</header>

<style lang="scss">
  header {
    height: flexUnit(70px);
    justify-content: space-between;
    display: flex;
    background-color: #086cff;
    padding: 10px flexUnit(25px);
    align-items: center;

    img.menu {
      display: none;
    }

    .container-user {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      img {
        cursor: pointer;
      }

      h4 {
        color: white;
        padding-right: flexUnit(10px);
      }
    }

    .floating-menu {
      background-color: #f3f8fc;
      padding-top: flexUnit(27px);
      padding-left: flexUnit(30px);
      z-index: 100;
      width: flexUnit(288px);
      height: flexUnit(449px);
      position: absolute;
      box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.25);
      border-radius: 0px 10px 10px 0px;
      top: 55px;
      left: 0;

      img.selected {
        filter: brightness(0) saturate(100%) invert(43%) sepia(85%)
          saturate(1777%) hue-rotate(199deg) brightness(102%) contrast(99%);
      }

      nav {
        height: 100%;
        display: flex;
        flex-direction: column;

        ul {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          li {
            cursor: pointer;
            margin-bottom: 25px;
            align-items: center;
            display: flex;
            list-style: none;

            h3.select {
              color: var(--blue);
            }

            &:nth-child(3) {
              margin-bottom: auto;
            }
            img {
              margin-right: 10px;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 962px) {
    header {
      justify-content: space-between;
      img.menu {
        display: inline;
      }
    }
  }
</style>
