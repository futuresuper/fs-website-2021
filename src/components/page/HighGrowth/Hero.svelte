<script>
  import HighGrowthIcon from "@components/images/PlantRotating.svelte";
</script>

<div class="bg">
  <div class="hero">
    <div class="container">
      <div class="icon"><HighGrowthIcon colour="#1281A4" /></div>
      <h1>Future Super High Growth</h1>
      <h2>An investment option that takes sustainable super to new heights.</h2>
      <a href="/join-now" class="button">Discover High Growth</a>
      <div class="already-member">
        <p>Already a member?</p>
        <a href="https://my.futuresuper.com.au/">Log in</a>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  @use "../../../styles/" as *;

  .bg {
    background-color: $black;
  }

  .hero {
    background-color: $white;
    padding: 160px 0 80px;
    border-bottom-left-radius: 64px;
    border-bottom-right-radius: 64px;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  h1 {
    color: $teal;
    font-size: 24px;
    letter-spacing: normal;
  }

  h2 {
    text-wrap: balance;
    // max-width: 1100px;

    // span {
    //   text-decoration: underline;
    //   text-decoration-color: $green;
    //   text-decoration-skip-ink: none;
    // }
  }

  .icon {
    width: 100px;
  }

  .button {
    background-color: $teal;
    border-color: $teal;
    color: $white;

    &:hover {
      background-color: $green;
      border-color: $green;
      color: $black;
    }
  }

  p,
  a {
    color: $teal;
  }

  p {
    margin-top: 40px;
    margin-bottom: 0px;
  }
</style>
