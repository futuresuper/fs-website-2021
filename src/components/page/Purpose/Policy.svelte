<script>
  import Carat from "../../images/Carat.svelte";

  export let policy;

  policy.description = policy.description
    .replace(/\n/g, "<br/>")
    .replace(/\[(.*?)\]\((.*?)\)/g, "<a href='$2'>$1</a>")
    .replace(/`(.*?)`/g, "<code>$1</code>");

  let expanded = false;
</script>

<div on:click={() => (expanded = !expanded)} class="policy">
  <h3>{policy.title}</h3>
  <div style="width: 40px; justify-self: flex-end; align-self: flex-start">
    <Carat direction={expanded ? "up" : "down"} />
  </div>
  {#if expanded}
    <div style="margin-top: 80px; max-width: 500px">
      <p>
        {@html policy.description}
      </p>
    </div>
    <a class="button" href={policy.link}> Steal Our Policy </a>
  {/if}
</div>

<style lang="scss">
  @use "../../../styles/" as *;

  h3 {
    margin: 2px 0 0 0;
  }

  .policy {
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-gap: 40px;
    margin-top: 30px;
    border: 1px solid $black;
    padding: 30px 60px;
    border-radius: 50px;
    cursor: pointer;
  }

  p {
    font-size: 14px;
  }

  .button {
    background-color: transparent;
    border: 1px solid $black;
    margin: 0 0 0 auto;
    padding: 6px 30px;
    align-self: flex-end;
    &:hover {
      background-color: $green;
      color: $black;
    }
  }

  @media (max-width: 800px) {
  }
</style>
