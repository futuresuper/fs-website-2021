<script>
  import { postData } from "../scripts/postData";

  let email = "";
  let status = "";

  async function handleSubmit() {
    status = "waiting";
    await postData(
      "https://67l8qspd50.execute-api.ap-southeast-2.amazonaws.com/prod/addtoaplist",
      {
        email,
        apList: "1E498F77-BBE5-4500-8301-83D3A6091824",
        membersOnly: true,
      }
    ).then((response) => {
      status = response.status === 200 ? "success" : "failed";
    });
  }
</script>

{#if status === "success"}
  <h3>Done!</h3>
  <p>Welcome comms will be resent in about 5 minutes.</p>
{:else if status === "failed"}
  <p>
    We couldn't find an account with that email. Please
    <a href="/welcome-comms-resend">try again</a>, or
    <a href="/contact-us">contact us</a> for help.
  </p>
{:else if status === "waiting"}
  <p>Please wait...</p>
{:else}
  <form on:submit={handleSubmit}>
    <p>
      <label>
        Email address
        <input bind:value={email} type="email" required />
      </label>
    </p>
    <p>
      <button type="submit" class="primary">Resend welcome comms</button>
    </p>
  </form>
{/if}

<style lang="scss">
  @use "../../styles/" as *;

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
</style>
