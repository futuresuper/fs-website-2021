<script>
  import Link from "../../images/Link.svelte";
  import Email from "../../images/Email.svelte";
  import Download from "../../images/Download.svelte";

  export let doc;

  const { title, docurl, type, desc } = doc.frontmatter;
</script>

<a href={type === "Contact" ? "/contact-us" : docurl}>
  <article>
    <div class="icon">
      {#if type === "PDF" || type === "Document"}
        <Download />
      {/if}
      {#if type === "Contact"}
        <Email />
      {/if}
      {#if type === "Online"}
        <Link />
      {/if}
    </div>
    <div>
      <h3>{title}</h3>
      <div class="desc">{@html desc ? desc : doc.compiledContent()}</div>
    </div>
  </article>
</a>

<style lang="scss">
  @use "../../../styles/" as *;

  a {
    color: $black;
    text-decoration: none;
  }

  article {
    padding: 20px;
    border-top: 1px solid $black;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    &:hover {
      background-color: $black100;
    }
  }

  .icon {
    margin-right: 20px;
  }

  h3 {
    font-size: max(14px, 1.6vw);
  }

  .desc {
    margin-bottom: -10px;
    font-size: 13px;
  }
</style>
