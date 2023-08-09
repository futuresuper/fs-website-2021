<script>
  import Arrow from "../../images/Arrow.svelte";
  import Tree from "../../images/Tree.svelte";
  import World2 from "../../images/World.svelte";
  import World from "../../images/WorldNoArrows.svelte";
  import Shield from "../../images/Shield.svelte";
  import PerformanceArrow from "../../images/PerformanceArrow.svelte";
  import NightingaleCarousel from "./NightingaleCarousel.svelte";

  let circle1 = false;
  let circle2 = false;
  let circle3 = false;
</script>

<div class="bg">
  <div class="container">
    <h1>NIGHTINGALE Wurru Wurru Biik</h1>

    <div class="hero">
      <h2>YOUR SUPER IS DISRUPTING THE PROPERTY MARKET</h2>
    </div>

    <div class="update-container">
      <h4 class="update-title">JULY 2023 UPDATE</h4>
      <p class="update-text">
        Construction of Nightingale Wurru wurru biik in Brunswick, Melbourne is
        underway! Future residents of the sustainable and affordable housing
        development recently got together to celebrate the progress.
      </p>
      <p class="update-text">
        With the structural phase of the building now complete, they were even
        able to check out the views from the rooftop.
      </p>
      <NightingaleCarousel />
    </div>

    <div class="arrow">
      <Arrow direction="down" colour="#3dfa52" />
    </div>

    <h3>INVESTED FOR PLANET, PEOPLE AND PROFIT.</h3>

    <p>
      Nightingale is just one of your investments that’s creating real systems
      change.
    </p>

    <div class="nightingale-image apartment" />

    <p>
      Future Super's investment in Nightingale lends the power of your super to
      build an eco-friendly apartment complex on Albion St in Brunswick,
      Melbourne. The creation of these homes aims to create financial benefits
      for members as well as environmental and social impact.
    </p>

    <div class="cards">
      <div class="card">
        <div class="icon">
          <World color="#3dfa52" />
        </div>

        <h4>ENVIRONMENTAL IMPACT</h4>

        <p class="small">Carbon neutral, fossil fuel-free communities</p>
        <p class="small">Powered by solar and certified GreenPower</p>
        <p class="small">
          Support sustainable living with communal spaces and transport access.
        </p>
      </div>

      <div class="card">
        <div class="icon">
          <Shield />
        </div>

        <h4>SOCIAL IMPACT</h4>

        <p class="small">
          Affordability first: Nightingale is not-for-profit. Apartments are
          sold without profit margins making each home more affordable.
        </p>

        <p class="small">Low deposit options for first home buyers.</p>

        <p class="small">
          20% of Nightingale Wurru Wurru Biik is allocated to registered
          Community Housing Providers, for social housing.
        </p>

        <p class="small">
          A further 20% of apartments are reserved for demographics who often
          find it more difficult to secure property.
        </p>
      </div>

      <div class="card">
        <div class="icon">
          <PerformanceArrow />
        </div>

        <h4>FINANCIAL BENEFIT</h4>

        <p class="small">Investment returns fixed interest.</p>

        <p class="small">Repaid in full over 2 years.</p>

        <p class="small">
          Accounts for 1.4% of money invested from Balanced Impact and
          Renewables Plus Growth (combined stat as at 31st October 2021).
        </p>

        <p class="small">
          Creates opportunity for similar investments in the future.
        </p>
      </div>
    </div>

    <h3>SHIFTING THE STATUS&nbsp;QUO</h3>

    <div class="brick" />

    <p>
      Most new housing is built for profit. When we treat homes like a commodity
      and not a human right, people get locked out of the housing&nbsp;market.
    </p>

    <p>
      Nightingale shifts the status quo by imagining a world where housing
      exists to benefit communities, not profit from&nbsp;them.
    </p>

    <p class="tap">
      Tap each circle to see how Nightingale is flipping the status&nbsp;quo.
    </p>

    <div class="circles">
      <div
        on:click={() => (circle1 = !circle1)}
        class="circle {circle1 ? 'on' : 'off'}"
      >
        {#if circle1}
          <div>5% DEPOSITS</div>
          <p class="circle-small">
            People who experience higher barriers to home ownership can apply
            for a reduced deposit option.
          </p>
        {:else}
          20% deposit on mortgage
        {/if}
      </div>
      <div
        on:click={() => (circle2 = !circle2)}
        class="circle {circle2 ? 'on' : 'off'}"
      >
        {#if circle2}
          20% of homes allocated to social housing providers
        {:else}
          Sold on the open market
        {/if}
      </div>
      <div
        on:click={() => (circle3 = !circle3)}
        class="circle {circle3 ? 'on' : 'off'}"
      >
        {#if circle3}
          <div>Wholesale green power and solar</div>
          <p class="circle-small">
            Nightingale developments are fossil fuel free.
          </p>
        {:else}
          Coal and gas power
        {/if}
      </div>
    </div>

    <div class="nightingale-image" />

    <h3>INVESTING FOR ENVIRO<span class="mobile-hide">NMENTAL </span>IMPACT</h3>

    <img
      src="https://res.cloudinary.com/future-super/image/upload/c_scale,q_auto/v1639299184/Earth.gif"
      alt="3D Spinning Earth"
      class="earth"
    />

    <p>
      Investing in climate change solutions isn’t just about renewable energy.
      It means changing the way the world works so that our most basic systems
      don’t rely on fossil fuels. Nightingale meets our criteria for
      environmental change in the housing sector.
    </p>

    <div class="cards two-col">
      <div class="card">
        <div class="large-icon">
          <Tree />
        </div>
        <h4>CARBON NEUTRAL</h4>

        <p class="small">
          The net carbon emissions of Nightingale communities are zero, achieved
          through low emissions design and carbon&nbsp;offsets.
        </p>
      </div>

      <div class="card">
        <div class="large-icon">
          <World2 colour="#3dfa52" />
        </div>

        <h4>SUSTAINABLE COMMUNITIES</h4>

        <p class="small">
          Nightingale communities encourage sustainable living through rainwater
          capture, renewable energy, Green Travel Plans for residents to
          discourage private car ownership and shared laundry and garden spaces
          to reduce resource&nbsp;waste.
        </p>
      </div>
    </div>

    <h3>INVESTING FOR SOCIAL IMPACT</h3>

    <img
      src="https://res.cloudinary.com/future-super/image/upload/c_scale,q_auto/v1639299184/Cross.gif"
      alt="3D Cross"
      class="cross"
    />

    <p>
      Nightingale makes clear inroads into equality in the property market.
      Affordability, socio-economic background and demands on desirable
      locations are the biggest barriers to home ownership in Australia.
      Nightingale creates socially beneficial systems change in all these areas.
    </p>

    <img
      src="https://res.cloudinary.com/future-super/image/upload/c_scale,q_auto/v1639299184/nightingale-roof.png"
      alt="Nightingale building rooftop with family playing"
      class="roof"
    />

    <h3>INVESTING FOR FINANCIAL IMPACT</h3>

    <div class="skinny">
      <p>
        While this investment will have a big impact and disrupt the property
        market, you might wonder how it makes money?
      </p>

      <p class="small">
        Future Super’s investment is in the Nightingale Fund, which distributes
        capital to finance the construction of Nightingale Albion. The
        Nightingale Fund will make a fixed interest repayment on Future Super’s
        investment at the conclusion of the project, which will then be
        reflected in the overall unit price of the Balanced Impact and
        Renewables Plus Growth investment options.
      </p>
    </div>

    <img
      src="https://res.cloudinary.com/future-super/image/upload/c_scale,q_auto/v1639299184/nightingale-financial.png"
      alt="Nightingale building rooftop with family playing"
      class="financial"
    />

    <section class="timeline-section">
      <h3>Current project timeline</h3>
      <p class="sub">Est. Completion 2023</p>

      <div class="timeline">
        <p class="label">Planning</p>
        <p class="label">Approval</p>
        <p class="label">Construction</p>
        <p class="label">Completion</p>
        <progress value="1" class="bar" />
        <progress value="1" class="bar" />
        <progress value="0.2" class="bar" />
        <progress value="0" class="bar" />
      </div>
    </section>

    <p class="disclaimer">
      Please note that returns on an individual investment do not equal returns
      on an investment option. You can find more info on the <a
        href="/performance-and-returns">overall returns here</a
      >. Please note past performance does not guarantee future performance.
    </p>
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

  .update-container {
    background-color: $black850;
    border-radius: 80px;
  }

  .update-title {
    color: $green;
    font-family: $regular;
    font-size: 22px;
    padding: 40px;
    margin: 0;
  }

  .update-text {
    padding: 0 60px 20px 60px;
    font-family: Helvetica;
    font-size: 22px;
    font-weight: 300;
    line-height: 30px;
  }
</style>
