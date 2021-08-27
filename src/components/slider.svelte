<script>
  export let conditions;

  $: ({ title, min, max, step, item } = conditions);
  let value = conditions.min;
</script>

<!-- some markup -->
<div class="main-wrapper">
  <div class="title"><h2>{title}</h2></div>

  <div class="slider">
    <input type="range" {min} {max} {step} bind:value />
    <div class="value"><h3 class="bold">{value} {item}</h3></div>
  </div>
</div>

<style lang="scss">
  .main-wrapper {
    display: flex;
    flex-direction: column;
    .title {
      margin-bottom: flexUnit(38px);
    }

    .slider {
      display: flex;

      input {
        width: flexUnit(260px);
      }

      .value {
        width: flexUnit(70px);
        margin-left: flexUnit(17px);
      }
    }
  }
</style>
