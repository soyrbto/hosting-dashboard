<script>
  import FormAccount from '../../components/formAccount.svelte';
  import FormPassword from '../../components/formPassword.svelte';
</script>

<div class="main-wrapper">
  <h1>Account Information</h1>

  <div class="formAccount-wrapper">
    <FormAccount />
  </div>

  <div class="formPassword-wrapper">
    <FormPassword />
  </div>
</div>

<style lang="scss">
  .main-wrapper {
    display: flex;
    padding: 32px 90px 75px;
    flex-direction: column;

    .formAccount-wrapper {
      margin-bottom: 45px;
    }

    h1 {
      margin-top: 32px;
      margin-bottom: 45px;
    }
  }
</style>
