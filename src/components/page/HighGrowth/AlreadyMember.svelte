<script>
  import Arrow from "@components/images/Arrow.svelte";
</script>

<section>
  <div class="container">
    <div>
      <h2>I’m already a member, what about me?</h2>
      <p>
        No worries! You can switch investment options anytime. Many of our
        members have been eagerly awaiting this option; in fact, 60% told us
        they wanted a higher growth investment**
      </p>
      <p class="bold">The wait is over.</p>
      <a href="https://my.futuresuper.com.au" class="button"
        >Switch Investment Options</a
      >
    </div>
    <div class="list">
      <div class="arrow">
        <Arrow direction="top-right" />
      </div>
      <div class="item"><span>1.</span>Log into your Future Super account</div>
      <div class="item"><span>2.</span>Click ‘Manage Investments’</div>
      <div class="item"><span>3.</span>Choose your investment option</div>
      <div class="item"><span>4.</span>Read and agree to the T&Cs</div>
      <div class="item"><span>5.</span>Click 'Submit'</div>
    </div>
  </div>
</section>

<style lang="scss">
  @use "../../../styles/" as *;

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
    div p {
      text-wrap: balance;
    }
  }

  .button {
    margin-top: 20px;
    background-color: $teal;
    border-color: $teal;
    color: $white;
  }

  .item {
    padding: 24px 0;
    border-bottom: 1px solid $black;
    font-size: 20px;
    span {
      font-family: $mono;
      margin-right: 10px;
    }
    &:last-child {
      border-bottom: none;
    }
  }

  .list {
    position: relative;
  }

  .arrow {
    width: 40px;
    height: 40px;
    position: absolute;
    right: 10px;
    top: 20px;
  }

  @media (max-width: 1000px) {
    .container {
      grid-template-columns: 1fr;
    }

    .item {
      padding-right: 60px;
    }
  }
</style>
