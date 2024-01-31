<script>
  import markdownit from "markdown-it";
  const md = markdownit();

  export let title;
  export let subtitle = "";
  export let points = [];
  export let buttons = [];
  export let darkTheme = false;

  console.log(buttons);
</script>

<section class:darkTheme>
  <h2>{title}</h2>
  {#if subtitle}
    <h3>{@html md.render(subtitle)}</h3>
  {/if}
  <div class="grid">
    {#each points as point (point.id)}
      <div class="point">
        <img src={point.image.url} alt={point.image.alt} />
        <h4>{point.title}</h4>
        {@html md.render(point.subtitle)}
      </div>
    {/each}
  </div>
  {#each buttons as button (button.id)}
    <a href={button.attributes.points_to} class="button" class:darkTheme
      >{button.attributes.label}</a
    >
  {/each}
</section>

<style lang="scss">
  @use "../../styles/index" as *;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 120px;
    margin: 40px 0;
    text-align: center;

    &.darkTheme {
      background: $black;
      background: radial-gradient(
        circle,
        hsla(127, 100%, 33%, 1) 0%,
        hsla(0, 0%, 13%, 1) 100%
      );
      color: white;
      border-radius: 40px;
      padding-top: 80px;
    }
  }

  h2 {
    font-size: $font-size-xl;
    font-family: $regular;
  }

  h3 {
    font-size: $font-size-lg;
    font-family: $regular;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;
    margin: 40px 0 30px;
  }

  .point {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    border-radius: 20px;
  }

  h4 {
    font-size: $font-size-24;
    margin-top: 20px;
    text-wrap: balance;
  }

  .button {
    border-color: $black;
    color: $black;
    background-color: transparent;
    min-width: 200px;

    &:hover {
      border-color: $black;
      color: $white;
      background-color: $black;
    }

    &.darkTheme {
      border-color: $white;
      color: $white;
      background-color: transparent;
      &:hover {
        border-color: $white;
        color: $black;
        background-color: $white;
      }
    }
  }

  @media (max-width: 1000px) {
    section {
      padding: 40px;
    }
  }

  @media (max-width: 860px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
</style>
