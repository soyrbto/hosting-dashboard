<script>
  import { beforeUpdate } from 'svelte';

  export let rawOptions, category;

  let options = [];

  beforeUpdate(() => {
    let someArray = [];
    for (let i = 0; i < rawOptions.length; i++) {
      console.log(options[i]);
      someArray[i] = rawOptions[i].country + '' + rawOptions[i].serverNumber;
    }

    options = someArray;
  });
</script>

<!-- some markup -->
<select name={category} id={category}>
  {#each options as option}
    <option value={option} />
  {/each}
</select>

<style lang="scss">
  // some styles
</style>
