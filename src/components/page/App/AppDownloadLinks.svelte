<div class="links-container">
  <div>
    <a
      href="https://www.futuresuper.com.au/app-store?linktype=button&source=appPage&store=apple"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        class="store-button"
        src="https://res.cloudinary.com/future-super/image/upload/v1684297443/app-download-apple-7.png"
        alt="Button to get the Future Super app from the Apple App Store"
      />
    </a>
    <a
      href="https://www.futuresuper.com.au/app-store?linktype=button&source=appPage&store=google"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        class="store-button"
        src="https://res.cloudinary.com/future-super/image/upload/v1684297442/app-download-google-7.png"
        alt="Button to get the Future Super app from the Google Play Store"
      />
    </a>
  </div>
  <img
    class="qr-code"
    src="https://res.cloudinary.com/future-super/image/upload/v1690527238/app-download-qr-code.png"
    alt="QR Code to get the Future Super app"
  />
</div>

<style lang="scss">
  @use "../../../styles/" as *;

  .links-container {
    display: flex;
    padding: 12px;
  }

  .store-button {
    padding: 12px 24px 12px 0;
    width: 240px;
  }

  .qr-code {
    width: 180px;
  }

  @media (max-width: 1000px) {
    .qr-code {
      display: none;
    }
    .links-container {
      padding: 0;
    }
    .store-button {
      padding: 12px 0;
    }
  }
</style>
