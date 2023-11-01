<script>
  import NoFossilFuels from "../../images/NoFossilFuels.svelte";
  import Leaf from "../../images/Leaf.svelte";
  import World from "../../images/World.svelte";
  import Scales from "../../images/Scales.svelte";
  import Plant from "@components/images/Plant.svelte";

  const pink = "#FF27C3";
  const green = "#00BE00";
  const blue = "#073CAA";
  const black = "#212121";
  const teal = "#1281A4";

  export let title = "";
  export let includePension = false;
  export let pensionOnly = false;
</script>

<div
  class="header-row {includePension ? 'pension' : ''} {pensionOnly
    ? 'pensionOnly'
    : ''}"
>
  <h3 class={includePension ? "pension" : ""}>
    {title}
  </h3>

  {#if !pensionOnly}
    <div class="option-label">
      <div class="icons">
        <div class="icon">
          <NoFossilFuels colour={black} />
        </div>
      </div>
      <h4>Balanced Index</h4>
    </div>

    <div class="option-label">
      <div class="icons">
        <div class="icon">
          <Leaf colour={blue} />
        </div>
      </div>
      <h4>Balanced Impact</h4>
    </div>

    <div class="option-label">
      <div class="icons">
        <div class="icon">
          <World colour={green} />
        </div>
      </div>
      <h4>Renewables Plus Growth</h4>
    </div>

    <div class="option-label">
      <div class="icons">
        <div class="icon">
          <Plant colour={teal} />
        </div>
      </div>
      <h4>High Growth</h4>
    </div>
  {/if}

  {#if includePension || pensionOnly}
    <div class="option-label">
      <div class="icons">
        <div class="icon">
          <Scales colour={pink} />
        </div>
      </div>
      <h4>Balanced Growth Pension</h4>
    </div>
  {/if}
</div>

<style lang="scss">
  @use "../../../styles/" as *;

  .header-row {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(7, 1fr);
    padding: 20px;
    align-items: flex-start;
    margin-top: 60px;
    h3 {
      margin: 0 0 0 -20px;
      grid-column: span 3;
    }
    &.pension h3 {
      grid-column: span 2;
    }
    h4 {
      margin: 0;
      padding: 0;
    }
  }

  .icons {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .icon {
    width: 48px;
  }

  @media (max-width: 760px) {
    .header-row {
      grid-template-columns: repeat(4, 1fr);
      justify-content: center;
      text-align: center;
      h3 {
        margin-left: 0;
        grid-column: span 4;
      }
      &.pensionOnly {
        grid-template-columns: 100%;
      }
      h4 {
        font-size: 12px;
      }
    }

    .header-row.pension {
      grid-template-columns: repeat(5, 1fr);
    }

    h3.pension {
      display: none;
    }

    .icons {
      justify-content: center;
    }

    .plus {
      width: 6px;
    }
  }

  @media (max-width: 600px) {
    .header-row {
      grid-gap: 10px;

      h4 {
        font-size: 9px;
      }
    }

    .icons {
      align-items: center;
    }

    .icon {
      width: 24px;
      height: 24px;
    }

    .plus {
      width: 8px;
      line-height: 8px;
    }
  }
</style>
