<script>
  import { onMount } from "svelte";
  import Arrow from "@components/images/Arrow.svelte";


  onMount(async () => {
    const input = document.querySelector('#first_name');
    const form = document.querySelector('#join-form');

    input.setAttribute('autofocus', 'autofocus');
    input.focus();

    if (window.innerWidth <= 800) {
      setTimeout(() =>{
        window.scrollTo({
          top: form.offsetTop,
          behavior: 'smooth'
        });
      }, 2500)
    }

  });
</script>
<div class="impact">
  <meta name="theme-color" content="transparent">
  <div class="impact__image">
    <a href="/" class="button secondary back-button"><span class="back-button--icon"><Arrow direction="left" colour="white" /></span><span class="back-button--text">Back</span></a>

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
        <p>Investments may be held indirectly via an Exchange Traded Fund (ETF) or Managed Fund (MF).<br>
          Future Super has more than 40,000 members as of 1/9/2023</p>
      </div>
    </div>


  </div>

  <form class="impact__form" method="GET" action="https://join.futuresuper.com.au/">
    <div  id="join-form" class="impact__form--container">
      <h2 class="impact__form--heading">Join Future Super</h2>
      <div class="time-row">
        <img src="/images/clock2.gif" alt="clock" class="clock" />
        <h4>Takes about 4 minutes.</h4>
      </div>
      <div class="info-block">
        <p class="info-block__heading">What you'll need</p>
        <ul class="info-block__list">
          <li>Your Tax File Number</li>
          <li>An Australian ID or Medicare card to find your super and complete a transfer*</li>
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

        <br>
        <br>
        Investments may be held indirectly via an Exchange Traded Fund (ETF) or Managed Fund (MF).
        <br>
        <br>Future Super has more than 40,000 members as of 1/9/2023
      </p>
    </div>

  </form>
</div>

<style lang="scss">
  @use "../../styles/" as *;

  .impact{
    display: flex;


    @media (max-width: 800px) {
      flex-direction: column;
    }

    &__image{
      background-image: url('/images/join-form-background.png');
      background-size: cover;
      background-position: top right;
      background-repeat: no-repeat;
      min-height: 100vh;
      width: 60%;

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

    &__content{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: end;
      @media (max-width: 375px) {
        padding-top: 341px;
      }
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

      &--message{


        @media (max-width: 800px) {
          font-size: 32px;
        }


        font-size: 64px;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: center;
        p{
          background-color: $black;
          padding: 0 5px;
          margin-bottom: 0.375rem;
          @media (max-width: 800px) {
            margin-bottom: 0.25rem;
          }
          &.heading--green{
            color: $black;
            background-color: #77FD79;
          }
        }

      }

      &--text{
        padding-top: 10%;
        display: flex;
        justify-content: end;
        text-align: center;
        width: 100%;

        p{
          @media (max-width: 800px) {
            display: none;
          }
          @media (max-width: 1280px) {
            font-size: 12px;
          }
          font-size: 14px;
          color: white;
          -webkit-text-fill-color: white; /* Will override color (regardless of order) */
          -webkit-text-stroke-width: 0.5px;
          -webkit-text-stroke-color: rgba(black, 0.1);
        }
      }
    }

    &__form{

      border-radius: 80px 0 0 80px;

      padding: 46px  40px 46px 84px;

      margin-left: -8%;
      z-index: 10;
      background-color: white;
      @media (min-width: 1440px) {
        margin-left: -5%;
        width: 45%;
      }
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      @media (max-width: 800px) {
        margin-left: 0;
        width: 100%;
        border-radius: 0;
        padding: 120px 40px;
      }

      &--container{
        @media (max-width: 800px) {
          padding: 120px 0;
        }
        max-width: 632px;
      }

      &--heading{
        margin-bottom: 8px;

        font-size: calc(30px + 1vw);
      }
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
    height: 50px;
  }

  p.disclaimer {
    margin-top: 40px;
  }

  .button{
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

  .primary{
    @media (max-width: 800px) {
      width: 100%;
    }
  }

  .back-button{
    position: absolute;
    top: 65px;
    left: 58px;
    @media (max-width: 800px) {
      top: 24px;
      left: 25px;
      position: fixed;
      z-index: 20;
    }

    &--icon{
      width: 20px;
      height: 20px;
      margin-right: 15px;
      @media (max-width: 800px) {
        margin-right: 0;
        filter: invert(1);

      }
    }

    &--text{
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

</style>
