<script>
</script>

<div class="grid">
  <p>Fossil fuel free</p>
  <div class="image">
    <img src="/images/Earth_Small.gif" alt="3D rotating earth" />
  </div>
</div>
<div class="line" />

<div class="grid">
  <p>Invested for climate action</p>
  <div class="image">
    <img
      class="border-radius"
      src="/images/climate-action.png"
      alt="Girl at a climate rally"
    />
  </div>
</div>
<div class="line" />

<div class="grid">
  <p>100% transparent</p>
  <div class="image">
    <img src="/images/Transparency_Small.gif" alt="100% word graphic" />
  </div>
</div>

<style lang="scss">
  @use "../../../styles/" as *;

  .container {
    padding-top: 0;
    padding-bottom: 0;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 330px;
    align-items: center;
    margin: 20px auto;
    max-width: 1000px;
  }

  p {
    font-size: 40px;
    margin: 0 20px 0 40px;
  }

  .line {
    height: 1px;
    width: 100%;
    background-color: $black;
    grid-column: span 2;
    margin: 20px 0;
  }

  .image {
    margin: 0 20px 0 0;
    display: flex;
    justify-content: center;
  }

  .border-radius {
    border-radius: 10px;
  }

  @media (max-width: 740px) {
    .grid {
      grid-template-columns: 1fr 180px;
    }

    p {
      font-size: 20px;
      line-height: 110%;
    }

    img {
      max-width: 100px;
    }
  }
</style>
