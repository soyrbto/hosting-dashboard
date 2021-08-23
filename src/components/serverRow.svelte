<script>
  import { createEventDispatcher } from 'svelte';
  import { slide } from 'svelte/transition';
  import Button from '../components/button.svelte';

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

  $: visiblePassword = false;
  const dispatch = createEventDispatcher();
  let passwordInput;
  let open = false;

  function copyPassword() {
    let pass = passwordInput.value;
    navigator.clipboard.writeText(pass);
  }

  function handleClick() {
    dispatch('setPassword');
  }
</script>

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
        OS
        <span>
          Linux 001
          <!-- <img src="./img/reinstall-icon.svg" alt="" /> -->
        </span>
      </div>
      <div>
        Clone server
        <span class="button-wrapper">
          <Button
            secundary={true}
            padding={`6px 20px`}
            content={'Clone Server'}
          />
        </span>
      </div>
      <div class="password">
        Password
        <span>
          <input
            type={visiblePassword ? 'text' : 'password'}
            bind:this={passwordInput}
          />
          <div class="set-pass">
            <Button
              content={'Set Password'}
              padding={`4px 6px`}
              mini={true}
              handleClick={() => handleClick()}
            />
          </div>
          <img
            src="./img/show-password.svg"
            alt="show password toggle"
            on:click={() => (visiblePassword = !visiblePassword)}
          />
          <img
            src="./img/copy-icon.svg"
            alt="save in your clipboard"
            on:click={copyPassword}
          />
        </span>
      </div>
    </div>
  {/if}
</div>

<style lang="scss">
  .component-wrapper {
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

        .button-wrapper {
          margin-top: 10px;
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

          input {
            width: 50%;
            font-size: flexUnit(14px);
          }

          .set-pass {
            margin-left: 6px;
            min-width: fit-content;
          }
        }
      }
    }

    .row.open {
      border-bottom: none;
    }

    .subtable {
      display: flex;
      align-items: flex-start;
      background-color: #eaf3fe;
      padding-right: 10px;

      .password {
        width: 25%;
      }

      div {
        padding: 5px 0px;
      }

      span {
        display: flex;
        align-items: stretch;
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

  .component-wrapper.title {
    div > div {
      color: black;
      font-weight: 700;
    }
  }
</style>
