<script>
  import Button from '../components/button.svelte';
</script>

<div class="form-wrapper">
  <form action="" on:submit|preventDefault>
    <div class="field">
      <label for=""> Name </label>
      <input type="text" />
    </div>
    <div class="field">
      <label for=""> Last Name </label>
      <input type="text" />
    </div>
    <div class="field">
      <label for=""> Email </label>
      <input type="text" />
    </div>
    <div class="field">
      <label for=""> Country </label>
      <select name="country" id="" />
    </div>
    <div class="field">
      <label for=""> Country </label>
      <select name="city" id="" />
    </div>
    <div class="field">
      <label for=""> address </label>
      <input type="text" />
    </div>
    <div class="field">
      <label for=""> Company </label>
      <input type="text" />
    </div>
    <div class="field vat">
      <label for=""> vat </label>
      <input type="text" />
    </div>
    <div class="field">
      <div class="buttons">
        <div class="edit-wrapper">
          <Button content={'edit'} />
        </div>
        <div class="save-wrapper">
          <Button secundary={true} content={'save'} />
        </div>
      </div>
    </div>
  </form>
</div>

<style lang="scss">
  .form-wrapper {
    padding: 32px 30px;
    background-color: white;
    border-radius: 20px;
    display: flex;

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

        .buttons {
          align-self: flex-end;
          display: flex;

          .save-wrapper {
            margin-left: 25px;
          }
        }

        label {
          margin-bottom: 15px;
          font-family: Nunito Sans;
          font-style: normal;
          font-weight: 600;
          font-size: flexUnit(18px);
        }

        input,
        select {
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
  }
</style>
