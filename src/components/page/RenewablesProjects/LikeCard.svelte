<script>
  import Dislike from "../../images/Dislike.svelte";
  import Like from "../../images/Like.svelte";
  import Card from "./Card.svelte";

  let liked = false;
  let disliked = false;

  const handleLike = () => {
    liked = !liked;
    disliked = false;
    liked && analytics.track("LikeButton Clicked");
  };

  const handleDislike = () => {
    disliked = !disliked;
    liked = false;
    disliked && analytics.track("DislikeButton Clicked");
  };
</script>

<Card>
  <p>What did you think of this?</p>

  <div class="like-container">
    <div on:click={handleLike} class="like">
      <Like active={liked} />
    </div>
    <div on:click={handleDislike} class="dislike">
      <Dislike active={disliked} />
    </div>
  </div>
  <p>{liked ? "You " : ""}Like this</p>
</Card>

<style lang="scss">
  @use "../../../styles/" as *;

  p {
    color: $black400;
    margin: 0;
    text-transform: uppercase;
    font-size: 12px;
  }

  .like-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .like,
  .dislike {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: $black800;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 6px;
  }
</style>
