<script>
  import CircleAroundText from "@components/ui/CircleAroundText.svelte";
  import SwitchShakeCircle from "@components/images/SwitchShakeCircle.svelte";

  export let section;

  // console.log(section);
</script>

<section>
  <div class="container">
    <CircleAroundText
      heading={section.title}
      buttonText={section.button.attributes.label}
      buttonUrl={section.button.attributes.points_to}
    >
      <SwitchShakeCircle />
    </CircleAroundText>
  </div>
</section>

<style lang="scss">
  @use "../../styles/index" as *;

  section {
    border-top: 1px solid #212121;

    .container {
      margin-top: -80px;
      margin-bottom: -80px;
      display: grid;
      place-content: center;
    }
  }

  @media (max-width: 800px) {
    section {
      .container {
        margin-top: -180px;
        margin-bottom: -180px;
      }
    }
  }
</style>
