<script>
  import { slide } from 'svelte/transition';
  import Button from '../components/button.svelte';
  export let open = true;
  let passwordInput;
  let visiblePassword = false;

  function copyPassword() {
    let pass = passwordInput.value;
    navigator.clipboard.writeText(pass);
  }

  function handleClick() {
    dispatch('setPassword');
  }

  $: visiblePassword = false;
</script>

{#if open}
  <div class="row subtable" transition:slide>
    <div>
      IP address
      <span> 192.256.65.1 </span>
    </div>
    <div>
      Aditional IPs
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

<style lang="scss">
  .row {
    border-bottom: solid 1px #bcbcbc;
    padding: 16px 40px;
    display: flex;
    flex-grow: 1;
    align-items: center;

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

  @media only screen and (max-width: 962px) {
    .row {
      border: none;
      padding: 40px 10px 10px;
    }
    .subtable {
      flex-direction: column;
      background-color: white;
      align-items: center;

      div {
        width: 25%;
        font-size: 14px;

        .button-wrapper {
          width: 120px;
        }
      }

      .password {
        width: 100%;
      }
    }
  }
</style>
