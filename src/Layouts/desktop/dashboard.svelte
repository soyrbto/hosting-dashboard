<script>
  import Promotions from '../../components/promotions.svelte';
  import Notification from '../../components/notification.svelte';
  export let name = 'sergio';
</script>

<div class="dashboard-wrapper">
  <h1>Hi {name}! welcome to the control panel</h1>

  <Promotions />

  <div class="information">
    <Notification />
    <!-- pending renewal -->
  </div>
  <!--  -->
</div>

<style lang="scss">
  .dashboard-wrapper {
    padding: 32px 77px 90px;

    h1 {
      margin-bottom: 70px;
    }

    .information {
      display: flex;

      margin-top: 80px;
    }
  }
</style>
