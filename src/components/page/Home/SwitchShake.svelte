<script>
  import GraphFSBubble from "../../images/GraphFSBubble.svelte";

  const rows = [
    ["Recycling", 0.23],
    ["Being vegan", 0.8],
    ["Living car free", 3.5],
    ["Investing with Future Super", 5.89],
  ];
</script>

<div class="container">
  <section>
    <div class="top">
      <div class="heading">
        <h2>Make your super a powerful climate action.</h2>
      </div>
      <p>
        Switching your super is an easy action that can benefit you while
        creating real systems change. Here’s how choosing Future Super can
        compare with other actions you might take.
      </p>
    </div>
    <div class="key">↓ Tonnes of carbon abated by actions</div>
    {#each rows as row}
      <div
        class="grid"
        style="grid-template-columns: {row[1] * 6}vw 1fr min(180px,30vw)"
      >
        {#if row[0] === "Investing with Future Super"}
          <GraphFSBubble />
        {:else}
          <div
            class="circle"
            style="width: {row[1] * 6}vw; height: {row[1] * 6}vw"
          />
        {/if}

        <div class="line" />
        <div class="text">
          <h5>{row[0]}</h5>
          <p>{row[1]} tonnes</p>
        </div>
      </div>
    {/each}
    <div class="bottom">
      <p class="disclaimer">
        Source: Future Super Carbon Transparency Report 2020. These figures are
        annual and based on the average financial Future Super member’s account
        balance of $32,631 as at 31 December 2020, switching their account
        balance from the relevant benchmark fund.
      </p>
      <a class="button full-width" href="/how-we-invest">See how we invest</a>
    </div>
  </section>
</div>

<style lang="scss">
  @use "../../../styles/" as *;

  section {
    margin: 60px -20px;
    padding: 20px;
  }

  .top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    .heading {
      width: 40%;
    }
    p {
      max-width: 50%;
      font-size: 30px;
      line-height: 120%;
    }
  }

  .key {
    font-size: 14px;
    margin-bottom: 20px;
  }

  .grid {
    display: grid;
    align-items: center;
    grid-gap: 20px;
    margin-bottom: 20px;
    .circle {
      background-color: $black;
      border-radius: 50%;
    }
    .line {
      width: 100%;
      height: 1px;
      background-color: $green;
    }
    .text {
      h5 {
        margin: 0;
        text-transform: uppercase;
        font-size: 12px;
        font-family: $feature;
      }
      p {
        margin: 0;
        font-size: 12px;
        font-family: $mono;
      }
    }
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    > * {
      max-width: 40%;
    }
  }

  @media (max-width: 1000px) {
    .top {
      p {
        font-size: 20px;
      }
    }
  }

  @media (max-width: 580px) {
    section {
      margin-bottom: 0;
    }

    .top {
      .heading {
        width: 46%;
      }
      p {
        width: 46%;
        font-size: 14px;
      }
    }

    .bottom {
      flex-direction: column-reverse;
      margin-top: 40px;
      > * {
        max-width: 100%;
      }
      a {
        margin-bottom: 40px;
      }
    }
  }
</style>
