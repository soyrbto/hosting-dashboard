<script>
</script>

<header>
  <div class="container-logo">
    <img src="./img/Logo.svg" alt="Logo" />
  </div>
  <div class="container-user">
    <h4>Sergio Gonzales</h4>
    <img src="/img/icon-logout.svg" alt="logout" />
  </div>
</header>

<style lang="scss">
  header {
    justify-content: flex-end;
    display: flex;
    height: 104px;

    .container-logo {
      background-color: white;
      display: flex;
      align-items: center;
      width: 380px;
      padding-left: 25px;
    }

    .container-user {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 1540px;
      padding-right: 25px;
      background-color: $blueBackground;

      h4 {
        padding-right: 10px;
      }
    }
  }
</style>
