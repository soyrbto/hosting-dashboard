<script>
  import Slider from '../../components/slider.svelte';
  import c from '../../staticContent';
  import CardLocation from '../../components/cardLocation.svelte';
  import CardModel from '../../components/cardModel.svelte';
  import CardSize from '../../components/cardMemory.svelte';
  import Button from '../../components/button.svelte';
  import List from '../../components/list.svelte';

  const content = c.dedicatedOrder;
  const location = c.cloudLocation;
  const model = c.cloudModel;
  const disk = c.cloudSize;
  let locationList = [];
  let modelList = [];
  let diskList = [];

  for (let i = 0; i < location.length; i++) {
    locationList[i] = `${location[i].country} ${location[i].serverNumber}`;
  }

  for (let i = 0; i < disk.length; i++) {
    diskList[i] = `${disk[i].size}GB at ${disk[i].cost}`;
  }

  const bandwidth = {
    title: 'Bandwidth',
    min: 50,
    max: 500,
    step: 50,
    item: 'mbps',
  };

  const subnets = {
    title: 'Subnets',
    min: 1,
    max: 60,
    step: 1,
    item: 'Subnets',
  };
  let windowsWidth;
</script>

<svelte:window bind:innerWidth={windowsWidth} />
<div class="main-wrapper">
  <h1>{content.title}</h1>

  <div class="label-wrapper">
    <h2>{content.labelT}</h2>
    <input type="text" placeholder="Label" />
  </div>

  <div class="location-wrapper">
    <h2>{content.locationT}</h2>
    <div class="card-section">
      {#if windowsWidth > 962}
        {#each location as location}
          <div class="card-wrapper">
            <CardLocation {location} />
          </div>
        {/each}
      {:else}
        <div class="list">
          <List options={locationList} category={'Country Server'} />
        </div>
      {/if}
    </div>
  </div>

  <div class="model-wrapper">
    <h2>{content.modelT}</h2>

    <div class="card-section">
      <!-- {#if windowsWidth > 962} -->
      {#each model as model}
        <div class="card-wrapper">
          <CardModel {model} />
        </div>
      {/each}
      <!-- {:else}
        <div class="list">
          <List options={ModelList} />
        </div> -->
      <!-- {/if} -->
    </div>
  </div>

  <div class="size-wrapper">
    <h2>{content.diskT}</h2>

    <div class="card-section">
      {#if windowsWidth > 962}
        {#each disk as disk}
          <div class="card-wrapper">
            <CardSize {disk} />
          </div>
        {/each}
      {:else}
        <List options={diskList} />
      {/if}
    </div>
  </div>

  <div class="sliders">
    <div class="network">
      <Slider conditions={bandwidth} />
    </div>
    <div class="subnets">
      <Slider conditions={subnets} />
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
    padding: 0 flexUnit(60px);
    background-color: #f3f8fc;

    h1 {
      margin-top: flexUnit(35px);
      margin-bottom: flexUnit(45px);
    }

    .label-wrapper {
      margin-bottom: 60px;

      input {
        padding-left: 10px;
        border: solid var(--blueLight) 2px;
        background-color: white;
        border-radius: 5px;
        height: 40px;
        width: 35%;

        &::placeholder {
          margin-left: 5px;
        }
      }
    }

    h2 {
      margin-bottom: flexUnit(25px);
    }

    h4 {
      color: var(--blue);
    }

    p {
      margin-bottom: 20px;
    }

    .card-section {
      display: flex;
      flex-wrap: wrap;

      .card-wrapper {
        margin-right: flexUnit(65px);
        margin-bottom: flexUnit(55px);
      }
    }

    .location-wrapper {
      margin-bottom: 60px;
    }

    .goodbye {
      display: flex;
      flex-direction: column;
      color: black;
      margin: 0 auto;
      margin-top: 95px;
      text-align: center;
      width: fit-content;
      margin-bottom: flexUnit(60px);

      .price {
        display: flex;
        justify-content: center;
        margin-bottom: 13px;
      }
    }

    .sliders {
      display: flex;
      justify-content: center;
      flex-grow: 1;
      & > div {
        margin: 0 auto;
      }
    }
  }

  @media only screen and (max-width: 962px) {
    .main-wrapper {
      .card-section {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .card-wrapper {
          margin-right: 0;
          margin-bottom: flexUnit(35px);
        }
      }

      .label-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        input {
          width: 80%;
        }
      }
      .sliders {
        flex-direction: column;
        .network {
          margin-top: flexUnit(100px);
          margin-bottom: flexUnit(100px);
        }
      }
    }
  }
</style>
