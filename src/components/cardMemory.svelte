<!-- aqui va component de disk -->
<script>
  export let disk;
</script>

<div class="card-wrapper">
  <div class="disk">
    <h2>
      {disk.size} GB
    </h2>
  </div>

  <div class="server-number">
    <h4 class="serverNumber">{disk.cost}$/Mo</h4>
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

    .disk {
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
