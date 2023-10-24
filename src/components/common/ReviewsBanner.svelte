<script>
</script>

<div class="review">
    <div class="review__stars">
      <img src="/images/star-icon.svg" alt="star" class="star" />
      <img src="/images/star-icon.svg" alt="star" class="star" />
      <img src="/images/star-icon.svg" alt="star" class="star" />
      <img src="/images/star-icon.svg" alt="star" class="star" />
      <img src="/images/star-icon-percentage.svg" alt="star" class="star" />
    </div>

    <p class="review__text">4.9 stars from 750+ reviews</p>

    <a class="review__text review__text--link" target="_blank" href="https://www.productreview.com.au/c/retail-funds">ProductReview.com.au</a>
</div>

<style lang="scss">
  @use "../../styles/index" as *;

  .review{
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-top: 22px;
    &__stars{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.25rem;
    }

    &__text{
      font-size: 16px;
      color: white;
      font-family: "FutureSuperMono",serif;
      letter-spacing: -0.56px;
      margin: 0;
      &--link{

      }
    }


  }

</style>
