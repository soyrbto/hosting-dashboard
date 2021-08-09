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
  <Button />
  <img
    src="./img/promotion.svg"
    alt="promotion banner"
    width="472"
    height="285"
  />
</div>

<style lang="scss">
  .card-wrapper {
    padding: 53px 60px 80px 60px;
    background-color: white;
    border-radius: 20px;
    width: 1360px;
  }
</style>
