<script>
  import Arrow from "../../images/Arrow.svelte";
  import { swipe } from "svelte-gestures";

  const cards = [
    {
      image:
        "https://res.cloudinary.com/future-super/image/upload/v1690520834/app-card1.png",
      text: "Stay on top of your balance",
    },
    {
      image:
        "https://res.cloudinary.com/future-super/image/upload/v1690520834/app-card2.png",
      text: "All your transactions in one place",
    },
    {
      image:
        "https://res.cloudinary.com/future-super/image/upload/v1690520834/app-card3.png",
      text: "See the impact your super is having",
    },
    {
      image:
        "https://res.cloudinary.com/future-super/image/upload/v1690520834/app-card4.png",
      text: "Easily share your details with employers",
    },
    {
      image:
        "https://res.cloudinary.com/future-super/image/upload/v1690520834/app-card5.png",
      text: "Quick and easy login",
    },
    {
      image:
        "https://res.cloudinary.com/future-super/image/upload/v1690520834/app-card6.png",
      text: "Easy access to important info",
    },
  ];

  let innerWidth;
  let scrollPosition = 0;
  let cardWidth = 300;

  const handleMoveLeft = () => {
    scrollPosition = Math.min(scrollPosition + cardWidth, 0);
  };

  const handleMoveRight = () => {
    scrollPosition = Math.max(
      scrollPosition - cardWidth,
      -cardWidth * (cards.length - 1)
    );
  };

  const swipeHandler = (event) => {
    if (event.detail.direction === "right") {
      // directions swapped for intuitive behaviour
      handleMoveLeft();
    } else {
      handleMoveRight();
    }
  };

  const resetCarousel = () => {
    scrollPosition = 0;
  };

  $: if (innerWidth > 900) {
    cardWidth = 500;
    resetCarousel();
  } else if (innerWidth > 500) {
    cardWidth = 400;
    resetCarousel();
  } else {
    cardWidth = 300;
    resetCarousel();
  }
</script>

<svelte:window bind:innerWidth />
<div class="carousel-container">
  <div class="button-container">
    <h1>What you get in the app</h1>
    <div>
      <button on:click={handleMoveLeft}>
        <Arrow direction="left" colour="white" />
      </button>
      <button on:click={handleMoveRight}>
        <Arrow direction="right" colour="white" />
      </button>
    </div>
  </div>
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
          <h2>{index + 1}</h2>
          <img src={card.image} alt={card.text} />
          <h3>{card.text}</h3>
        </div>
      {/each}
    </div>
    <div class="fade-overlay" />
  </div>
</div>

<style lang="scss">
  @use "../../../styles/" as *;
  h1 {
    color: $white;
    font-size: calc(40px + 1.2vw);
    margin-right: 50px;
    max-width: 400px;
    margin-bottom: 0;
  }

  h2,
  h3 {
    color: white;
    text-align: left;
    margin-bottom: 0;
    font-family: $regular;
  }

  h2 {
    border: 1px solid white;
    border-radius: 40px;
    padding: 12px;
    font-size: 40px;
    width: 60px;
    text-align: center;
  }

  button {
    background-color: $black850;
    border-width: 0;
    height: 80px;
    width: 175px;
    padding: 20px;
    &:hover {
      background-color: $black700;
    }
  }

  .carousel-container {
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    padding: 40px 40px 80px 40px;
  }

  .button-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 50px;
  }

  .visible-container {
    position: relative;
    background-color: $black;
    height: 700px;
    width: 100%;
    overflow: hidden;
  }

  .sliding-container {
    display: grid;
    grid-template-columns: repeat(6, 500px);
    transition: 0.5s ease-in-out;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: $black850;
    border-radius: 40px;
    margin: 20px 40px 20px 0;
    padding: 40px;

    img {
      align-self: center;
      height: 400px;
      padding: 30px 40px 40px 40px;
    }
  }

  .fade-overlay {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 350px;
    background-image: linear-gradient(to right, rgba(255, 0, 0, 0), $black);
  }

  @media (max-width: 1000px) {
    button {
      display: none;
    }
    h1 {
      max-width: fit-content;
    }
  }

  @media (max-width: 900px) {
    h2 {
      font-size: 30px;
      width: 45px;
    }
    .carousel-container {
      padding-right: 0;
    }
    .fade-overlay {
      display: none;
    }
    .card {
      padding: 35px;
      img {
        height: 320px;
        padding: 20px;
      }
    }
    .visible-container {
      height: 550px;
    }
    .sliding-container {
      grid-template-columns: repeat(6, 400px);
    }
  }

  @media (max-width: 700px) {
    .carousel-container {
      padding: 20px 0 40px 20px;
    }
  }

  @media (max-width: 500px) {
    h2 {
      padding: 8px;
      font-size: 20px;
      width: 30px;
    }
    .card {
      margin: 20px 20px 20px 0;
      padding: 25px;
      img {
        height: 250px;
        padding: 10px 20px 20px 20px;
      }
    }
    .button-container {
      padding-bottom: 30px;
    }
    .visible-container {
      height: 420px;
    }
    .sliding-container {
      grid-template-columns: repeat(6, 300px);
    }
  }
</style>
