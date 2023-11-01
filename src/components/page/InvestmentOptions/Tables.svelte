<script>
  import HeaderRow from "./HeaderRow.svelte";
  import Tick from "../../images/Tick.svelte";
  import investmentOptions from "@data/investmentOptions.json";
  import returns from "@data/performanceReturns.json";
  import moment from "moment";

  export let pension = false;

  returns.table.map((r) => {
    if (r.rowHeading === "1 Year") {
      investmentOptions[0].returnOneYear = r.balancedIndex;
      investmentOptions[1].returnOneYear = r.balancedImpact;
      investmentOptions[2].returnOneYear = r.renewablesPlusGrowth;
      investmentOptions[3].returnOneYear = "NEW";
      investmentOptions[4].returnOneYear = r.balancedGrowthPension;
    }
    if (r.rowHeading === "Since inception") {
      investmentOptions[0].returnSinceInception = r.balancedIndex;
      investmentOptions[1].returnSinceInception = r.balancedImpact;
      investmentOptions[2].returnSinceInception = r.renewablesPlusGrowth;
      investmentOptions[3].returnSinceInception = "NEW";
      investmentOptions[4].returnSinceInception = r.balancedGrowthPension;
    }
    if (r.rowHeading === "Launch date") {
      investmentOptions[0].launchDate = r.balancedIndex;
      investmentOptions[1].launchDate = r.balancedImpact;
      investmentOptions[2].launchDate = r.renewablesPlusGrowth;
      investmentOptions[3].launchDate = "1 Nov 2023";
      investmentOptions[4].launchDate = r.balancedGrowthPension;
    }
  });

  const options = pension
    ? investmentOptions.slice(4, 5)
    : investmentOptions.slice(0, 4); // exclude Pension
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
    <HeaderRow title="Impact talk" pensionOnly={pension} />
    <div class="table-row {pension ? 'pension' : ''}">
      <h4>Screens out fossil fuel companies</h4>
      <div class="tick"><Tick /></div>
      {#if !pension}
        <div class="tick"><Tick /></div>
        <div class="tick"><Tick /></div>
        <div class="tick"><Tick /></div>
      {/if}
    </div>
    <div class="table-row {pension ? 'pension' : ''}">
      <h4>Ethically screened</h4>
      <div class="tick"><Tick /></div>
      {#if !pension}
        <div class="tick"><Tick /></div>
        <div class="tick"><Tick /></div>
        <div class="tick"><Tick /></div>
      {/if}
    </div>
    <div class="table-row {pension ? 'pension' : ''}">
      <h4>Invests for impact</h4>
      {#if !pension}
        <div />
        <div class="tick"><Tick /></div>
        <div class="tick"><Tick /></div>
      {/if}
      <div class="tick"><Tick /></div>
    </div>
    {#if !pension}
      <div class="table-row {pension ? 'pension' : ''}">
        <h4>Targets 20% investment in climate change solutions</h4>
        <div />
        <div />
        <div class="tick"><Tick /></div>
      </div>
    {/if}
    {#if !pension}
      <div class="table-row {pension ? 'pension' : ''}">
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
    {/if}

    <HeaderRow title="Money talk" pensionOnly={pension} />
    <div class="table-row {pension ? 'pension' : ''}">
      <div class="row-head">
        <h4>Fees per year *</h4>
      </div>
      {#each options as option}
        <div>
          <p class="number">
            {option.fee.perAnnumPercentage.toFixed(3)}% + ${option.fee
              .perYearPrice}
          </p>
          <!-- <p class="number-desc">
            ${(
              50000 * (option.fee.perAnnumPercentage / 100) +
              option.fee.perYearPrice
            ).toFixed(2)} per year on a balance of $50,000
          </p> -->
        </div>
      {/each}
    </div>
    <div class="table-row {pension ? 'pension' : ''}">
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
            Per annum over rolling {option.investmentObjectiveYears === 12
              ? "twelve"
              : "ten"}-year periods (after fees and taxes)
          </p>
        </div>
      {/each}
    </div>
    <div class="table-row {pension ? 'pension' : ''}">
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
    <div class="table-row {pension ? 'pension' : ''}">
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

    <p class="disclaimer">
      {#if pension}
        *The fees shown are the total Administration Fees and Costs, Investment
        Fees and Costs and Transaction Costs payable by you in respect of your
        investment in each investment option. Other fees and costs may apply to
        your account. Please read the
        <a href="/pppds">Pension Product Disclosure Statement</a>
        and
        <a href="/pension-tmd">Pension Target Market Determination</a>
        for full details about how fees and costs may impact your investment.
      {:else}
        *The fees shown are the total Administration Fees and Costs, Investment
        Fees and Costs and Transaction Costs payable by you in respect of your
        investment in each investment option. Other fees and costs may apply to
        your account. Please read the
        <a href="/pds">Product Disclosure Statement</a>
        ,
        <a href="/aib">Additional Information Booklet</a>
        and
        <a href="/tmd">Target Market Determination</a>
        for full details about how fees and costs may impact your investment. Refer
        to section 5 of the
        <a href="/aib">Additional Information Booklet</a>
        for more information.
      {/if}
      <br /><br />
      ^ Returns provided are after investment fees, percentage-based administration
      fees and taxes but before dollar-based administration fees have been taken
      out. Returns for periods of greater than one year are on a per annum compound
      basis. Return of capital and the performance of your investment in the Fund
      are not guaranteed. Past performance is not a reliable indicator of future
      performance.
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
    grid-template-columns: repeat(7, 1fr);
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
      display: flex;
      flex-direction: column;
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
      grid-template-columns: repeat(4, 1fr);
      text-align: center;
      &.pension {
        grid-template-columns: 100%;
      }

      h4,
      .row-head {
        grid-column: span 4;
      }
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
