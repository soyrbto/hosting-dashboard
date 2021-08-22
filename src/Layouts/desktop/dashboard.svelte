<script>
  import Promotions from '../../components/promotions.svelte';
  import Notification from '../../components/notification.svelte';
  import Renewal from '../../components/renewals.svelte';
  export let name = 'sergio';
</script>

<div class="dashboard-wrapper">
  <h1>Hi {name}! welcome to the control panel</h1>

  <Promotions />

  <div class="information">
    <div class="notification-wrapper">
      <Notification />
    </div>
    <div class="renewal-wrapper">
      <Renewal />
    </div>
  </div>
  <!--  -->
</div>

<style lang="scss">
  .dashboard-wrapper {
    padding: flexUnit(32px) flexUnit(90px) flexUnit(77px) flexUnit(90px);

    h1 {
      margin-bottom: flexUnit(70px);
    }

    @media only screen and (max-width: 1854px) {
      .notification-wrapper {
        margin-bottom: flexUnit(70px);
        min-width: 100%;
      }

      .renewal-wrapper {
        min-width: 100%;
      }
    }
    .notification-wrapper {
      max-width: flexUnit(720px);
    }

    .renewal-wrapper {
      max-width: flexUnit(550px);
    }

    .information {
      display: flex;
      align-items: stretch;
      flex-wrap: wrap;
      margin-top: flexUnit(40px);
      justify-content: space-between;
    }
  }
</style>
