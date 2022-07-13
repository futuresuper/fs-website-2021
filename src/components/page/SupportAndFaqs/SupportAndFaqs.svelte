<script>
  import Faq from "./Faq.svelte";
  import MagnifyingGlass from "../../images/MagnifyingGlass.svelte";
  import categories from "../../../data/faqCategories.json";
  export let faqs;
  let searchText = "";
  let searchMode = false;
  let matchingFaqs = [];

  $: if (searchText.length > 2) {
    matchingFaqs = [];
    searchMode = true;
    faqs.map((f) => {
      if (f.title.toUpperCase().includes(searchText.toUpperCase())) {
        matchingFaqs = [...matchingFaqs, f];
      }
    });
  } else {
    searchMode = false;
  }
</script>

<div class="background">
  <div class="container">
    <div class="container-narrow">
      <div class="search-container">
        <MagnifyingGlass />
        <input type="text" bind:value={searchText} placeholder="Search..." />
      </div>
      {#if searchMode}
        <div class="category-container">
          {#each matchingFaqs as faq}
            <Faq {faq} />
          {/each}
          {#if matchingFaqs.length < 1}
            <p>No results matching <strong>{searchText}</strong></p>
          {/if}
        </div>
      {:else}
        {#each categories as category}
          <div class="category-container">
            <h2>{category}</h2>
            {#each faqs as faq}
              {#if category === faq.category}
                <div class="faq-container">
                  <Faq {faq} />
                </div>
              {/if}
            {/each}
          </div>
        {/each}
      {/if}
    </div>
  </div>
</div>

<style lang="scss">
  @use "../../../styles/" as *;

  .background {
    background-color: $black100;
  }

  .container {
    display: flex;
    justify-content: center;
  }

  .container-narrow {
    width: 100%;
    max-width: 600px;
  }

  .category-container {
    margin: 50px 0 80px 0;
    border-bottom: 1px solid $black;
  }

  h2 {
    font-size: 16px;
    color: $black500;
    padding-bottom: 18px;
    margin: 0;
  }

  .search-container {
    width: 100%;
    background-color: $white;
    border-radius: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    margin-bottom: 40px;
  }

  input {
    margin-left: 20px;
    border: 0;
    outline: none;
    width: 90%;
  }

  @media (max-width: 500px) {
    input {
      margin-left: 8px;
    }
  }
</style>
