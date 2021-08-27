<script>
  import Select from 'svelte-select';
  export let options;
</script>

<!-- some markup -->
<div class="themed custom">
  <Select
    items={options}
    inputStyles={'font-family:nunito sans; font-size:18px;'}
  />
</div>

<style lang="scss">
  .themed {
    font-style: normal;
    border: none;
    padding: 15px;
    width: flexUnit(360px);
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: 600;
    font-size: flexUnit(20px);
  }

  .custom {
    --border: 3px solid blue;
    --borderRadius: 5px;
    //   --placeholderColor: blue;
    //   --groupTitleFontSize: 100px;
  }
</style>
