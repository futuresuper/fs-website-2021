<script>
  import moment from "moment";
  import slug from "../../scripts/slug";
  export let post;
  let { title, description, image, author, date, url } = post;
  let tags = post.tags ? post.tags : [];
  let authorSlug = slug(author);
</script>

<div>
  <a href={url}><img src={image} alt={description} /></a>
  <div class="text">
    <div>
      <a href={url}><h3>{title}</h3></a>
      <p>{description}</p>
    </div>
    <div>
      {#each tags as tag, i}
        <div class="tag">
          <a href={"/blog/tag/" + slug(tag)}>{tag}</a>
          {#if i !== tags.length - 1}
            <span>•</span>
          {/if}
        </div>
      {/each}
      <a href={"/author/" + authorSlug}>
        <h4>{author}</h4>
      </a>
      <p class="date">{moment(date).format("D MMMM YYYY")}</p>
    </div>
  </div>
</div>

<style lang="scss">
  @use "../../../styles/" as *;

  a {
    color: $black;
    text-decoration: none;
  }

  img {
    width: 100%;
    height: 280px;
    border-radius: 32px;
    margin-bottom: 20px;
  }

  .text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 220px;
  }

  h3 {
    min-height: 70px;
  }

  h4 {
    margin-bottom: 6px;
  }

  .tag {
    display: inline-block;
    font-size: 12px;
    span {
      margin: 0 2px;
    }
  }

  .date {
    font-size: 12px;
    color: $black500;
  }

  @media (max-width: 800px) {
    img {
      height: 200px;
    }

    .text {
      min-height: 0px;
    }

    h3 {
      min-height: 0px;
    }
  }
</style>
