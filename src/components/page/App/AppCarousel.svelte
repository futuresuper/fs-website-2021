<script>
  const cards = [
    {
      image:
        "https://res.cloudinary.com/future-super/image/upload/v1690520834/card1.png",
      text: "Stay on top of your balance",
    },
    {
      image:
        "https://res.cloudinary.com/future-super/image/upload/v1690520834/card2.png",
      text: "All your transactions in one place",
    },
    {
      image:
        "https://res.cloudinary.com/future-super/image/upload/v1690520834/card3.png",
      text: "See the impact your super is having",
    },
    {
      image:
        "https://res.cloudinary.com/future-super/image/upload/v1690520834/card4.png",
      text: "Easily share your details with employers",
    },
    {
      image:
        "https://res.cloudinary.com/future-super/image/upload/v1690520834/card5.png",
      text: "Quick and easy login",
    },
    {
      image:
        "https://res.cloudinary.com/future-super/image/upload/v1690520834/card6.png",
      text: "Easy access to important info",
    },
  ];

  let scrollPosition = 0;

  const handleMoveLeft = () => {
    scrollPosition = Math.min(scrollPosition + 400, 0);
  };

  const handleMoveRight = () => {
    scrollPosition = Math.max(scrollPosition - 400, -400 * cards.length + 400);
  };
</script>

<button on:click={handleMoveLeft} style="margin-bottom: 40px"> {"<-"} </button>
<button on:click={handleMoveRight}> {"->"} </button>

<div class="carousel-container">
  <div
    class="moving-container"
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

<style lang="scss">
  @use "../../../styles/" as *;

  .carousel-container {
    position: relative;
    background-color: $black;
    height: 600px;
    width: 100%;
    overflow: hidden;
  }

  .moving-container {
    display: grid;
    grid-template-columns: repeat(6, 400px);
  }

  h2,
  h3 {
    color: white;
    text-align: left;
  }

  h2 {
    border: 1px solid white;
    border-radius: 40px;
    padding: 14px 18px;
    font-size: 34px;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    background-color: $black850;
    border-radius: 40px;
    margin: 20px;
    padding: 20px;

    img {
      align-self: center;
      height: 300px;
    }
  }

  .fade-overlay {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 350px;
    background-image: linear-gradient(
      to right,
      rgba(255, 0, 0, 0),
      $black,
      $black
    );
  }
</style>
