<script>
  export let faq;
  import PlusCircle from "../../images/PlusCircle.svelte";
  import MinusCircle from "../../images/MinusCircle.svelte";

  let expanded = false;

  const { title, url } = faq.frontmatter;
</script>

<div class="faq-container">
  <div
    class="faq-heading"
    on:click={() => (expanded = !expanded)}
    on:keypress={() => (expanded = !expanded)}
  >
    <h3>{title}</h3>
    {#if expanded}
      <MinusCircle />
    {:else}
      <PlusCircle />
    {/if}
  </div>
  {#if expanded}
    <div class="faq">
      {#if faq.compiledContent()}
        {@html faq.compiledContent()}
      {:else}
        <slot />
      {/if}
    </div>
    {#if url}
      <a href={url}>Permalink</a>
    {/if}
  {/if}
</div>

<style lang="scss">
  @use "../../../styles/" as *;

  .faq-container {
    border-top: 1px solid $black;
    padding: 18px 0;
  }

  h3 {
    max-width: 80%;
    font-size: 22px;
    margin: 0;
  }

  .faq-heading {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;
  }

  .faq {
    margin: 30px 0 0 0;
  }

  a {
    font-size: 14px;
    color: $black500;
  }

  @media (max-width: 500px) {
    h3 {
      font-size: 18px;
    }
  }
</style>
