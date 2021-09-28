<script>
  import Thermometer from "../../images/Thermometer.svelte";
  import NoFossilFuels from "../../images/NoFossilFuels.svelte";
  import Leaf from "../../images/Leaf.svelte";
  import World from "../../images/World.svelte";
  import Plus from "../../images/Plus.svelte";
  import Tick from "../../images/Tick.svelte";

  const green = "#3dfa52";
  const blue = "#0A5AFF";
  const black = "#212121";
</script>

<div class="container tables">
  <div class="intro-text">
    <h2>Let's break things down</h2>
    <p>
      Don’t speak finance? Hover over anything with a dotted underline to see a
      normal human explanation.
    </p>
  </div>
  <div class="table-row">
    <h4>Zero fossil fuels</h4>
    <Tick />
    <Tick />
    <Tick />
  </div>
  <div class="table-row">
    <h4>Zero fossil fuels</h4>
    <Tick />
    <Tick />
    <Tick />
  </div>
</div>

<style lang="scss">
  @use "../../../styles/" as *;

  .tables {
    background-color: $black100;
  }

  .intro-text {
    max-width: calc(50% - 10px);
    margin-bottom: 60px;
  }

  .table-row {
    background-color: $white;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(6, 1fr);
    padding: 20px;
    border-radius: 16px;
    align-items: center;
    margin-bottom: 20px;

    h4 {
      margin: 0;
      grid-column: span 3;
    }
  }

  @media (max-width: 760px) {
    .table-row {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
