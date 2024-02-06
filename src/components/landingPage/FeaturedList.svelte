<script>
  export let headline;
  export let items = [];
  export let button;
</script>

<div class="container">
  <section>
    <p>{headline}</p>
    {#each items as item}
      <div class="item">{item}</div>
    {/each}
    {#if button}
      <a href={button.points_to} class="button">{button.label}</a>
    {/if}
  </section>
</div>

<style lang="scss">
  @use "../../styles/index" as *;

  section {
    padding: 40px;
  }

  p {
    font-size: $font-size-xl;
  }

  .item {
    font-family: $feature;
    font-size: $font-size-48;
  }

  .button {
    border-color: $black;
    color: $black;
    background-color: transparent;
    min-width: 200px;
    margin-top: 30px;
    border-width: 1px;
    font-family: $regular;

    &:hover {
      border-color: $black;
      color: $white;
      background-color: $black;
    }
  }

  @media (max-width: 1140px) {
    section {
      padding: 40px 0;
    }

    p,
    .item {
      font-size: clamp(22px, 4vw, 48px);
    }
  }
</style>
