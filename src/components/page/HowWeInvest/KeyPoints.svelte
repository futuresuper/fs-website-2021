<script>
  import Tick from "../../images/Tick.svelte";
</script>

<div class="key-points">
  <h2>Key points to our investment approach</h2>
  <div class="tick"><Tick /></div>
  <h4>Protect members from the stranded asset risk of fossil fuels.</h4>
  <div class="tick"><Tick /></div>
  <h4>
    Reduce long term risk by investing in assets with superior environmental,
    social and governance (ESG) considerations.
  </h4>
  <div class="tick"><Tick /></div>
  <h4>
    Invest in assets that achieve financial outperformance for our members while
    building clean energy solutions
  </h4>
  <div class="tick"><Tick /></div>
  <h4>
    Use all of the tools at our disposal to safeguard our members’ future.
  </h4>
  <div class="button-container">
    <a href="/pds" class="button">View our PDS</a>
  </div>
</div>

<style lang="scss">
  @use "../../../styles/" as *;

  .key-points {
    margin: 15vw;
    border: 1px solid $black;
    padding: 6vw;
    border-radius: 32px;
    display: grid;
    grid-template-columns: 30px 1fr;
    grid-gap: 20px;

    h4 {
      margin-top: 5px;
    }
  }

  h2,
  .button-container {
    grid-column: span 2;
  }

  @media (max-width: 900px) {
    .key-points {
      border: 0;
      margin: 100px 0;
      padding: 0px;
    }
  }
</style>
