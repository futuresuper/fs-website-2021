<script>
  import Globe from "../../images/Globe.svelte";
  import Lightning from "../../images/Lightning.svelte";
  import Cross from "../../images/Cross.svelte";
  import AustraliaMap from "./AustraliaMap.svelte";
  import ExternalLink from "../../images/ExternalLink.svelte";

  export let project;
  export let onClose;
</script>

<div on:click={onClose()} class="close-button">
  <Cross />
</div>

<div class="full-screen">
  <div class="inner-scroll">
    <h2>{project.projectName}</h2>
    <div class="footer">
      <div class="details">
        <div class="row">
          <div class="icon">
            <Globe />
          </div>
          <p class="details">{project.stateLocatedIn}</p>
        </div>
        <div class="row">
          <div class="icon">
            <Lightning />
          </div>
          <p class="details">{project.renewablesType}</p>
        </div>
      </div>
    </div>
    <img src={project.mainImageUrl} alt={project.projectName} />
    <p class="description">
      {project.description}
    </p>
    <div class="section-head">About</div>
    <AustraliaMap location={project.location} />
    {#if project.powerInMegawatts}
      <h2 class="stat">{project.powerInMegawatts} MW</h2>
      <div class="section-head">Power Supply</div>
    {/if}
    {#if project.homesPowered}
      <h2 class="stat">{project.homesPowered} homes</h2>
      <div class="section-head">Powered by project</div>
    {/if}
    {#if project.readMoreLink}
      <a href={project.readMoreLink} class="read-more">
        <h2 class="stat">Read more</h2>
        <div style="width: 30px; margin: 0 -4px -4px 0">
          <ExternalLink colour="white" />
        </div>
      </a>

      <div class="section-head">External link</div>
    {/if}
  </div>
</div>

<style lang="scss">
  @use "../../../styles/" as *;

  .full-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: $black;
    z-index: 99;
    padding: 80px;
    overflow: scroll;
  }

  .close-button {
    position: fixed;
    top: 10px;
    right: 40px;
    width: 40px;
    height: 60px;
    z-index: 100;
    padding: 20px;
    cursor: pointer;
  }

  .inner-scroll {
    max-width: 480px;
    margin: 0 auto;
  }

  h2 {
    color: $green;
    font-family: $regular;
    font-size: 50px;
  }

  h2.stat {
    margin: 40px 0 0 0;
  }

  img {
    width: 100%;
    border-radius: 40px;
    margin-top: 40px;
  }

  p.details {
    color: $black400;
    margin: 0;
    padding-left: 8px;
    font-size: 12px;
    text-transform: uppercase;
  }

  p.description {
    color: $white;
    margin: 0 0 8px 0;
    margin-top: 40px;
    font-size: 12px;
    max-width: 80%;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .row {
    display: flex;
    align-items: center;
    margin-top: 2px;
  }

  .section-head {
    width: 100%;
    border-top: 1px solid $black400;
    color: $black400;
    font-size: 12px;
    margin-top: 4px;
    padding-top: 4px;
  }

  .read-more {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
    text-decoration: none;
  }

  @media (max-width: 480px) {
    .full-screen {
      padding: 80px 20px;
    }

    .close-button {
      right: 30px;
    }
  }
</style>
