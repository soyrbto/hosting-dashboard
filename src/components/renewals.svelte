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
    <Button secundary={true} padding={`10px 32px`} content={'Check Details'} />
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

    h1 {
      margin-bottom: flexUnit(10px);
    }

    .cta-wrapper {
      margin-top: flexUnit(24px);
      align-self: left;
      height: flexUnit(57px);
    }
  }

  @media only screen and (max-width: 962px) {
    .card-wrapper {
      padding: flexUnitM(20px);
    }
  }
</style>
