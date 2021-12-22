<script>
  import pages from "../../../data/pages.json";
  import abTests from "../../../data/abTests.json";

  const marqueeMessage = "Let&rsquo;s put it to work. ";

  export let dailyAus = false; // Daily Aus version includes intro text
  export let donationOffer = false; // Includes referral donation offer

  let testName = "home-headline-dec-21";
  let testGroup;
  const clientSide = !import.meta.env.SSR;
  if (clientSide) {
    window.onload = function () {
      testGroup = getCookie(testName);
      if (!testGroup) {
        let groupNum = Math.random() > 0.5 ? 0 : 1;
        testGroup = abTests[testName][groupNum];
        setCookie(testName, testGroup, 365);
      }
      analytics.track("User ParticipatedInABTest", {
        testName,
        testGroup,
      });
    };
  }
</script>

<div class="container">
  {#if dailyAus}
    <p
      style="padding: 40px; border: 1px solid white; border-radius: 32px; margin-bottom: 40px; margin-top: -40px"
    >
      Hi Daily Aus listener, By the time you finish reading this, you could have
      already moved your money away from fossil fuels. Super is an enormous pool
      of money that all working Australians share – worth over $3 trillion. To
      put that massive number into perspective, we know that only 7.7% of
      Australia's superannuation would be required to finance a transition to
      100% renewable electricity in Australia.
    </p>
  {/if}

  {#if donationOffer}
    <p
      style="padding: 40px; border: 1px solid white; border-radius: 32px; margin-bottom: 80px; margin-top: -60px; text-align: center"
    >
      Looks like your friend referred you here. Switch to Future Super and we'll
      donate $50 to WIRES on behalf of you and your friend.
    </p>
  {/if}

  {#if testGroup === "switch-shake"}
    <h1>Switch your super. Shake&nbsp;the&nbsp;system.</h1>
  {:else}
    <h1>The super fund that’s doing something about climate&nbsp;change.</h1>
  {/if}

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

<style lang="scss">
  @use "../../../styles/" as *;

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

  .marquee-container {
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
    h1 {
      max-width: 70%;
      font-size: 6vw;
    }
  }

  @media (max-width: 740px) {
    .container {
      padding: 40px;
    }

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

  @media (max-width: 354px) {
    h1 {
      font-size: 32px;
    }
  }
</style>
