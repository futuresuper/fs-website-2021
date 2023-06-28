<script>
  import { onMount } from "svelte";

const firstActiveSet = 37;
const secondActiveSet = 11;

//58 per, 41 last

// 64 totla
const thirdActiveSet = 273;


const fourthActiveSet = 99;
const fifthActiveSet = 273;
const sixthActiveSet = 389;


onMount(() => {
  const scrollSection = document.querySelector('.scroll-section');

  const heroSectionHeight = (document.querySelector('.hero-section').clientHeight);
  const balanceSectionHeight = (document.querySelector('.balance-section').clientHeight);


  scrollSection.addEventListener('scroll', function(e) {
    // console.log(e)
    // console.log(document.documentElement.scrollTop);
    let circle = document.querySelector('.balance-section__circle');
    const singleCircle = document.querySelector('.top-dot');
    let scale = Math.max(0.028, 1 - (e.target.scrollTop - (heroSectionHeight - 100)) / 500);

    const circleTop = circle.getBoundingClientRect().top;
    const dotGrid = document.querySelector('.journey-section');
    const dotGridTop = dotGrid.getBoundingClientRect().top;
    const dotGridBottom = dotGrid.getBoundingClientRect().bottom;


    const scrollSectionContentLast = document.querySelector('.journey-section__content--last');

    if(e.target.scrollTop >= (heroSectionHeight - 100)){
      circle.style.transform = `translateX(-50%) scale(${scale})`;
      circle.style.position = `fixed`;
      circle.style.top = '150px';
    }else{
      circle.style.position = `absolute`;
      circle.style.top = '0';
    }


    if(circleTop >= dotGridTop){
      circle.classList.add('hidden');
      singleCircle.classList.add('show');

    }else{
      circle.classList.remove('hidden');
      singleCircle.classList.remove('show');

    }

    if(e.target.scrollTop > dotGrid.offsetTop&& e.target.scrollTop <= (scrollSectionContentLast.offsetTop + dotGrid.offsetTop + 20)){
      scrollSection.classList.add('snap');
    }else{
      scrollSection.classList.remove('snap');
    }
  });
});

</script>

<div class="bg">
  <div class="scroll-section">
    <section class="hero-section">
      <h1 class="hero-section__heading center">Welcome to the movement</h1>

      <div class="hero-section__content container">
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

      <div class="balance-section__content container">
        <p>Sounds like a lot of money, right? But, all together Australia has $3.4 trillion worth of super savings. That $320,150 is just a tiny dot.</p>
      </div>
    </section>

    <div class="journey-section">
<!--      <div class="scroll-section">-->
        <div class="active-dot top-dot hidden"></div>

        <div class="journey-section__content">
          <section class="journey-section__block journey-section__block--all">
            <p>
              Now let’s think about more numbers. Did you know that just <span class="highlighted">7.2%</span> of that money, or $302 billion, could 100% fund Australia’s transition to renewable energy?
            </p>
          </section>
          <div class="active-dot-set">
            {#each Array(firstActiveSet) as _, index (index)}
              <div class="active-dot"></div>
            {/each}
          </div>
        </div>



        <div class="journey-section__content">
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
        </div>

        <div class="journey-section__content">
          <section class="journey-section__block journey-section__block--all">
            <p>
              For decades now, climate activists have been fighting to get institutions all over the world - including super funds - to divest.
            </p>
          </section>
        </div>

        <div class="journey-section__content">
          <section class="journey-section__block journey-section__block--all">
            <p>
              What is divestment? It’s refusing to invest in the fossil fuel companies that are causing catastrophic climate change.
            </p>
          </section>
        </div>
        <div class="journey-section__content">
          <section class="journey-section__block journey-section__block--all">
            <p>
              In Australia, some super funds believe it’s possible to engage with coal, oil and gas companies to try to influence them to reduce emissions.
            </p>
          </section>
        </div>
        <div class="journey-section__content">
          <section class="journey-section__block journey-section__block--all">
            <p>
              But at Future Super, we screen out fossil fuel companies from what we call our “investable universe”.
            </p>
          </section>
        </div>
        <div class="journey-section__content">
          <section class="journey-section__block journey-section__block--all">
            <p>
              Future Super is just a tiny drop in the global divestment movement. 
            </p>
          </section>
        </div>
        <div class="journey-section__content">
          <section class="journey-section__block journey-section__block--all">
            <p>
              The Divestment Database keeps track of all the institutions - like universities, charities and international pension funds - that have committed to divesting fossil fuels.
            </p>
          </section>
        </div>
        <div class="journey-section__content">
          <section class="journey-section__block journey-section__block--all">
            <p>
              After so much scrolling, you might have forgotten - all these tiny dots are still representing that $3.4 trillion pool of super. And yep, that’s a lot of dots!
            </p>
          </section>
        </div>
        <div class="journey-section__content">
          <section class="journey-section__block journey-section__block--all">
            <p>
              But $3.4 trillion is about to look like nothing. Wait until you see how big the divestment movement is....
            </p>
          </section>
        </div>

        <div class="journey-section__content">
          <section class="journey-section__block journey-section__block--all">
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


        <div class="journey-section__content">
          <section class="journey-section__block journey-section__block--all">
            <p>
              What does the fortune of the world’s richest man look like? Here’s Bernard Arnault’s <span class="highlighted">$322 billion.</span>
            </p>
          </section>
          <div class="active-dot-set active-dot-set__smaller">
            {#each Array(fourthActiveSet) as _, index (index)}
              <div class="active-dot active-dot__smaller"></div>
            {/each}
          </div>
        </div>

        <div class="journey-section__content">
          <section class="journey-section__block journey-section__block--all">
            <p>
              Australia’s GDP in 2022 was <span class="highlighted">$2.5 trillion.</span> Here’s what that looks like.
            </p>
          </section>
          <div class="active-dot-set active-dot-set__smaller">
            {#each Array(fifthActiveSet) as _, index (index)}
              <div class="active-dot active-dot__smaller"></div>
            {/each}
          </div>
        </div>

        <div class="journey-section__content">
          <section class="journey-section__block journey-section__block--all">
            <p>
              Apple is worth more money than any other company in the world. Here’s what it’s <span class="highlighted">$4.3 trillion</span> market cap looks like?
            </p>
          </section>
          <div class="active-dot-set active-dot-set__smaller">
            {#each Array(sixthActiveSet) as _, index (index)}
              <div class="active-dot active-dot__smaller"></div>
            {/each}
          </div>
        </div>

        <div class="journey-section__content journey-section__content--last">
          <section class="journey-section__block journey-section__block--all">
            <p>
              But, what do all those tiny dots add up to?
            </p>
          </section>
        </div>
<!--      </div>-->


      <section class="amount-section journey-section__block--all">
        <div class="amount-section__circle amount-section__circle--1">
          <div class="amount-section__amount center">
            <p class="amount-section__amount--heading"> $60 trillion.</p>
            <p class="amount-section__amount--description"> Australia's super</p>
          </div>

          <div class="amount-section__circle amount-section__circle--2 animated">

          </div>

          <div class="amount-section__circle amount-section__circle--3 animated">

          </div>
        </div>
      </section>
    </div>

    <section class="amount-section-info">
      <div class="container">
        <p>That’s a lot of money.</p>
        <p>Think of all the people whose retirement savings are part of that $60 trillion.</p>
        <p>How you invest matters. You might feel like a tiny dot, but you’re part of something huge.</p>
      </div>

    </section>


    <section class="download-section">
      <div class="download-section__action">
        <div class="container">
          <p class="download-section__heading">Download the <span class="highlighted">Future Super App</span> for more content like this! </p>
        </div>

        <div class="download-section__action--phones">
          <img

                  src="/images/download-phones.svg"
                  alt="Download Phones"
          />
        </div>


        <a class="download-section__action--button" href="">
          <img
                  src="/images/download-button.svg"
                  alt="Download Button"
          />
        </a>

      </div>

      <div class="container download-section__sources">
        <p class="download-section__sources--heading">Sources:</p>
        <ul class="download-section__sources--list">
          <li>Wealth of Bernard Arnault, Elon Musk, Jeff Bezos and Bill Gates from <a href="https://www.forbes.com/real-time-billionaires/#3d905e643d78" target="_blank">Forbes</a> Tuesday 6 June (data updated daily).</li>
          <li>Australian 2022 GDP from <a href="https://www.worldeconomics.com/Country-Size/Australia.aspx" target="_blank">World Economics</a>, listed in USD and converted to AUD.</li>
          <li>Market cap of Apple from <a href="https://finance.yahoo.com/quote/AAPL/?guccounter=1" target="_blank">Yahoo Finance</a> on Tuesday 6 June, converted to AUD.</li>
          <li>Global divestment commitment from <a href="https://divestmentdatabase.org/" target="_blank">Divestment Database</a>, converted to AUD.</li>
          <li>7.2% and 9.5% stats from <a href="https://www.uts.edu.au/isf/news/supercharging-road-100-clean-energy" target="_blank">UTS research</a> funded by Future Super.</li>
          <li>$3.4 trillion size of superannuation <a href="https://www.apra.gov.au/news-and-publications/apra-releases-superannuation-statistics-for-december-2022" target="_blank">from APRA</a>.</li>
        </ul>
      </div>

    </section>

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
    pointer-events: none;

    &::after, &::before{
      content: "";
      position: absolute;
      width: 400px;
      height: 200px;
      background-color: $green;

      filter: blur(50px);
      opacity: 5%;
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
      margin-bottom: 50px;
    }
  }

  .balance-section{
    position: relative;
    min-height: 750px;
    display: flex;
    flex-direction: column-reverse;
    overflow-x: clip;
    pointer-events: none;

    &__circle{
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%) scale(1);
      width: 550px;
      height: 550px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 500px;
      background-color: $green;
      transition: all ease-in-out;
      //transform-origin: bottom;

      &:global(.animate) {
        //transition-delay: 1s;
        //transform: translateX(-50%) scale(0.028);

        //top: 219px;
      }
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

  .scroll-section{
    //scroll-snap-type: y;
    overflow-y: scroll;
    max-height: 100vh;

    &:global(.snap){

      scroll-snap-type: y mandatory;
    }
  }

  .journey-section{
    min-height: 8000px;
    margin-bottom: 300px;
    height: 100%;
    position: relative;
    width: 100%;
    background-image: radial-gradient(#424242 6px, transparent 9px), radial-gradient(#424242 8px, transparent 8px);
    background-size: 24.5px 23.5px;
    background-position: 50% 0;
    padding-top: 1px;
    transition: all 2s ease-in-out;




      z-index: 1;

    &__content{
      min-height: 100vh;
      margin: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      scroll-snap-align: start;
    }
      &__block{
        position: static;
        top: 0;
        padding: 0.5rem 2.5rem;
        background-color: rgba(21,21,21, 0.85);
        font-size: 1.25rem;
        z-index: 3;
        p{
          margin: 0;
        }

        &--all{
          //margin-top: 495px;
          //min-height: 100vh;
        }

        &--2{
          //margin-top: 499px;
        }
      }

    &:global(.animate) {
      //Smaller dots
      background-image: radial-gradient(#424242 1.3px, transparent 1px), radial-gradient(#424242 1.3px, transparent 2px);
      background-size: 6px 6px;
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
    //position: absolute;
    left: 50%;
    //transform: translateX(-50%);
    z-index: 2;
    margin-top: 36px;
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


  .amount-section{
    overflow-x: clip;
    pointer-events: none;
    &__circle{
      &--1{
        position: relative;
        bottom: -300px;
        left: 50%;
        transform: translateX(-50%) scale(1);
        width: 630px;
        height: 630px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 500px;
        background-color: #424242;
        z-index: 1;
      }

      &--2{
        position: absolute;
        background-color: #303030;
        width: 100%;
        height: 100%;
        transform: scale(0.1143);
        border-radius: 500px;
        bottom: 5px;
        transform-origin: bottom;
        transition: all ease-in-out 2s;

        &:global(.animate) {
          transform: scale(1);
          bottom: 0;
        }
      }

      &--3{
        position: absolute;
        background-color: #212121;
        width: 100%;
        height: 100%;
        transform: scale(0.02);
        border-radius: 500px;
        bottom: 8px;
        transform-origin: bottom;
        transition: all ease-in-out 2s;


        &:global(.animate) {
          transition-delay: 2s;
          transform: scale(1.05);
          bottom: -5px;
        }
      }
    }

    &__amount {
      max-width: 290px;
      z-index: 1;


      &--heading{
        color: $green;
        font-size: 3.25rem;
        font-weight: 900;
        font-family: 'FutureSuperFeature';
      }

      &--description{
        font-size: 1.75rem;
        color: #E0E0E0;
        font-weight: 400;
      }
    }
  }

  .amount-section-info{
    padding: 8rem 0;

    font-size: 1.25rem;
  }

  .download-section{
    background-color: #161616;
    border-radius: 40px 40px 0 0;

    padding-bottom: 80px;

    &__heading{
      font-size: 1.875rem;
      padding-top: 40px;
    }

    &__action{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 4rem;
      &--phones{
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;

        img{
          max-width: 277px;
          position: relative;
          z-index: 2;
        }

        &::after{
          content: "";
          position: absolute;
          width: 100%;
          height: 100px;
          top: 50%;
          transform: translateY(-50%);
          left: 0;
          right: 0;
          background-color: #3DFA52;
          z-index: 1;
          border-radius: 375px;
          filter: blur(90px);
          opacity: 65%;
        }
      }

      &--button{
        max-width: 230px;
      }
    }

    &__sources{
      margin-top: 80px;
      &--heading{
        text-transform: uppercase;
      }

      &--list{
        a{
          color: #E0E0E0;

        }

      }
    }
  }

  .container{
    padding: 0 40px 0 40px;
  }

  .test{
    //Smaller dots
    background-image: radial-gradient(#424242 1.3px, transparent 1px), radial-gradient(#424242 1.3px, transparent 2px);
    background-size: 6px 6px;
  }

  :global(.hidden) {
    visibility: hidden;
  }

  :global(.show) {
    visibility: visible;
  }

</style>
