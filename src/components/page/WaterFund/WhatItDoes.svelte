<section>
  <div class="content">
    <h2>What does it do?</h2>
    <p>
      This fund invests in <span>water rights</span> which are sold to farmers for
      irrigation.
    </p>
  </div>
  <div class="blob" style="left: -50%" />
  <div class="blob" style="left: 50%" />
</section>

<style lang="scss">
  @use "../../../styles/" as *;

  section {
    position: relative;
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
    background-color: $black;
    border-radius: 80px;
    overflow: hidden;
  }

  div.content {
    position: relative;
    z-index: 1;
  }

  h2 {
    font-size: 16px;
    font-family: $regular;
    color: $black400;
    text-transform: uppercase;
    text-align: center;
  }

  p {
    font-size: 48px;
    color: $white;
    text-align: center;
    max-width: 800px;
    span {
      color: $green;
    }
  }

  .blob {
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle,
      rgba(16, 157, 141, 0.5) 0%,
      rgba(16, 157, 141, 0.03) 50%,
      rgb(0, 0, 0) 100%
    );
    position: absolute;
    top: 0;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    p {
      font-size: 32px;
    }
  }
</style>
