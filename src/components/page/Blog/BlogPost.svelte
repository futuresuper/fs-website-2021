<script>
  import moment from "moment";
  import slug from "../../scripts/slug";

  export let post;
  const { title, author, image, tags, description, date } = post.frontmatter;
</script>

<h1>{title}</h1>
<div class="grid">
  <div class="meta">
    {#if author}
      <p class="disclaimer written">Written by:</p>
      <a class="author" href="/author/{slug(author)}">
        <h4>{author}</h4>
      </a>
    {/if}
    <p class="disclaimer">{moment(date).format("Do of MMMM YYYY")}</p>
    {#if tags}
      {#each tags as tag}
        <a class="tag" href="/blog/tag/{slug(tag)}">#{tag.replace(" ", "")}</a>
      {/each}
    {/if}
  </div>
  <div class="image-and-text">
    <img src={image} alt={description} />
    {@html post.compiledContent()}
  </div>
</div>

<style lang="scss">
  @use "../../../styles/" as *;

  h1 {
    margin-bottom: 80px;
  }

  .grid {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(12, 1fr);
  }

  .meta {
    grid-column: span 3;
  }

  .image-and-text {
    grid-column: span 6;
  }

  img {
    width: 100%;
    border-radius: 32px;
    margin-bottom: 60px;
  }

  a {
    color: $black;
  }

  .written {
    margin-bottom: 6px;
  }

  .tag {
    display: block;
    margin-bottom: 8px;
    font-size: 12px;
    font-family: $heading;
  }

  @media (max-width: 800px) {
    .grid {
      grid-template-columns: 100%;
    }

    .meta {
      grid-column: span 1;
    }

    .image-and-text {
      grid-column: span 1;
    }

    h1 {
      margin-top: -40px;
      margin-bottom: 40px;
    }

    .tag {
      display: inline-block;
      margin-right: 6px;
    }
  }
</style>
