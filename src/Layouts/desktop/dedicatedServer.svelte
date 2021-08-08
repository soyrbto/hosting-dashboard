<script>
  import Button from '../../components/button.svelte';
  import c from '../../staticContent';

  let table = c.dedicatedTable;
  let content = c.dedicatedServer;

  console.log(table.length);
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
        <Button />
      </div>
    </div>
  {/if}
</div>

<style lang="scss">
  .dedicated-wrapper {
    padding-top: 32px;
    padding-left: 91px;
    padding-bottom: 93px;

    .img-wrapper {
      display: flex;
      justify-content: center;
    }

    h1 {
      margin-bottom: 107px;
    }

    img {
      margin: 0 auto;
      margin-bottom: 90px;
    }

    .create-component {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 32px;

      .create-text {
        margin-bottom: 30px;
      }

      .button-wrapper {
        width: 327px;
      }
    }
  }
</style>
