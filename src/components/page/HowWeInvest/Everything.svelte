<script>
  import DoingSomething from "../../images/DoingSomething.svelte";
</script>

<div class="everything-container">
  <div class="image">
    <DoingSomething />
  </div>
  <div class="text">
    <h2>Everything we invest&nbsp;in</h2>
    <p>
      Future Super invests in a diversified range of assets - from impact assets
      like clean energy seed funds, to everyday companies you might recognise
      like Telstra. We don’t expect every investment to change the world, but we
      do make all of our investments public so that you can see where your money
      goes.
    </p>
    <a href="/everything-we-invest-in" class="button">Explore our investments</a
    >
  </div>
</div>

<style lang="scss">
  @use "../../../styles/" as *;

  .everything-container {
    margin: 40px -20px;
    background-color: $black200;
    padding: 10vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 32px;
  }

  .image {
    width: 10%;
  }

  .text {
    width: 78%;
  }

  @media (max-width: 1000px) {
    .image {
      width: 15%;
    }

    .text {
      width: 70%;
    }
  }

  @media (max-width: 680px) {
    .everything-container {
      padding: 40px;
    }

    .image {
      width: 20%;
    }

    .text {
      width: 65%;
    }
  }

  @media (max-width: 540px) {
    .everything-container {
      padding: 20px;
    }

    .image {
      width: 20%;
    }

    .text {
      width: 70%;
    }

    p {
      font-size: 13px;
    }

    .button {
      font-size: 11px;
    }
  }
</style>
