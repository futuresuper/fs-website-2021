<script>
  import sha256 from "../scripts/sha256";

  let enteredPassword = "";
  let correctPassword =
    "7049d41914b4c0bfd9e2f8fd12526a2de2227f39afb0c8f7fd731f3a8e0916ba"; // hashed
  let passwordCorrect = false;
  let showFailure = false;

  function handleSubmit() {
    if (sha256(enteredPassword) === correctPassword) {
      passwordCorrect = true;
    } else {
      showFailure = true;
      setTimeout(() => {
        showFailure = false;
      }, 4000);
    }
  }
</script>

{#if passwordCorrect}
  <slot />
{:else}
  <div class="password">
    <h3>Please enter the password to access this page</h3>
    <div>
      <input bind:value={enteredPassword} type="password" />
      <button on:click={handleSubmit}>GO</button>
    </div>

    {#if showFailure}
      <p>That's not it! Please try again</p>
    {/if}
  </div>
{/if}

<style lang="scss">
  @use "../../styles/" as *;

  .password {
    max-width: 600px;
    margin: 100px auto;
    border: 1px solid $black;
    border-radius: 32px;
    padding: 40px;
    text-align: center;
  }

  input {
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 20px;
  }

  button {
    width: 100%;
  }

  p {
    margin-top: 20px;
    color: red;
  }
</style>
