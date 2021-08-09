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
    <Button />
  </div>
</div>

<style lang="scss">
  .card-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 34px;
    padding-left: 60px;
    background-color: white;
    border-radius: 20px;
    width: 550px;

    & > * {
      margin-bottom: 15px;
    }
  }
</style>
