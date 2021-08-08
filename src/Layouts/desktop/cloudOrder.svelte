<script>
  import c from '../../staticContent';
  import CardLocation from '../../components/cardLocation.svelte';
  import CardModel from '../../components/cardModel.svelte';
  import CardSize from '../../components/cardSize.svelte';

  const content = c.cloudOrder;
  const location = c.cloudLocation;
  const model = c.cloudModel;
  const disk = c.cloudSize;

  // Request: price for every element   /fetch
</script>

<div class="main-wrapper">
  <h1>{content.title}</h1>

  <div class="label-wrapper">
    <h2>{content.labelT}</h2>
    <input type="text" />
  </div>

  <div class="location-wrapper">
    <h2>{content.locationT}</h2>
    <div class="card-section">
      {#each location as location}
        <div class="card-wrapper">
          <CardLocation {location} />
        </div>
      {/each}
    </div>
  </div>

  <div class="model-wrapper">
    <h2>{content.modelT}</h2>

    <div class="card-section">
      {#each model as model}
        <div class="card-wrapper">
          <CardModel {model} />
        </div>
      {/each}
    </div>
  </div>

  <div class="size-wrapper">
    <h2>{content.diskT}</h2>

    <div class="card-section">
      {#each disk as disk}
        <div class="card-wrapper">
          <CardSize {disk} />
        </div>
      {/each}
    </div>
  </div>

  <div class="goodbye">
    <h4 class="price bold">price: 746$/year</h4>
    <p class="bodyVerySmall">{content.byeText}</p>

    <!-- button -->
  </div>
</div>

<style lang="scss">
  .main-wrapper {
    padding: 0 60px;
    background-color: #f3f8fc;

    h1 {
      margin-bottom: 45px;
    }

    .label-wrapper {
      margin-bottom: 60px;
    }

    h2 {
      margin-bottom: 25px;
    }

    h4 {
      color: $blue;
    }

    .card-section {
      display: flex;
      flex-wrap: wrap;

      .card-wrapper {
        margin-right: 65px;
        margin-bottom: 55px;
      }
    }

    .main-wrapper {
      padding-left: 380px;
    }

    .location-wrapper {
      margin-bottom: 60px;
    }

    .goodbye {
      margin: 0 auto;
      margin-top: 95px;
      text-align: justify;
      width: 370px;
      margin-bottom: 60px;
    }
  }
</style>
