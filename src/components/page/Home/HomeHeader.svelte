<script>
  import pages from "../../../data/pages.json";
  import {
    headerMenuShowing,
    showHeaderMenuOnLoad,
  } from "../../store/stores.js";

  const marqueeMessage = "Let&rsquo;s put it to work. ";

  import { onMount } from "svelte";

  const headerDesignTestGroups = {
    ORIGINAL: "pre-NMS splashpage", // The original front page design
    VIDEO: "Autoplay video splashpage", // An autoply video splash page with prominent join button
  };

  let showLoginButton = true;
  let headerDesignTestGroup;

  onMount(async () => {
    const rand = Math.random();
    headerDesignTestGroup =
      rand > 0.5
        ? headerDesignTestGroups.ORIGINAL
        : headerDesignTestGroups.VIDEO;

    if (headerDesignTestGroup == headerDesignTestGroups.VIDEO) {
      // Don't show the header menu on load for the video design
      showHeaderMenuOnLoad.update((value) => false);
    }

    analytics.track("Website ViewedByABTestParticipant", {
      headerDesignTestGroup,
    });
  });

  headerMenuShowing.subscribe((value) => {
    // Hide the login button when the menu is showing
    showLoginButton = !value;
  });
</script>

{#if headerDesignTestGroup === headerDesignTestGroups.ORIGINAL}
  <div class="container">
    <h1>People Power Change. So Can Super.</h1>
    <div class="text">
      <h3>Your super has the power to combat&nbsp;climate&nbsp;change.</h3>
      <a class="button" href={pages.JOIN[1]}>{pages.JOIN[0]}</a>
    </div>
  </div>
  <div class="marquee-container">
    <div class="marquee">
      {@html marqueeMessage}{@html marqueeMessage}{@html marqueeMessage}{@html marqueeMessage}{@html marqueeMessage}{@html marqueeMessage}
    </div>
  </div>
{:else}
  <div class="video-container">
    <video class="video" autoplay muted loop playsinline>
      <source src="videos/FS_HomePage_Hero_02.mp4" type="video/mp4" />
    </video>
    <div class="text-container">
      <h1>People power change.</h1>
      <h1>So can super.</h1>
      <h3 class="feature">Let's put it to work</h3>
      <div class="button-container">
        <a class="button large-login" href={pages.JOIN[1]}>Join now</a>
      </div>
    </div>
    {#if showLoginButton}
      <a class="button secondary login" href={pages.LOGIN[1]}>Login</a>
    {/if}
  </div>
{/if}

<style lang="scss">
  @use "../../../styles/" as *;
  .container {
    // Since the behind header is not used for this page we need to use a margin instead for this container
    margin-top: $behind-header-height;

    h1 {
      max-width: 54%;
      line-height: 100%;
    }

    h3 {
      max-width: 40%;
      margin: 0;
      font-family: $regular;
    }

    .text {
      margin: 70px 0 20px 0;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
  }

  .marquee-container {
    padding-bottom: $page-header-padding-bottom;
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  .marquee {
    margin: 0 -40px;
    font-family: $feature;
    color: $green;
    text-transform: uppercase;
    font-size: min(8vw, 160px);
    height: min(10vw, 200px);
    white-space: nowrap;
    overflow: hidden;
    animation: marquee 80s linear infinite;
  }

  @keyframes marquee {
    0% {
      text-indent: 0px;
    }
    100% {
      text-indent: -2000px;
    }
  }

  @media (max-width: 1280px) {
    .container {
      h1 {
        max-width: 70%;
        font-size: 6vw;
      }
    }
  }

  @media (max-width: 740px) {
    .container {
      padding: 40px;

      h1 {
        max-width: 100%;
        font-size: 40px;
      }

      .text {
        flex-direction: column-reverse;
        align-items: flex-start;
        margin: 20px 0 0px 0;
      }

      h3 {
        max-width: 100%;
        margin-top: 60px;
      }
    }
  }

  @media (max-width: 354px) {
    .container {
      h1 {
        font-size: 32px;
      }
    }
  }

  .video-container {
    width: 100vw;
    position: relative;
    text-align: center;
    color: $white;
    background-color: $blackVideo;
    min-height: 500px;
    height: 80vh;

    a.login {
      position: absolute;
      top: 18px;
      right: 30px;
      width: 120px;
      height: 44px;
      display: none;
      line-height: normal;
      background-color: transparent;
      border: 1px solid $green;
      &:hover {
        background-color: $green;
        color: $black;
      }
    }

    a.large-login {
      width: 310px;
      height: 65px;
      font-size: 23px;
      &:hover {
        background-color: transparent;
      }
    }

    .video {
      width: 100%;
      min-width: 2000px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(calc(-50% - 20px), -50%);
    }

    .text-container {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 90%;
      h1 {
        font-size: 85px;
        max-width: none;
        margin-bottom: 0;
      }

      h3.feature {
        margin-top: 50px;
        max-width: 100%;
        text-transform: uppercase;
        font-family: $feature;
        font-size: 26px;
      }
    }

    .button-container {
      padding: 10px;
      margin-top: 60px;

      .button {
        max-width: 320px;
        width: 100%;
      }
    }
  }

  @media (max-width: 740px) {
    .video-container {
      height: 90vh;
      .text-container {
        h1 {
          font-size: 54px !important;
        }
        h3.feature {
          font-size: 18px;
        }
      }
    }
  }

  @media (max-width: 354px) {
    .video-container {
      height: 90vh;
      .text-container {
        h1 {
          font-size: 54px !important;
        }
        h3.feature {
          font-size: 18px;
        }
      }
    }
  }

  @media (min-width: 800px) {
    .video-container {
      a.login {
        display: block;
      }
    }
  }
</style>
