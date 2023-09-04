<script>
  import { onMount } from "svelte";
  import Arrow from "@components/images/Arrow.svelte";

  const infoBlockGroups = {
    CONTROL: "2023Jul Control",        // Standard join information
    SUPERMATCH: "2023Jul SuperMatch",  // Join information tailored for Supermatch
  };

  // Set its default to the orginal text
  let infoBlockGroup = infoBlockGroups.CONTROL;

  onMount(async () => {
    const rand = Math.random();

    infoBlockGroup =
      rand > 0.5 ? infoBlockGroups.CONTROL : infoBlockGroups.SUPERMATCH;

    // Track the details text display
    analytics.track("JoinNow ViewedByABTestParticipant", {
      infoBlockGroup,
    });
  });
</script>
<div class="background">
  <a class="button secondary back-button"><span class="back-button--icon"><Arrow direction="left" colour="white" /></span>Back</a>
  <div class="heading">
    <p>Join more</p>
    <p>than 40,000</p>
    <p>people</p>
    <p>investing in</p>
    <p class="heading--green">climate</p>
    <p class="heading--green">solutions.</p>
  </div>
  <form method="GET" action="https://join.futuresuper.com.au/">
    <div class="form-container">
      <h2 class="form-heading">Join Future Super</h2>
      <div class="time-row">
        <img src="/images/clock2.gif" alt="clock" class="clock" />
        <h4>Takes about 4 minutes.</h4>
      </div>
      <div class="info-block">
        <p class="info-block__heading">What you'll need</p>
        <ul class="info-block__list">
          <li>Your Tax File Number</li>
          {#if infoBlockGroup === infoBlockGroups.CONTROL}
            <li>Current super details for any funds you plan to transfer*</li>
          {:else}
            <li>An Australian ID or Medicare card to find your super and complete a transfer*</li>
          {/if}
        </ul>
      </div>
      <p>
        <label
        >First Name<input
                type="text"
                id="first_name"
                name="first_name"
                required
        /></label
        >
      </p>
      <p>
        <label>Email ^<input type="email" name="email" required /></label>
      </p>
      <input type="text" id="referer" name="ReferCode" style="display:none" />
      <p>
        <button type="submit" class="primary">Next →</button>
      </p>
      <p class="disclaimer">
        * Please note that you don't need to transfer funds to create an account
        with Future Super.<br /><br />
        ^ By providing your email address, you consent and authorise us to send you communications
        or information, including information required by law, via email or similar technologies.
        Your details will never be passed onto a third party other than in accordance
        with our <a href="/privacy-policy">Privacy Policy</a>. You can elect to
        receive communications by post at any time by contacting Future Super on
        1300 658 422 or via email at info@myfuturesuper.com.au or in writing at PO
        Box 1282, Albury, NSW 2640.
      </p>
    </div>

  </form>
</div>


<style lang="scss">
  @use "../../styles/" as *;

  .background {
    background-image: url('/images/join-form-background.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: -10% 15%;
    min-height: 1320px;

    display: flex;
    align-items: stretch;
    justify-content: end;

    column-gap: 120px;

    position: relative;
  }

  form {
    border-radius: 32px 0 0 32px;

    background-color: white;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .form{
    &-container{
      padding: 40px;
      max-width: 550px;
    }

    &-heading{
      margin-bottom: 8px;

      font-size: 48px;

    }

  }

  input {
    display: block;
    padding: 8px;
    border-radius: 8px;
    border: 1px solid $black;
    outline: none;
    margin-top: 8px;
    margin-bottom: 30px;
    width: 100%;
  }

  p.disclaimer {
    margin-top: 40px;
  }

  .heading {
    font-size: 64px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
    p{
      background-color: $black;
      padding: 0 5px;
      &.heading--green{
        color: $black;
        background-color: #77FD79;
      }
    }


  }

  .button{
    &.secondary{
      background-color: transparent;
      border-color: white;


    }
  }

  .back-button{
    position: absolute;
    top: 65px;
    left: 58px;
    &--icon{
      width: 20px;
      height: 20px;
      margin-right: 15px;
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
    margin-bottom: 1.75rem;
    font-size: 1.25rem;
  }

  .info-block {
    margin-bottom: 1.75rem;
    &__heading {
      font-size: 1.125rem;
      font-family: $heading;
      margin-bottom: 0.5rem;
    }
    &__list {
      font-size: 1rem;
      list-style: circle;
      margin-left: 1.187rem;
      padding-left: 0;
    }
  }

  @media (min-width: 1300px) {
    form {

    }
  }

  @media (max-width: 800px) {
    form {
    }
  }
</style>
