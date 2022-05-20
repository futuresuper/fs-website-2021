<script>
  import MagnifyingGlass from "../images/MagnifyingGlass.svelte";
  import investments from "../../data/investments.json";
  import countries from "../../data/countries.json";
  import companyTypes from "../../data/companyTypes.json";
  import investmentOptions from "../../data/investmentOptions.json";
  import assetClasses from "../../data/assetClasses.json";
  import { flag } from "country-emoji";
  import Document from "../page/DocumentsAndForms/Document.svelte";

  const downloads = [
    {
      title: "All our investments (CSV)",
      desc: "As at 30 September 2021",
      docurl:
        "https://content.myfuturesuper.com.au/forms-docs/FS-PHD-20210930.csv",
      type: "Document",
    },
    {
      title: "All our investments (PDF)",
      desc: "As at 30 September 2021",
      docurl:
        "https://content.myfuturesuper.com.au/forms-docs/FS-PHD-20210930.pdf",
      type: "Document",
    },
    {
      title: "All our investments (CSV)",
      desc: "As at 30 June 2021",
      docurl:
        "https://content.myfuturesuper.com.au/forms-docs/FS-PHD-20210630-CSV.csv",
      type: "Document",
    },
    {
      title: "All our investments (PDF)",
      desc: "As at 30 June 2021",
      docurl: "https://www.futuresuper.com.au/phd-20210630",
      type: "Document",
    },
    {
      title: "All our investments (CSV)",
      desc: "As at 31 March 2021",
      docurl:
        "https://content.myfuturesuper.com.au/forms-docs/FS-PHD-20210331-CSV.csv",
      type: "Document",
    },
    {
      title: "All our investments (PDF)",
      desc: "As at 31 March 2021",
      docurl: "https://www.futuresuper.com.au/phd-20210331",
      type: "Document",
    },
  ];

  let sortedInvestments = investments.list.sort(
    (a, b) => b.totalSize - a.totalSize
  );
  // Move cash to the end
  let cash = sortedInvestments.shift();
  sortedInvestments = [...sortedInvestments, cash];

  const updatedInvestments = [];
  sortedInvestments.map((i) => {
    // add emoji flags to each item
    let country = i.country;
    if (country === "Korea") {
      country = "South Korea";
    } else if (country === "Cote d Ivoire") {
      country = "CI";
    }
    i.countryFlag = flag(country);

    // fix asset class
    if (
      i.type === "Growth Alternatives" ||
      i.type === "Defensive Alternatives"
    ) {
      i.type = "Alternatives";
    }
    if (
      i.type === "Domestic Fixed Interest" ||
      i.type === "International Fixed Interest"
    ) {
      i.type = "Fixed Interest";
    }

    updatedInvestments.push(i);
  });

  sortedInvestments = updatedInvestments;

  let resultDescription;
  let allResultsMessage;
  $: if (sortedInvestments.length) {
    allResultsMessage =
      "Our entire portfolio is invested across " +
      "<strong>" +
      sortedInvestments.length +
      "</strong>" +
      " assets, listed below.";
    resultDescription = allResultsMessage;
  }

  let searchText;
  let selectedOption;
  let selectedCountry;
  // let selectedBusinessType;
  let selectedAssetClass;

  let filteredInvestments = sortedInvestments;
  // Updated table on change
  $: if (
    selectedOption ||
    selectedCountry ||
    // selectedBusinessType ||
    selectedAssetClass ||
    searchText
  ) {
    const optionFiltered = selectedOption
      ? sortedInvestments.filter((i) => i.investmentOptions[selectedOption])
      : sortedInvestments;
    const countryFiltered = selectedCountry
      ? optionFiltered.filter((i) => i.country === selectedCountry)
      : optionFiltered;
    const typeFiltered = countryFiltered;
    // const typeFiltered = selectedBusinessType
    //   ? countryFiltered.filter((i) => i.businessType === selectedBusinessType)
    //   : countryFiltered;
    const assetClassFiltered = selectedAssetClass
      ? typeFiltered.filter((i) => i.type === selectedAssetClass)
      : typeFiltered;
    const searchFiltered =
      searchText && searchText.length > 2
        ? assetClassFiltered.filter((i) =>
            i.name.toUpperCase().includes(searchText.toUpperCase())
          )
        : assetClassFiltered;

    filteredInvestments = searchFiltered;

    if (filteredInvestments.length === 0) {
      resultDescription = "There are no investments that match.";
    } else if (filteredInvestments.length < sortedInvestments.length) {
      resultDescription =
        "There are " +
        "<strong>" +
        filteredInvestments.length +
        "</strong> " +
        selectedAssetClass +
        // " " +
        // selectedBusinessType +
        " assets";
      resultDescription += selectedCountry ? " from " + selectedCountry : "";
      resultDescription += selectedOption
        ? " in the " + selectedOption + " investment option"
        : " across all investment options";
      resultDescription +=
        searchText && searchText.length > 2
          ? ", that match your search for '" + searchText + "'."
          : ".";
    } else {
      resultDescription = allResultsMessage;
    }
  }
</script>

<section class="filters">
  <div class="container">
    <h2>Filter and search</h2>
    <p>
      We update this information every 3 months. It is current as of {investments.asAtDate}.
      You can also download our
      <a
        href="https://www.futuresuper.com.au/documents-and-forms/#disclosure-requirements"
        >Portfolio Holdings Disclosure</a
      >.
    </p>
    <div class="search-container">
      <MagnifyingGlass />
      <input
        type="text"
        bind:value={searchText}
        placeholder="Search by investment name..."
      />
    </div>
    <div class="dropdowns">
      <select bind:value={selectedOption}>
        <option value=""> Investment Option </option>
        {#each investmentOptions as option}
          <option
            value={option.label === "Balanced Growth Pension"
              ? "Pension Fund"
              : option.label}
          >
            {option.label}
          </option>
        {/each}
      </select>
      <select bind:value={selectedAssetClass} class="mobile-hide">
        <option value=""> Asset Class </option>
        {#each assetClasses as assetClass}
          <option value={assetClass}>
            {assetClass}
          </option>
        {/each}
      </select>
      <select bind:value={selectedCountry} class="mobile-hide">
        <option value=""> Country </option>
        {#each countries as country}
          <option value={country}>
            {country}
          </option>
        {/each}
      </select>
      <!-- <select bind:value={selectedBusinessType} class="mobile-hide">
        <option value=""> Business Type </option>
        {#each companyTypes as type}
          <option value={type}>
            {type}
          </option>
        {/each}
      </select> -->
    </div>
    <p class="result-description">
      {@html resultDescription}
    </p>
  </div>
</section>

<section class="tables">
  <div class="container">
    {#if filteredInvestments.length > 0}
      <div class="table-row header mobile-hide">
        <div class="first-col" />
        <h4>Asset Class</h4>
        <!-- <h4>Business Type</h4> -->
        <h4>Country</h4>
        <h4>$ Value (Total all portfolios)</h4>
      </div>
    {/if}
    {#each filteredInvestments as investment}
      <div class="table-row">
        <h4 class="first-col">{investment.name}</h4>
        <div class="text mobile-hide">{investment.type}</div>
        <!-- <div class="text mobile-hide">{investment.businessType}</div> -->
        <div class="flag mobile-hide">
          {investment.countryFlag ? investment.countryFlag : investment.country}
        </div>
        <div class="number mobile-hide">
          {investment.totalSize > 0.1
            ? "$" + investment.totalSize.toFixed(1) + " Million"
            : "Less than $0.1 Million"}
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- <section class="container">
  <div class="downloads">
    <h2>Downloadable files</h2>
    {#each downloads as doc}
      <Document {doc} />
    {/each}
  </div>
</section> -->
<style lang="scss">
  @use "../../styles/" as *;

  .tables,
  .filters {
    background-color: $black100;
  }

  .dropdowns {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(3, 1fr);
  }

  .search-container {
    width: 100%;
    background-color: $white;
    border-radius: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    margin-top: 40px;
    margin-bottom: 20px;
  }

  select {
    padding: 20px;
    border: 0;
    border-radius: 16px;
    outline: none;
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
    &.header {
      background-color: transparent;
    }

    h4 {
      margin: 0;
    }

    .first-col {
      grid-column: span 3;
    }

    .number {
      font-family: $mono;
    }
  }

  input {
    margin-left: 20px;
    border: 0;
    outline: none;
    width: 90%;
  }

  .result-description {
    margin-top: 40px;
  }

  .downloads {
    margin: 120px 20% 40px 20%;
    border-bottom: 1px solid $black;
  }

  @media (max-width: 800px) {
    .mobile-hide {
      display: none;
    }

    input {
      margin-left: 8px;
    }

    .downloads {
      margin: 60px 0 0 0;
    }

    .dropdowns {
      grid-template-columns: 100%;
    }

    .table-row {
      grid-template-columns: 100%;

      .first-col {
        grid-column: span 1;
      }
    }
  }
</style>
