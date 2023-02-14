<div style="position: relative; overflow: hidden">
  <div class="blob" />
  <section>
    <div class="square">
      <p class="small">Project Impact</p>
      <h3>
        Last financial year the fund donated <span>3.8 billion litres</span> to wetlands
        that have been suffering as a result of the Murray-Darling being relied on
        for irrigation
      </h3>
    </div>
    <div class="square">
      <p class="small num">01-03</p>
      <img
        src="https://res.cloudinary.com/future-super/image/upload/v1676343899/water1.png"
        alt="Murray Darling"
      />
    </div>
    <div class="square">
      <p class="small">Project Impact</p>
      <h3>
        The donation was the largest private water donation in Australian
        history and has helped <span>restore threatened wetlands</span> and
        <span>wetlands of cultural significance</span>
      </h3>
    </div>
    <div class="square">
      <p class="small num">02-03</p>
      <!-- svelte-ignore a11y-media-has-caption -->
      <video autoplay loop>
        <source
          src="https://res.cloudinary.com/future-super/video/upload/v1670289689/impact-wrapped-2022/waterfund_03_video_small_2.mp4"
          type="video/mp4"
        />
      </video>
    </div>
    <div class="square">
      <p class="small">Project Impact</p>
      <h3>
        Water donations have helped increase bird diversity in the wetlands by
        up to&nbsp;<span>212%</span>
      </h3>
    </div>
    <div class="square">
      <p class="small num">03-03</p>
      <img
        src="https://res.cloudinary.com/future-super/image/upload/v1676346413/water3.png"
        alt="Murray Darling"
      />
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
    height: 100%;
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

  img,
  video {
    border-radius: 50%;
    width: 30vw;
    height: 30vw;
    margin: 40px;
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
      min-height: 80vw;
      align-items: center;
      &:nth-of-type(even) {
        border-left: 1px solid $black800;
      }
    }

    h3 {
      text-align: center;
    }

    img,
    video {
      width: 70vw;
      height: 70vw;
      margin: 20px 0px;
    }

    .blob {
      opacity: 0.4;
    }
  }
</style>
