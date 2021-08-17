<script>
  export let secundary = false;
  export let content = 'call To action';
</script>

<!-- 
PROPS:

[TYPE: REGULAR (DEFAULT), THIN  => (STRING) /static
TEXT: CONTENT => (STRING) / static
STYLE: DISABLE, OUTLINED, FILLED (DEFAULT)  => (STRING) /static
ICON: TRUE OR FALSE (DEFAULT) => (BOOLEAN)] /static
function: what to do / static

 -->

<button class:secundary>
  <h4 class="bold">{content}</h4>
</button>

<style lang="scss">
  button {
    cursor: pointer;
    width: 100%;
    height: 100%;
    background-color: var(--blue);
    padding: flexUnit(16px) flexUnit(32px);
    border: none;
    border-radius: 6px;
    color: white;
    box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08),
      0px 4px 8px rgba(44, 39, 56, 0.1);

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
</style>
