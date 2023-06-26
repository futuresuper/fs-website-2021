<script>
const firstActiveSet = 37;
const secondActiveSet = 11;

</script>

<div class="bg">
  <div class="">
    <section class="hero-section">
      <h1 class="hero-section__heading center">Welcome to the movement</h1>

      <div class="hero-section__content">
        <p>
          By joining Future Super, you’re also joining a movement! We’re fighting for a future free from climate change and inequality. 
        </p>
        <p>
          And we’re putting our money where our mouth is. It’s easy to feel powerless when we think about the big issues facing the world, but the truth is - money has power. Together, we can be a force for change. 
        </p>
        <p>
          What does the power of money look like? Well...
        </p>
      </div>
    </section>

    <section class="balance-section">
      <div class="balance-section__circle">
        <div class="balance-section__balance center">
          <h2 class="balance-section__balance--heading">$320,150K</h2>
          <p class="balance-section__balance--description">Is the average super balance at retirement</p>
        </div>
      </div>

      <div class="balance-section__content">
        <p>Sounds like a lot of money, right? But, all together Australia has $3.4 trillion worth of super savings. That $320,150 is just a tiny dot.</p>
      </div>
    </section>

    <div class="journey-section">
        <div class="active-dot top-dot"></div>

          <section class="journey-section__block journey-section__block--1">
            <p>
              Now let’s think about more numbers. Did you know that just <span class="highlighted">7.2%</span> of that money, or $302 billion, could 100% fund Australia’s transition to renewable energy?
            </p>
          </section>
          <div class="active-dot-set active-dot-set__first">
            {#each Array(firstActiveSet) as _, index (index)}
              <div class="active-dot"></div>
            {/each}
          </div>

<!--        <section>-->
<!--          <div class="active-dot-set active-dot-set__second">-->
<!--            {#each Array(secondActiveSet) as _, index (index)}-->
<!--              <div class="active-dot"></div>-->
<!--            {/each}-->
<!--          </div>-->
<!--        </section>-->
    </div>

  </div>
</div>

<style lang="scss">
  @use "../../styles/" as *;

  .bg {
    width: 100%;
    background-color: $black;
    color: #E0E0E0;
  }

  .hero-section{
    position: relative;
    overflow-x: clip;

    &::after, &::before{
      content: "";
      position: absolute;
      width: 400px;
      height: 200px;
      background-color: $green;

      filter: blur(50px);
      opacity: 10%;
    }

    &::after{
      bottom: 5%;
      left: -35%;
      transform: rotate(-18deg);
    }

    &::before{
      top: -5%;
      right: -35%;
      transform: rotate(18deg);
    }

    &__heading{
      font-size: 3.25rem;
      color: $green;
      font-weight: 500;
      text-transform: uppercase;
      min-height: 450px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__content{
      font-size: 1.25rem;

    }
  }

  .balance-section{
    position: relative;
    min-height: 750px;
    display: flex;
    flex-direction: column-reverse;
    overflow-x: clip;

    &__circle{
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 550px;
      height: 550px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 500px;
      background-color: $green;

    }

    &__balance{
      color: $black;
      max-width: 290px;


      &--heading{
        font-size: 3.25rem;
        font-weight: 900;
        font-family: 'FutureSuperFeature';
      }
      &--description{
        font-size: 1.75rem;

      }
    }

    &__content{
      font-size: 1.25rem;
      font-weight: 500;
    }
  }

  .journey-section{
    height: 8000px;
    position: relative;
    width: 100%;
    background-image: radial-gradient(#424242 8px, transparent 9px), radial-gradient(#424242 7px, transparent 9px);
    background-size: 22.5px 22.5px;
    background-position: 50% 0;
    padding-top: 1px;


    //Smaller dots
    //background-image: radial-gradient(#424242 1px, transparent 2px), radial-gradient(#424242 2px, transparent 2px);
    //background-size: 6px 6px;


    transition: all 1s ease-in-out;


      z-index: 2;
      &__block{
        position: sticky;
        top: 0;
        padding: 0.5rem 2.5rem;
        background-color: rgba(21,21,21, 0.85);
        font-size: 1.25rem;
        p{
          margin: 0;
        }

        &--1{
          //position: absolute;
          margin-top: 495px;
        }
      }


    }

  .dots-background{
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: radial-gradient(#424242 8px, transparent 9px), radial-gradient(#424242 7px, transparent 9px);
    background-size: 22.5px 22.5px;
    background-position: 50% 0;


    //Smaller dots
    //background-image: radial-gradient(#424242 1px, transparent 2px), radial-gradient(#424242 2px, transparent 2px);
    //background-size: 6px 6px;


    transition: all 1s ease-in-out;
  }

  .active-dot{
    width: 16.5px;
    height: 16.5px;
    border-radius: 20px;
    background-color: $green;
    position: relative;
    z-index: 2;
  }

  .top-dot{
    top: 3px;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
  }

  .active-dot-set{
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    &__first{
      margin-top: 22px;
      width: 288px;
    }
    &__second{
      top: 206px;

      width: 288px;
    }
  }


  .step-1{
    position: relative;
    height: 250px;
    width: 100%;
    background-color: white;
  }

  .highlighted{
    color: $green;
  }

</style>
