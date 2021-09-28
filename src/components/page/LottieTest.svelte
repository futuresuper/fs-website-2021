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

    lottie.loadAnimation({
      container: document.getElementById("animation2"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/animations/lottie.json",
    });
  }
</script>

<div>
  <div id="animation" />
  <div id="animation2" />
</div>

<style lang="scss">
  @use "../../styles/" as *;

  #animation {
    width: 100%;
    height: 400px;
  }

  #animation2 {
    width: 100%;
    height: 400px;
  }
</style>
