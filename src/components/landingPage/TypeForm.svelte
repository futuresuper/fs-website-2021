<script>
  export let section;
</script>

<div class="container">
  <section class="wrapper" style="height: {section.height !== '' ? section.height : '100vh'}">
    <div
            id="wrapper"
            class="wrapper"
            data-tf-widget={section.typeform_id}
            data-tf-inline-on-mobile
            data-tf-medium="snippet"
            data-tf-height={section.height}
    />
    <script src="//embed.typeform.com/next/embed.js"/>
  </section>
</div>

<style lang="scss">
  @use "../../styles/index" as *;

  .wrapper{
    width: 100%;
    height: 100%;
  }
</style>
