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
  <div>
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

  .card {
    width: 100%;
    height: 100%;
    background-color: $black;
    border-radius: 20px;
    padding: 20px;
    border: 1px solid $black600;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
  }

  h3 {
    color: $green;
    font-family: $regular;
  }

  .image-container {
    width: 100%;
    height: 300px;
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
    justify-content: space-between;
    align-items: flex-end;
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
