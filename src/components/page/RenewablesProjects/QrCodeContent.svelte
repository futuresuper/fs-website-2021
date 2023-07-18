<script>
  export let showButtonsOnDesktop = false;
</script>

<img
  id="qr"
  src="https://res.cloudinary.com/future-super/image/upload/v1689653809/Website_Case_Study_Page_QR_Code_to_Autodetect_App_Store.svg"
  alt="QR Code to Future Super app"
/>
{#if showButtonsOnDesktop}
  <a
    href="https://www.futuresuper.com.au/app-store?linktype=button&source=websiteCaseStudy&store=apple"
  >
    <img
      src="https://res.cloudinary.com/future-super/image/upload/v1676255062/App_Download_-_Apple.png"
      alt="Button linking to App Store"
    /></a
  >
  <a
    href="https://www.futuresuper.com.au/app-store?linktype=button&source=websiteCaseStudy&store=google"
  >
    <img
      src="https://res.cloudinary.com/future-super/image/upload/v1676255050/App_Download_-_Google.png"
      alt="Button linking to Play Store"
    /></a
  >
{:else}
  <a
    href="https://www.futuresuper.com.au/app-store?linktype=button&source=websiteCaseStudy&store=apple"
  >
    <img
      class="store-button"
      src="https://res.cloudinary.com/future-super/image/upload/v1676255062/App_Download_-_Apple.png"
      alt="Button linking to App Store"
    /></a
  >
  <a
    href="https://www.futuresuper.com.au/app-store?linktype=button&source=websiteCaseStudy&store=google"
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
