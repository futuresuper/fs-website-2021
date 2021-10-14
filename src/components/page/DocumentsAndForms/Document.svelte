<script>
  import Link from "../../images/Link.svelte";
  import Email from "../../images/Email.svelte";
  import Download from "../../images/Download.svelte";

  export let doc;

  const { title, docurl, type } = doc;
</script>

<a href={docurl}>
  <article>
    <div class="icon">
      {#if type === "PDF"}
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
      <div class="desc">{@html doc.astro.html}</div>
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
    padding: 20px 0;
    border-top: 1px solid $black;
    display: flex;
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
