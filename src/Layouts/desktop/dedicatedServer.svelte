<script>
  import Button from '../../components/button.svelte';
  import c from '../../staticContent';

  let table = c.dedicatedTable;
  let content = c.dedicatedServer;
</script>

<div class="dedicated-wrapper">
  <h1>{content.title}</h1>
  {#if table.length == 0}
    <div class="img-wrapper">
      <img src="./img/no-server.svg" alt="" />
    </div>

    <div class="create-component">
      <h2 class="create-text semiBold">
        {content.noServer}
      </h2>
      <div class="button-wrapper">
        <Button content={'get started with a cloud server'} />
      </div>
    </div>
  {/if}
</div>

<style lang="scss">
  .dedicated-wrapper {
    height: 100%;
    padding-top: 32px;
    padding-left: 91px;
    padding-bottom: 93px;

    .img-wrapper {
      display: flex;
      justify-content: center;
    }

    h1 {
      margin-bottom: flexUnit(107px);
    }

    img {
      margin: 0 auto;
      margin-bottom: flexUnit(90px);
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
      }
    }
  }
</style>
