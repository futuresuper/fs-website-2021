<script>
  import Faq from "../page/SupportAndFaqs/Faq.svelte";
  export let faqs = [];
  export let heading = "Related FAQs";
</script>

<div class="outer">
  <div class="container-narrow">
    <h2>{heading}</h2>
    {#each faqs as faq}
      <Faq title={faq.title} url={faq.url} content={faq.content} />
    {/each}
  </div>
</div>

<style lang="scss">
  @use "../../styles/" as *;

  .outer {
    display: flex;
    justify-content: center;
    margin: 60px 0;
  }

  .container-narrow {
    width: 100%;
    max-width: 600px;
    border-bottom: 1px solid $black;
  }
</style>
