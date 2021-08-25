<script>
  import { createEventDispatcher } from 'svelte';
  import ServerInfo from '../components/serverInfo.svelte';

  export let open = false;
  export let lastRow = false;
  export let title = false;
  export let content = {
    price: 'Price',
    label: 'Label',
    location: 'Location',
    status: 'Status',
    actions: 'Actions',
    details: 'Details',
  };
  const dispatch = createEventDispatcher();
  let windowsWidth;

  function handleCLick() {
    dispatch('detail');
  }
</script>

<svelte:window bind:innerWidth={windowsWidth} />

<div class="main-wrapper">
  <div class="component-wrapper" class:title class:last-row={lastRow}>
    <div class="row" class:open>
      <div class="label">
        {content.label}
        <span>{content.system == undefined ? '' : content.system}</span>
      </div>
      <div class="price">{content.price}</div>
      <div class="location">{content.location}</div>
      <div
        class="status {!title ? (content.status ? 'active' : 'inactive') : ''}"
      >
        {!title ? (content.status ? 'Active' : 'Inactive') : 'Status'}
      </div>
      <div class="actions">
        {#if !title}
          <img src="./img/stopIcon.svg" alt="" />
          <img src="./img/restartIcon.svg" alt="" />
          <img src="./img/reinstallIcon.svg" alt="" />
          <img
            width="10"
            height="6"
            class="details"
            src="./img/detailsIcon.svg"
            alt=""
            on:click={handleCLick}
          />
        {:else}
          Actions
        {/if}
      </div>
      <div class="details">
        {#if !title}
          <img
            on:click={() => {
              open = !open;
            }}
            src="./img/detailsIcon.svg"
            alt=""
          />
        {/if}
      </div>
    </div>

    {#if windowsWidth > 962}
      <ServerInfo {open} />
    {/if}
  </div>
</div>

<style lang="scss">
  .component-wrapper {
    flex-wrap: wrap;
    .row {
      border-bottom: solid 1px #bcbcbc;
      padding: 16px 40px;
      display: flex;
      flex-grow: 1;
      align-items: center;

      .details {
        width: 2%;
      }

      .actions {
        & > :not(:first-child) {
          margin-left: 10px;
        }
      }

      .active {
        color: var(--greenActive);
      }

      .inactive {
        color: var(--redInactive);
      }

      div {
        color: var(--greyMedium);
        width: 20%;
        font-family: Nunito Sans;
        font-style: normal;
        font-weight: 600;
        font-size: flexUnit(18px);

        img {
          cursor: pointer;
        }

        span {
          display: block;
          font-family: Nunito Sans;
          font-style: normal;
          font-weight: 400;
          font-size: flexUnit(12px);
          display: flex;
          align-items: center;

          img {
            margin-left: 10px;
          }
        }
      }
    }

    .row.open {
      border-bottom: none;
    }

    .title {
      div {
        padding-top: 0;
        color: black;
        font-family: Nunito Sans;
        font-style: normal;
        font-weight: 700;
        font-size: flexUnit(22px);
      }
    }
  }

  .component-wrapper.last-row {
    .row {
      border-bottom: none;
    }
  }

  .component-wrapper.title {
    div > div {
      color: black;
      font-weight: 700;
    }
  }

  @media only screen and (max-width: 962px) {
    .component-wrapper {
      margin: 0 auto;
      .row {
        justify-content: space-between;
        border: none;
        flex-grow: 1;
        flex-direction: column;
        height: 100%;
        padding: 0 0 0 15px;

        & > div {
          height: flexUnit(40px);
          width: 100%;
          & + * {
            margin-top: 15px;
          }
        }

        .actions {
          display: flex;

          .details {
            display: inline;
          }
        }

        .details {
          display: none;
          width: auto;
        }
      }
    }
  }
</style>
