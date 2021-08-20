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
    height="240"
  />
</div>

<style lang="scss">
  .card-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr 1fr;
    column-gap: 30px;

    grid-template-areas:
      'title image'
      'content image'
      'button image';

    padding: flexUnit(53px) flexUnit(60px) flexUnit(80px) flexUnit(60px);
    background-color: white;
    border-radius: 20px;

    h1 {
      grid-area: title;
    }

    h4 {
      grid-area: content;
      max-width: flexUnit(600px);
    }

    .button-wrapper {
      width: flexUnit(174px);
      height: flexUnit(57px);
      display: flex;
      align-self: flex-end;
      grid-area: button;
    }

    img {
      justify-self: end;
      grid-area: image;
    }
  }

  @media only screen and (max-width: 1100px) {
    .card-wrapper {
      padding: flexUnitM(30px) flexUnitM(15px);
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 5fr 1fr 1fr;
      grid-template-areas:
        'title'
        'image'
        'content'
        'button';

      img {
        width: 100%;
        justify-self: center !important;
      }
    }

    .button-wrapper {
      justify-self: center;
    }
  }
</style>
