<script>
  import Logo from "../../images/Logo.svelte";
</script>

<section>
  <Logo colour="white" size="80" />
  <div>
    <p>FUTURE SUPER INVESTS IN</p>
    <h1>Murray-Darling Basin Balanced Water Fund</h1>
  </div>
  <p>
    The Murray-Darling Basin Balanced Water Fund is part of the Balanced Impact
    investment option as at 31 December 2022.
  </p>
</section>

<style lang="scss">
  @use "../../../styles/" as *;

  section {
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
  }

  h1 {
    color: $white;
    text-align: center;
    margin: 0;
    padding-top: 20px;
    text-transform: uppercase;
    font-family: $regular;
    max-width: 800px;
  }

  p {
    color: $black500;
    text-align: center;
    margin: 0;
    font-size: 16px;
  }
</style>
