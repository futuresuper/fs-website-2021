<script>
  import Document from "./Document.svelte";
  import slug from "../../scripts/slug";

  export let docs;

  const categories = [
    "Super Documents",
    "Trust Deed",
    "Super Forms",
    "Pension Documents and Forms",
    "Annual Reports",
    "Financial Statements",
    "Impact Reports",
    "Employer Forms",
    "Significant Event Notices",
    "Member Outcomes Assessments",
    "Disclosure Requirements",
    "Other Documents",
  ];
</script>

<div class="grid">
  <div class="quick-links">
    <h4>Quick links</h4>
    {#each categories as category}
      <a href="#{slug(category)}">{category}</a>
    {/each}
  </div>
  <div>
    {#each categories as category}
      <div class="category">
        <h4 id={slug(category)}>{category}</h4>
        {#each docs as doc}
          {#if doc.frontmatter.category === category}
            <Document {doc} />
          {/if}
        {/each}
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  @use "../../../styles/" as *;

  .grid {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-gap: 40px;
  }

  h4 {
    color: $black500;
  }

  a {
    display: block;
    margin-bottom: 4px;
    color: $black;
    font-family: $heading;
    color: $black600;
    text-decoration: none;
    &:hover {
      color: $black;
    }
  }

  .category {
    margin-bottom: 80px;
  }

  @media (max-width: 800px) {
    .quick-links {
      display: none;
    }

    .grid {
      grid-template-columns: 100%;
    }
  }
</style>
