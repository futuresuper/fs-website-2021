<script>
  import NinetyPlusTen from "./icons/NinetyPlusTen.svelte";
  import Arrow from "./icons/Arrow.svelte";
  import Bars from "./icons/Bars.svelte";
  import AusWorld from "./icons/AusWorld.svelte";
  import Excludes from "./icons/Excludes.svelte";

  const boxes = [
    {
      icon: NinetyPlusTen,
      text: "90% growth allocation and 10% to defensive assets",
    },
    {
      icon: Arrow,
      text: "Aims to outperform the Consumer Price Index by 3.5%^",
    },
    {
      icon: Bars,
      text: "Competitive + transparent annual fees of 1.323%, plus $60 admin fee",
    },
    {
      icon: AusWorld,
      text: "Exposure to growth investments such as Australian shares + international shares",
    },
    {
      icon: Excludes,
      text: "Excludes fossil fuels, weapons, tobacco, gambling and nuclear energy",
    },
  ];
</script>

<section>
  <div class="container">
    <h2>The High Growth low-down</h2>
    <p>
      Our new High Growth investment option* is a game-changer, aiming to
      deliver impressive returns while staying true to our climate-responsible
      values.
    </p>
    <div class="grid">
      {#each boxes as box}
        <div class="box">
          <div class="icon">
            <svelte:component this={box.icon} />
          </div>
          <p>{box.text}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<style lang="scss">
  @use "../../../styles/" as *;

  section {
    padding: 80px 0;
    background-color: $black;
    color: $white;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    margin-top: 40px;

    .box {
      background-color: $black800;
      border-radius: 30px;
      padding: 40px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;

      .icon {
        height: 100px;
        margin-bottom: 20px;
      }

      p {
        margin: 40px 0 0 0;
        font-size: 30px;
        text-wrap: balance;
      }
    }
  }
</style>
