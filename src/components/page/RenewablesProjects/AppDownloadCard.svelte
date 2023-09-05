<script>
  import Card from "./Card.svelte";
</script>

<Card style="padding: 0">
  <h3>
    Download the <span>Future Super App</span> for more content like this!
  </h3>

  <img
    src="https://res.cloudinary.com/future-super/image/upload/v1676254586/nightingale-preview.png"
    alt="Future Super iPhone app"
  />
</Card>

<style lang="scss">
  @use "../../../styles/" as *;

  h3 {
    color: $white;
    font-family: $regular;
    padding: 20px;
    font-size: 24px;
    span {
      color: $green;
    }
  }

  img {
    width: 167px;
  }
</style>
