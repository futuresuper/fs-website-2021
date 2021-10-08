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
