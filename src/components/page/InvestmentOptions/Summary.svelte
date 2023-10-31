<script>
  import Thermometer from "../../images/Thermometer.svelte";
  import NoFossilFuels from "../../images/NoFossilFuels.svelte";
  import Leaf from "../../images/Leaf.svelte";
  import World from "../../images/World.svelte";
  import Plant from "@components/images/Plant.svelte";
  import investmentOptions from "@data/investmentOptions.json";

  const balancedIndexItem = investmentOptions.find(
    (item) => item.label === "Balanced Index"
  );
  const balancedImpactItem = investmentOptions.find(
    (item) => item.label === "Balanced Impact"
  );
  const renewablesPlusGrowthItem = investmentOptions.find(
    (item) => item.label === "Renewables Plus Growth"
  );
  const highGrowthItem = investmentOptions.find(
    (item) => item.label === "High Growth"
  );

  const green = "#00BE00";
  const blue = "#073CAA";
  const black = "#212121";
  const teal = "#1281A4";
</script>

<div class="io-container">
  <div class="black-strip" />
  <div class="container investment-options">
    <div />
    <div />
    <div class="renewables-call-out">
      <Thermometer colour={green} />
      <h5>Our most eco-friendly super option!</h5>
    </div>
    <div />

    <!-- Balanced Index -->
    <div class="option">
      <div>
        <div class="icons">
          <div class="icon">
            <NoFossilFuels colour={black} />
          </div>
        </div>
        <h3>Balanced<br />Index</h3>
        <p>{balancedIndexItem.description}</p>
        <div class="bar" />
        <ul>
          {#each balancedIndexItem.descriptionPoints as point}
            <li>{point}</li>
          {/each}
        </ul>
      </div>
    </div>

    <!-- Balanced Impact -->
    <div class="option">
      <div>
        <div class="icons">
          <div class="icon">
            <Leaf colour={blue} />
          </div>
        </div>
        <h3>Balanced<br />Impact</h3>
        <p>{balancedImpactItem.description}</p>
        <div class="bar blue" />
        <ul>
          {#each balancedImpactItem.descriptionPoints as point}
            <li>{point}</li>
          {/each}
        </ul>
      </div>
    </div>

    <!-- Renewables Plus Growth -->

    <div class="option">
      <div>
        <div class="icons">
          <div class="icon">
            <World colour={green} />
          </div>
        </div>
        <h3>Renewables<br />Plus Growth</h3>
        <p>{renewablesPlusGrowthItem.description}</p>
        <div class="bar green" />
        <ul>
          {#each renewablesPlusGrowthItem.descriptionPoints as point}
            <li>{point}</li>
          {/each}
        </ul>
      </div>
    </div>

    <!-- High Growth -->

    <div class="option">
      <div>
        <div class="icons">
          <div class="icon">
            <Plant colour={teal} />
          </div>
        </div>
        <h3>Renewables<br />Plus Growth</h3>
        <p>{highGrowthItem.description}</p>
        <div class="bar teal" />
        <ul>
          {#each highGrowthItem.descriptionPoints as point}
            <li>{point}</li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  @use "../../../styles/" as *;

  .green {
    color: $green;
  }

  .blue {
    color: $blue;
  }
  .blue-button {
    background-color: $blue;
    color: $white;
    border-color: $blue;
    &:hover {
      border-color: $black;
    }
  }

  .black-strip {
    background-color: $black;
    height: 260px;
    width: 100%;
  }

  .renewables-call-out {
    color: $green;
    display: flex;
    align-items: center;
    justify-content: center;

    h5 {
      margin-left: 20px;
      font-size: 16px;
    }
  }

  .io-container {
    background-color: $black100;
  }

  .investment-options {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    margin-top: -300px;

    .option {
      background-color: $white;
      border-radius: 32px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .icons {
        display: flex;
        align-items: center;
      }

      h5 {
        text-transform: uppercase;
      }

      p {
        color: $black600;
      }

      .bar {
        width: 100%;
        height: 4px;
        background-color: $black;

        &.blue {
          background-color: $blue600;
        }

        &.green {
          background-color: $green600;
        }

        &.teal {
          background-color: $teal;
        }
      }

      ul {
        color: $black700;
        padding-left: 20px;
      }
    }
  }

  .icon {
    width: 96px;
  }

  .plus {
    width: 28px;
  }

  @media (max-width: 1160px) {
    .icon {
      width: 48px;
    }

    .plus {
      width: 14px;
    }
  }

  @media (max-width: 760px) {
    h3 {
      font-size: 32px;
    }

    .icon {
      width: 96px;
    }

    .plus {
      width: 28px;
    }

    .investment-options {
      display: grid;
      grid-template-columns: 100%;
      .renewables-call-out {
        display: none;
      }
    }
  }
</style>
