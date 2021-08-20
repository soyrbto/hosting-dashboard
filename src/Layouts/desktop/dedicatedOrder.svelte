<script>
  import c from '../../staticContent';
  import CardLocation from '../../components/cardLocation.svelte';
  import CardModel from '../../components/cardModel.svelte';
  import CardSize from '../../components/cardMemory.svelte';
  import Button from '../../components/button.svelte';

  const content = c.dedicatedOrder;
  const location = c.cloudLocation;
  const model = c.cloudModel;
  const disk = c.cloudSize;

  // Request: price for every element   /fetch
</script>

<div class="main-wrapper">
  <h1>{content.title}</h1>

  <div class="label-wrapper">
    <h2>{content.labelT}</h2>
    <input type="text" placeholder="Label" />
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
    <h4 class="price bold">Price: 746$/year</h4>
    <p class="bodyVerySmall">{content.byeText}</p>
    <Button />
  </div>
</div>

<style lang="scss">
  .main-wrapper {
    width: 1540px;
    padding: 0 60px;
    background-color: #f3f8fc;

    h1 {
      margin-top: 35px;
      margin-bottom: 45px;
    }

    .label-wrapper {
      margin-bottom: 60px;

      input {
        padding-left: 10px;
        border: solid var(--blueLight) 2px;
        background-color: white;
        border-radius: 5px;
        height: 40px;
        width: 513px;

        &::placeholder {
          margin-left: 5px;
        }
      }
    }

    h2 {
      margin-bottom: 25px;
    }

    h4 {
      color: var(--blue);
    }

    p {
      margin-bottom: 20px;
    }

    .card-section {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

      .card-wrapper {
        margin-right: 65px;
        margin-bottom: 55px;
      }
    }

    .location-wrapper {
      margin-bottom: 60px;
    }

    .goodbye {
      color: black;
      margin: 0 auto;
      margin-top: 95px;
      text-align: center;
      width: 370px;
      margin-bottom: 60px;

      .price {
        display: flex;
        justify-content: center;
        margin-bottom: 13px;
      }
    }
  }
</style>
