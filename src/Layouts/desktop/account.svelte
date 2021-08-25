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
    padding: 0 flexUnit(90px) flexUnit(75px);
    flex-direction: column;

    .formAccount-wrapper {
      margin-bottom: flexUnit(45px);
    }

    h1 {
      margin-top: 32px;
      margin-bottom: flexUnit(45px);
    }
  }

  @media only screen and (max-width: 962px) {
    .main-wrapper {
      padding: flexUnit(32px) flexUnit(40px) flexUnit(77px);
    }
  }
</style>
