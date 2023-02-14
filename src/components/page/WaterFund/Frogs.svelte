<section>
  <!-- svelte-ignore a11y-media-has-caption -->
  <video controls loop>
    <source
      src="https://res.cloudinary.com/future-super/video/upload/v1669593620/impact-wrapped-2022/frog-video-cropped.mp4"
      type="video/mp4"
    />
  </video>
  <h3>Listen to the frogs and birds of the&nbsp;Murray&#8209;Darling</h3>
</section>

<style lang="scss">
  @use "../../../styles/" as *;

  section {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
    background-color: $black;
    background-image: url("https://res.cloudinary.com/future-super/image/upload/v1676349292/impact-wrapped-2022/frog-bg.png");
    background-size: cover;
  }

  h3 {
    color: $white;
    text-align: center;
    margin: 0;
    padding-top: 20px;
    font-family: $regular;
    max-width: 360px;
  }

  video {
    width: 360px;
    max-width: 100%;
    border-radius: 40px;
  }
</style>
