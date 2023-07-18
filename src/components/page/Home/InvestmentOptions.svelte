<script>
  import NoFossilFuels from "../../images/NoFossilFuels.svelte";
  import Leaf from "../../images/Leaf.svelte";
  import World from "../../images/World.svelte";
  import investmentOptions from "@data/investmentOptions.json";
  const options = investmentOptions.slice(0, 3); // exclude Pension
  const green = "#3dfa52";
</script>

{#each options as option}
  <section>
    <div
      class="marquee {option.label === 'Balanced Index'
        ? 'bal-index'
        : ''} {option.label === 'Balanced Impact' ? 'bal-impact' : ''}"
    >
      <div class="text">{option.label}</div>
      <div class="icon">
        {#if option.label === "Balanced Index"}
          <NoFossilFuels colour={green} />
        {:else if option.label === "Balanced Impact"}
          <Leaf colour={green} />
        {:else}
          <World colour={green} />
        {/if}
      </div>
      <div class="text">{option.label}</div>
      <div class="icon">
        {#if option.label === "Balanced Index"}
          <NoFossilFuels colour={green} />
        {:else if option.label === "Balanced Impact"}
          <Leaf colour={green} />
        {:else}
          <World colour={green} />
        {/if}
      </div>
    </div>
    <div class="overlay-container">
      <div class="overlay">
        <div>
          <p>
            <span class="green">{option.label}: </span>{option.description}
          </p>
        </div>
        <a class="button" href="/investment-options">Investment Options</a>
      </div>
    </div>
  </section>
{/each}

<a class="button mobile-only" href="/investment-options"
  >More about Investment Options</a
>

<style lang="scss">
  @use "../../../styles/" as *;

  section {
    position: relative;
    height: 10vw;
    width: 100%;
    overflow: hidden;
    border-bottom: 1px solid $black;
  }

  .overlay-container {
    position: absolute;
    width: 100%;
    height: 10vw;
    padding: 20px 40px;
    .overlay {
      display: none;
      background-color: $black;
      border-radius: 32px;
      height: 100%;
      padding: 0 20px;
      justify-content: space-between;
      align-items: center;
      div {
        max-width: 70%;
        p {
          color: $white;
          margin: 0;
          span {
            font-family: $heading;
            color: $green;
          }
        }
      }
    }
    &:hover {
      .overlay {
        display: flex;
      }
    }
  }

  .marquee {
    position: absolute;
    margin: 0;
    font-family: $feature;
    color: $black;
    text-transform: uppercase;
    font-size: 8vw;
    height: 10vw;
    white-space: nowrap;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    animation: marquee 25s linear infinite;
    &.bal-index {
      animation: marquee 40s linear infinite;
    }
    &.bal-impact {
      animation: marquee-bal-impact 50s linear infinite;
    }
  }

  .icon {
    width: 10vw;
    margin-top: 3vw;
  }

  .mobile-only {
    display: none;
  }

  @keyframes marquee {
    0% {
      left: 0px;
    }
    100% {
      left: -100vw;
    }
  }

  @keyframes marquee-bal-impact {
    0% {
      right: 0px;
    }
    100% {
      right: -100vw;
    }
  }

  @media (max-width: 1000px) {
    .overlay-container {
      padding: 0px;
      display: none;
    }

    .mobile-only {
      display: block;
      margin: 40px 20px;
    }
  }
</style>
