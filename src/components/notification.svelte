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
    <Button padding={`10px 32px`} content={'Open'} />
  </div>
  <div class="close-wrapper">
    <Button secundary={true} content={'Dismiss'} padding={`10px 32px`} />
  </div>
</div>

<style lang="scss">
  .card-wrapper {
    display: grid;
    grid-template-columns: min-content auto;
    column-gap: flexUnit(25px);
    grid-template-rows: repeat(auto, 3);
    row-gap: flexUnit(10px);
    grid-template-areas:
      'title title'
      'text text'
      'button close';

    padding: flexUnit(20px);
    padding-left: flexUnit(60px);
    background-color: white;
    border-radius: flexUnit(20px);

    h1 {
      display: inline-block;
      grid-area: title;
    }

    h4 {
      height: fit-content;
      grid-area: text;
      margin-bottom: 14px;
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
