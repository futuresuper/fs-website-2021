<script>
  import Logo from "@components/images/Logo.svelte";
  import BCorpLogo from "@components/images/BCorpLogo.svelte";
  import custodians from "@data/custodians.json";
  import pages from "@data/pages.json";
  import SocialFacebook from "../images/SocialFacebook.svelte";
  import SocialInsta from "../images/SocialInsta.svelte";
  import SocialLinkedIn from "../images/SocialLinkedIn.svelte";
  import Notification from "@components/common/Notification.svelte";

  const menu = [
    {
      heading: "Why us",
      subPages: [
        pages.HOW_WE_INVEST,
        pages.INVESTMENT_OPTIONS,
        pages.PENSION_FUND,
        pages.PERFORMANCE_AND_RETURNS,
        pages.EVERYTHING_WE_INVEST_IN,
      ],
    },
    {
      heading: "Resources",
      subPages: [
        pages.SUPPORT_AND_FAQS,
        pages.BLOG,
        pages.DOCUMENTS_AND_FORMS,
        pages.EMPLOYERS,
        pages.INSURANCE,
        pages.UNIT_PRICES,
        pages.APP,
      ],
    },
    {
      heading: "Company",
      subPages: [pages.CONTACT_US, pages.ABOUT_US, pages.WORK_WITH_US],
    },
    {
      heading: "Members",
      subPages: [pages.LOGIN, pages.JOIN],
    },
  ];

  export let noTopMargin = true;
</script>

<footer class={noTopMargin ? "noTopMargin" : ""}>
  <div class="footer-container">
    <div class="container">
      <div class="logo-and-socials">
        <Logo colour="white" size={54} />
        <div class="social-icons">
          <a href="https://www.instagram.com/future_super/">
            <img
              src="https://res.cloudinary.com/future-super/image/upload/v1678769176/insta.png"
              alt="Instagram Icon"
            />
          </a>
          <a href="https://www.facebook.com/myfuturesuper/">
            <img
              src="https://res.cloudinary.com/future-super/image/upload/v1678769176/fb.png"
              alt="Facebook Icon"
            />
          </a>
          <a href="https://www.linkedin.com/company/future-super">
            <img
              src="https://res.cloudinary.com/future-super/image/upload/v1678769176/in.png"
              alt="LinkedIn Icon"
            />
          </a>
        </div>
        <div class="app-download">
          <a
            href="https://www.futuresuper.com.au/app-store?linktype=button&source=footer&store=apple"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://res.cloudinary.com/future-super/image/upload/v1678769176/App_Download_-_Apple2.png"
              alt="Apple App Store"
            />
          </a>
          <a
            href="https://www.futuresuper.com.au/app-store?linktype=button&source=footer&store=google"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://res.cloudinary.com/future-super/image/upload/v1678769176/App_Download_-_Google2.png"
              alt="Googple Play Store"
            />
          </a>
        </div>
      </div>
      <div class="menu">
        {#each menu as page}
          <div class="pageGroup">
            <h5>{page.heading}</h5>
            <hr />
            {#if page.heading === "Company"}
              <!-- <Notification /> -->
              <!-- <EndOfYearInfo /> -->
            {/if}
            {#each page.subPages as subPage}
              <a href={subPage[1]}>{subPage[0]}</a>
            {/each}
          </div>
        {/each}
      </div>
      <div class="horizontal-space-between">
        <div>
          <p class="disclaimer">
            Information provided is of a general nature only and we have not
            taken your personal financial objectives, situation or needs into
            account. You should consider whether Future Super’s products are
            right for your individual objectives and needs and consider seeking
            personal financial advice. Before making a decision to acquire, hold
            or continue to hold an interest in Future Super, please read the
            Product Disclosure Statement (PDS), Financial Services Guide (FSG)
            and check our Target Market Determination (TMD) available at
            <a href="https://www.futuresuper.com.au/documents-and-forms/"
              >https://www.futuresuper.com.au/documents-and-forms/</a
            >. Future Super does not accept any responsibility for any loss or
            damage that may result from reliance on, or the use of, any
            information contained on this site. The contents of this website are
            exclusively owned by Future Super. You must not use or disclose them
            for any other reason than for the purposes for which they were
            supplied.
          </p>
          <p class="disclaimer">
            The issuer of this website and the Founder, Promoter and Investment
            Manager of the Fund is Future Super Investment Services Pty Ltd (ABN
            55 621 040 702; AFS Representative No. 001271441), which is a
            Corporate Authorised Representative of Future Promoter Holdings Pty
            Ltd (ABN 90 167 800 580; AFSL 482684).
          </p>
          <p class="disclaimer">
            Equity Trustees Superannuation Limited (ABN 50 055 641 757, RSE
            Licence L0001458, AFSL 229757) is Trustee of the Future Super Fund
            (ABN 45 960 194 277; RSE Registration R1072914). The Trustee does
            not in any way endorse, warrant or accept responsibility for any
            services provided by the Promoter in its own right or directly to
            members or prospective members. Learn more about our Trustee
            including their Privacy Statement <a
              href="https://www.eqt.com.au/superannuation/board-and-governance"
              >here</a
            >. The Fund is administered by APEX Superannuation (Australia) Pty
            Ltd (ABN 28 081 966 243; AFSL 238507). Insurance cover is provided
            to eligible members by AIA Australia Limited (ABN 79 004 837 861;
            AFSL 230043).
          </p>
          <p class="disclaimer">
            When considering a new fund, you should consider checking the costs
            and amount of any cover offered and any relevant information before
            you make a decision to transfer your super, such as differences in
            insurance cover and fees.
          </p>
        </div>
        <div class="bcorp">
          <BCorpLogo />
        </div>
      </div>
      <div class="horizontal-space-between legal-stuff">
        <p class="disc legal-links">
          <a href="/fund-information">Fund Information</a>
          <span class="dot">&nbsp;&nbsp;•&nbsp;&nbsp;</span>
          <a href="/terms-and-conditions">Terms & Conditions</a>
          <span class="dot">&nbsp;&nbsp;•&nbsp;&nbsp;</span>
          <a href="/privacy-policy">Privacy Policy</a>
          <span class="dot">&nbsp;&nbsp;•&nbsp;&nbsp;</span>
          <a href="/complaints">Complaints</a>
        </p>
        <div class="disc abn">
          <p>
            <span class="bold">ABN</span> ‍45 ‍960 ‍194 ‍277
            <span class="dot">&nbsp;&nbsp;</span>
          </p>
          <p><span class="bold">USI</span>‍ 45 ‍960 ‍194 ‍277 ‍010</p>
        </div>
      </div>
    </div>

    <div class="marquee">
      {#each custodians as custodian}
        {custodian + " "}
      {/each}
      {#each custodians as custodian}
        {custodian + " "}
      {/each}
    </div>

    <div class="container">
      <div class="acknowledgement">
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
          <p class="disc fs-acknowledgement">
            Future Group acknowledges that we operate on sovereign First
            Nations land. We recognise the ongoing connection Aboriginal and
            Torres Strait Islander people have with Country throughout this
            continent since time immemorial. We stand for a future where First
            Nations people have true justice and redress, and our society has a
            profound respect, understanding and commitment to acknowledging
            First Nations perspectives, culture, languages, histories, country,
            values and ancestors.
          </p>
        </div>
        <a class="button secondary" href="/reconciliation">
          Reconciliation
          <svg
            class="arrow"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.7929 6H8V5H19L19.5 5.5V16.5H18.5V6.70708L5.35353 19.8536L4.64642 19.1464L17.7929 6Z"
              fill="#3DFA52"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</footer>

<style lang="scss">
  @use "../../styles/" as *;

  footer {
    margin-top: 80px;
    border-radius: 32px 32px 0 0;
    background-color: $black;
    color: $white;
  }

  .noTopMargin {
    margin: 0;
    border-radius: 0 0 0 0;
  }

  .footer-container {
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  .logo-and-socials {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto auto;
  }

  .social-icons,
  .app-download {
    display: flex;
    align-items: center;
    a {
      margin-left: 20px;
      img {
        height: 52px;
      }
    }
  }

  .menu {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    margin-top: 70px;
  }

  .pageGroup {
    margin-bottom: 30px;

    h5 {
      margin-top: 0;
      margin-bottom: 16px;
      font-size: 16px;
    }

    hr {
      margin-bottom: 20px;
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

  .bcorp {
    width: 60px;
    max-width: 60px;
    justify-self: flex-end;
  }

  .acknowledgement {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .flags {
    display: flex;
    flex-direction: column;
    align-items: center;

    > * {
      margin-bottom: 6px;
    }
  }

  .horizontal-space-between {
    width: 100%;
    display: grid;
    grid-template-columns: 3fr 1fr;
  }

  .legal-stuff {
    margin-top: 20px;
  }

  .disclaimer {
    color: $black500;
    a {
      &:hover {
        color: $white;
      }
    }
  }

  .disc {
    width: calc(50% - 10px);
    font-size: 12px;
    & > * {
      display: inline-block;
    }
    &.abn {
      text-align: right;
      justify-self: flex-end;
    }
    &.fs-acknowledgement {
      margin: 40px 0;
      line-height: 140%;
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

  .arrow {
    margin-left: 10px;
  }

  .marquee {
    margin: 50px -40px 20px -40px;
    color: $green;
    font-size: 20px;
    height: 40px;
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

  @media (max-width: 1200px) {
    .horizontal-space-between.legal-stuff {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 760px) {
    .footer-container {
      padding-top: 20px;
    }

    .menu {
      grid-template-columns: repeat(2, 1fr);
    }

    .bcorp {
      max-width: 40px;
    }

    .disc {
      width: 100%;
      .dot {
        display: none;
      }
      &.abn {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        p {
          margin: 0 0 4px 0;
        }
      }
      &.legal-links {
        display: flex;
        flex-direction: column;
        > * {
          margin-bottom: 4px;
        }
      }
    }

    .logo-and-socials {
      grid-template-columns: 1fr auto;

      .app-download {
        grid-column: span 2;
        justify-content: flex-end;
        padding-top: 20px;
      }
    }
  }

  @media (max-width: 500px) {
    .menu {
      grid-template-columns: 100%;
    }

    .disclaimer {
      width: 70%;
    }

    .logo-and-socials {
      .app-download,
      .social-icons {
        a {
          margin-left: 10px;
        }
      }
      .app-download {
        a {
          &:first-of-type {
            margin-left: 0;
          }
          img {
            height: auto;
          }
        }
        justify-content: space-between;
      }
    }
  }
</style>
