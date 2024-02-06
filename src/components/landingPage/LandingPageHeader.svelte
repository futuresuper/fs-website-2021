<script>
  export let headline;
  export let image;
  export let button;

  // console.log({ headline, image, button });
</script>

<div class="container">
  <h1>{headline}</h1>
  <img src={image.url} alt={image.alt} />
  <a href={button.attributes.points_to} class="button"
    >{button.attributes.label}</a
  >
</div>

<style>
  h1 {
    text-wrap: balance;
    margin: 0;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-top: 120px;
  }

  img {
    max-height: 50vh;
  }

  @media (max-width: 700px) {
    .container {
      padding-top: 100px;
    }
  }

  a.button {
    min-width: 200px;
  }
</style>
