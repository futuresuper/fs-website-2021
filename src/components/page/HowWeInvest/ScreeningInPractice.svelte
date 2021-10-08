<script>
  import screens from "../../../data/screens.json";
  import Carat from "../../images/Carat.svelte";
  import CrossCircle from "../../images/CrossCircle.svelte";

  let showing = "Fossil fuels";
</script>

<div>
  <div class="intro">
    <h3>Screening in practice</h3>
    <h4>
      The tool below gives examples of our core negative screens in action.
      Click on each to see real examples of companies that don’t pass our
      screens.
    </h4>
  </div>
  <div class="cols">
    <div class="screens">
      {#each screens as screen}
        <div
          class="screen"
          on:mouseover={() => {
            showing = screen.name;
          }}
          on:focus={() => {
            showing = screen.name;
          }}
          on:click={() => {
            showing = screen.name;
          }}
        >
          <div class="text">{screen.name}</div>
          {#if screen.name === showing}
            <div class="carat"><Carat /></div>
          {/if}
        </div>
      {/each}
    </div>
    <div class="screen-example">
      {#each screens as screen}
        {#if screen.name === showing}
          <h3>
            <span class="red">{screen.name}</span>
            {screen.linkingVerb} screened with the following Criteria
          </h3>
          {#each screen.criteria as item}
            <h4>{item.question}</h4>
            <div class="answer">
              <div class="cross">
                <CrossCircle />
              </div>
              <strong>Fails:&nbsp;&nbsp;</strong>
              {item.examples.join(", ")}
            </div>
          {/each}
        {/if}
      {/each}
    </div>
  </div>
  <p class="disclaimer">
    All Future Super investments are screened to ensure they align with our
    members’ values. To help us do this, we consider how each investment and
    asset class may have exposure to ethical risks or impact opportunities, as
    well as how they can work together to produce the best possible return for
    our members. Therefore, adapting our screening, stewardship and impact
    strategies for each investment leverages it for the best effect on climate
    change and equality while also reflecting our broader investment and risk
    management strategies. For more information on Future Super’s impact
    strategy, screening guideline for each asset, and specific thresholds for
    each screen, click here.
  </p>
</div>

<style lang="scss">
  @use "../../../styles/" as *;

  .intro,
  .disclaimer {
    width: calc(50% - 10px);
  }

  h4 {
    margin-bottom: 50px;
  }

  .red {
    color: $red;
  }

  .text {
    max-width: 84%;
  }

  .cols {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 60px;
  }

  .screens {
    width: calc(50% - 10px);
  }

  .screen-example {
    width: 44%;

    h4 {
      margin: 30px 0 12px 0;
    }
  }

  .answer {
    display: flex;
    flex-direction: row;
    align-content: center;
  }

  .cross {
    margin-right: 20px;
  }

  .screen {
    border-top: 1px solid $black;
    padding: 20px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .carat {
      width: 18px;
    }
    &:hover {
      background-color: $black200;
      cursor: pointer;
    }
    &:last-of-type {
      border-bottom: 1px solid $black;
    }
  }

  @media (max-width: 800px) {
    .intro,
    .disclaimer {
      width: 100%;
    }

    .cols {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .screens {
      width: 30%;
    }

    .screen-example {
      width: 60%;
    }

    .cross {
      margin-right: 10px;
    }
  }

  @media (max-width: 500px) {
    .screens {
      width: 35%;
    }

    .screen-example {
      width: 60%;

      h4 {
        font-size: 13px;
      }
    }

    .text {
      font-size: 14px;
    }

    .answer {
      font-size: 13px;
    }
  }
</style>
