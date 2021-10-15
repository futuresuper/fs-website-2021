<script>
  let valid = false;

  let sg = 0;
  let ss = 0;
  let ea = 0;
  let mc = 0;
  let total = 0;

  $: if (sg || ss || ea || mc) {
    total = (sg + ss + ea + mc).toFixed(2);
    if (total > 0) {
      valid = true;
    }
  }

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "Employer Notice of Payment",
        Name: "Andrew",
      }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };
</script>

<article>
  <div class="form-container">
    <form on:submit={handleSubmit}>
      <!-- <form name="Employer Notice of Payment" method="POST" data-netlify="true"> -->
      <h3>Enter your employer details</h3>
      <p>
        Enter your business name and the payment reference you wish to use (such
        as the member's member number).
      </p>
      <p>
        <label
          >Employer name
          <input type="text" name="Employer name" required="required" /></label
        >
      </p>
      <button type="submit">Send it</button>
      <!-- <p>
        <label
          >Contact email
          <input type="email" name="Contact email" required="required" /></label
        >
      </p>
      <p>
        <label
          >Contact Phone Number
          <input
            type="text"
            name="Contact Phone Number"
            required="required"
          /></label
        >
      </p>
      <p>
        <label
          >Payment reference
          <input
            type="text"
            name="Payment reference"
            required="required"
          /></label
        >
      </p>
      <h3>Enter the payment contribution details</h3>
      <p>
        Remember: this form is for one member payment contribution only. Please
        submit a new form for each additional member payment contribution.
      </p>
      <p>
        <label
          >Member name
          <input type="text" name="Member name" required="required" /></label
        >
      </p>
      <p>
        <label
          >Member number
          <input type="text" name="Member number" required="required" /></label
        >
      </p>
      <p>
        <label
          >Member date of birth
          <input
            type="date"
            name="Member date of birth"
            placeholder="DD/MM/YYYY"
            required="required"
          /></label
        >
      </p>
      <h3>Contribution amounts</h3>
      <p>
        <label
          >Super guarantee amount ($)
          <input
            type="number"
            step="0.01"
            id="SG-Amount"
            name="SG Amount"
            required="required"
            bind:value={sg}
          /></label
        >
      </p>
      <p class="disclaimer">
        Super Guarantee Contributions are the standard 9.5% employer
        contributions that you are required to pay each quarter.
      </p>
      <p>
        <label
          >Salary sacrifice amount ($) (optional)
          <input
            type="number"
            step="0.01"
            id="Salary-Sacrifice-Amount"
            name="Salary Sacrifice Amount"
            bind:value={ss}
          /></label
        >
      </p>
      <p>
        <label
          >Employer additional amount ($) (optional)
          <input
            type="number"
            step="0.01"
            id="Employer-Additional-Amount"
            name="Employer Additional Amount"
            bind:value={ea}
          /></label
        >
      </p>
      <p class="disclaimer">Post-tax.</p>
      <p>
        <label
          >Member contribution amount ($) (optional)
          <input
            type="number"
            step="0.01"
            id="Member-Contribution-Amount"
            name="Member Contribution Amount"
            bind:value={mc}
          /></label
        >
      </p>
      <p>
        Total contribution ($)<br />
        <span id="total" class="bold">${total}</span>
      </p>
      <input
        type="text"
        id="Total-Contribution"
        name="Total Contribution"
        style="display: none"
        value={total}
      />
      <h3>Contribution amounts</h3>
      <p>
        <label
          >From Date
          <input
            type="date"
            name="From Date"
            placeholder="DD/MM/YYYY"
            required="required"
          /></label
        >
      </p>
      <p>
        <label
          >To Date
          <input
            type="date"
            name="To Date"
            placeholder="DD/MM/YYYY"
            required="required"
          /></label
        >
      </p>

      <p>
        <button
          type="submit"
          class="primary {valid ? '' : 'invalid'}"
          disabled={!valid}
          >{valid
            ? "Submit for this employee"
            : "Add contribution amounts before your submit"}</button
        >
      </p> -->
    </form>
  </div>
</article>

<style lang="scss">
  @use "../../styles/" as *;

  form {
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
    margin-bottom: 40px;
    width: 100%;
  }

  button.invalid {
    background-color: $black500;
    color: $black;
    cursor: not-allowed;
    border: 0;
    &:hover {
      background-color: $black500;
    }
  }

  .disclaimer {
    margin: -30px 0 40px 0;
  }
</style>
