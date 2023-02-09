<script>
</script>

<div class="bg">
  <div class="container">
    <h1>NIGHTINGALE Wurru Wurru Biik</h1>

    <div class="hero">
      <h2>YOUR SUPER IS DISRUPTING THE PROPERTY MARKET</h2>
    </div>
  </div>
</div>

<style lang="scss">
  @use "../../../styles/" as *;

  $font-size-xs: max(10px, 0.9vw);
  $font-size-s: max(13px, 1.2vw);
  $font-size-m: max(16px, 1.8vw);
  $font-size-l: max(38px, 4vw);
  $font-size-xl: max(44px, 5vw);

  .bg {
    width: 100%;
    background-color: $black;
  }

  .container {
    background-color: $black;
    color: $white;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
  }

  .timeline-section {
    padding: 100px 0 200px 0;
  }

  h1 {
    font-family: $regular;
    font-weight: 400;
    letter-spacing: 1px;
    font-size: $font-size-m;
    text-transform: uppercase;
  }

  h2 {
    color: $green;
    font-size: $font-size-xl;
    line-height: 100%;
  }

  h3 {
    font-family: $regular;
    color: $green;
    font-size: $font-size-l;
    line-height: 100%;
    max-width: 600px;
    margin-bottom: 60px;
  }

  p {
    font-size: $font-size-m;
  }

  .circles {
    display: flex;
    flex-direction: row;
    margin-bottom: 100px;
  }

  .circle {
    --size: min(300px, 80vw);
    height: var(--size);
    width: var(--size);
    border-radius: 50%;
    background-color: $black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid $white;
    margin: 20px;
    cursor: pointer;
    font-size: max(17px, 1.4vw);
    line-height: 120%;
    text-transform: uppercase;
    padding: 40px;
    &.on {
      background-color: $green;
      border-color: $green;
      color: $black;
    }
    p {
      text-transform: none;
      font-size: $font-size-s;
      margin-top: 10px;
    }
  }

  .disclaimer {
    max-width: 800px;
    color: $black200;
  }

  .skinny {
    max-width: 800px;
  }

  .tap {
    color: $green;
    font-size: $font-size-s;
    margin-top: 60px;
  }

  .arrow {
    height: 12vh;
    margin: 80px;
  }

  .cards {
    margin: 60px 0 120px 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    &.two-col {
      grid-template-columns: 1fr 1fr;
    }
  }

  .icon {
    width: 80px;
  }

  .large-icon {
    width: 140px;
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 40px;
    background-color: $black;
    border-radius: 32px;
    filter: drop-shadow(0px -6px 10px rgba(0, 0, 0, 0.2));
  }

  .small {
    font-size: $font-size-s;
  }

  .nightingale-image {
    margin: 40px auto 120px auto;
    border-radius: 32px;
    background: url("https://res.cloudinary.com/future-super/image/upload/f_auto,q_auto/v1639300170/nightingale-front.png");
    background-position: bottom;
    background-size: cover;
    background-repeat: no-repeat;
    height: 50vh;
    width: 100%;
    max-width: 600px;
    &.apartment {
      background: url("https://res.cloudinary.com/future-super/image/upload/f_auto,q_auto/v1639300170/nightingale-apartment.png");
    }
  }

  .earth {
    margin-bottom: 60px;
  }

  .cross {
    margin: -60px 0 0px 0;
  }

  .roof {
    width: 350px;
    max-width: 100%;
    margin: 80px 0 120px 0;
  }

  .financial {
    width: 100%;
    max-width: 600px;
    margin: 40px 0 120px 0;
  }

  .brick {
    height: 40vh;
    width: 100%;
    margin: -40px 0 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("https://res.cloudinary.com/future-super/image/upload/c_scale,q_auto,w_400/v1639299184/Brick.gif");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .hero {
    height: 60vh;
    margin: 40px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("https://res.cloudinary.com/future-super/image/upload/c_scale,q_auto,w_400/v1639299184/bricks-and-coins.gif");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .timeline {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    max-width: 700px;
    grid-column-gap: 20px;
  }

  .sub {
    margin: -40px 0 40px 0;
  }

  .label {
    font-size: $font-size-s;
  }

  progress {
    appearance: none;
    display: block;
    width: 100%;
    border: 1px solid $green;
    border-radius: 12px;
    height: 12px;
    &::-webkit-progress-bar {
      background-color: $black;
      border-radius: 10px;
    }
    &::-webkit-progress-value {
      background-color: $green;
      border-radius: 10px;
    }
  }

  @media (max-width: 1100px) {
    .circles {
      flex-direction: column;
      margin-bottom: 60px;
    }
  }

  @media (max-width: 900px) {
    .cards {
      margin: 80px -40px;
      grid-template-columns: 100%;
      grid-gap: 0;
      .card {
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
      }
      &.two-col {
        grid-template-columns: 100%;
      }
    }

    .timeline-section {
      padding: 20px 0 140px 0;
    }

    .mobile-hide {
      display: none;
    }
  }
</style>
