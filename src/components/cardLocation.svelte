<!-- 
PROPS:

{LOCATION: COUNTRY FLAG, COUNTRY NAME  => [IMG, TEXT]
SERVER: QTY OF SERVERS => (NUMBER)} /fetch


 -->
<script>
  export let location;
</script>

<div class="card-wrapper">
  <div class="location">
    <img
      width="58"
      height="83"
      src="./img/{location.country}.svg"
      alt="server located in {location.country} "
    />
    <h4 class="country">{location.country}</h4>
  </div>

  <div class="server-number">
    {#each Array(location.serverNumber) as _, i}
      <h3 class="serverNumber bold">{i + 1}</h3>
    {/each}
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

    .location {
      padding-top: 10px;
      padding-bottom: 14px;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 15px;
      width: 100%;
      background-color: var(--blueLight);
      background-color: #ebf3fe;
      margin-bottom: 22px;

      img {
        margin-bottom: 7px;
      }
    }

    .server-number {
      width: 160px;
      justify-content: space-around;
      display: flex;
      margin-bottom: 7px;
    }
  }

  .card-wrapper:hover {
    border: solid 4px var(--blue);
  }
</style>
