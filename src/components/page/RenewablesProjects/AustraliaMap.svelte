<script>
  import AustraliaMapImage from "../../images/AustraliaMapImage.svelte";

  export let location = { longitude: 0, latitude: 0 };

  const dotRadius = 18;
  let dotPositionHorizontal = 0;
  let dotPositionVertical = 0;

  const auLeftLon = 112.932788;
  const auRightLon = 153.552154;
  const auBottomLat = -43.618177;
  const auTopLat = -10.696667;
  const mapWidth = 241;
  const mapHeight = 223;

  $: if (location) {
    dotPositionHorizontal =
      ((location.longitude - auLeftLon) / (auRightLon - auLeftLon)) * mapWidth -
      dotRadius;

    dotPositionVertical =
      ((location.latitude - auBottomLat) / (auTopLat - auBottomLat)) *
        mapHeight -
      dotRadius;
  }
</script>

{#if dotPositionHorizontal && dotPositionVertical}
  <div class="mapContainer">
    <div class="map">
      <div
        class="dotOuter"
        style="left: {dotPositionHorizontal}px; bottom: {dotPositionVertical}px"
      >
        <div class="dotInner" />
      </div>
      <AustraliaMapImage />
    </div>
  </div>
{/if}

<style lang="scss">
  @use "../../../styles/" as *;

  .mapContainer {
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
  }
  .map {
    position: relative;
  }
  .dotOuter {
    width: 36px;
    height: 36px;
    border-color: $green;
    border-width: 1px;
    border-radius: 18px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }
  .dotInner {
    width: 18px;
    height: 18px;
    background-color: $green;
    border-radius: 18px;
    z-index: 10;
  }
</style>
