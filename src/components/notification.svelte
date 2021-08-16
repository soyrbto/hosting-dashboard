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
    grid-template-rows: flexUnit(60px) flexUnit(60px) flexUnit(60px);
    row-gap: flexUnit(15px);
    grid-template-areas:
      'title title'
      'content content'
      'button close';

    padding: flexUnit(34px);
    padding-left: flexUnit(60px);
    background-color: white;
    border-radius: flexUnit(20px);

    h1 {
      grid-area: title;
    }

    h4 {
      grid-area: content;
    }

    .cta-wrapper {
      max-width: flexUnit(174px);
      grid-area: button;
    }

    .close-wrapper {
      justify-self: start;
      grid-area: close;
    }
  }
</style>
