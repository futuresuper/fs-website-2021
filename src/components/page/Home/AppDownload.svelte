<script>
  const url = {
    ios: "https://www.futuresuper.com.au/app-store?linktype=button&source=homePage&store=apple",
    android:
      "https://www.futuresuper.com.au/app-store?linktype=button&source=homePage&store=google",
  };

  const handleAppStoreClick = (href) => {
    analytics.track("ExternalLink Opened", {
      href,
    });
    window.open(href, "_blank");
  };
</script>

<div class="container">
  <section>
    <div class="bg-outer" />
    <div class="bg" />
    <div class="text-and-links">
      <p>
        Get easy access to your account by downloading the <span
          >Future&nbsp;Super App</span
        > today!
      </p>
      <div class="links">
        <div class="buttons">
          <div
            class="app-store-button"
            on:click={() => handleAppStoreClick(url.ios)}
            on:keydown={() => handleAppStoreClick(url.ios)}
            role="button"
            aria-label="Download on the Apple App Store"
          >
            <img
              id="app-store"
              src="https://res.cloudinary.com/future-super/image/upload/v1684297443/app-download-apple-7.png"
              alt="Download on the App Store"
            />
          </div>
          <div
            class="app-store-button"
            on:click={() => handleAppStoreClick(url.android)}
            on:keydown={() => handleAppStoreClick(url.android)}
            role="button"
            aria-label="Download on the Google Play Store"
          >
            <img
              id="google-play"
              src="https://res.cloudinary.com/future-super/image/upload/v1684297442/app-download-google-7.png"
              alt="Get it on Google Play"
            />
          </div>
        </div>
        <img
          id="qr-code"
          src="https://res.cloudinary.com/future-super/image/upload/v1686033581/Website_QR_Code_to_App_Stores.svg"
          alt="QR code to download Future Super app on the App Store"
        />
      </div>
    </div>
    <div id="app-crop">
      <img
        id="app-screenshot"
        src="https://res.cloudinary.com/future-super/image/upload/v1687325459/app-screenshot-2.png"
        alt="Screenshot of the Future Super mobile app"
      />
    </div>
  </section>
</div>

<style lang="scss">
  @use "../../../styles/" as *;

  section {
    margin: 0px 0px;
    border-radius: 32px;
    color: $white;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    overflow: hidden;
    position: relative;
  }

  .app-store-button {
    cursor: pointer;
  }

  .bg-outer {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: $black;
    z-index: -2;
  }

  .bg {
    position: absolute;
    width: 160%;
    min-height: 130vh;
    top: 0;
    background: radial-gradient(
      circle,
      rgba(4, 227, 30, 0.9) 0%,
      rgba(4, 227, 30, 0.5) 20%,
      rgba(61, 250, 82, 0.03) 70%,
      rgba(33, 33, 33, 1) 100%
    );
    z-index: -1;
  }

  .text-and-links {
    align-self: stretch;
    padding: 80px 40px;
    max-width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
      font-size: $font-size-40;
      span {
        color: $green;
      }
    }
  }

  .links {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  img {
    &#app-store,
    &#google-play {
      width: 230px;
      min-width: 230px;
    }
    &#google-play {
      margin-top: 20px;
    }
    &#qr-code {
      width: 180px;
      margin-left: 20px;
      border-radius: 20px;
    }
    &#app-screenshot {
      width: 383px;
      margin: 80px 120px 0 120px;
    }
  }

  #app-crop {
    max-height: 556px;
  }

  @media (max-width: 1220px) {
    .text-and-links {
      p {
        font-size: $font-size-32;
      }
    }
  }

  @media (max-width: 1000px) {
    .text-and-links {
      padding: 40px;
      max-width: 60%;
    }

    img {
      &#app-store,
      &#google-play {
        width: 160px;
        min-width: 160px;
      }
      &#qr-code {
        width: 120px;
      }
      &#app-screenshot {
        margin: 40px;
        max-height: 500px;
        width: auto;
      }
    }

    #app-crop {
      max-height: 775px;
    }
  }

  @media (max-width: 600px) {
    .text-and-links {
      p {
        font-size: $font-size-xl;
      }
    }
    img {
      &#qr-code {
        display: none;
      }
    }
  }

  @media (max-width: 540px) {
    .text-and-links {
      padding-right: 0;
    }
    img {
      &#app-store,
      &#google-play {
        width: 140px;
        min-width: 140px;
      }
      &#google-play {
        margin-top: 10px;
      }
    }
  }

  @media (max-width: 460px) {
    .text-and-links {
      p {
        font-size: $font-size-lg;
      }
    }
  }
</style>
