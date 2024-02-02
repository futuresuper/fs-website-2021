<script>
  import markdownit from "markdown-it";
  const md = markdownit();

  export let title;
  export let subtitle = "";
  export let points = [];
  export let buttons = [];
  export let theme = "light";
</script>

<section class={theme + "-theme"}>
  {#if title}
    <h2>{title}</h2>
  {/if}
  {#if subtitle}
    <h3>{@html md.render(subtitle)}</h3>
  {/if}
  <div class="grid {theme}-theme">
    {#each points as point, index (point.id)}
      <div class="point {theme}-theme {index % 2 ? 'even' : 'odd'}">
        <img
          src={point.image.url}
          alt={point.image.alt}
          class="{theme}-theme"
        />
        <div>
          <h4>{point.title}</h4>
          {@html md.render(point.subtitle)}
          {#if point.button}
            <a
              href={point.button.attributes.points_to}
              class="button {theme}-theme">{point.button.attributes.label}</a
            >
          {/if}
        </div>
      </div>
    {/each}
  </div>
  {#each buttons as button (button.id)}
    <a href={button.attributes.points_to} class="button {theme}-theme"
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

    &.dark-theme {
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

    &.vertical-theme {
      background: $black;
      color: white;
      border-radius: 40px;
      padding: 0 40px;
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
    gap: 40px;
    margin: 40px 0 30px;

    &.vertical-theme {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }

  .point {
    display: flex;
    flex-direction: column;
    align-items: center;

    &.vertical-theme {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      &.odd {
        :first-child {
          order: 1;
        }
        :last-child {
          order: -1;
        }
      }
    }
  }

  img {
    border-radius: 20px;

    &.vertical-theme {
      border: 1px solid $green;
    }
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

    &.dark-theme,
    &.vertical-theme {
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

    .point {
      &.vertical-theme {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 40px;

        &:last-child {
          margin-bottom: 0;
        }

        &.odd {
          :first-child {
            order: 1;
          }
          :last-child {
            order: 2;
          }
        }
      }
    }
  }
</style>
