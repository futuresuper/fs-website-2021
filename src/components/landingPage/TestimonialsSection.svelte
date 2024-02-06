<script>
  import CaratThin from "@components/images/CaratThin.svelte";

  export let title;
  export let testimonials;

  let numPages = Math.ceil(testimonials.length / 2);
  let currentPage = 1;
  $: quotesShowing = testimonials.slice((currentPage - 1) * 2, currentPage * 2);

  const handleNext = () => {
    currentPage = currentPage === numPages ? 1 : currentPage + 1;
  };
</script>

<div class="container">
  <section>
    <p class="title">{title}</p>
    <div class="carousel">
      {#each quotesShowing as testimonial}
        <div class="box">
          <p class="quote">"{testimonial.quote}"</p>
          <p class="details">{testimonial.name}, {testimonial.place}</p>
        </div>
      {/each}
    </div>
    <div class="button-row">
      <div class="arrow">
        {#if currentPage > 1}
          <div
            on:click={() => (currentPage = currentPage - 1)}
            on:keypress={() => (currentPage = currentPage - 1)}
          >
            <CaratThin direction="left" />
          </div>
        {/if}
      </div>
      <div class="dots">
        {#each Array(numPages) as _, i}
          <div
            class="dot"
            class:active={currentPage === i + 1}
            on:click={() => (currentPage = i + 1)}
            on:keypress={() => (currentPage = i + 1)}
          />
        {/each}
      </div>
      <div class="arrow">
        {#if currentPage < numPages}
          <div
            on:click={() => (currentPage = currentPage + 1)}
            on:keypress={() => (currentPage = currentPage + 1)}
          >
            <CaratThin direction="right" />
          </div>
        {/if}
      </div>
    </div>
  </section>
</div>

<style lang="scss">
  @use "../../styles/index" as *;

  section {
    padding: 40px;
  }

  p.title {
    font-size: $font-size-xl;
    margin-bottom: 40px;
  }

  .carousel {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }

  .box {
    background-color: $black;
    padding: 40px;
    border-radius: 20px;
    min-height: 220px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .quote {
      color: $white;
      font-size: $font-size-24;
    }

    .details {
      color: $green;
      margin-bottom: 0;
    }
  }

  .button-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;

    .arrow {
      width: 20px;
      cursor: pointer;

      &:last-child {
        text-align: right;
      }
    }

    .dots {
      display: flex;
      gap: 4px;

      .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: transparent;
        border: 1px solid $black;
        cursor: pointer;

        &.active {
          background-color: $black;
        }
      }
    }
  }

  @media (max-width: 1140px) {
    section {
      padding: 40px 0;
    }

    p.title,
    .item {
      font-size: clamp(22px, 4vw, 48px);
    }
  }

  @media (max-width: 600px) {
    .carousel {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }
</style>
