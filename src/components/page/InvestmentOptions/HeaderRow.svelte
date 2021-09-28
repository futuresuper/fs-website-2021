<script>
  import NoFossilFuels from "../../images/NoFossilFuels.svelte";
  import Leaf from "../../images/Leaf.svelte";
  import World from "../../images/World.svelte";
  import Plus from "../../images/Plus.svelte";

  const green = "#3dfa52";
  const blue = "#0A5AFF";
  const black = "#212121";

  export let title = "";
</script>

<div class="header-row">
  <h3>{title}</h3>

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
      <div class="plus">
        <Plus colour={blue} />
      </div>
      <div class="icon">
        <NoFossilFuels colour={blue} />
      </div>
    </div>
    <h4>Balanced Impact</h4>
  </div>

  <div class="option-label">
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
    <h4>Renewables Plus Growth</h4>
  </div>
</div>

<style lang="scss">
  @use "../../../styles/" as *;

  .header-row {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(6, 1fr);
    padding: 20px;
    align-items: center;
    margin-top: 60px;
    h3 {
      margin: 0 0 0 -20px;
      grid-column: span 3;
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

  .plus {
    width: 14px;
  }

  @media (max-width: 760px) {
    .header-row {
      grid-template-columns: repeat(3, 1fr);
      justify-content: center;
      text-align: center;

      h4 {
        font-size: 12px;
      }
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
