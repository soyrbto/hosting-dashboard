<script>
  import c from '../../staticContent';
  import CardLocation from '../../components/cardLocation.svelte';

  const content = c.cloudOrder;

  // Request: price for every element   /fetch
</script>

<h1>CLoud servers Order</h1>
<div class="label-wrapper">
  <h1>{content.labelT}</h1>
  <div class="box">some</div>
</div>

<div class="location-wrapper">
  <h2>{content.locationT}</h2>

  <CardLocation />
</div>

<div class="model-wrapper">
  <h2>{content.modelT}</h2>

  <!-- aqui va component de model -->
</div>

<div class="size-wrapper">
  <h2>{content.diskT}</h2>

  <!-- aqui va component de size -->
</div>

<div class="goodbye">
  <div class="price">price: 746$/year</div>
  <div class="text">{content.byeText}</div>

  <!-- button -->
</div>

<style lang="scss">
  //some styles
</style>
