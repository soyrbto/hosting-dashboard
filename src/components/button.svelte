<script>
  export let handleClick = () => {
    console.log("I don't do anything yet");
  };
  export let disable = false;
  export let secundary = false;
  export let content = 'call To action';
  export let icon = false;
  export let padding = '';
</script>

<!-- 
PROPS:

[TYPE: REGULAR (DEFAULT), THIN  => (STRING) /static
TEXT: CONTENT => (STRING) / static
STYLE: DISABLE, OUTLINED, FILLED (DEFAULT)  => (STRING) /static
ICON: TRUE OR FALSE (DEFAULT) => (BOOLEAN)] /static
function: what to do / static

 -->

<button
  class:disable
  class:secundary
  style="padding: {padding};"
  on:click={() => handleClick()}
>
  {#if icon}
    <img src="./img/{icon}.svg" alt="" />
  {/if}
  <h4 class="bold">{content}</h4>
</button>

<style lang="scss">
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: var(--blue);
    padding: flexUnit(16px) flexUnit(32px);
    border: none;
    border-radius: 6px;
    color: white;
    box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08),
      0px 4px 8px rgba(44, 39, 56, 0.1);

    img {
      margin-right: 16px;
    }

    &:active {
      box-shadow: none;
      transition: all ease-in-out;
    }
  }

  .secundary {
    color: var(--blue);
    background-color: white;
    border: 1px solid var(--blue);
    box-shadow: none;
  }

  .disable {
    background-color: #c9c9c9;
  }
</style>
