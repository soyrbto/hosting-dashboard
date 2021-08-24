<script>
</script>

<header>
  <img src="./img/menu.svg" alt="" class="menu" />
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
    justify-content: space-between;
    display: flex;
    height: 8vh;
    background-color: #086cff;
    padding: 0px flexUnit(25px);
    align-items: center;

    img.menu {
      display: none;
    }

    .container-user {
      display: flex;
      align-items: center;
      justify-content: flex-end;

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
      justify-content: space-between;
      img.menu {
        display: inline;
      }
    }
  }
</style>
