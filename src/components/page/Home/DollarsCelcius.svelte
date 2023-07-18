<script>
  import DiagArrow from "../../images/DiagArrow.svelte";
  import pages from "@data/pages.json";
</script>

<div class="container">
  <section>
    <div class="top">
      <h2>
        The future isn’t only measured in dollars. It’s measured in celsius.
      </h2>
      <DiagArrow />
    </div>
    <div class="bottom">
      <div class="image">
        <img
          src="/images/Dollars_Celsius.gif"
          alt="Text Graphic with the words Dollars and Celcius"
        />
      </div>
      <div class="text">
        <p>
          Future Super invests for a fossil fuel free future. Fossil fuels are
          coal, oil and gas. Future Super sets a 0% threshold for direct
          exposure to fossil fuels in our investments, meaning all fossil fuel
          companies and investments are screened out. See
          <a href={pages.HOW_WE_INVEST[1]}> How We Invest </a>
          and our
          <a href="{pages.HOW_WE_INVEST[1]}#screening"> Screening Approach </a>
          for further information.
        </p>
        <p>
          We care about what kind of future your super investments deliver, so
          we choose renewables over fossil fuels, responsibility over a quick
          buck, and the future over now. Our investment strategy avoids harmful
          investments and uses the power of your money to invest in climate
          solutions and act on the issues of today.
        </p>
        <a class="button full-width" href={pages.HOW_WE_INVEST[1]}
          >See how we invest</a
        >
      </div>
    </div>
  </section>
</div>

<style lang="scss">
  @use "../../../styles/" as *;

  section {
    margin: 20px 0;
    padding: 60px 20px;
    background-color: $black;
    border-radius: 32px;
    color: $white;
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  h2 {
    width: 70%;
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .image {
    width: 40%;
    display: flex;
    justify-content: center;
  }

  .text {
    padding-top: 180px;
    width: 50%;
  }

  p {
    font-size: 24px;
    line-height: 120%;
    margin-bottom: 50px;
  }

  @media (max-width: 740px) {
    p {
      font-size: 20px;
    }
  }

  @media (max-width: 600px) {
    section {
      padding: 20px;
    }

    .bottom {
      display: flex;
      flex-direction: column;
    }

    .image {
      width: 100%;
    }

    .text {
      padding-top: 20px;
      width: 100%;
    }

    p {
      font-size: 16px;
    }
  }
</style>
