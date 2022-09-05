<script>
  import Thermometer from "../../images/Thermometer.svelte";
  import NoFossilFuels from "../../images/NoFossilFuels.svelte";
  import Leaf from "../../images/Leaf.svelte";
  import World from "../../images/World.svelte";
  import Plus from "../../images/Plus.svelte";
  import pages from "../../../data/pages.json";

  const green = "#3dfa52";
  const blue = "#0A5AFF";
  const black = "#212121";
</script>

<div class="io-container">
  <div class="black-strip" />
  <div class="container investment-options">
    <div />
    <div />
    <div class="renewables-call-out">
      <Thermometer colour={green} />
      <h5>Highest climate solutions target allocation</h5>
    </div>

    <!-- Balanced Index -->
    <div class="option">
      <div>
        <div class="icons">
          <div class="icon">
            <NoFossilFuels colour={black} />
          </div>
        </div>
        <h5>Indexed Investments</h5>
        <h3>Balanced<br />Index</h3>
        <p>Zero fossil fuels but no impact targets.</p>
      </div>
    </div>

    <!-- Balanced Impact -->
    <div class="option">
      <div>
        <div class="icons">
          <div class="icon">
            <Leaf colour={blue} />
          </div>
          <div class="plus">
            <Plus colour={blue} />
          </div>
          <div class="icon">
            <NoFossilFuels colour={blue} />
          </div>
        </div>
        <h5 class="blue">Social Impact Investments</h5>
        <h3>Balanced<br /><span class="blue">Impact</span></h3>
        <p>
          Zero fossil fuels. Targets investment in social impact and renewable
          energy projects.
        </p>
      </div>
    </div>

    <!-- Renewables Plus Growth -->

    <div class="option">
      <div>
        <div class="icons">
          <div class="icon">
            <World colour={green} />
          </div>
          <div class="plus">
            <Plus colour={green} />
          </div>
          <div class="icon">
            <Leaf colour={green} />
          </div>
          <div class="plus">
            <Plus colour={green} />
          </div>
          <div class="icon">
            <NoFossilFuels colour={green} />
          </div>
        </div>
        <h5 class="green">Most Renewables Investments</h5>
        <h3>Renewables<br /><span class="green">Plus Growth</span></h3>
        <p>
          Zero fossil fuels. Targets 20% allocation to climate change solutions.
        </p>
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
    grid-template-columns: repeat(3, 1fr);
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
