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
    <Button />
  </div>
</div>

<style lang="scss">
  .card-wrapper {
    display: grid;
    grid-template-columns: 1fr 4fr;
    column-gap: 25px;
    grid-template-rows: 60px 60px 60px;
    row-gap: 15px;
    grid-template-areas:
      'title title'
      'content content'
      'button close';

    padding: 34px;
    padding-left: 60px;
    background-color: white;
    border-radius: 20px;
    width: 720px;

    h1 {
      grid-area: title;
    }

    h4 {
      grid-area: content;
    }

    .cta-wrapper {
      grid-area: button;
    }

    .close-wrapper {
      align-items: flex-end;
      justify-self: start;
      grid-area: close;
    }
  }
</style>
