<script>
  import c from '../staticContent';
  import Button from './button.svelte';

  export let promotion = c.dashboard.promotion;
</script>

<!-- 
    Props:

    title: promotion title => (string) / static
    image: PROMOTIONAL BANNER => (URL) / fetch
    content: promotion info => (HTML)  / fetch
    link: url to go to 
    button.svelte
 -->

<div class="card-wrapper">
  <h1 class="title">{promotion.title}</h1>
  <h4 class="content">{promotion.content}</h4>
  <div class="button-wrapper">
    <Button />
  </div>
  <img
    src="./img/promotion.svg"
    alt="promotion banner"
    width="472"
    height="285"
  />
</div>

<style lang="scss">
  .card-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
      'title image'
      'content image'
      'button image';

    padding: 53px 60px 80px 60px;
    background-color: white;
    border-radius: 20px;
    width: 1360px;

    h1 {
      grid-area: title;
    }

    h4 {
      grid-area: content;
    }

    .button-wrapper {
      display: flex;
      align-items: flex-end;
      grid-area: button;
    }

    img {
      justify-self: end;
      grid-area: image;
    }
  }
</style>
