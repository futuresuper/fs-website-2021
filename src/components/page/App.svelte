<div class="grid">
  <h3>Apple App Store (iOS)</h3>
  <h3>Google Play Store (Android)</h3>
  <div>
    <img
      class="qr-code"
      src="https://res.cloudinary.com/future-super/image/upload/v1666673642/apple-app-qr.png"
      alt="QR Code to get the Future Super app from the Apple App Store"
    />
    <a href="https://apps.apple.com/au/app/future-super/id1620110464">
      <img
        class="store-button"
        src="https://res.cloudinary.com/future-super/image/upload/v1666673642/apple-app-store-button.png"
        alt="Button to get the Future Super app from the Apple App Store"
      />
    </a>
  </div>
  <div>
    <img
      class="qr-code"
      src="https://res.cloudinary.com/future-super/image/upload/v1666673642/android-app-qr.png"
      alt="QR Code to get the Future Super app from the Google Play Store"
    />
    <a
      href="https://play.google.com/store/apps/details?id=au.com.futuresuper.app"
    >
      <img
        class="store-button"
        src="https://res.cloudinary.com/future-super/image/upload/v1666673642/google-play-button.png"
        alt="Button to get the Future Super app from the Google Play Store"
      />
    </a>
  </div>
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 40px;
    text-align: center;
  }

  h3 {
    margin-top: 30px;
    margin-bottom: 10px;
  }

  .qr-code {
    width: 240px;
    margin: 40px auto;
  }

  .store-button {
    margin: 40px auto;
    width: 240px;
  }

  @media (max-width: 680px) {
    h3,
    .qr-code {
      display: none;
    }
  }
</style>
