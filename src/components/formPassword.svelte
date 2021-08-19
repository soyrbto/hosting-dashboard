<script>
  import Button from '../components/button.svelte';
</script>

<div class="form-wrapper">
  <form action="" on:submit|preventDefault>
    <div class="field">
      <label for=""> Existing password </label>
      <input type="password" />
    </div>
    <div class="field">
      <label for=""> New password </label>
      <input type="text" />
    </div>
    <div class="field">
      <label for=""> New password again </label>
      <input type="text" />
    </div>
  </form>
  <div class="buttons">
    <div class="update-wrapper">
      <Button content={'Update'} />
    </div>
  </div>
</div>

<style lang="scss">
  .form-wrapper {
    padding: 32px 30px;
    background-color: white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;

    form {
      flex-wrap: wrap;
      width: 100%;
      display: flex;
      justify-content: space-between;

      .vat {
        input {
          width: 50%;
        }
      }

      .field {
        justify-content: flex-end;
        margin-bottom: 30px;
        width: 28%;
        display: flex;
        flex-direction: column;

        label {
          margin-bottom: 15px;
          font-family: Nunito Sans;
          font-style: normal;
          font-weight: 600;
          font-size: flexUnit(18px);
        }

        input {
          border-radius: 8px;
          height: 40px;
          border: none;
          background-color: #f0efef;
        }

        &:not(:last-child) {
          margin-right: 10px;
        }
      }
    }
    .buttons {
      display: flex;
      justify-content: flex-end;
    }
  }
</style>
