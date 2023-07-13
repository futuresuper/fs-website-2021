<script>
  import ScreeningCircle from "../../images/ScreeningCircle.svelte";
</script>

<div class="screening" id="screening">
  <div class="image">
    <ScreeningCircle />
  </div>
  <div class="text">
    <h2>Screening</h2>
    <h4>
      All Future Super investments pass our screens before being considered.
      This rules based approach means that regardless of the investment option
      you choose, your super has some level of positive impact while also
      protecting you from certain risks.
    </h4>
    <p>
      We invest as broadly as possible in different assets, industries and
      regions, without compromising on our core investment screens. This gives
      our members the potential to experience superior returns that can result
      from companies thoughtfully addressing their environmental, social and
      governance opportunities and risks.
    </p>
    <a href="/impact-screening-strategy" class="button">
      Our full screening strategy
    </a>
    <p class="disclaimer">
      Future Super Investment Services Pty Ltd (FSIS) is a service provider for
      the BetaShares products we invest in. The role of FSIS is to advise and
      provide recommendations to the Responsible Investment Committee on the
      index constituents and corporate actions. Details of FSIS services to
      BetaShares are found in our Financial Services Guide. Investment in
      Australian equities is predominantly made via the BetaShares Australian
      Sustainability Leaders ETF. Investment in international equities is via
      the BetaShares Global Sustainability Leaders ETF and the BetaShares
      Climate Change Innovation ETF. Exposure to global green bonds is
      predominantly made via the BetaShares Sustainability Leaders Diversified
      Bond ETF. For more information about these ETFs see
      https://www.betashares.com.au.
    </p>
  </div>
</div>

<style lang="scss">
  @use "../../../styles/" as *;

  .screening {
    margin: 100px 0;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(12, 1fr);
  }

  .image {
    grid-column: span 5;
  }

  .text {
    grid-column-start: 7;
    grid-column-end: 13;
  }

  .disclaimer {
    margin-top: 60px;
  }

  @media (max-width: 720px) {
    .image {
      grid-column: span 5;
    }
    .text {
      grid-column-start: 6;
    }
  }

  @media (max-width: 600px) {
    .screening {
      grid-template-columns: 100%;
    }

    .image {
      grid-column: span 1;
    }

    .text {
      grid-column: span 1;
    }

    .button {
      width: 100%;
    }
  }
</style>
