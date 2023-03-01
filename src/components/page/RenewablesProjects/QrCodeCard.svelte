<script>
  import Card from "./Card.svelte";
  import QrCodeContent from "./QrCodeContent.svelte";
</script>

<Card style="justify-content: center">
  <h3>
    Download the <span>Future Super App</span> for more content like this!
  </h3>
  <QrCodeContent />
</Card>

<style lang="scss">
  @use "../../../styles/" as *;

  h3 {
    color: $white;
    font-family: $regular;
    text-align: center;
    font-size: 24px;
    margin-bottom: 10px;
    span {
      color: $green;
    }
  }

  img {
    width: 180px;
    margin: 5px;
  }
</style>
