<script>
  import Arrow from "../../images/Arrow.svelte";
</script>

<div class="container">
  <section>
    <p>Choose from four impactful investment options for your&nbsp;super</p>
    <div class="arrow">
      <Arrow direction="down" />
    </div>
  </section>
</div>

<style lang="scss">
  @use "../../../styles/" as *;

  section {
    margin: 20px 0;
    padding: 7vw 7vw 4vw 7vw;
    border: 1px solid $green;
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .arrow {
    width: max(40px, 4vw);
    margin-top: 2vw;
  }

  p {
    font-size: 30px;
    line-height: 120%;
    margin: 0;
    text-align: center;
  }

  @media (max-width: 740px) {
    p {
      font-size: 16px;
    }
  }
</style>
