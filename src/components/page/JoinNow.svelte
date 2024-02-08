<script>
  import { onMount } from "svelte";
  import Arrow from "@components/images/Arrow.svelte";
  import IMask from 'imask';

  let form, formTop;
  let firstName;

  let joinFormTestGroup;
  const joinFormTestGroups = {
    V1: "v1 checklist redesign", // Redirects to https://join-now.futuresuper.com.au/
    CONTROL: "control", // Redirects to https://join.futuresuper.com.au/
  };

  let joinFormUrl = "https://join.futuresuper.com.au/";
  $: joinFormUrl =
    joinFormTestGroup == joinFormTestGroups.V1
      ? "https://join-now.futuresuper.com.au/"
      : "https://join.futuresuper.com.au/";

  onMount(async () => {
    form.addEventListener('submit', handleFormSubmit);

    const rand = Math.random();
    joinFormTestGroup =
      rand > 0.5 ? joinFormTestGroups.V1 : joinFormTestGroups.CONTROL;

    if (window.innerWidth <= 800) {
      setTimeout(() => {
        window.scrollTo({
          top: form.offsetTop,
          behavior: "smooth",
        });
        firstName.setAttribute("autofocus", "autofocus");
        firstName.focus();
      }, 2500);
    }

    analytics.track("Experiment Viewed", {
      experimentId: 'FUM-186',
      variationName: joinFormTestGroup,
      property: 'website',
    });
  });

  // Hidden input field necessary to make sure the value in mobileInput doesn't change as the form submits
  let mobileInput, hiddenMobileInput;
  let emailInput;
  let mask;

  // Reactive because mobileInput is conditionally rendered
  $: if (joinFormTestGroup == joinFormTestGroups.V1 && mobileInput) {
    mask = IMask(mobileInput, {
      mask: ['0000 000 000', '+61 000 000 000', '+61 0000 000 000'],
    });

    mobileInput.addEventListener('input', () => {
      // Regular expression for Australian mobile numbers
      const mobileRegex = /^(?:04|4|\+614|\+6104)[0-9]{8}$/;

      if (!mobileRegex.test(mask.unmaskedValue)) {
        mobileInput.setCustomValidity("Invalid phone number. Please enter a valid Australian phone number.");
      } else {
        mobileInput.setCustomValidity("");
      }
    });
  }

  const handleFormSubmit = async (event) => {
    if (joinFormTestGroup == joinFormTestGroups.V1 && mobileInput) {
      event.preventDefault();
      hiddenMobileInput.value = formattedMobileNumber();

      // Regular expression for the mobile number format the join form accepts
      const mobileRegex = /^(?:04)[0-9]{8}$/;
      if (mobileRegex.test(hiddenMobileInput.value)) {
        analytics.track("Join Popup Submission", {
          firstName: firstName.value,
          mobile: hiddenMobileInput.value,
        });

        form.submit();
      } else {
        // We shouldn't hit this case if the input mask and input listener worked as expected
        alert('Invalid phone number. Please enter a valid Australian phone number.');
      }
    } else {
      analytics.track("Join Popup Submission", {
        firstName: firstName.value,
        email: emailInput.value,
      });
    }
  };

  const formattedMobileNumber = () => {
    const formatted = mobileInput.value
      .replace(/\s/g, '') // Remove spaces
      .replace(/^(\+61)/, '') // Remove country code
      .replace(/^4/, '0$&'); // Add leading zero if mobile number starts with 4

    return formatted;
  }

</script>

<div class="impact">
  <meta name="theme-color" content="transparent" />
  <div class="impact__image">
    <a href="/" class="button secondary back-button"
      ><span class="back-button--icon"
        ><Arrow direction="left" colour="white" /></span
      ><span class="back-button--text">Back</span></a
    >

    <div class="impact__content">
      <div class="impact__content--message">
        <p>Join more</p>
        <p>than 40,000</p>
        <p>people</p>
        <p>investing in</p>
        <p class="heading--green">climate</p>
        <p class="heading--green">solutions.</p>
      </div>

      <div class="impact__content--text">
        <p>
          Investments may be held indirectly via an Exchange Traded Fund (ETF)
          or Managed Fund (MF).
        </p>
        <p>Future Super has more than 40,000 members as of 1/9/2023</p>
      </div>
    </div>
  </div>

  <form
    bind:this={form}
    class="impact__form"
    method="GET"
    action={joinFormUrl}
  >
    <div bind:this={formTop} class="impact__form--container">
      <h2 class="impact__form--heading">JOIN FUTURE SUPER</h2>
      <div class="time-row">
        <img src="/images/clock2.gif" alt="clock" class="clock" />
        <h4>It only takes 5 minutes</h4>
      </div>
      <div class="info-block">
        <p class="info-block__heading">What you'll need</p>
        <ul class="info-block__list">
          <li>Your Tax File Number</li>
          <li>
            An Australian ID or Medicare card to find your super and complete a
            transfer*
          </li>
        </ul>
      </div>
      <p class="input-block">
        <label>First Name
          <input
            bind:this={firstName}
            type="text"
            id="first_name"
            name="first_name"
            required
          />
        </label>
      </p>
      {#if joinFormTestGroup == joinFormTestGroups.V1}
      <p class="input-block">
        <label>Mobile number ¹
          <input
            type="text"
            inputmode="numeric"
            bind:this={mobileInput}
          />
          <!-- Hidden input field necessary to make sure the value in mobileInput doesn't change as the form submits -->
          <input
            type="hidden"
            name="mobile"
            bind:this={hiddenMobileInput}
          />
        </label>
      </p>
      {:else}
      <p class="input-block">
        <label>Email ¹<input type="email" name="email" required bind:this={emailInput}/></label>
      </p>
      {/if}
      <input type="text" id="referer" name="ReferCode" style="display:none" />
      <button type="submit" class="primary">NEXT →</button>
  </form>
</div>
<div class="disclaimer-block">
  <p class="disclaimer">
    * Please note that you don't need to transfer funds to create an account
    with Future Super.
    <br />
    <br />
    Investments may be held indirectly via an Exchange Traded Fund (ETF) or Managed
    Fund (MF).
    <br />
    <br />
    Future Super has more than 40,000 members as of 1/9/2023
    <br />
    <br />
    ¹ By providing your
    {#if joinFormTestGroup == joinFormTestGroups.V1}
      mobile number,
    {:else}
      email address,
    {/if}
    you consent and authorise us to send you
    communications or information, including information required by law, via
    {#if joinFormTestGroup == joinFormTestGroups.V1}
      SMS
    {:else}
      email
    {/if}
    or similar technologies. Your details will never be passed onto a third
    party other than in accordance with our
    <a href="/privacy-policy">Privacy Policy</a>. You can elect to receive
    communications by post at any time by contacting Future Super on 1300
    658 422 or via email at info@futuresuper.com.au or in writing at GPO
    Box 2754, Brisbane QLD 4001.
  </p>
</div>

<style lang="scss">
  @use "../../styles/" as *;

  .impact {
    display: flex;

    @media (max-width: 800px) {
      flex-direction: column;
    }

    &__image {
      background-image: url("/images/join-form-background.png");
      background-size: cover;
      background-position: top right;
      background-repeat: no-repeat;
      height: 100vh;
      width: 55%;

      display: flex;
      align-items: end;
      justify-content: end;

      position: relative;

      @media (max-width: 800px) {
        width: 100%;
        border-radius: 0 0 40px 40px;
        background-position: center;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: end;

      @media (max-width: 800px) {
        font-size: 32px;
        padding-right: 40px;
        height: 95vh;
      }
      height: 75vh;

      @media (min-width: 1440px) {
        padding-right: 20%;
      }
      padding-right: 23%;

      &--message {
        @media (max-width: 800px) {
          font-size: 25px;
          position: absolute;
          bottom: 1.5rem;
          right: 1.5rem;
        }

        font-size: 50px;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: center;
        p {
          background-color: $black;
          padding: 0 5px;
          margin-bottom: 0.375rem;
          @media (max-width: 800px) {
            margin-bottom: 0.25rem;
          }
          &.heading--green {
            color: $black;
            background-color: #77fd79;
          }
        }
      }

      &--text {
        display: none;
        padding-top: 10%;
        justify-content: end;
        text-align: center;
        width: 100%;
        flex-direction: column;
        align-items: center;
        gap: 0.125rem;

        p {
          @media (max-width: 800px) {
            display: none;
          }
          @media (max-width: 1280px) {
            font-size: 12px;
          }
          font-size: 14px;
          color: white;
          background-color: rgba(#000000, 0.2);
          margin: 0;
        }
      }
    }

    &__form {
      border-radius: 80px 0 0 80px;
      padding: 46px 40px 46px 84px;
      margin-left: -8%;
      z-index: 10;
      background-color: white;
      width: 50%;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;

      @media (min-width: 1440px) {
        margin-left: -5%;
        width: 45%;
      }

      @media (max-width: 800px) {
        margin-left: 0;
        width: 100%;
        border-radius: 0;
        padding: 1rem;
      }

      &--container {
        max-width: 632px;
        width: 60%;
        @media (max-width: 800px) {
          padding: 80px 0;
          width: 100%;
        }
      }

      &--heading {
        padding-top: 1rem;
        font-size: calc(30px + 1vw);
        height: 8%;
      }
    }
  }

  input, :global(.input) {
    display: block;
    padding: 8px;
    border-radius: 8px;
    border: 1px solid #9e9e9e; // black-500
    outline: none;
    margin-top: 4px;
    margin-bottom: 16px;
    width: 100%;
    height: 45px;
  }

  input:focus {
    border: 1px solid #161616; // black-950
  }

  .input-block {
    padding-top: 8px;
    height: 10%;
  }

  .disclaimer-block {
    display: flex;
    padding: 120px 40px;
    align-items: flex-start;
    gap: 64px;
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 800px) {
      padding: 24px;
    }
  }
  p.disclaimer {
    font-family: $mono;
  }

  .button {
    &.secondary {
      background-color: rgba($black950, 0.5);
      border-width: 1.25px;
      border-color: white;
      @media (max-width: 800px) {
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 45px;
        height: 45px;
        background-color: rgba(white, 0.5);
        border-color: $green;
        border-width: 1px;
      }
    }
  }

  .primary {
    width: 100%;
    margin-top: 16px;
  }

  .back-button {
    position: absolute;
    top: 65px;
    left: 58px;
    @media (max-width: 800px) {
      top: 24px;
      left: 25px;
      position: fixed;
      z-index: 20;
    }
    @media (max-width: 375px) {
      top: 8px;
      left: 8px;
    }

    &--icon {
      width: 20px;
      height: 20px;
      margin-right: 15px;
      @media (max-width: 800px) {
        margin-right: 0;
        filter: invert(1);
      }
    }

    &--text {
      @media (max-width: 800px) {
        display: none;
      }
    }
  }

  h4 {
    margin-bottom: 0;
  }

  .clock {
    width: 20px;
    height: 20px;
    margin-right: 6px;
  }

  .time-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #00a900;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }

  .info-block {
    border-top: 2px solid var(--Neutrals-black-900, #212121);
    padding-top: 1.5rem;
    &__heading {
      font-family: $heading;
      color: #303030;
      margin-bottom: 0;
    }
    &__list {
      font-size: 0.875rem;
      color: #424242;
      list-style: circle;
      margin-top: 0.5rem;
      margin-left: 1.187rem;
      padding-left: 0;
    }
  }
</style>
