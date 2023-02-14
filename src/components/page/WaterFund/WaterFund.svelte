<script>
  import Frogs from "./Frogs.svelte";
  import GetTheApp from "./GetTheApp.svelte";
  import Impact from "./Impact.svelte";
  import ImpactDetails from "./ImpactDetails.svelte";
  import Title from "./Title.svelte";
  import WhatItDoes from "./WhatItDoes.svelte";
</script>

<div class="bg">
  <Title />
  <WhatItDoes />
  <Impact />
</div>
<ImpactDetails />
<Frogs />
<GetTheApp />

<style lang="scss">
  @use "../../../styles/" as *;

  .bg {
    width: 100%;
    background: url("https://res.cloudinary.com/future-super/image/upload/v1676262740/water-bg.png");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }
</style>
