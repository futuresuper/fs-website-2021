<script>
  export let faq;
  import PlusCircle from "../../images/PlusCircle.svelte";
  import MinusCircle from "../../images/MinusCircle.svelte";

  let expanded = false;
</script>

<div class="faq-container">
  <div class="faq-heading" on:click={() => (expanded = !expanded)}>
    <h3>{faq.title}</h3>
    {#if expanded}
      <MinusCircle />
    {:else}
      <PlusCircle />
    {/if}
  </div>
  {#if expanded}
    <div class="faq">{@html faq.astro.html}</div>
    <a href={faq.url}>Permalink</a>
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
