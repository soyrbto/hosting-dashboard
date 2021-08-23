<script>
  import { fade } from 'svelte/transition';
  import Button from '../components/button.svelte';
  export let visible = false;

  function handleClick() {
    visible = false;
  }
</script>

{#if visible}
  <div class="main-wrapper" in:fade={{ duration: 500 }}>
    <div class="window">
      <img
        src="./img/button-cancel.svg"
        alt=""
        width="20"
        height="20"
        on:click={() => (visible = !visible)}
      />
      <p class="bodySmall">
        you password will be reset <span> do you want to continue? </span>
      </p>
      <div class="button-wrapper">
        <Button
          content={'continue'}
          padding={`10px 32px`}
          handleClick={() => handleClick()}
        />
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
  .main-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    position: fixed;
    top: 10%;
    left: 10%;

    .window {
      text-align: center;
      display: flex;
      justify-content: center;
      flex-direction: column;
      color: white;
      border-radius: 5px;
      width: 377px;
      background-color: #313030;

      span {
        margin: 20px 0px;
        text-align: center;
        display: block;
      }

      .button-wrapper {
        margin: 30px auto;
      }

      img {
        margin: 20px 20px 0px auto;
      }
    }
  }
</style>
