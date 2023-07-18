<script>
  export let showButtonsOnDesktop = false;
</script>

<img
  id="qr"
  src="https://res.cloudinary.com/future-super/image/upload/v1676255071/code.png"
  alt="QR Code to Future Super app"
/>
{#if showButtonsOnDesktop}
  <a href="https://apps.apple.com/au/app/future-super/id1620110464">
    <img
      src="https://res.cloudinary.com/future-super/image/upload/v1676255062/App_Download_-_Apple.png"
      alt="Button linking to App Store"
    /></a
  >
  <a
    href="https://play.google.com/store/apps/details?id=au.com.futuresuper.app"
  >
    <img
      src="https://res.cloudinary.com/future-super/image/upload/v1676255050/App_Download_-_Google.png"
      alt="Button linking to Play Store"
    /></a
  >
{:else}
  <a href="https://apps.apple.com/au/app/future-super/id1620110464">
    <img
      class="store-button"
      src="https://res.cloudinary.com/future-super/image/upload/v1676255062/App_Download_-_Apple.png"
      alt="Button linking to App Store"
    /></a
  >
  <a
    href="https://play.google.com/store/apps/details?id=au.com.futuresuper.app"
  >
    <img
      class="store-button"
      src="https://res.cloudinary.com/future-super/image/upload/v1676255050/App_Download_-_Google.png"
      alt="Button linking to Play Store"
    /></a
  >
{/if}

<style lang="scss">
  @use "../../../styles/" as *;

  img {
    width: 205px;
    margin: 5px;
  }

  .store-button {
    display: none;
  }

  @media (max-width: 640px) {
    img#qr {
      display: none;
    }
    img.store-button {
      display: block;
    }
  }
</style>
