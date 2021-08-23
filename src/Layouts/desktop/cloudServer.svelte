<script>
  import { changeSection } from '../../store';
  import Button from '../../components/button.svelte';
  import c from '../../staticContent';
  import ServerTable from '../../components/serverTable.svelte';
  import Modal from '../../components/modal.svelte';

  let table = c.cloudTable;
  let content = c.cloudServer;
  let visible = false;

  function handleClick() {
    changeSection(4);
  }

  function setPassword() {
    visible = true;
  }
</script>

<div class="cloud-wrapper">
  <Modal {visible} />

  <h1>{content.title}</h1>
  {#if table.length == 0}
    <div class="img-wrapper">
      <img width="566" height="472" src="./img/no-server.svg" alt="" />
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
  <div class="create-server">
    <Button content={'Create Server'} {handleClick} icon={'plus-icon'} />
  </div>

  <ServerTable content={table} on:setPassword={() => setPassword()} />
</div>

<style lang="scss">
  .cloud-wrapper {
    display: flex;
    height: 100%;
    padding-top: 32px;
    padding-left: 91px;
    padding-right: 40px;
    padding-bottom: 93px;
    flex-direction: column;

    .create-server {
      align-self: flex-end;
      margin-bottom: 40px;
      width: flexUnit(256px);
      //   height: flexUnit(37px);
    }

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
