<script>
  export let relatedPages = [];
</script>

<aside class="container related">
  <h2>Also see</h2>
  <div />
  <div>
    <div class="line" />
    {#each relatedPages as page}
      <a href={page[1]}>
        <div>
          <h4>{page[0]} →</h4>
        </div>
      </a>
    {/each}
  </div>
</aside>

<style lang="scss">
  @use "../../styles/" as *;

  aside {
    margin-top: 100px;
    margin-bottom: 100px;
  }

  .related {
    display: grid;
    grid-template-columns: 5fr 1fr 6fr;
    grid-gap: 20px;
  }

  .line {
    height: 1px;
    width: 100%;
    background-color: $black;
    margin-bottom: 40px;
  }

  a {
    color: $black;
    div {
      margin-top: 24px;
    }
  }

  @media (max-width: 500px) {
    h2 {
      margin-bottom: 0;
    }

    .related {
      grid-template-columns: 100%;
    }
  }
</style>
