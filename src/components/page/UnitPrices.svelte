<script>
  import unitPrices from "@data/unitPrices.json";
  import HeaderRow from "./InvestmentOptions/HeaderRow.svelte";
  import JoinNow from "../ui/JoinNow.svelte";

  const unitPricesFormatted = [
    unitPrices.find((u) => u.investment_option_label === "Balanced Index"),
    unitPrices.find((u) => u.investment_option_label === "Balanced Impact"),
    unitPrices.find((u) => u.investment_option_label === "Renewables Plus"),
    unitPrices.find((u) => u.investment_option_label === "High Growth"),
    unitPrices.find(
      (u) => u.investment_option_label === "Pension Balanced Growth"
    ),
  ];

  const rows = [
    {
      rowHeading: "Buy price",
      code: "buy_price",
    },
    {
      rowHeading: "Sell price",
      code: "sell_price",
    },
    {
      rowHeading: "Historical pricing",
      code: "investment_option_id",
    },
  ];
</script>

<div class="tables">
  <div class="container">
    <HeaderRow includePension={true} />
    {#each rows as r}
      <div class="table-row">
        <div class="row-head">
          <h4>{r.rowHeading}</h4>
        </div>
        {#each unitPricesFormatted as investmentOption}
          <div class="number">
            {#if r.code === "investment_option_id"}
              <a
                href={"https://api.futuresuper.com.au/api/metrics/registry-unit-prices/" +
                  investmentOption[r.code] +
                  "/?format=csv&start_date=2000-01-01&end_date=" +
                  investmentOption.effective_date}
              >
                Download
              </a>
            {:else}
              {investmentOption[r.code]}
            {/if}
          </div>
        {/each}
      </div>
    {/each}
    <p class="disclaimer">
      Unit prices are calculated daily and generally take 2-3 days to be
      published. You can see historical pricing by clicking the 'Download' links
      above. When considering performance, past performance is not a reliable
      indicator of future returns.
    </p>
  </div>
</div>
<JoinNow />

<style lang="scss">
  @use "../../styles/" as *;

  .tables {
    background-color: $black100;
  }

  .table-row {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(7, 1fr);
    padding: 20px;
    background-color: $white;
    border-radius: 16px;
    align-items: center;
    margin-bottom: 20px;

    h4,
    .row-head {
      margin: 0;
      grid-column: span 2;
    }

    .number {
      font-family: $mono;
      margin: 0;

      a {
        color: $black;
      }
    }
  }

  .disclaimer {
    margin-top: 60px;
    margin-bottom: 60px;
    max-width: 50%;
  }

  @media (max-width: 760px) {
    .table-row {
      grid-template-columns: repeat(5, 1fr);
      text-align: center;

      h4,
      .row-head {
        grid-column: span 5;
      }
    }

    .disclaimer {
      max-width: 100%;
    }
  }

  @media (max-width: 600px) {
    .table-row {
      grid-gap: 10px;
    }
  }

  @media (max-width: 440px) {
    .number {
      font-size: 10px;
    }
  }
</style>
