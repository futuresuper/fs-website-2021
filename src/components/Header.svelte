<script>
  const pages = [
    ["Home", "/"],
    ["How We Invest", "/how-we-invest"],
    ["About Us", "/about-us"],
    ["Work With Us", "/work-with-us"],
    ["Investment Options", "/investment-options"],
    ["Performance and Returns", "/performance-and-returns"],
    ["Everything We Invest In", "/everything-we-invest-in"],
    ["Blog Home", "/blog"],
    ["Author Page", "/author/adam-verwey"],
    ["Blog Post", "/blog/were-a-best-for-the-world-b-corp/"],
    ["Simple", "/privacy-policy"],
    ["Career Post", "/career/performance-marketer"],
    ["Contact Us", "/contact-us"],
    ["Documents and Forms", "/documents-and-forms"],
    ["Support And FAQs", "/support-and-faqs"],
    ["FAQ Page", "/faqs/what-is-superannuation"],
    ["404", "/404"],
  ];
</script>

<header class="testing">
  <p>
    {#each pages as page}
      <a href={page[1]}>{page[0]}</a>&nbsp;&nbsp;
    {/each}
  </p>
  <hr />
</header>

<style lang="scss">
  @use "../styles/" as *;
</style>
