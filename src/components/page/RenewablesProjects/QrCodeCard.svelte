<script>
  import Card from "./Card.svelte";
  import QrCodeContent from "./QrCodeContent.svelte";
</script>

<Card style="justify-content: center">
  <QrCodeContent />
</Card>

<style lang="scss">
  @use "../../../styles/" as *;

  img {
    width: 205px;
    margin: 5px;
  }
</style>
