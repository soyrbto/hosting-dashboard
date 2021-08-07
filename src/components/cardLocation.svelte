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
      src="./img/{location.country.svg}"
      alt="server located in {location.country} "
    />
    <div class="country">{location.country}</div>
  </div>
  <div class="server-number">
    {#each location.serverNumber as serverNumber, i}
      <div class="serverNumber">i</div>
    {/each}
  </div>
</div>

<style lang="scss">
  //some styles
</style>
