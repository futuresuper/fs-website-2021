<script>
  import Document from "@components/page/DocumentsAndForms/Document.svelte";

  export let doc;
</script>

<p>
  Our investment portfolio has been carbon negative since 2018. But our
  standards aren’t exactly standard. Most businesses don’t even report their
  climate impact. When they do, there’s no standardised way of calculating
  carbon. That’s a problem.
</p>
<p>
  We can’t create accountability when 2050 climate targets are managed by CEOs
  who hold their jobs for just 5 years on average. There is a need for
  consistent and clear carbon measurements to track progress on business net
  zero goals.
</p>
<p>
  Our carbon reporting methods can be used by anyone and lay the foundation for
  a more transparent industry.
</p>

<h4>Related Downloads</h4>
<div>
  <Document {doc} />
</div>

<style lang="scss">
  @use "../../styles/" as *;

  h4 {
    margin-top: 60px;
  }

  div {
    border-bottom: 1px solid $black;
  }
</style>
