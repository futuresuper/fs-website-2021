<script>
  import Carat from "../../images/Carat.svelte";

  export let dropdown;
  const white = "#FFFFFF";
</script>

<div class="dropdown">
  <div class="heading">
    {dropdown.heading}
    <div class="carat">
      <Carat colour={white} direction="down" />
    </div>
  </div>
  <div class="gap" />
  <div class="menu-items">
    {#each dropdown.items as item}
      <a href={item[1]}>{item[0]}</a>
    {/each}
  </div>
</div>

<style lang="scss">
  @use "../../../styles/" as *;

  .dropdown {
    position: relative;
    display: inline-block;
    margin-right: 20px;
  }

  .heading {
    display: flex;
    flex-direction: row;
  }

  .carat {
    margin-left: 6px;
    margin-top: 1px;
    width: 14px;
  }

  .gap {
    height: 36px;
    width: 100%;
    position: absolute;
  }

  .menu-items {
    position: absolute;
    display: none;
    flex-direction: column;
    width: 280px;
    margin: 36px 0 0 -20px;
    padding: 20px;
    background-color: $white;
    border: 1px solid $black;
    border-radius: 32px;
  }

  .dropdown {
    &:hover {
      .menu-items {
        display: flex;
      }
    }
  }

  a {
    padding: 20px;
    background-color: $white;
    border-radius: 32px;
    color: $black;
    text-decoration: none;
    margin-bottom: 8px;
    &:last-of-type {
      margin-bottom: 0;
    }
    &:hover {
      background-color: $black;
      color: $white;
    }
  }
</style>
