<script>
  export let itemName;
  export let selected = 'true';
</script>

<!-- 
        PROP: 
        CONTENT: STRING / STATIC
        ICON: BOOLEAN / STATIC
        IMAGE: URL / STATIC
        STATE: BOOLEAN / STATIC
 -->

<div class="main-wrapper" class:selected>
  <h3 class="tab-item">{itemName}</h3>

  <div class="vertical-line" />
</div>

<style lang="scss">
  .main-wrapper {
    height: 74px;
    width: 360px;
    display: flex;
    justify-content: space-between;

    .tab-item {
      width: 340px;
      border-radius: 10px;
      background-color: white;
      color: $greyLightMedium;
      padding: 22px 0 22px 10px;
    }

    .vertical-line {
      width: 4px;
      background-color: $blue;
      visibility: hidden;
    }
  }

  .selected {
    .tab-item {
      color: $blue;
      background-color: $blueLight;
    }

    .vertical-line {
      visibility: visible;
    }
  }
</style>
