<script>
  import BCorpLogo from "../../images/BCorpLogo.svelte";
  import BestInWorldCircle from "../../images/BestInWorldCircle.svelte";
</script>

<div class="container">
  <section>
    <div class="text">
      <p>
        Future Super has been awarded Best For The World™ status by B Corp
        for&nbsp;2022.
      </p>
      <p class="disclaimer">
        Source:
        https://www.bcorporation.net/en-us/best-for-the-world-2022-customers/
      </p>
    </div>
    <div class="best">
      <BestInWorldCircle />
      <div>
        <BCorpLogo />
      </div>
    </div>
  </section>
</div>

<style lang="scss">
  @use "../../../styles/" as *;

  section {
    margin: 0px 0px;
    background-color: $black;
    border-radius: 32px;
    color: $white;
    padding: 8vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .text {
    max-width: 40%;
    p {
      font-size: 30px;
      line-height: 120%;
      margin: 0;
    }
    .disclaimer {
      font-size: 11px;
      margin-top: 20px;
    }
  }

  .best {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      position: absolute;
      width: 100px;
      max-width: 8vw;
    }
  }

  @media (max-width: 740px) {
    section {
      flex-direction: column;
    }

    .best {
      width: 100%;
    }

    .text {
      max-width: 100%;
      margin-bottom: 20px;
      p {
        font-size: 20px;
        text-align: center;
      }
    }
  }

  @media (max-width: 740px) {
    p {
      font-size: 16px;
    }
  }
</style>
