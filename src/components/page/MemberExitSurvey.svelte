<script>
  import { getQueryParam } from "../scripts/getQueryParam.js";

  const clientSide = !import.meta.env.SSR;

  let name = "";
  let email = "";

  if (clientSide) {
    name = getQueryParam("fname");
    email = getQueryParam("email");
  }
</script>

<form name="Exit Survey" method="POST" data-netlify="true">
  <p>
    <label
      >First Name
      <input type="text" id="name" name="name" bind:value={name} /></label
    >
  </p>
  <p>
    <label
      >Email
      <input type="email" id="email" name="email" bind:value={email} /></label
    >
  </p>
  <p>
    <label
      >What did you like about being a future super member?
      <input type="text" name="What liked" /></label
    >
  </p>
  <p>
    <label
      >What made you decide to leave future super?
      <input type="text" name="Why left" /></label
    >
  </p>
  <p>
    <label
      >What could we have done differently to improve your experience?
      <input type="text" name="What could have done differently" /></label
    >
  </p>
  <p>
    <label
      >Anything else you would like us to know?
      <input type="text" name="Anything else to tell us" /></label
    >
  </p>
  <p>
    <button type="submit" class="primary">Send</button>
  </p>
</form>

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
</style>
