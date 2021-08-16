<script>
  //some logic
</script>

<!-- 
PROPS:

[TYPE: REGULAR (DEFAULT), THIN  => (STRING) /static
TEXT: CONTENT => (STRING) / static
STYLE: DISABLE, OUTLINED, FILLED (DEFAULT)  => (STRING) /static
ICON: TRUE OR FALSE (DEFAULT) => (BOOLEAN)] /static
function: what to do / static

 -->

<button>
  <h4 class="bold">Call to Action</h4>
</button>

<style lang="scss">
  button {
    width: 100%;
    height: 100%;
    background-color: var(--blue);
    padding: flexUnit(6px) flexUnit(32px);
    border: none;
    border-radius: 6px;
    color: white;
  }
</style>
