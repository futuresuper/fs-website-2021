<script>
</script>

<div class="award">
    <div>
        <div class="award__heading">
            <img src="/images/award-frame.svg" alt="award" />
            <p class="award__heading--text">Best Retail Superannuation Fund</p>
            <img src="/images/award-frame.svg" alt="award" class="award__heading--image-flip"/>
        </div>

        <div class="award__badges">
            <div class="award__badges--badge">2023</div>
            <div class="award__badges--badge">2022</div>
            <div class="award__badges--badge">2021</div>
            <div class="award__badges--badge">2020</div>
            <div class="award__badges--badge">2019</div>
        </div>
    </div>


    <div>
        <a class="award__link" target="_blank" href="https://www.productreview.com.au/c/retail-funds">ProductReview.com.au</a>
    </div>

</div>

<style lang="scss">
  @use "../../styles/index" as *;

  .award{
    font-family: "FutureSuperMono",serif;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-top: 22px;

    &__heading{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.25rem;
      &--text{
        font-size: 1.125rem;
      }
      &--image{
        &-flip{
          transform: scale(-1,1);
        }
      }
    }

    &__badges{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.25rem;
      &--badge{
        display: inline;
        background-color: #161616;
        border-radius: 0.5rem;
        padding: 0.25rem 0.5rem;
        color: #BDBDBD;
        font-size: 0.8125rem;

      }
    }



    &__link{
      font-size: 0.875rem;
      color: #BDBDBD;
      letter-spacing: -0.56px;
      margin: 0;
      display: inline;
    }


  }

  p{
    margin: 0;
  }

</style>
