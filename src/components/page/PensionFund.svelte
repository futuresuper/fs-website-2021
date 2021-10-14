<script>
  import Tables from "../../components/page/InvestmentOptions/Tables.svelte";
  import Scales from "../images/Scales.svelte";

  const pink = "#ff27c3";
</script>

<div class="io-container">
  <div class="black-strip" />
  <div class="container investment-options">
    <div />
    <div class="option">
      <div>
        <div class="icons">
          <div class="icon">
            <Scales colour={pink} />
          </div>
        </div>
        <h3>Balanced Growth <br /><span class="pink">Pension</span></h3>
        <p>
          Zero fossil fuels. Targets investment in social impact and renewable
          energy projects.
        </p>
      </div>
      <a
        href="/pensionpaperapplicationform"
        class="button full-width secondary"
      >
        Sign up
      </a>
    </div>
  </div>
</div>
<Tables pension={true} />

<style lang="scss">
  @use "../../styles/" as *;

  .pink {
    color: $pink;
  }

  .black-strip {
    background-color: $black;
    height: 260px;
    width: 100%;
  }

  .io-container {
    background-color: $black100;
  }

  .investment-options {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    margin-top: -300px;

    .option {
      background-color: $white;
      border-radius: 32px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .icons {
        display: flex;
        align-items: center;
      }

      h5 {
        text-transform: uppercase;
      }

      p {
        color: $black600;
      }
    }
  }

  .icon {
    width: 96px;
  }

  @media (max-width: 1160px) {
    .icon {
      width: 48px;
    }
  }

  @media (max-width: 760px) {
    h3 {
      font-size: 32px;
    }

    .icon {
      width: 96px;
    }

    .investment-options {
      display: grid;
      grid-template-columns: 100%;
    }
  }
</style>
