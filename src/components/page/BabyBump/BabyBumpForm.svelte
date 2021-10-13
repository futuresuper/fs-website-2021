<form name="BabyBump" method="POST" data-netlify="true">
  <h3>Apply for Baby Bump</h3>
  <p>
    <label>Name<input type="text" name="Name" /></label>
  </p>
  <p>
    <label>Member Number<input type="text" name="Member Number" /></label>
  </p>
  <p>
    <label>Email<input type="email" name="Email" /></label>
  </p>
  <p>How has your new child come into your care?</p>
  <div class="radio">
    <div>
      <input type="radio" name="How came into care" value="birth" />
      <label for="birth">Birth</label>
    </div>
    <div>
      <input type="radio" name="How came into care" value="adoption" />
      <label for="adoption">Adoption</label>
    </div>
  </div>
  <div class="radio" />
  <p>What date did this child come into your care?</p>
  <input type="text" name="Date came into care" placeholder="DD/MM/YYYY" />
  <p>Which of these apply to you?</p>
  <div class="radio">
    <div>
      <input
        type="radio"
        name="Which of these apply to you"
        value="Full Time Parent"
      />
      <label for="Full Time Parent"
        >Full-time parent OR returning to work for less than 10 hours per week
        (12 or more months since birth/adoption)
      </label>
    </div>
    <div>
      <input
        type="radio"
        name="Which of these apply to you"
        value="Returning To Work"
      />
      <label for="Returning To Work"
        >Returning to work for 10 or more hours per week</label
      >
    </div>
  </div>

  <p>What date did you start your parental leave?</p>
  <input
    type="text"
    name="Date started parental leave"
    placeholder="DD/MM/YYYY"
  />
  <p>What date did you end your parental leave?</p>
  <input
    type="text"
    name="Date ended parental leave"
    placeholder="DD/MM/YYYY"
  />
  <p>Did you work during your parental leave?</p>
  <div class="radio">
    <div>
      <input type="radio" name="Did you work" value="yes" />
      <label for="yes">Yes</label>
    </div>
    <div>
      <input type="radio" name="Did you work" value="no" />
      <label for="no">No</label>
    </div>
  </div>

  <p>
    If yes, did you work 10 hours or more in a single week throughout this time?
    If so, how many weeks did you work 10 hours or more?
  </p>
  <input type="text" name="How many weeks worked 10 hours or more" />
  <p class="disclaimer">
    If you are deemed eligible, we will request a copy of your child’s birth
    certificate or adoption papers before the rebate is paid. All information
    collected will be stored and used in line with our
    <a href="/privacy-policy">Privacy Policy</a>.
  </p>
  <p>
    <button type="submit" class="primary">Submit</button>
  </p>
</form>

<style lang="scss">
  @use "../../../styles/" as *;

  form {
    margin: 60px 15vw;
    border: 1px solid $black;
    border-radius: 32px;
    padding: 40px;
  }

  .radio {
    margin-bottom: 40px;
  }

  input[type="text"],
  input[type="email"] {
    display: block;
    padding: 8px;
    border-radius: 8px;
    border: 1px solid $black;
    outline: none;
    margin-top: 8px;
    margin-bottom: 40px;
    width: 100%;
  }

  @media (max-width: 800px) {
    form {
      margin: 60px 0;
    }
  }
</style>
