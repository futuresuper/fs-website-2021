<script>
  import CircleAroundText from "../ui/CircleAroundText.svelte";
  import SwitchShakeCircle from "../images/SwitchShakeCircle.svelte";
  import pages from "../../data/pages.json";
</script>

<CircleAroundText
  heading="Join now for climate conscious&nbsp;super"
  buttonText={pages.JOIN[0]}
  buttonUrl={pages.JOIN[1]}
>
  <SwitchShakeCircle />
</CircleAroundText>
