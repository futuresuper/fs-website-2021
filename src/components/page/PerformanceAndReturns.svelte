<script>
  import returns from "@data/performanceReturns.json";
  import HeaderRow from "./InvestmentOptions/HeaderRow.svelte";
  import JoinRow from "./InvestmentOptions/JoinRow.svelte";
  import RelatedFaqs from "../ui/RelatedFaqs.svelte";
  export let faqs = [];

  const returnsWith30June = [
    ...returns.table.slice(0, 6),
    {
      rowHeading: "1 Year to 30 June 2022",
      balancedIndex: "-11.41%",
      balancedImpact: "-8.65%",
      renewablesPlusGrowth: "-9.87%",
      balancedGrowthPension: "-10.97%",
    },
    ...returns.table.slice(6),
  ];
</script>

<div class="tables">
  <div class="container">
    <HeaderRow includePension={true} />
    {#each returnsWith30June as r}
      <div class="table-row">
        <div class="row-head">
          <h4>{r.rowHeading}</h4>
          {#if r.rowSubHeading}
            <p class="head-desc">Relative to launch date</p>
          {/if}
        </div>
        <div class="number">{r.balancedIndex}</div>
        <div class="number">{r.balancedImpact}</div>
        <div class="number">{r.renewablesPlusGrowth}</div>
        <div class="number">{r.balancedGrowthPension}</div>
      </div>
    {/each}
    <JoinRow includePension={true} />
    <p class="disclaimer">
      Returns provided are after investment fees, percentage-based
      administration fees and taxes but before dollar-based administration fees
      have been taken out. Returns for periods of greater than one year are on a
      per annum compound basis. Return of capital and the performance of your
      investment in the Fund are not guaranteed. Past performance is not a
      reliable indicator of future performance.
    </p>
  </div>
</div>
<div class="container">
  <RelatedFaqs {faqs} />
</div>

<style lang="scss">
  @use "../../styles/" as *;

  .tables {
    background-color: $black100;
  }

  .table-row {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(6, 1fr);
    padding: 20px;
    background-color: $white;
    border-radius: 16px;
    align-items: center;
    margin-bottom: 20px;

    h4,
    .row-head {
      margin: 0;
      grid-column: span 2;
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
  }

  .disclaimer {
    margin-top: 60px;
    margin-bottom: 60px;
    max-width: 50%;
  }

  @media (max-width: 760px) {
    .table-row {
      grid-template-columns: repeat(4, 1fr);
      text-align: center;

      h4,
      .row-head {
        grid-column: span 4;
      }
    }

    .allocDesc {
      font-size: 10px;
    }

    .disclaimer {
      max-width: 100%;
    }
  }

  @media (max-width: 600px) {
    .table-row {
      grid-gap: 10px;
    }

    .intro-text {
      max-width: 100%;
    }
  }

  @media (max-width: 440px) {
    .number {
      font-size: 10px;
    }
  }
</style>
