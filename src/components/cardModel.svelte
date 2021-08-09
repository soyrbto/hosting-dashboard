<script>
  export let model;
</script>

<!-- 
PROPS:

[TITLE: SERVER TYPE  => (STRING)
CONTENT: INFORMATION => (HTML)] fetch

 -->

<div class="card-wrapper">
  <div class="model">
    <h4>
      {model.gMemory} / <span>{model.processors}</span>
    </h4>
    <h4>
      {model.memory} <span>{model.memoryType}</span>
    </h4>
    <h4>
      {model.memorySpeed} <span>Transfer</span>
    </h4>
  </div>

  <div class="server-number">
    <h3 class="serverNumber bold">{model.os}</h3>
  </div>
</div>

<style lang="scss">
  .card-wrapper {
    background-color: white;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 220px;
    border-radius: 20px;
    border: solid 4px var(--blueLight);

    h4 span {
      color: var(--greyMedium);
    }

    .model {
      padding-top: 10px;
      padding-bottom: 14px;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 15px;
      width: 100%;
      background-color: var(--blueLight);
      background-color: #ebf3fe;
      margin-bottom: 27px;
    }

    .server-number {
      width: 160px;
      justify-content: space-around;
      display: flex;
    }
  }

  .card-wrapper:hover {
    border: solid 4px var(--blue);
  }
</style>
