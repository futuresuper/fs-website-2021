<script>
  import HeaderRow from "./HeaderRow.svelte";
  import JoinRow from "./JoinRow.svelte";
  import Tick from "../../images/Tick.svelte";
  import investmentOptions from "$/data/investmentOptions.json";
  import returns from "$/data/performanceReturns.json";
  import moment from "moment";

  const options = investmentOptions.slice(0, 3); // exclude Pension

  returns.table.map((r) => {
    if (r.rowHeading === "1 Year") {
      options[0].returnOneYear = r.balancedIndex;
      options[1].returnOneYear = r.balancedImpact;
      options[2].returnOneYear = r.renewablesPlusGrowth;
    }
    if (r.rowHeading === "Since inception") {
      options[0].returnSinceInception = r.balancedIndex;
      options[1].returnSinceInception = r.balancedImpact;
      options[2].returnSinceInception = r.renewablesPlusGrowth;
    }
    if (r.rowHeading === "Launch date") {
      options[0].launchDate = r.balancedIndex;
      options[1].launchDate = r.balancedImpact;
      options[2].launchDate = r.renewablesPlusGrowth;
    }
  });
</script>

<div class="tables">
  <div class="container">
    <div class="intro-text">
      <h2>Let's break things down</h2>
      <p>
        Don’t speak finance? Hover over anything with a
        <span class="tooltip">
          dotted underline
          <span class="tooltip-text">You're a natural!</span>
        </span>
        to see a normal human explanation.
      </p>
    </div>
    <HeaderRow title="Impact talk" />
    <div class="table-row">
      <h4>Zero fossil fuels</h4>
      <div class="tick"><Tick /></div>
      <div class="tick"><Tick /></div>
      <div class="tick"><Tick /></div>
    </div>
    <div class="table-row">
      <h4>Ethically screened</h4>
      <div class="tick"><Tick /></div>
      <div class="tick"><Tick /></div>
      <div class="tick"><Tick /></div>
    </div>
    <div class="table-row">
      <h4>Invests for impact</h4>
      <div />
      <div class="tick"><Tick /></div>
      <div class="tick"><Tick /></div>
    </div>
    <div class="table-row">
      <h4>Targets 20% investment in climate change solutions</h4>
      <div />
      <div />
      <div class="tick"><Tick /></div>
    </div>
    <div class="table-row">
      <div class="row-head">
        <h4 class="tooltip">
          Emissions
          <span class="tooltip-text">
            How much greenhouse gas is emitted by investing in this option. If
            negative, it means it abates more carbon than it emits
          </span>
        </h4>
        <p class="head-desc">
          Based on a balance of $30,000 as at 31st of December, 2020.
        </p>
        <p class="head-desc">
          <a href="/carbon-transparency">See how we measure emissions</a>
        </p>
      </div>
      {#each options as option}
        <div>
          <p class="number">{option.impact}</p>
          <p class="number-desc">tonnes of CO<sub>2</sub> equivalent</p>
        </div>
      {/each}
    </div>
    <div class="table-row">
      <div class="row-head">
        <h4>Highlight investments</h4>
        <p class="head-desc">
          <a href="/everything-we-invest-in">See all investments</a>
        </p>
      </div>
      {#each options as option}
        <div class="highlight-investments">
          {#each option.highlightInvestments as inv}
            <p class="tooltip">
              {inv.label}<span class="tooltip-text">{inv.definition}</span>
            </p>
          {/each}
        </div>
      {/each}
    </div>
    <JoinRow />

    <HeaderRow title="Money talk" />
    <div class="table-row">
      <div class="row-head">
        <h4>Fees per year *</h4>
      </div>
      {#each options as option}
        <div>
          <p class="number">
            {option.fee.perAnnumPercentage}% + ${option.fee.perYearPrice}
          </p>
          <p class="number-desc">
            ${(
              50000 * (option.fee.perAnnumPercentage / 100) +
              option.fee.perYearPrice
            ).toFixed(2)} per year on a balance of $50,000
          </p>
        </div>
      {/each}
    </div>
    <div class="table-row">
      <div class="row-head">
        <h4 class="tooltip">
          Investment objectives
          <span class="tooltip-text">
            How much we aim for your money to grow each year
          </span>
        </h4>
      </div>
      {#each options as option}
        <div>
          <p class="number tooltip">
            CPI + {option.investmentObjective}%
            <span class="tooltip-text">
              CPI (which stands for 'Consumer Price Index') is how much the
              price of stuff changes each year
            </span>
          </p>
          <p class="number-desc">
            Per annum over rolling ten-year periods (after fees and taxes)
          </p>
        </div>
      {/each}
    </div>
    <div class="table-row">
      <div class="row-head">
        <h4 class="tooltip">
          Asset allocation
          <span class="tooltip-text">
            How we balance risk and reward in order to achieve investment
            objectives
          </span>
        </h4>
      </div>
      {#each options as option}
        <div>
          <p class="number">
            {option.assetAllocation.growth}%
            <span class="allocDesc">Growth</span>
          </p>
          <p class="number">
            {option.assetAllocation.defensive}%
            <span class="allocDesc">Defensive</span>
          </p>
        </div>
      {/each}
    </div>
    <div class="table-row">
      <div class="row-head">
        <h4>Recent returns^</h4>
        <p class="head-desc">
          As at {moment(returns.dateAsAt).format("DD MMMM YYYY")}
        </p>
        <p class="head-desc">
          <a href="/performance-and-returns">See full performance and returns</a
          >
        </p>
      </div>
      {#each options as option}
        <div>
          <p class="number">{option.returnOneYear}</p>
          <p class="number-desc one-year">One year</p>
          <p class="number">{option.returnSinceInception}</p>
          <p class="number-desc">Since inception<br />({option.launchDate})</p>
        </div>
      {/each}
    </div>
    <JoinRow />

    <p class="disclaimer">
      * Read our <a href="/pds">Product Disclosure Statement</a>
      and
      <a href="/aib">Additional Information Booklet</a>
      for details on how fees apply to your Future Super account. The fees shown
      above are the total Investment Fees, Administration Fees and Indirect Cost
      Ratio payable for each of our investment options. Other fees and costs may
      apply to your account. There's no dollar-based admin fee when your balance
      is below $6,000. ^ Returns provided are after investment fees, percentage-based
      administration fees and taxes but before dollar-based administration fees have
      been taken out. Returns for periods of greater than one year are on a per annum
      compound basis. Return of capital and the performance of your investment in
      the Fund are not guaranteed. Past performance is not a reliable indicator of
      future performance.
    </p>
  </div>
</div>

<style lang="scss">
  @use "../../../styles/" as *;

  .tables {
    background-color: $black100;
  }

  .intro-text {
    max-width: calc(50% - 10px);
  }

  .table-row {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(6, 1fr);
    padding: 20px;
  }

  .table-row {
    background-color: $white;
    border-radius: 16px;
    align-items: center;
    margin-bottom: 20px;

    h4,
    .row-head {
      margin: 0;
      grid-column: span 3;
      .head-desc {
        font-size: 13px;
        margin-top: 4px;
        margin-bottom: 0px;
      }
    }

    .number {
      font-family: $mono;
      margin: 0;
    }

    .number-desc {
      font-family: $mono;
      font-size: 13px;
      color: $black500;
      margin: 0;
    }

    .one-year {
      margin-bottom: 14px;
    }

    .highlight-investments {
      align-self: flex-start;
      p {
        font-size: 13px;
        margin-bottom: 4px;
        &:last-of-type {
          margin: 0;
        }
      }
    }
  }

  .disclaimer {
    margin-top: 60px;
    margin-bottom: 60px;
  }

  @media (max-width: 760px) {
    .table-row {
      grid-template-columns: repeat(3, 1fr);
      text-align: center;
    }

    .number {
      &:last-of-type {
        margin-top: 20px;
      }
    }

    .allocDesc {
      font-size: 10px;
    }
  }

  @media (max-width: 600px) {
    .table-row {
      grid-gap: 10px;

      .number-desc {
        font-size: 10px;
      }
    }

    .intro-text {
      max-width: 100%;
    }
  }

  @media (max-width: 440px) {
    .number {
      font-size: 10px;
    }
    .table-row {
      .highlight-investments {
        p {
          font-size: 10px;
        }
      }
    }
  }
</style>
