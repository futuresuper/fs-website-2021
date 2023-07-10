<script>
</script>

<form method="GET" action="https://join.futuresuper.com.au/">
  <h1>Join Future Super</h1>
  <div class="time-row">
    <img src="/images/clock2.gif" alt="clock" class="clock" />
    <h4>Joining takes about 4 minutes.</h4>
  </div>
  <div class="info-block">
    <p class="info-block__heading">What you'll need</p>
    <ul class="info-block__list">
      <li>Your Tax File Number</li>
      <li>An Australian ID or Medicare card to find your super and complete a transfer.*</li>
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
</form>

<style lang="scss">
  @use "../../styles/" as *;

  form {
    margin: 20px 0 100px 0;
    border: 1px solid $black;
    border-radius: 32px;
    padding: 40px;
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

  h1 {
    margin-bottom: 8px;
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
      margin: 20px 50px 100px 50px;
    }
  }

  @media (max-width: 800px) {
    form {
      margin-top: -40px;
    }
  }
</style>
