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
      margin: -80px 0;
    }
  }

  @media (max-width: 800px) {
    section {
      .container {
        margin: -180px 0;
      }
    }
  }
</style>
