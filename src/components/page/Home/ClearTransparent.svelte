<script>
  import Arrow from "../../images/Arrow.svelte";
</script>

<div class="container">
  <section>
    <h2>Clear. Open.<br />Transparent.</h2>
    <div>
      <div class="intro">
        <p>
          If you have a question about your super, we have the answer easily
          available and easy to understand.
        </p>
        <div>
          <Arrow />
        </div>
      </div>
      <p class="question">
        Want to know everything that Future Super invests in, how much money we
        allocate to each company, and which investments go in which options?
      </p>
      <a href="/everything-we-invest-in" class="button">
        See everything we invest&nbsp;in
      </a>
      <p class="question">
        Want to know how each of our screens works, including tolerance and how
        we define things like “fossil fuels”?
      </p>
      <a href="/impact-screening-strategy" class="button">
        Understand our screens
      </a>
    </div>
  </section>
</div>

<style lang="scss">
  @use "../../../styles/" as *;

  section {
    margin: 100px 0px 20px 0;
    display: flex;
    justify-content: space-between;
    > * {
      width: 40%;
    }
  }

  .intro {
    display: flex;
    justify-content: space-between;
    margin-bottom: 80px;
    p {
      width: 50%;
    }
    div {
      width: 70px;
    }
  }

  .question {
    font-size: 30px;
    line-height: 120%;
    margin: 60px 0 20px 0;
  }

  @media (max-width: 1000px) {
    section {
      > div {
        width: 56%;
      }
    }
  }

  @media (max-width: 740px) {
    section {
      margin-top: 70px;
      margin-bottom: 70px;
      flex-direction: column;
      > div,
      * {
        width: 100%;
      }
    }

    .intro {
      margin-bottom: 40px;
    }

    .question {
      font-size: 16px;
    }

    .mobile-hide {
      display: none;
    }
  }
</style>
