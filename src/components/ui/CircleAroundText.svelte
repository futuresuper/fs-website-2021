<script>
  export let heading = "";
  export let text = "";
  export let buttonText = "";
  export let buttonUrl = "#";
</script>

<div class="container circle-container">
  <slot />
  <div class="text-in-middle">
    {#if heading}
      <h2 class={heading.length > 20 ? "smaller" : ""}>{@html heading}</h2>
    {/if}
    {#if text}
      <p>{@html text}</p>
    {/if}
    {#if buttonText}
      <a href={buttonUrl} class="button">{buttonText}</a>
    {/if}
  </div>
</div>

<style lang="scss">
  @use "../../styles/" as *;

  h2 {
    text-wrap: balance;
  }

  .circle-container {
    max-width: 600px;
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    .text-in-middle {
      position: absolute;
      text-align: center;
      max-width: 400px;
    }
  }

  h2.smaller {
    font-size: 34px;
  }

  @media (max-width: 600px) {
    .circle-container {
      width: 400px;

      .text-in-middle {
        max-width: 220px;
        h2 {
          margin-bottom: 8px;
        }
        p {
          line-height: 125%;
        }
      }
    }

    h2.smaller {
      font-size: 20px;
    }

    .button {
      font-size: 14px;
    }
  }

  @media (max-width: 440px) {
    .circle-container {
      width: 100%;

      .text-in-middle {
        max-width: 140px;
        h2 {
          font-size: 14px;
          margin-bottom: 4px;
        }
        p {
          line-height: 110%;
          font-size: 12px;
        }
      }
    }
  }
</style>
