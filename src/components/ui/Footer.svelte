<script>
  import Logo from "$/components/images/Logo.svelte";
  import BCorpLogo from "$/components/images/BCorpLogo.svelte";
  import custodians from "$/data/custodians.json";
  import { fade } from "svelte/transition";

  let currentlyShowing = 0;
  let custodian = custodians[currentlyShowing];
  let custodianVisible = false;

  setInterval(() => {
    custodianVisible = false;
    setTimeout(() => {
      currentlyShowing =
        currentlyShowing === custodians.length - 1 ? 0 : currentlyShowing + 1;
      custodian = custodians[currentlyShowing];
      custodianVisible = true;
    }, 1000);
  }, 3000);

  const pages = [
    {
      heading: "Why us",
      subPages: [
        ["How we invest", "/how-we-invest"],
        ["Investment options", "/investment-options"],
        ["Pension fund", "/pension-fund"],
        ["Performance and returns", "/performance-and-returns"],
        ["Unit prices", "/unit-prices"],
      ],
    },
    {
      heading: "Resources",
      subPages: [
        ["Support And FAQs", "/support-and-faqs"],
        ["Blog", "/blog"],
        ["Documents and forms", "/documents-and-forms"],
        ["Empoyers", "/employers"],
      ],
    },
    {
      heading: "Company",
      subPages: [
        ["Contact us", "/contact-us"],
        ["About us", "/about-us"],
        ["Careers", "/work-with-us"],
      ],
    },
    {
      heading: "Members",
      subPages: [
        ["Login", "https://my.futuresuper.com.au/"],
        ["Sign up", "https://join.futuresuper.com.au/"],
      ],
    },
    {
      heading: "Social",
      subPages: [
        ["Instagram", "https://www.instagram.com/future_super/"],
        ["Twitter", "https://twitter.com/myfuturesuper/"],
        ["Facebook", "https://www.facebook.com/myfuturesuper/"],
      ],
    },
  ];
</script>

<footer class="container">
  <div class="footer-container">
    <div class="menu">
      <div class="logo-col">
        <a href="/">
          <div class="logo">
            <Logo colour="black" size="54" />
          </div>
        </a>
        <BCorpLogo />
      </div>

      {#each pages as page}
        <div class="pageGroup">
          <h5>{page.heading}</h5>
          {#each page.subPages as subPage}
            <a href={subPage[1]}>{subPage[0]}</a>
          {/each}
        </div>
      {/each}
    </div>
    <div class="acknowledgement-and-legals">
      <div class="flags">
        <img
          src="/images/aboriginal-flag.png"
          alt="Aboriginal Flag"
          loading="lazy"
        />
        <img
          src="/images/tsi-flag.png"
          alt="Torres Strait Islander Flag"
          loading="lazy"
        />
      </div>

      <div class="footer-text">
        <p class="acknowledgement">
          Future Super acknowledges the Traditional Custodians of the lands on
          which we operate and pay our respects to Elders, past, present and
          emerging. We recognise the enduring relationship Aboriginal and/or
          Torres Strait Islander peoples have with Country and that sovereignty
          was never ceded.
        </p>
        <p class="acknowledgement">
          We stand for a future that promotes justice for Aboriginal and/or
          Torres Strait Islander peoples and profoundly respects and
          acknowledges their respective perspectives, culture, language and
          history.
        </p>
        <div class="horizontal-space-between">
          <a class="learn-more" href="/reconciliation">Learn More</a>
          {#if custodianVisible}
            <p transition:fade class="bold">{custodian}</p>
          {/if}
        </div>

        <p class="disc">
          Information provided is of a general nature only and we have not taken
          your personal financial objectives, situation or needs into account.
          We recommend you seek financial advice when considering if Future
          Super is right for your objectives and needs. When considering
          returns, past performance is not indicative of future performance.
        </p>
        <div class="horizontal-space-between legal-stuff">
          <p class="disc legal-links">
            <a href="/fund-information">Fund Information</a>
            <span class="dot">&nbsp;&nbsp;•&nbsp;&nbsp;</span>
            <a href="/terms-and-conditions">Terms & Conditions</a>
            <span class="dot">&nbsp;&nbsp;•&nbsp;&nbsp;</span>
            <a href="/privacy-policy">Privacy Policy</a>
          </p>
          <div class="disc">
            <p><span class="bold">ABN</span> ‍45 ‍960 ‍194 ‍277 &nbsp;&nbsp;</p>
            <p><span class="bold">USI</span>‍ 45 ‍960 ‍194 ‍277 ‍010</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

<style lang="scss">
  @use "../../styles/" as *;

  footer {
    margin-top: 80px;
  }

  .footer-container {
    margin: -20px;
    background-color: $black;
    color: $white;
    border-radius: 32px;
    padding: 50px 20px 20px 20px;
  }

  .menu {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 20px;
  }

  .logo-col {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .logo {
    background-color: $white;
    width: 66px;
    height: 66px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-bottom: 30px;
  }

  .pageGroup {
    margin-bottom: 30px;

    h5 {
      margin-top: 0;
      margin-bottom: 16px;
      font-size: 16px;
    }

    a {
      display: block;
      color: $white;
      text-decoration: none;
      font-size: 14px;
      margin-bottom: 12px;
      line-height: 130%;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .acknowledgement-and-legals {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 20px;
  }

  .flags {
    display: flex;
    flex-direction: column;
    align-items: center;

    > * {
      margin-bottom: 6px;
    }
  }

  .footer-text {
    grid-column: span 5;
    font-size: 14px;

    a {
      color: $green;
      text-decoration: none;
      margin-bottom: 40px;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .horizontal-space-between {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .disc {
    font-size: 12px;
    p {
      display: inline-block;
    }
  }

  .legal-links {
    a {
      color: $white;
      text-decoration: none;
      &:hover {
        color: $white;
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 760px) {
    .menu {
      grid-template-columns: repeat(4, 1fr);
    }

    .logo-col {
      grid-row: span 2;
    }

    .legal-stuff {
      flex-direction: column-reverse;
    }
  }

  @media (max-width: 500px) {
    .menu,
    .acknowledgement-and-legals {
      grid-template-columns: 30% 1fr;
    }

    .menu {
      margin-bottom: 30px;
    }

    .logo-col {
      grid-row: span 5;
    }

    .pageGroup {
      margin-bottom: 0px;

      h5 {
        margin-bottom: 10px;
      }

      a {
        margin-bottom: 8px;
      }
    }

    .footer-text {
      grid-column: span 1;
    }

    .dot {
      display: none;
    }

    .legal-links {
      display: flex;
      flex-direction: column;
      a {
        margin-bottom: 6px;
      }
    }

    .disc {
      margin-bottom: 12px;
      p {
        display: block;
        margin-bottom: 6px;
      }
    }
  }
</style>
