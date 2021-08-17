<script>
  export let content = [];
</script>

<div class="table-wrapper">
  <table class="container">
    <thead>
      <tr>
        <th><h3>Label</h3></th>
        <th><h3>Price</h3></th>
        <th><h3>Location</h3></th>
        <th><h3>Status</h3></th>
        <th class="icons">
          <h3>actions</h3>
        </th>
      </tr>
    </thead>
    <tbody>
      {#each content as content}
        <tr>
          <td
            >{content.label}
            <span><p class="bodyVerySmall">{content.system}</p></span></td
          >
          <td>{content.price}</td>
          <td>{content.location}</td>
          <td class={content.status ? 'active' : 'inactive'}
            >{content.status ? 'active' : 'inactive'}</td
          >
          <td>
            <img src="./img/stopIcon.svg" alt="stop server" />
            <img src="./img/restartIcon.svg" alt="restart server" />
            <img src="./img/reinstallIcon.svg" alt="reinstall server" /></td
          >
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style lang="scss">
  table {
    border-radius: 20px;
    border-collapse: collapse;

    tr:not(:last-child) {
      border-bottom: solid 1px var(--greyLight);
    }

    th {
      border-bottom: solid 1px var(--greyLight);
    }

    tr {
      .active {
        color: var(--greenActive);
      }
      .inactive {
        color: var(--redInactive);
      }
    }
  }
  h3 {
    text-align: left;
    font-weight: 700;
  }

  .container {
    text-align: left;
    overflow: hidden;
    width: 80%;
    margin: 0 auto;
    display: table;

    td,
    th {
      font-family: Nunito Sans;
      font-style: normal;
      font-weight: 600;
      font-size: flexUnit(18px);
      background-color: white;
      padding-bottom: 1%;
      padding-top: 1%;
      padding-left: 2%;

      img:not(:first-child) {
        margin-left: 10px;
      }
    }

    span {
      display: block;
      color: var(--greyMedium);
    }
  }

  .container th {
    background-color: white;
  }

  @media (max-width: 800px) {
    .container td:nth-child(5),
    .container th:nth-child(5) {
      display: none;
    }
  }
</style>
