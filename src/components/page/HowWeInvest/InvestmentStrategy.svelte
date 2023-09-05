<div class="grid12">
  <h2>Our investment strategy</h2>
</div>
<hr />
<div class="grid12">
  <div class="strategy-text">
    <h4>
      We have developed an investment strategy that reflects the reasons people
      join Future Super.
    </h4>
    <p>
      In addition to investing for your financial benefit, we aim to create
      systemic change through investment, by harnessing the power of your super
      to build a future without climate change or inequality.
    </p>
    <h4>Investing for a fossil fuel free future. What does this mean?</h4>
    <p>
      Fossil fuels are hydrocarbon containing materials of biological origin
      occurring within the Earth’s crust and which can be used as a source of
      energy. This is coal, oil and gas. Future Super sets a 0% threshold for
      direct exposure to fossil fuel companies in our investments, meaning all
      companies and investments identified as owning fossil fuel reserves and/or
      engaged in the mining, extraction or burning of fossil fuels are screened
      out.
    </p>
    <p>
      We regularly review our portfolio to ensure compliance to our ethical
      screens. Should we identify that an asset we hold changes the nature of
      their business so that they no longer meet our standards, we will remove
      that asset from our portfolio. Please see the
      <a href="/pds">PDS </a>

      and
      <a href="/aib"> Additional Information Booklet </a>
      for more information on how we invest your money.
    </p>
  </div>
</div>

<style lang="scss">
  @use "../../../styles/" as *;

  .grid12 {
    margin: 100px 0;
    display: grid;
    grid-template-columns: repeat(12, 1fr);

    h2 {
      grid-column: span 5;
      margin-bottom: 0;
    }

    .strategy-text {
      grid-column-start: 8;
      grid-column-end: 13;
    }
  }

  h4 {
    margin-bottom: 20px;
  }

  @media (max-width: 680px) {
    hr {
      display: none;
    }

    .grid12 {
      grid-template-columns: 100%;
      margin: 30px 0;

      h2 {
        grid-column: span 1;
      }

      .strategy-text {
        grid-column: span 1;
      }
    }
  }
</style>
