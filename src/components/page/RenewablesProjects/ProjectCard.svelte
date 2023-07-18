<script>
  import Globe from "../../images/Globe.svelte";
  import Lightning from "../../images/Lightning.svelte";
  import ProjectFullScreen from "./ProjectFullScreen.svelte";
  import Expand from "../../images/Expand.svelte";
  import Card from "./Card.svelte";

  export let project;

  let fullScreen = false;

  $: console.log("fullScreen", fullScreen);
</script>

{#if fullScreen}
  <ProjectFullScreen {project} onClose={() => (fullScreen = false)} />
{/if}

<Card onClick={() => (fullScreen = true)}>
  <h3>{project.projectName}</h3>
  <div style="width: 100%">
    <div class="image-container">
      <img src={project.mainImageUrl} alt={project.projectName} />
    </div>
    <div class="footer">
      <div class="details">
        <div class="row">
          <div class="icon">
            <Globe />
          </div>
          <p>{project.stateLocatedIn}</p>
        </div>
        <div class="row">
          <div class="icon">
            <Lightning />
          </div>
          <p>{project.renewablesType}</p>
        </div>
      </div>
      <div class="expand">
        <Expand />
      </div>
    </div>
  </div>
</Card>

<style lang="scss">
  @use "../../../styles/" as *;

  h3 {
    color: $green;
    font-family: $regular;
    width: 100%;
    font-size: 30px;
    padding-right: 48px;
  }

  .image-container {
    width: 100%;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }

  p {
    color: $black400;
    margin: 0;
    padding-left: 8px;
    font-size: 12px;
    text-transform: uppercase;
  }

  .footer {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-end;
    min-height: 48px;
  }

  .row {
    display: flex;
    align-items: center;
    width: 200px;
    margin-top: 2px;
  }

  .expand {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #303030;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
