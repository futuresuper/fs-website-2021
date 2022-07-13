<script>
  import Download from "../../images/Download.svelte";
</script>

<div class="row">
  <h2>Insurance Transfer Process</h2>
  <div class="grid">
    <h3>
      You may be eligible to transfer Death Only or Death and TPD cover you hold
      through another superannuation fund or another insurance policy, to the
      Fund.
    </h3>
    <div>
      <p>
        For cover to be accepted by the Insurer under individual transfer terms,
        you must complete the Insurance Transfer Application Form to the
        Insurer&apos;s satisfaction and provide proof of previous cover. Refer
        to the Insurance Transfer Application Form for eligibility and
        application requirements.
      </p>
      <p>
        The maximum amount of Death Only or Death and TPD cover you can transfer
        to the Fund is $1,000,000.
      </p>
      <p>
        You cannot transfer TPD Only cover to the Fund. If you hold Standard
        Cover at the time you apply to transfer cover and the Insurer accepts
        your application, your Standard Cover will become Fixed Cover from the
        date the transfer cover application is accepted by the Insurer.
      </p>
      <p>
        Where the Insurer accepts your application to transfer cover, cover will
        be provided in the Fund based on the terms, conditions, premiums and
        occupation ratings provided under the relevant insurance policy. Cover
        will commence from the later of the date the Insurer accepts your
        application and the date you cancel the cover held under the other fund
        or insurance policy.
      </p>
      <a class="button outline" href="/life_insurance_transfer_application_form"
        >Download Transfer Form
        <div class="download-icon">
          <Download />
        </div>
      </a>
    </div>
  </div>
</div>

<div class="row">
  <h2>Opt-in Insurance Process</h2>
  <div class="grid">
    <h3>
      When you first join Future Super you have 60 days to apply for our Easy
      Opt-In Standard Cover via your online account.
    </h3>
    <div>
      <p>
        This option is only available for Death Only and Death &amp; TPD cover
        and will provide a standard amount of cover based on your age and
        occupation. The standard amount of cover changes in accordance with your
        age on your next birthday. The premiums for Standard Cover are based on
        your age next birthday, sex and occupation.
      </p>
      <p>
        Please note, Easy Opt-in Insurance will commence only once you have a
        balance in your account. You can read more about Easy Opt-In Standard
        Cover on page 5 of the Insurance Guide.
      </p>
      <p>Login below and check your eligibility.</p>
      <a class="button" href="https://my.futuresuper.com.au/"
        >Login to your account →</a
      >
    </div>
  </div>
</div>

<div class="row">
  <h2>Voluntary Insurance Process</h2>
  <div class="grid">
    <h3>How to get a quote and apply for voluntary insurance.</h3>
    <div>
      <p>
        <strong>
          Voluntary Cover is available to you if you meet the eligibility
          requirements below for cover and you:
        </strong>
      </p>
      <ul>
        <li>
          Wish to increase the amount you are insured for under Standard Cover;
          or
        </li>
        <li>
          Are not eligible for Standard Cover but wish to apply for Death Only
          or Death and TPD cover; or
        </li>
        <li>Wish to apply for Income Protection cover.</li>
      </ul>
      <p>Please click below to <strong>get a quote for insurance.</strong></p>
      <div style="margin-bottom: 20px">
        <a
          class="button"
          style="margin-right: 20px"
          href="https://fsinsurancequotetool.netlify.app/">Get a quote →</a
        >
        <a class="button outline" href="/life_insurance_application"
          >Download Application Form
          <div class="download-icon">
            <Download />
          </div>
        </a>
      </div>
      <h4>
        Death Only cover or Death and TPD cover is available to eligible members
        of the Fund who are:
      </h4>
      <ul>
        <li>Aged 15 to 54 (inclusive) for Death and TPD cover; or</li>
        <li>Aged 15 to 64 (inclusive) for Death Only cover; and</li>
        <li>Australian citizens or Australian permanent residents</li>
      </ul>
      <h4>Death Only cover is available to the following members:</h4>
      <ul>
        <li>Permanent Employees</li>
        <li>Casual Employees</li>
        <li>Contractors</li>
        <li>Members who are not Gainfully Employed</li>
      </ul>
      <h4>Death and TPD cover is available to the following members:</h4>
      <ul>
        <li>Permanent Employees working at least 20 hours per week</li>
        <li>Contractors working at least 20 hours per week</li>
      </ul>
      <a class="button secondary" href="/join-now">Join Future Super →</a>
    </div>
  </div>
</div>

<style lang="scss">
  @use "../../../styles/" as *;

  h3 {
    font-family: $regular;
  }

  .row {
    padding: 40px 0;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 80px;
  }

  .button.outline {
    background-color: transparent;
    border-color: $black;
    border-width: 1px;
    &:hover {
      color: $black;
      background-color: $green;
    }
  }

  .download-icon {
    width: 24px;
    margin-left: 10px;
  }

  .button {
    min-height: 50px;
  }

  @media (max-width: 900px) {
    .grid {
      grid-template-columns: 100%;
      grid-gap: 20px;
    }
  }

  @media (max-width: 600px) {
    .button {
      width: 100%;
      margin-bottom: 10px;
    }
  }
</style>
