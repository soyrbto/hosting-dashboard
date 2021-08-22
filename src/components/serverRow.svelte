<script>
  import { slide } from 'svelte/transition';
  import Button from '../components/button.svelte';

  export let lastRow = false;
  export let title = false;
  export let content = {
    price: 'Price',
    label: 'label',
    location: 'Location',
    status: 'Status',
    actions: 'Actions',
    details: 'Details',
  };

  $: visiblePassword = false;

  let open = false;
</script>

<div class="component-wrapper" class:title class:last-row={lastRow}>
  <div class="row">
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

  {#if open}
    <div class="row subtable" transition:slide>
      <div>
        IP address
        <span> 192.256.65.1 </span>
      </div>
      <div>
        aditional IPs
        <span> 192.256.65.1 </span>
        <span> 192.256.65.1 </span>
      </div>
      <div>
        Password
        <span>
          <input type={visiblePassword ? 'text' : 'password'} />
          <img
            src="./img/show-password.svg"
            alt="show password toggle"
            on:click={() => (visiblePassword = !visiblePassword)}
          /></span
        >
      </div>
      <div>
        OS
        <span> Linux 001 <img src="./img/reinstall-icon.svg" alt="" /> </span>
      </div>
      <div class="button-wrapper">
        <Button
          secundary={true}
          padding={`6px 20px`}
          content={'Clone Server'}
        />
      </div>
      <div class="details" />
    </div>
  {/if}
</div>

<style lang="scss">
  .component-wrapper {
    .row {
      border-bottom: solid 1px #bcbcbc;
      height: 61px;
      padding: 0px 40px;
      display: flex;
      flex-grow: 1;

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
        padding-top: 16px;
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

          img {
            margin-left: 10px;
          }

          input {
            width: 70%;
          }
        }
      }
    }

    .subtable {
      background-color: #eaf3fe;
      height: auto;
      padding: 0px 40px;

      div {
        padding: 10px 0px;
      }

      .button-wrapper {
        height: auto;
        padding: 25px 0;
      }
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
</style>
