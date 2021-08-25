<script>
  import { changeSection } from '../../store';
  import Button from '../../components/button.svelte';
  import c from '../../staticContent';
  import ServerTable from '../../components/serverTable.svelte';
  import Modal from '../../components/modal.svelte';

  let table = c.cloudTable;
  let content = c.cloudServer;
  $: visible = false;

  function handleClick() {
    changeSection(4);
  }

  function setPassword() {
    visible = true;
  }
</script>

<div class="cloud-wrapper">
  <Modal {visible} on:modalClick={() => (visible = !visible)} />

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
    flex-direction: column;
    // padding-top: flexUnit(32px);
    padding-left: flexUnit(90px);
    padding-right: flexUnit(40px);
    // padding-bottom: flexUnit(93px);

    .create-server {
      align-self: flex-end;
      margin-bottom: 40px;
    }

    .img-wrapper {
      display: flex;
      justify-content: center;
    }

    h1 {
      margin-top: flexUnit(32px);
      margin-bottom: flexUnit(107px);
    }

    img {
      height: auto;
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

  @media only screen and (max-width: 962px) {
    .cloud-wrapper {
      padding: 0 flexUnit(40px);
    }
  }
</style>
