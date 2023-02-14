<script>
  import QrCodeContent from "../RenewablesProjects/QrCodeContent.svelte";
</script>

<div style="position: relative; overflow: hidden">
  <div class="blob" />
  <section>
    <div class="square">
      <p class="small">Get The App</p>
      <h3>
        Download the <span>Future Super App</span> to check your balance more easily
        and for more content like this!
      </h3>
    </div>
    <div class="square">
      <QrCodeContent />
    </div>
  </section>
</div>

<style lang="scss">
  @use "../../../styles/" as *;

  section {
    --padding: 20px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: $black;
  }

  .blob {
    width: 200%;
    height: 100%;
    background: radial-gradient(
      circle,
      rgba(16, 157, 141, 0.5) 0%,
      rgba(16, 157, 141, 0.03) 50%,
      rgb(21, 21, 21) 100%
    );
    position: absolute;
    top: 0;
    opacity: 0.8;
  }

  .square {
    position: relative;
    border: 1px solid $black800;
    border-bottom: none;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: var(--padding);
    &:nth-last-of-type(1) {
      border-bottom: 1px solid $black800;
    }
    &:nth-last-of-type(2) {
      border-bottom: 1px solid $black800;
    }
    &:nth-of-type(even) {
      border-left: none;
      align-items: center;
    }
  }

  h3 {
    color: $white;
    text-align: left;
    max-width: 80%;
    font-family: $regular;
    padding-top: 10px;
    margin: 0;
    span {
      color: $green;
    }
  }

  p {
    color: $black600;
    font-size: 14px;
    text-transform: uppercase;
    position: absolute;
    top: var(--padding);
    left: var(--padding);
  }

  @media (max-width: 540px) {
    section {
      grid-template-columns: 1fr;
    }

    .square {
      min-height: 50vw;
      align-items: center;
      &:nth-of-type(even) {
        border-left: 1px solid $black800;
        height: auto;
      }
    }

    h3 {
      text-align: center;
    }

    .blob {
      opacity: 0.4;
    }
  }
</style>
