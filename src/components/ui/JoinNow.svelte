<script>
  import lottie from "lottie-web";
  const clientSide = !import.meta.env.SSR;

  if (clientSide) {
    lottie.loadAnimation({
      container: document.getElementById("animation"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/animations/fstest.json",
    });
  }
</script>

<div class="animation-container">
  <div id="animation" />
</div>

<style lang="scss">
  @use "../../styles/" as *;

  .animation-container {
    width: 100%;
  }

  #animation {
    width: 100%;
  }
</style>
