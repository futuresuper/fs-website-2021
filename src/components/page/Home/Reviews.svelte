<script>
  import moment from "moment";
  import reviews from "@data/reviews.json";
  let latestReviewsUnfiltered = reviews.latestReviews.slice(0, 6);
  let latestReviews = [];
  const hiddenReviewAuthors = {
    fuk_commbank: true,
  };
  latestReviewsUnfiltered.forEach((r) => {
    if (!hiddenReviewAuthors[r.author]) {
      latestReviews.push(r);
    }
  });
  let reviewShowing = 0;
  let review;

  $: review = latestReviews[reviewShowing];
  setInterval(() => {
    reviewShowing =
      reviewShowing === latestReviews.length - 1 ? 0 : reviewShowing + 1;
    review = latestReviews[reviewShowing];
  }, 4000);
</script>

<div class="container">
  <div class="intro">
    <h3>But don't just take it from us</h3>
  </div>
  <section>
    <div class="review">
      <div class="five-stars">★ ★ ★ ★ ★</div>
      <div class="quote">
        &ldquo;{@html review.title.replace("'", "&rsquo;")}&rdquo;
      </div>
      <p>
        {review.author},
        <a href={review.url}>{moment(review.date).fromNow()}</a>
      </p>
      <div class="slider-buttons">
        {#each latestReviews as item, index}
          <div
            class="slider-button {reviewShowing === index ? 'active' : ''}"
            on:click={() => {
              reviewShowing = index;
            }}
          />
        {/each}
      </div>
    </div>
    <div class="totals">
      <div class="five-stars small">★ ★ ★ ★ ★</div>
      <div>
        <p>See all reviews on</p>
        <p>
          <a href="https://www.productreview.com.au/listings/future-super">
            ProductReview.com.au
          </a>
        </p>
      </div>

      <p class="total-num">
        <strong>{reviews.rating}</strong>
        &nbsp;from&nbsp;
        <strong>{reviews.reviews}</strong>
        &nbsp;reviews
      </p>

      <p class="disclaimer">
        These reviews are selected from ProductReview.com.au. We have not taken
        your personal financial objectives, situation or needs into account. We
        recommend you read our Product Disclosure Statement and consider seeking
        financial advice when deciding if Future Super is right for you.
      </p>
    </div>
  </section>
</div>

<style lang="scss">
  @use "../../../styles/" as *;

  section {
    margin: 20px 0;
    padding: 20px;
    background-color: $black;
    border-radius: 32px;
    color: $white;
  }

  p {
    text-align: center;
  }

  .review {
    border: 1px solid $green;
    border-radius: 32px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      color: $green;
    }
  }

  .five-stars {
    color: $green;
    font-size: 40px;
    &.small {
      font-size: 26px;
    }
  }

  .quote {
    width: 90%;
    font-size: min(4vw, 80px);
    line-height: 120%;
    text-align: center;
    min-height: 12vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slider-buttons {
    display: flex;
    justify-content: center;
    margin-top: 60px;
  }

  .slider-button {
    background-color: $black400;
    height: 5px;
    width: 6vw;
    border-radius: 5px;
    margin: 0 1vw;
    cursor: pointer;
    &.active {
      background-color: $green;
    }
  }

  .intro {
    margin: 80px 20px 40px 20px;
    display: flex;
    justify-content: center;

    h3 {
      text-align: center;
    }
  }

  .totals {
    margin: 40px 0;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr;
    > * {
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    p {
      margin-bottom: 0;
    }
    .total-num {
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
    }
    a {
      color: $green;
    }
  }

  .disclaimer {
    color: $black400;
    padding: 0 6%;
  }

  @media (max-width: 600px) {
    .quote {
      width: 100%;
      font-size: 6vw;
      margin: 0;
      min-height: 20vh;
    }
    .totals {
      grid-template-columns: 100%;
    }
    .total-num {
      grid-row: 2;
    }
    .five-stars {
      font-size: 24px;
      &.small {
        font-size: 18px;
      }
    }
    .slider-buttons {
      margin-top: 40px;
    }
  }
</style>
