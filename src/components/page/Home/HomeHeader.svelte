<script>
  import pages from "@data/pages.json";
  import {
    headerMenuShowing,
    showHeaderMenuOnLoad,
  } from "../../store/stores.js";

  import { onMount } from "svelte";
  import Logo from "@components/images/Logo.svelte";
  import ReviewsBanner from "@components/common/ReviewsBanner.svelte";

  let showLoginButton = true;

  onMount(async () => {
    // Don't show the header menu on load for the video design
    showHeaderMenuOnLoad.update((value) => false);
  });

  headerMenuShowing.subscribe((value) => {
    // Hide the login button when the menu is showing
    showLoginButton = !value;
  });
</script>

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

    <ReviewsBanner client:load />
  </div>
  {#if showLoginButton}
    <div class="logo-login-container">
      <div class="logo">
        <Logo colour="white" size={60} />
      </div>
      <a id="login-button" class="button secondary login" href={pages.LOGIN[1]}
        >Login</a
      >
    </div>
  {/if}
</div>

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

  .logo-login-container {
    display: flex;
    justify-content: center;
    padding: 20px 30px;
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
    min-height: 812px;
    height: 80vh;
    @media (max-width: 740px) {
      min-height: 750px;
    }

    a.login {
      position: absolute;
      top: 20px;
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
      bottom: 85px;
      left: 50%;
      transform: translate(-50%, 0);
      width: 90%;
      @media (max-width: 740px) {
        bottom: 47px;
      }
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
        display: flex;
      }
    }

    .logo-login-container {
      justify-content: space-between;
    }
  }
</style>
