<script>
</script>

<header>
  <div class="container-user">
    <h4>Sergio Gonzales</h4>
    <img src="/img/icon-logout.svg" alt="logout" />
  </div>
</header>
<div class="line-wrapper">
  <div class="line" />
</div>

<style lang="scss">
  header {
    width: 1540px;
    justify-content: flex-end;
    display: flex;
    height: 104px;

    .container-user {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 1540px;
      padding-right: 25px;
      background-color: var(--blueBackground);

      h4 {
        padding-right: 10px;
      }
    }
  }

  .line-wrapper {
    display: flex;
    justify-content: flex-end;

    .line {
      margin-right: 30px;
      width: 1480px;
      height: 1px;
      background-color: #7c838b;
    }
  }
</style>
