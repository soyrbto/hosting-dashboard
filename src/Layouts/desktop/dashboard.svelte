<script>
  import Promotions from '../../components/promotions.svelte';
  export let name = 'sergio';
</script>

<div class="dashboard-wrapper">
  <h1>Hi {name}! welcome to the control panel</h1>

  <Promotions />

  <div class="information">
    <!-- notification -->
    <!-- pending renewal -->
  </div>
  <!--  -->
</div>

<style lang="scss">
  .dashboard-wrapper {
    padding: 32px 77px 90px;
  }
  //some styles
</style>
