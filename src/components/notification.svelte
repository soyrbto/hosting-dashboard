<script>
  import c from '../staticContent';
  import Button from './button.svelte';

  export let notification = c.dashboard.notification;
</script>

<!-- 
    Props:

    title: title => (string) / static
    content: promotion info => (HTML) / fetch 
    link: url to go to 
    button.svelte
 -->

<div class="card-wrapper">
  <h1 class="title">{notification.title}</h1>
  <h4 class="content">{notification.content}</h4>
  <div class="cta-wrapper">
    <Button />
  </div>
  <div class="close-wrapper">
    <Button secundary={true} content={'Close'} />
  </div>
</div>

<style lang="scss">
  .card-wrapper {
    display: grid;
    grid-template-columns: flexUnit(174px) auto;
    column-gap: flexUnit(25px);
    grid-template-rows: auto auto auto;
    row-gap: flexUnit(15px);
    grid-template-areas:
      'title title'
      'text text'
      'button close';

    padding: flexUnit(34px);
    padding-left: flexUnit(60px);
    background-color: white;
    border-radius: flexUnit(20px);

    h1 {
      grid-area: title;
    }

    h4 {
      height: fit-content;
      grid-area: text;
    }

    .cta-wrapper {
      height: flexUnit(57px);
      max-width: flexUnit(174px);
      grid-area: button;
    }

    .close-wrapper {
      height: flexUnit(57px);
      justify-self: start;
      grid-area: close;
    }
  }
</style>
