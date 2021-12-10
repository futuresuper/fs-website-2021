<script>
  import Arrow from "../images/Arrow.svelte";
  import World from "../images/WorldNoArrows.svelte";
  import Shield from "../images/Shield.svelte";
  import PerformanceArrow from "../images/PerformanceArrow.svelte";

  let circle1 = false;
  let circle2 = false;
  let circle3 = false;
</script>

<div class="container">
  <h1>NIGHTINGALE ALBION</h1>

  <h2>YOUR SUPER IS DISRUPTING THE PROPERTY MARKET</h2>

  <p>
    A more sustainable model of living is essential for a future free from
    climate change. Nightingale Albion, due for completion by 2023, uses the
    power of your super to reinvent the environmental and social upsides to
    building new homes.
  </p>

  <div class="arrow">
    <Arrow direction="down" colour="#3dfa52" />
  </div>

  <h3>INVESTED FOR PLANET, PEOPLE AND PROFIT.</h3>

  <p>
    Nightingale Albion is just one of your investments that’s creating real
    systems change.
  </p>

  <p>
    Future Super's investment in Nightingale lends the power of your super to
    build an eco-friendly apartment complex on Albion St in Melbourne. The
    creation of these homes aims to create financial benefits for members as
    well as environmental and social impact.
  </p>

  <div class="cards">
    <div class="card">
      <div class="icon">
        <World color="#3dfa52" />
      </div>

      <h4>ENVIRONMENTAL IMPACT</h4>

      <p class="small">Carbon neutral developments.</p>
      <p class="small">
        Support sustainable living with communal spaces and transport access.
      </p>
      <p class="small">Builds no fossil fuel communities.</p>
    </div>

    <div class="card">
      <div class="icon">
        <Shield />
      </div>

      <h4>SOCIAL IMPACT</h4>

      <p class="small">
        Affordability first: apartments sell without profit margins to keep cost
        down.
      </p>

      <p class="small">
        Apartments reserved for people unable to buy under normal circumstances.
      </p>

      <p class="small">
        Nightingale finance plan assists with purchase on lower incomes.
      </p>
    </div>

    <div class="card">
      <div class="icon">
        <PerformanceArrow />
      </div>

      <h4>FINANCIAL BENEFIT</h4>

      <p class="small">Investment returns fixed interest</p>

      <p class="small">Repaid in full over 2 years</p>

      <p class="small">
        Accounts for 1.4% of money invested from Balanced Impact and Renewables
        Plus Growth (combined stat as at 31st October 2021)
      </p>

      <p class="small">
        Creates opportunity for similar investments in the future.
      </p>
    </div>
  </div>

  <h3>SHIFTING THE STATUS QUO</h3>

  <p>
    Most new housing is built for profit. When we treat homes like a commodity
    and not a human right, people get locked out of the housing market.
  </p>

  <p>
    Nightingale shifts the status quo by imagining a world where housing exists
    to benefit communities, not profit from them.
  </p>

  <p class="tap">
    Tap each circle to see how Nightingale is flipping the status quo.
  </p>

  <div class="circle">
    {#if circle1}
      <!-- content here -->
    {:else}
      20% deposit on mortgage
    {/if}
  </div>
  <div class="circle">
    {#if circle2}
      <!-- content here -->
    {:else}
      Sold on the open market
    {/if}
  </div>
  <div class="circle">
    {#if circle3}
      <div>Wholesale green power and solar</div>
      <p class="circle-small">Nightingale developments are fossil fuel free.</p>
    {:else}{/if}
  </div>

  <h3>INVESTING FOR ENVIRO-NMENTAL IMPACT</h3>

  <p>
    Investing in climate change solutions isn’t just about renewable energy. It
    means changing the way the world works so that our most basic systems don’t
    rely on fossil fuels. Nightingale meets our criteria for environmental
    change in the housing sector.
  </p>

  <div class="card">
    <h4>CARBON NEUTRAL</h4>

    <p class="small">
      The net carbon emissions of Nightingale communities are zero, achieved
      through low emissions design and carbon offsets.
    </p>
  </div>

  <div class="card">
    <h4>SUSTAINABLE COMMUNITIES</h4>

    <p class="small">
      Nightingale communities encourage sustainable living through rainwater
      capture, renewable energy, Green Travel Plans for residents to discourage
      private car ownership and shared laundry and garden spaces to reduce
      resource waste.
    </p>
  </div>

  <h4>INVESTING FOR SOCIAL IMPACT</h4>

  <p>
    Nightingale makes clear inroads into equality in the property market.
    Affordability, socio-economic background and demands on desirable locations
    are the biggest barriers to home ownership in Australia. Nightingale creates
    socially beneficial systems change in all these areas.
  </p>

  <h4>INVESTING FOR FINANCIAL IMPACT</h4>

  <p class="large">
    While this investment will have a big impact and disrupt the property
    market, you might wonder how it makes money?
  </p>

  <p>
    Nightingale is a fixed interest investment, so an agreement has been made
    that Future Super will invest in the project and Nightingale will pay a
    fixed rate of interest.
  </p>

  <div class="timeline">
    <h5>Current project timeline</h5>

    <p class="sub">Est. Completion 2023</p>

    <p class="label">Planning</p>
    <p class="label">Approval</p>
    <p class="label">Construction</p>
    <p class="label">Completion</p>
  </div>
</div>

<style lang="scss">
  @use "../../styles/" as *;

  $font-size-xs: max(10px, 0.9vw);
  $font-size-s: max(13px, 1.2vw);
  $font-size-m: max(16px, 1.8vw);
  $font-size-l: max(38px, 4vw);
  $font-size-xl: max(44px, 5vw);

  .container {
    background-color: $black;
    color: $white;
    text-align: center;
  }

  h1 {
    font-family: $regular;
    font-weight: 400;
    letter-spacing: 1px;
    font-size: $font-size-m;
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
  }

  p {
    font-size: $font-size-m;
  }

  .arrow {
    height: 40px;
  }

  .cards {
    margin: 0 -40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    .icon {
      width: 80px;
    }
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 40px;
    background-color: $black;
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;
    filter: drop-shadow(0px -6px 10px rgba(0, 0, 0, 0.2));
  }

  @media (max-width: 900px) {
    .cards {
      grid-template-columns: 100%;
      .card {
      }
    }
  }

  @media (max-width: 600px) {
  }
</style>
