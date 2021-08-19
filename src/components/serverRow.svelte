<script>
  import { slide } from 'svelte/transition';
  import Button from '../components/button.svelte';
  export let title = false;
  export let content = {};

  let open = false;
</script>

{#if title}
  <div class="component-wrapper">
    <div class="row title">
      <div class="label">Label</div>
      <div class="price">Price</div>
      <div class="location">Location</div>
      <div class="status">Status</div>
      <div class="actions">Actions</div>
      <div class="details" />
    </div>
  </div>
{/if}

{#if !title}
  <div class="component-wrapper">
    <div class="row">
      <div class="label">
        {content.label} <span>{content.system}</span>
      </div>
      <div class="price">{content.price}</div>
      <div class="location">{content.location}</div>
      <div class="status {content.status ? 'active' : 'inactive'}">
        {content.status ? 'Active' : 'Inactive'}
      </div>
      <div class="actions">
        <img src="./img/stopIcon.svg" alt="" />
        <img src="./img/restartIcon.svg" alt="" />
        <img src="./img/reinstallIcon.svg" alt="" />
      </div>
      <div class="details">
        <img
          on:click={() => {
            open = !open;
          }}
          src="./img/detailsIcon.svg"
          alt=""
        />
      </div>
    </div>

    {#if open}
      <div class="row subtable" transition:slide>
        <div>
          IP address
          <span> 192.256.65.1 </span>
        </div>
        <div>
          aditional IPs
          <span> 192.256.65.1 </span>
          <span> 192.256.65.1 </span>
        </div>
        <div>
          Password
          <span> <input type="password" /> </span>
        </div>
        <div>
          OS
          <span> Linux 001 </span>
        </div>
        <div class="button-wrapper">
          <Button
            secundary={true}
            padding={`6px 20px`}
            content={'Clone Server'}
          />
        </div>
      </div>
    {/if}
  </div>
{/if}

<style lang="scss">
  .component-wrapper {
    .row {
      height: 61px;
      padding: 0px 40px;
      display: flex;

      .details {
        width: 2%;
      }

      .actions {
        & > :not(:first-child) {
          margin-left: 10px;
        }
      }

      .active {
        color: var(--greenActive);
      }

      .inactive {
        color: var(--redInactive);
      }

      div {
        padding-top: 16px;
        color: var(--greyMedium);
        width: 20%;
        font-family: Nunito Sans;
        font-style: normal;
        font-weight: 600;
        font-size: flexUnit(18px);

        img {
          cursor: pointer;
        }

        span {
          display: block;
          font-family: Nunito Sans;
          font-style: normal;
          font-weight: 400;
          font-size: flexUnit(12px);

          input {
            width: 80%;
          }
        }
      }
    }

    .subtable {
      background-color: #eaf3fe;
      height: auto;
      padding: 5px 40px;

      div {
        padding: 10px 0px;
      }

      .button-wrapper {
        width: 176px;
        height: 37px;
      }
    }

    .title {
      div {
        padding-top: 0;
        color: black;
        font-family: Nunito Sans;
        font-style: normal;
        font-weight: 700;
        font-size: flexUnit(22px);
      }
    }
  }
</style>
