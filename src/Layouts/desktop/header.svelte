<script>
</script>

<header>
  <div class="logo-container">
    <img src="./img/logo.svg" alt="" />
  </div>
  <div class="container-user">
    <h4>Sergio Gonzales</h4>
    <img src="/img/icon-logout.svg" alt="logout" />
  </div>
</header>

<style lang="scss">
  header {
    width: 100%;
    justify-content: flex-end;
    display: flex;
    min-height: 8vh;
    background-color: #086cff;
    padding-left: flexUnit(22px);
    align-items: center;

    .container-user {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      padding-right: flexUnit(25px);

      img {
        cursor: pointer;
      }

      h4 {
        color: white;
        padding-right: flexUnit(10px);
      }
    }
  }

  @media only screen and (max-width: 1100px) {
    header {
      .container-user {
        background-color: white;
      }
    }
  }
</style>
