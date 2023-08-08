<script>
  import AppCarousel from "./AppCarousel.svelte";
  import AppDownloadLinks from "./AppDownloadLinks.svelte";

  const marqueeText =
    "IMPACT IN THE PALM OF YOUR HAND IMPACT IN THE PALM OF YOUR HAND IMPACT IN THE PALM OF YOUR HAND IMPACT IN THE PALM OF YOUR HAND IMPACT IN THE PALM OF YOUR HAND IMPACT IN THE PALM OF YOUR HAND IMPACT IN THE PALM OF YOUR HAND IMPACT IN THE PALM OF YOUR HAND IMPACT IN THE PALM OF YOUR HAND";
</script>

<div class="page-container">
  <div class="header">
    <h1>Get the Future<br />Super App</h1>
    <div class="header-download-links">
      <AppDownloadLinks />
    </div>
  </div>
  <div class="hero-container">
    <img
      class="hero-picture"
      src="https://res.cloudinary.com/future-super/image/upload/v1690527127/app-screens-preview.png"
      alt="Preview screenshots of the Future Super App"
    />
    <div class="marquee-container">
      <div class="marquee">
        {marqueeText}
      </div>
      <div class="marquee" style="animation-direction: reverse">
        {marqueeText}
      </div>
      <div class="marquee">
        {marqueeText}
      </div>
    </div>
  </div>
  <div>
    <AppCarousel />
  </div>
  <div class="projects">
    <img
      class="projects-picture"
      src="https://res.cloudinary.com/future-super/image/upload/v1690527127/app-projects.png"
      alt="Screenshot of the Future Super App showing user balance"
    />
    <p class="disclaimer">
      Exposure to these projects is obtained through Future Super's investment
      in Infradebt. Exposure to Infradebt is in the Renewables Plus, Balanced
      Impact, and Balanced Growth Pension investment options only.
    </p>
    <div class="fade-overlay" />
  </div>
  <div class="footer">
    <h2>Impact in the palm of your hand.<br />Download the app today.</h2>
    <AppDownloadLinks />
  </div>
</div>

<style lang="scss">
  @use "../../../styles/" as *;

  h1 {
    color: white;
    font-size: calc(48px + 1.5vw);
    margin-right: 50px;
  }

  h2 {
    color: white;
    text-align: center;
    font-size: calc(40px + 1.2vw);
    padding-bottom: 40px;
  }

  p {
    color: $black500;
    font-size: 13px;
    text-align: center;
    margin: 0;
    padding: 30px;
  }

  .page-container {
    background-color: $black;
  }

  .header {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    width: 100%;
    padding: 50px;
  }

  @media (max-width: 800px) {
    .header-download-links {
      display: flex;
      flex-grow: 1;
      justify-content: center;
    }
  }

  @media (max-width: 500px) {
    h1 {
      margin-right: 0;
    }
  }

  .hero-container {
    background: radial-gradient(ellipse 60% 50%, $green900, $black);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin: 0 auto;
    padding: 50px 0;
  }

  .hero-picture {
    min-width: 600px;
    max-width: 800px;
    padding: 0 50px;
    z-index: 1;
  }

  .marquee-container {
    width: calc(100% + 80px);
    position: absolute;
    overflow: hidden;
    margin: 0 -40px;
  }

  .marquee {
    margin: 0 -40px;
    font-family: $regular;
    color: white;
    font-size: min(6vw, 80px);
    height: min(7vw, 90px);
    white-space: nowrap;
    overflow: hidden;
    animation: marquee 20s linear infinite;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px;
  }

  @keyframes marquee {
    0% {
      text-indent: 0px;
    }
    100% {
      text-indent: -2000px;
    }
  }

  .projects {
    position: relative;
    background: radial-gradient(ellipse 60% 60%, $green900, $black 60%);
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    margin: 0 auto;
    padding: 20px 0 50px 0;
  }

  .projects-picture {
    min-width: 450px;
    max-width: 700px;
    padding: 0 50px;
    z-index: 1;
  }

  @media (max-width: 900px) {
    .hero-container {
      position: relative;
      height: 800px;
    }
    .hero-picture {
      position: absolute;
      top: 15%;
    }
    .marquee-container {
      top: 10%;
    }
    .projects {
      background: radial-gradient(ellipse 40% 50%, $green900, $black);
    }
  }

  .disclaimer {
    max-width: 500px;
    z-index: 1;
  }

  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 50px 15vh 50px;
  }
</style>
