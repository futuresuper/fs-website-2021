<script>
  import CircleAroundText from "@components/ui/CircleAroundText.svelte";
  import SwitchShakeCircle from "@components/images/SwitchShakeCircle.svelte";

  export let section;
</script>

<section>
  <div class="container">
    <CircleAroundText
      heading="A better future is only a few clicks away"
      buttonText="Join now"
      buttonUrl="/join-now"
    >
      <SwitchShakeCircle />
    </CircleAroundText>
  </div>
</section>

<style>
  section {
    border-top: 1px solid #212121;
  }
</style>
