<script>
  import { swipe } from "svelte-gestures";

  let innerWidth;
  let scrollPosition = 0;
  const scalePoint = 550;
  let cardWidth = innerWidth > scalePoint ? 400 : 300;

  const cards = [
    "https://res.cloudinary.com/future-super/image/upload/v1691493175/nightingale-update-card1.png",
    "https://res.cloudinary.com/future-super/image/upload/v1691493175/nightingale-update-card2.png",
    "https://res.cloudinary.com/future-super/image/upload/v1691493176/nightingale-update-card3.png",
    "https://res.cloudinary.com/future-super/image/upload/v1691493175/nightingale-update-card4.png",
    "https://res.cloudinary.com/future-super/image/upload/v1691493176/nightingale-update-card5.png",
  ];

  const handleMove = (index) => {
    scrollPosition = -cardWidth * index;
  };

  const swipeHandler = (event) => {
    if (event.detail.direction === "right" && scrollPosition != 0) {
      scrollPosition += cardWidth;
    } else if (
      event.detail.direction === "left" &&
      scrollPosition != -cardWidth * 4
    ) {
      scrollPosition -= cardWidth;
    }
  };

  const resetCarousel = () => {
    scrollPosition = 0;
  };
  $: if (innerWidth > scalePoint) {
    cardWidth = 400;
    resetCarousel();
  } else {
    cardWidth = 300;
    resetCarousel();
  }
</script>

<svelte:window bind:innerWidth />
<div>
  <div
    class="visible-container"
    use:swipe={{
      timeframe: 300,
      minSwipeDistance: 100,
      touchAction: "pan-y",
    }}
    on:swipe={swipeHandler}
  >
    <div
      class="sliding-container"
      style="transform: translateX({scrollPosition}px)"
    >
      {#each cards as card, index}
        <div class="card">
          <a on:click={() => handleMove(index)}>
            <img src={card} alt="Nightingale construction site" />
          </a>
        </div>
      {/each}
    </div>
  </div>
  <div class="slider-pills">
    {#each cards as card, index}
      <a on:click={() => handleMove(index)}>
        <div
          class:pill-selected={scrollPosition === -cardWidth * index}
          class="pill"
        />
      </a>
    {/each}
  </div>
</div>

<style lang="scss">
  @use "../../../styles/" as *;
  .visible-container {
    height: 400px;
    width: 100%;
    overflow: hidden;
    margin-bottom: 30px;
    position: relative;
  }

  .sliding-container {
    position: absolute;
    left: calc(50% - 200px);
    display: grid;
    grid-template-columns: repeat(5, 400px);
    width: 725px;
  }

  .card {
    padding: 0 5px 0 5px;
    img {
      align-self: center;
      height: calc(var(--cardWidth) * 1px);
      width: calc(var(--cardWidth) * 1px);
      border-radius: 60px;
    }
  }

  .slider-pills {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 40px;
  }

  .pill {
    height: 8px;
    width: 32px;
    margin: 5px;
    border-radius: 5px;
    background-color: $black900;
  }

  .pill-selected {
    background-color: $green;
  }

  @media (max-width: 550px) {
    .visible-container {
      height: 300px;
    }
    .sliding-container {
      left: calc(50% - 150px);
      grid-template-columns: repeat(5, 300px);
    }
  }
</style>
