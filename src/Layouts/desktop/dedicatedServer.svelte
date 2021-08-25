<script>
  import { fade } from 'svelte/transition';
  import Button from '../../components/button.svelte';
  import c from '../../staticContent';
  import { changeSection } from '../../store';

  let table = c.dedicatedTable;
  let content = c.dedicatedServer;

  function handleClick() {
    changeSection(5);
  }
</script>

<div class="dedicated-wrapper">
  <h1>{content.title}</h1>
  {#if table.length == 0}
    <div class="img-wrapper">
      <img
        in:fade={{ delay: 300, duration: 500 }}
        width="566"
        height="472"
        src="./img/no-server.svg"
        alt=""
      />
    </div>

    <div class="create-component">
      <h2 class="create-text semiBold">
        {content.noServer}
      </h2>
      <div class="button-wrapper">
        <Button content={'get started with a cloud server'} {handleClick} />
      </div>
    </div>
  {/if}
</div>

<style lang="scss">
  .dedicated-wrapper {
    .img-wrapper {
      height: auto;
      width: 100%;
      display: flex;
      justify-content: center;
    }

    h1 {
      margin-top: flexUnit(32px);
      margin-left: flexUnit(90px);
      margin-bottom: flexUnit(50px);
    }

    img {
      width: 100%;
      height: auto;
      margin: 0 flexUnit(480px);
      margin-bottom: flexUnit(40px);
    }

    .create-component {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: flexUnit(32px);

      .create-text {
        margin-bottom: flexUnit(30px);
        text-align: center;
      }

      .button-wrapper {
        height: flexibleUnit(57px);
        width: flexibleUnit(327px);
        margin-bottom: flexUnit(30px);
      }
    }
  }

  @media only screen and (max-width: 962px) {
    .dedicated-wrapper {
      .create-component {
        margin: 0 flexUnitM(30px);
      }
    }
  }
</style>
