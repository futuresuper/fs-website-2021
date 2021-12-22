<script>
  import pages from "../../../data/pages.json";

  export let menu;

  const mobileMenu = [...menu[0].items, ...menu[1].items];
</script>

<div class="menu">
  {#each mobileMenu as item}
    <a href={item[1]}>{item[0]}</a>
  {/each}
  <a href={pages.LOGIN[1]}>{pages.LOGIN[0]}</a>
</div>

<style lang="scss">
  @use "../../../styles/" as *;

  .menu {
    width: calc(100% - 40px);
    margin: 20px 0px 0;
    position: absolute;
    background-color: $white;
    color: $black;
    border: 1px solid $black;
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    padding: 20px;
  }

  a {
    color: $black;
    text-decoration: none;
    padding: 8px 20px;
    border-radius: 32px;
  }
</style>
