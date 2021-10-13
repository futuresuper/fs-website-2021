<script>
  import BlogPreview from "./BlogPreview.svelte";
  import JoinNow from "../../ui/JoinNow.svelte";

  export let posts;
  export let prevUrl;
  export let nextUrl;
</script>

<div class="grid">
  {#each posts as post}
    <BlogPreview {post} />
  {/each}
</div>
<hr />
<div class="pagination">
  {#if prevUrl}
    <a class="button secondary" href={prevUrl}>PREVIOUS</a>
  {/if}
  {#if nextUrl}
    <a class="button" href={nextUrl}>NEXT</a>
  {/if}
</div>

<JoinNow />

<style lang="scss">
  @use "../../../styles/" as *;

  .grid {
    margin: 60px 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 60px 20px;
  }

  .pagination {
    margin: 40px 0;
    display: flex;
    justify-content: center;
    a {
      margin: 0 10px;
    }
  }
</style>
