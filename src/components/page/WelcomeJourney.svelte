<script>
const firstActiveSet = 37;
const secondActiveSet = 11;

//58 per, 41 last

// 64 totla
const thirdActiveSet = 273;


const fourthActiveSet = 11;
const fifthActiveSet = 11;
const sixthActiveSet = 11;

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
          <div class="active-dot-set">
            {#each Array(firstActiveSet) as _, index (index)}
              <div class="active-dot"></div>
            {/each}
          </div>


      <section class="journey-section__block journey-section__block--2">
        <p>
          If we wanted to do even better than 100% renewables, and decarbonise the entire Australian economy - including transitioning transport and industry away from fossil fuels - the bill would be about $754 billion. That’s just <span class="highlighted">2.3%</span> on top.
        </p>
      </section>
      <div class="active-dot-set">
        {#each Array(secondActiveSet) as _, index (index)}
          <div class="active-dot"></div>
        {/each}
      </div>

      <section class="journey-section__block journey-section__block--3">
        <p>
          For decades now, climate activists have been fighting to get institutions all over the world - including super funds - to divest.
        </p>
      </section>

      <section class="journey-section__block journey-section__block--4">
        <p>
          What is divestment? It’s refusing to invest in the fossil fuel companies that are causing catastrophic climate change.
        </p>
      </section>
      <section class="journey-section__block journey-section__block--5">
        <p>
          In Australia, some super funds believe it’s possible to engage with coal, oil and gas companies to try to influence them to reduce emissions.
        </p>
      </section>
      <section class="journey-section__block journey-section__block--6">
        <p>
          But at Future Super, we screen out fossil fuel companies from what we call our “investable universe”.
        </p>
      </section>
      <section class="journey-section__block journey-section__block--7">
        <p>
          Future Super is just a tiny drop in the global divestment movement. 
        </p>
      </section>
      <section class="journey-section__block journey-section__block--8">
        <p>
          The Divestment Database keeps track of all the institutions - like universities, charities and international pension funds - that have committed to divesting fossil fuels.
        </p>
      </section>
      <section class="journey-section__block journey-section__block--9">
        <p>
          After so much scrolling, you might have forgotten - all these tiny dots are still representing that $3.4 trillion pool of super. And yep, that’s a lot of dots!
        </p>
      </section>
      <section class="journey-section__block journey-section__block--10">
        <p>
          But $3.4 trillion is about to look like nothing. Wait until you see how big the divestment movement is....
        </p>
      </section>


      <section class="journey-section__block journey-section__block--11">
        <p>
          All of these tiny dots make up the divestment movement. To offer some perspective - the wealth of Elon Musk, Jeff Bezos and Bill Gates combined is <span class="highlighted">$707 billion, that’s those green dots.</span>
        </p>
      </section>
      <div class="active-dot-set active-dot-set__smaller">
        {#each Array(thirdActiveSet) as _, index (index)}
          <div class="active-dot active-dot__smaller"></div>
        {/each}
      </div>
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
    background-image: radial-gradient(#424242 6px, transparent 9px), radial-gradient(#424242 8px, transparent 8px);
    background-size: 24.5px 23.5px;
    background-position: 50% 0;
    padding-top: 1px;



    //Smaller dots
    //background-image: radial-gradient(#424242 1.3px, transparent 1px), radial-gradient(#424242 1.3px, transparent 2px);
    //background-size: 6px 6px;


    transition: all 1s ease-in-out;


      z-index: 1;
      &__block{
        position: sticky;
        top: 0;
        padding: 0.5rem 2.5rem;
        background-color: rgba(21,21,21, 0.85);
        font-size: 1.25rem;
        z-index: 3;
        p{
          margin: 0;
        }

        &--1, &--3, &--4,&--5,&--6,&--7,&--8,&--9,&--10, &--11{
          margin-top: 495px;
        }

        &--2{
          margin-top: 499px;
        }
      }


    }

  .active-dot{
    width: 16.5px;
    height: 16.5px;
    border-radius: 20px;
    background-color: $green;
    position: relative;
    z-index: 2;

    &__smaller{
      width: 4px;
      height: 4px;
    }
  }

  .top-dot{
    top: 3px;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
  }

  .active-dot-set{
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    margin-top: 28px;
    width: 312px;

    &__smaller{
      gap: 2px;
      margin-top: 21px;
      width: 341px;
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
