<script>
  import moment from "moment";
  export let post;
  let { title, description, image, author, date, url } = post;
  let tags = post.tags ? post.tags : [];
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
          {tag}
          {#if i !== tags.length - 1}
            <span>•</span>
          {/if}
        </div>
      {/each}
      <a href={"/blog/author/" + author}>
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
    min-height: 260px;
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
</style>
