<script>
  import c from '../staticContent';
  import Button from './button.svelte';

  export let renewal = c.dashboard.renewal;
</script>

<!-- 
    Props:

    title: title => (string) / static
    content: promotion info => (HTML) / fetch 
    link: url to go to 
    button.svelte
 -->

<div class="card-wrapper">
  <h1 class="title">{renewal.title}</h1>
  <h4 class="content">{renewal.content}</h4>
  <div class="cta-wrapper">
    <Button secundary={true} />
  </div>
</div>

<style lang="scss">
  .card-wrapper {
    height: 100%;
    // min-height: flexUnit(278px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: flexUnit(34px);
    padding-left: flexUnit(60px);
    background-color: white;
    border-radius: flexUnit(20px);

    * + * {
      margin-top: flexUnit(15px);
    }

    .cta-wrapper {
      align-self: center;
      height: flexUnit(57px);
      width: flexUnit(174px);
    }
  }
</style>
