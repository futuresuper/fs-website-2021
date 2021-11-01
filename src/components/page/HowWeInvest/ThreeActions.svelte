<script>
  import NoFossilFuels from "../../images/NoFossilFuels.svelte";
  import Leaf from "../../images/Leaf.svelte";
  import World from "../../images/World.svelte";
  const black = "#212121";
  const red = "#ff003d";
  const green = "#3dfa52";
</script>

<div class="grid">
  <div class="intro">
    <h4>
      Our actions as an investor have consequences for your community and
      planet, and we use three core strategies to pave the way toward a more
      sustainable future for you.
    </h4>
  </div>
  <div class="divestment">
    <div class="icon">
      <NoFossilFuels colour={red} />
    </div>
    <h2>1. Divestment</h2>
    <h4>
      We use a negative screening process (divestment) to protect you from
      exposure to unsustainable assets. Our screening removes harmful
      investments that pose risks to your super and your future from our
      investment universe, and directs the flow of capital elsewhere.
    </h4>
    <p>
      Divestment is one of our greatest tools to change systems, challenging the
      social licence of industries like fossil fuels and pressuring other
      investors to reject them. This process makes all our portfolios fossil
      fuel free, including companies and assets that provide services to the
      fossil fuel industry, like finance and transportation. We believe that’s a
      smart investment strategy because, as the world works to limit global
      warming to 1.5 degrees, most fossil fuel companies will likely be worth
      less over time.
    </p>
    <p>It’s not just about what you do, it’s also what you don’t.</p>
  </div>
  <div class="reinvestment">
    <div class="icon">
      <Leaf colour={black} />
    </div>
    <h2>2. Reivestment</h2>
    <h4>
      We use reinvestment as a mechanism to create impactful super products by
      redirecting divested money into more sustainable investments and in impact
      opportunities.
    </h4>
    <p>
      We seek to identify investment products that avoid or reduce harm, and
      when these don’t exist, we partner with like-minded investors to create
      them. We also seek to invest some of our capital in impact investments,
      which directly address climate change or inequality. This realises the
      potential that our divestment unlocks.
    </p>
  </div>
  <div class="voting">
    <div class="icon">
      <World colour={black} />
    </div>
    <h2>3. Voting + Engagement</h2>
    <h4>
      While we do our best to invest responsibly, no company is perfect. We use
      tools like voting and engagement to push the companies we invest in to
      improve things like their climate impact or supply chains.
    </h4>
    <p>
      Future Super actively engages with the companies we invest in and our
      industry on important issues (both individually and in collaboration with
      other investors). In addition, we also advise our investment partners on
      how to vote on shareholders resolutions at company Annual General Meetings
      (AGMs).
    </p>
  </div>
</div>

<style lang="scss">
  @use "../../../styles/" as *;

  .grid {
    margin: 60px -20px;
    display: grid;
    grid-template-columns: 1fr 1fr;

    > * {
      padding: 7vw;
    }
  }

  .intro {
    grid-row: span 3;
    background-color: $black;
    color: $white;
    border-top-left-radius: 32px;
    border-bottom-left-radius: 32px;

    h4 {
      margin: 0;
    }
  }

  .divestment {
    background-color: $black200;
    border-top-right-radius: 32px;
  }

  .reinvestment {
    background-color: $black100;
  }

  .voting {
    background-color: $black200;
    border-bottom-right-radius: 32px;
  }

  .icon {
    width: 96px;
  }

  h4 {
    margin-bottom: 22px;
  }

  @media (max-width: 900px) {
    .grid {
      > * {
        padding: 40px;
      }
    }
  }

  @media (max-width: 640px) {
    .grid {
      grid-template-columns: 100%;
    }

    .intro {
      border-radius: 32px 32px 0 0;
    }

    .divestment {
      border-radius: 0;
    }

    .voting {
      border-radius: 0 0 32px 32px;
    }
  }
</style>
