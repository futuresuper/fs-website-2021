<script>
  import SwitchShakeCircle from "../../images/SwitchShakeCircle.svelte";
  const green = "#3DFA52";
</script>

<div class="container page-header-container">
  <div class="title-and-text">
    <h1>How We Invest</h1>
    <h3>We're different</h3>
    <p>
      Your super is supposed to invest and grow your retirement savings, to
      prepare you for the future. But super funds still invest money in harmful
      industries like fossil fuels, that endanger your future and worsen climate
      change. We invest your super for your financial future and for the quality
      of your future. We do this by applying our theory of change to a
      financially competitive investment strategy.
    </p>
    <div class="seek-and-exclude">
      <h4>
        <span class="green">We Seek</span><br />
        impactful investments creating systems change.
      </h4>
      <h4>
        <span class="red">We Exclude</span><br />
        investments with harmful impacts on people or the planet.
      </h4>
    </div>
  </div>
  <div class="switch-circle">
    <SwitchShakeCircle colour={green} />
  </div>
</div>

<style lang="scss">
  @use "../../../styles/" as *;

  .page-header-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }

  .seek-and-exclude {
    margin-top: 60px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }

  h4 {
    font-size: 22px;
  }

  .green {
    color: $green;
  }

  .red {
    color: $black500;
  }

  .switch-circle {
    width: 100%;
    padding: 0 20%;
  }

  @media (max-width: 1000px) {
    .page-header-container {
      grid-template-columns: 2fr 1fr;
    }

    .switch-circle {
      padding: 0%;
    }

    h4 {
      font-size: 18px;
    }
  }

  @media (max-width: 680px) {
    .page-header-container {
      grid-template-columns: 100%;
    }

    .switch-circle {
      display: none;
    }
  }
</style>
