<script>
  import { onMount } from "svelte";

  //Green dots
  const firstActiveSet = 37;
  const secondActiveSet = 11;
  const thirdActiveSet = 273;
  const fourthActiveSet = 99;
  const fifthActiveSet = 273;
  const sixthActiveSet = 389;

  let guess = null;



  onMount(() => {
    const observer = new IntersectionObserver((entries) =>{
      entries.forEach((entry) =>{
        if(entry.isIntersecting){
          entry.target.classList.add('show')
        }else{
          entry.target.classList.remove('show')
        }
      })
    })
    const animateElements = document.querySelectorAll('.hidden');
    animateElements.forEach((el) => observer.observe(el));


    const scrollSection = document.querySelector('.scroll-section');

    const heroSectionHeight = (document.querySelector('.hero-section').clientHeight);
    const balanceSectionHeight = (document.querySelector('.balance-section').clientHeight);
    const amountSection = (document.querySelector('.amount-section'));
    const smallerDotsSection = (document.querySelector('.smaller-dots-bg'));
    const smallestDotsSection = (document.querySelector('.smallest-dots-bg'));

    scrollSection.addEventListener('scroll', function(e) {
      let circle = document.querySelector('.balance-section__circle');
      let circleText = document.querySelector('.balance-section__balance');
      let scale = Math.max(0.028, 0.9 - (e.target.scrollTop - (heroSectionHeight - 100)) / 400);

      const singleCircle = document.querySelector('.top-dot');
      const circleTop = circle.getBoundingClientRect().top;
      const dotGrid = document.querySelector('.journey-section');
      const dotGridTop = dotGrid.getBoundingClientRect().top;

      const firstBigCircle = document.querySelector('.amount-section__circle--1');


      const scrollSectionContentLast = document.querySelector('.journey-section__content--last');

      // console.log(e.target.scrollTop)
      // console.log(heroSectionHeight)
      if(e.target.scrollTop >= (heroSectionHeight - 150)){
        circle.classList.add("transform");
      }else{
        circle.style.transform = `translateX(-50%) scale(${0.85})`;
        circle.classList.remove("transform");
      }

      //Scale and move big dot as the user scrolls
      if(e.target.scrollTop >= (heroSectionHeight - (balanceSectionHeight - circle.clientHeight - 50))){
        if(circle.classList.contains('transform')){
          circle.style.transform = `translateX(-50%) scale(${scale})`;

        }else{
          circle.style.transform = `translateX(-50%) scale(${1})`;
        }

        circle.style.position = `fixed`;
        circle.style.top = `${balanceSectionHeight - circle.clientHeight - 25}px`;

        if(scale <= 0.30){
          circleText.classList.add('hidden');
        }else{
          circleText.classList.remove('hidden');
        }
      }else{

        circle.style.position = `absolute`;
        circle.style.top = '0';
      }


      //Hide big dot and show small single dot in dots background
      if(circleTop >= dotGridTop){
        circle.style.opacity = '0';
        singleCircle.classList.add('show');

      }else{
        circle.style.opacity = '1';
        singleCircle.classList.remove('show');

      }


      if(e.target.scrollTop >= smallerDotsSection.offsetTop){
        dotGrid.classList.add('animate');
      }else{
        dotGrid.classList.remove('animate');
      }

      if(e.target.scrollTop >= (smallestDotsSection.offsetTop - 1000)){
        dotGrid.classList.add('animate-small');
      }else{
        dotGrid.classList.remove('animate-small');
      }


      // let circlePosition = amountSection.offsetTop + amountSection.clientHeight + heroSectionHeight;
      let scrollTopOffset = e.target.scrollTop - (amountSection.offsetTop - 175);

      let scaleOne = Math.max(1, 1 + (scrollTopOffset / 50));
      let top = Math.max(1, 1 +(scrollTopOffset / 100));

      //Scale and move big dot as the user scrolls
      if((e.target.scrollTop >= (amountSection.offsetTop -  175)) && top < 20){
        firstBigCircle.style.transform = `translateX(-50%) scale(${scaleOne})  translateZ(0)`;
        firstBigCircle.style.position = `fixed`;
        firstBigCircle.style.top = top + '%';
      }else{
        firstBigCircle.style.position = `absolute`;
        firstBigCircle.style.top = '-9%';
        if(top > 20){
          firstBigCircle.style.bottom = '0';
          firstBigCircle.style.top = '92%';
        }

      }

      //Blocks with dots to snap to center when scrolling
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
      <h1 class="hero-section__heading center">Welcome <br>to the<br> movement</h1>

      <div class="hero-section__content container">
        <p>
          By joining Future Super, you’re also joining a movement! We’re fighting for a future free from climate change and inequality.
        </p>
        <p>
          It’s easy to feel powerless when we think about the big issues facing the world, but the truth is - money has power.
        </p>
        <p>
          What does the power of money look like? Well...
        </p>
      </div>

    </section>
    <svg style="visibility: hidden; position: absolute;" width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id="round">
          <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
          <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
        </filter>
      </defs>
    </svg>
    <section class="balance-section">
      <div class="balance-section__circle">

        <div class="balance-section__balance center">
          <h2 class="balance-section__balance--heading">$1.3 <br> million</h2>
          <p class="balance-section__balance--description">
            <span class="house-text">It’s the median house price in Sydney <span class="reference">1</span></span>
            <span class="circle-text">It’s about the same amount subsidies to fossil fuel companies cost Australia <strong>every hour</strong> <span class="reference">2</span></span>
          </p>
        </div>
      </div>
    </section>

    <div class="journey-section">
      <div class="journey-section__content journey-section__content--top">
        <div class="active-dot top-dot"></div>
        <div class="journey-section__block journey-section__block--top">
          <p>
            That's a lot of money right? But Australian's have more in their super, way more. <span class="highlighted--white"><strong>$3.4 trillion</strong> <span class="reference text-muted">3</span></span> to be precise. We can use that super to fight back against climate change.
            <br><br>That makes <span class="highlighted">$1.3 million</span> look like just a tiny dot.
        </div>
      </div>

      <div class="journey-section__content">
        <div class="journey-section__block journey-section__block--all">
          <p>
            First up, let’s have a think about what <span class="highlighted--white"><strong>$3.4 trillion</strong></span> could do!

        </div>
      </div>


      <div class="journey-section__content  journey-section__content--form">
        <div class="question-modal">
            <div class="question-modal__info">
              <div class="question-modal__badge">Let's guess</div>
              <p class="question-modal__label {!guess ? 'question-modal__label--green' : ''}">Select Your Answer </p>
            </div>
          <p class="question-modal__heading">What percentage of $3.4 trillion is needed to switch Australia to 100% renewable energy? </p>
          <div class="question-modal__answers">
            {#if !guess || guess !== 1}
              <div class="question-modal__answers--block"  on:click={() => (guess = 1)}>7.2 %</div>
              <div class="question-modal__answers--block {guess === 2 ? 'question-modal__answers--block-selected' : ''}" on:click={() => (guess = 2)}>
                {#if guess !== 2}
                  18.9%
                {:else}
                  Good news, we need way less!
                {/if}
              </div>
              <div class="question-modal__answers--block {guess === 3 ? 'question-modal__answers--block-selected' : ''}" on:click={() => (guess = 3)}>
                {#if guess !== 3}
                  44.1%
                {:else}
                  Good news, we need way less!
                {/if}
              </div>
            {:else}
              <div class="question-modal__correct">
                <img src="/images/correct.svg" alt="Correct" />
              </div>
            {/if}
          </div>
        </div>

      </div>

        <div class="journey-section__content">
          <section class="journey-section__block journey-section__block--all">

            {#if guess && guess === 1}
              <p>
                Yep, that’s right! Here’s what <span class="highlighted">7.2%</span>  of Australia’s pool of super looks like. <span class="reference text-muted">5</span>
              </p>
            {:else}
              <p>
                Good news, we only need <span class="highlighted">7.2%</span> of $3.4 trillion. Here’s what that looks like.
              </p>
            {/if}

          </section>
          <div class="active-dot-set">
            {#each Array(firstActiveSet) as _, index (index)}
              <div style="transition-delay: {index * 100}ms" class="active-dot hidden"></div>
            {/each}
          </div>
        </div>



      <div class="journey-section__content">
        <section class="journey-section__block">
          <p>
            If we wanted to do even better than 100% renewable energy, and decarbonise the entire Australian economy - including transitioning transport and industry away from fossil fuels - the bill would be bigger, but maybe not by as much as you think. <span class="reference text-muted">6</span>
          </p>
        </section>
      </div>

        <div class="journey-section__content">
          <section class="journey-section__block journey-section__block--2">
            <p>
              It would take about 9.5% of that $3.4 trillion. Just <span class="highlighted">2.3%</span> more. <span class="reference text-muted">7</span>
            </p>
          </section>
          <div class="active-dot-set">
            {#each Array(secondActiveSet) as _, index (index)}
              <div style="transition-delay: {index * 100}ms" class="active-dot hidden"></div>
            {/each}
          </div>
        </div>

        <div class="journey-section__content">
          <section class="journey-section__block journey-section__block--all">
            <p>
              For decades now, climate activists have been fighting to get institutions all over the world - including super funds - to divest. <span class="reference text-muted">8</span>
            </p>
          </section>
        </div>

        <div class="journey-section__content">
          <section class="journey-section__block journey-section__block--all">
            <p>
              What is divestment? It’s refusing to invest in the fossil fuel companies that are causing catastrophic climate change. <span class="reference text-muted">9</span>
            </p>
          </section>
        </div>
        <div class="journey-section__content">
          <section class="journey-section__block journey-section__block--all">
            <p>
              In Australia, some super funds invest in fossil fuel companies but say they’ll pressure them to behave responsibly. <span class="reference text-muted">10</span> But at Future Super, we screen out fossil fuel companies from what we call our “investable universe”. <span class="reference text-muted">11</span>
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
              After so much scrolling, you might have forgotten - all these tiny dots are still representing that <span class="highlighted--white"><strong>$3.4 trillion</strong></span> pool of super. And yep, that’s a lot of dots!
            </p>
          </section>
        </div>
        <div class="journey-section__content">
          <section class="journey-section__block journey-section__block--all">
            <p>
              But <span class="highlighted--white"><strong>$3.4 trillion</strong></span> is about to look like nothing. Wait until you see how big the divestment movement is....
            </p>
          </section>
        </div>

      <div class="journey-section__content">
        <section class="journey-section__block journey-section__block--all">
          <p>
            The Divestment Database keeps track of all the institutions - like universities, charities and international pension funds - that have committed to divesting fossil fuels. <span class="reference text-muted">12</span>
          </p>
        </section>
      </div>

        <div class="journey-section__content  smaller-dots-bg">
          <section class="journey-section__block journey-section__block--all">
            <p>
              To offer some perspective - the wealth of Elon Musk, Jeff Bezos and Bill Gates combined is about <span class="highlighted">$600 billion</span>, that’s those green dots. <span class="reference text-muted">13</span>
            </p>
          </section>
          <div class="active-dot-set active-dot-set__smaller active-dot-set__smaller--1">
            {#each Array(thirdActiveSet) as _, index (index)}
              <div style="transition-delay: {index * 15}ms" class="active-dot hidden active-dot__smaller"></div>
            {/each}
          </div>
        </div>


        <div class="journey-section__content">
          <section class="journey-section__block journey-section__block--all">
            <p>
              What does the fortune of the world’s richest man look like? Here’s Bernard Arnault’s <span class="highlighted">$316 billion.</span> <span class="reference text-muted">14</span>
            </p>
          </section>
          <div class="active-dot-set active-dot-set__smaller active-dot-set__smaller--2">
            {#each Array(fourthActiveSet) as _, index (index)}
              <div style="transition-delay: {index * 15}ms" class="active-dot hidden active-dot__smaller"></div>
            {/each}
          </div>
        </div>

        <div class="journey-section__content journey-section__content--last">
          <section class="journey-section__block journey-section__block--all">
            <p>
              You’re probably starting to wonder... what do all those tiny dots add up to?
            </p>
          </section>
        </div>

    </div>

    <section class="amount-section journey-section__block--all smallest-dots-bg">
      <div class="amount-section__circle amount-section__circle--1">
        <div class="amount-section__amount center">
          <p class="amount-section__amount--heading">$60 trillion</p>
          <p class="amount-section__amount--description">That's how big the divestment movement is <span class="reference text-muted">17</span>.</p>
        </div>

        <div class="amount-section__circle amount-section__circle--2">
          <div class="amount-section__amount center">
            <p class="amount-section__amount--heading">$3.4 trillion</p>
            <p class="amount-section__amount--description">Australia’s collective super savings.</p>
          </div>
        </div>

        <div class="amount-section__circle amount-section__circle--3">
          <div class="amount-section__amount center">
            <p class="amount-section__amount--heading">$754 billon</p>
            <p class="amount-section__amount--description">Could 100% fund Australia’s transition to renewable energy AND decarbonise transport and industry.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="amount-section-info">
      <div class="container">
        <p>That’s a lot of money.</p>
        <p>How you invest matters. You might feel like a tiny dot, but you’re part of something huge.</p>
        <p>We hope this story has got you thinking about the power of a $.</p>
        <p class="highlighted">After all, just 7.2% of Australia’s combined super savings could transition us to 100% renewable energy.</p>
        <p>When you put it that way, making big changes doesn’t seem so hard!</p>
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


          <li>Sydney’s median house price from <a href="https://www.domain.com.au/news/then-and-now-this-time-series-shows-how-much-property-prices-have-changed-in-your-capital-city-in-two-years-1214754/" target="_blank">Domain research</a>.</li>
          <li>The hourly cost of fossil fuel subsidies calculated based on <a href="https://australiainstitute.org.au/post/australian-fossil-fuel-subsidies-surge-to-11-6-billion-in-2021-22/" target="_blank">Australia Institute</a> research.</li>
          <li>$3.4 trillion size of super based on <a href="https://www.apra.gov.au/news-and-publications/apra-releases-superannuation-statistics-for-march-2023" target="_blank">APRA data</a> from 2022 and 2023.</li>
          <li>Statistics on what percentage of superannuation it would take to fund the transition to renewable energy from <a href="https://www.uts.edu.au/isf/news/supercharging-road-100-clean-energy" target="_blank">UTS research, funded by Future Super</a>.</li>
          <li>Find out more about <a href="https://www.futuresuper.com.au/how-we-invest/" target="_blank">how Future Super screens</a> investments and what we invest in.</li>
          <li> Check out the <a href="https://divestmentdatabase.org/" target="_blank">Divestment Database</a>. The database tracks declared commitments to divestment. It’s not an indication of the amount actually divested from fossil fuels already, as investors will be at different stages of divestment. It also may omit some divestment commitments.</li>
          <li> Wealth of Bernard Arnault, Jeff Bezos, Elon Musk and Bill Gates from <a href="https://www.forbes.com/billionaires/" target="_blank">Forbes</a> on 5 July 2023.</li>
          <li> Value of Apple shares (market cap) from <a href="https://finance.yahoo.com/quote/AAPL/" target="_blank">Yahoo Finance</a> on 5 July 2023.</li>
        </ul>



      </div>

      <div class="container download-section__disclaimer">
        <p class="download-section__disclaimer--heading">Disclaimer</p>
        <p>Information provided is of a general nature only and we have not taken your personal financial objectives, situation or needs into account. You should consider whether Future Super’s products are right for your individual objectives and needs and seek personal financial advice. Before making a decision to acquire, hold or continue to hold an interest in Future Super, please read the PDS and check our Target Market Determination (TMD) available at https://www.futuresuper.com.au/documents-and-forms/. Future Super does not accept any responsibility for any loss or damage that may result from reliance on, or the use of, any information contained on this site. The contents of this website are exclusively owned by Future Super. You must not use or disclose them for any other reason than for the purposes for which they were supplied.</p>

        <p>Equity Trustees Superannuation Limited (ABN 50 055 641 757, RSE Licence L0001458, AFSL 229757) is Trustee of the Future Super Fund (ABN 45 960 194 277; RSE Registration R1072914). The Fund is administered by OneVue Super Services Pty Limited (ABN 74 006 877 872; AFSL 246883). Insurance cover is provided to eligible members by AIA Australia Limited (ABN 79 004 837 861; AFSL 230043).</p>

        <p>The Founder, Promoter and Investment Manager of the Fund is Future Super Investment Services Pty Ltd (ABN 55 621 040 702; AFS Representative No. 001271441), which is a Corporate Authorised Representative of Future Promoter Holdings Pty Ltd (ABN 90 167 800 580; AFSL 482684). The Trustee does not in any way endorse, warrant or accept responsibility for any services provided by the Promoter in its own right or directly to members or prospective members.</p>

      </div>



    </section>

  </div>
</div>

<style lang="scss">
  @use "../../styles/" as *;

  .bg {
    width: 100%;
    background-color: #161616;
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

      animation: fadeIn 0.5s ease-in-out;
    }

    &__content{
      font-size: 1.25rem;
      margin-bottom: 50px;
      animation: fadeIn 0.5s ease-in-out;
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
      transform: translateX(-50%) scale(0.9);


      width: 400px;
      height: 480px;
      margin: 0 auto;

      display:inline-block;
      color:$green;
      filter:url(#round);


      &::before{
        content:"";
        display:block;
        padding-top: 120%;
        background:currentColor;
        clip-path: polygon(50% 0%, 100% 38%, 100% 100%, 0 100%, 0% 38%);
        transition-property: border-radius, clip-path, scale;
        transition-duration: 0.5s;
        transition-timing-function: ease-in-out;
      }

      .house-text{
        display: block;
      }

      .circle-text{
        display: none;
      }


      &:global(.transform){
        &::before{
          clip-path: polygon(50% 0%, 200% 6%, 100% 100%, 0 100%, -200% 0%);
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%) scale(1);
          width: 550px;
          height: 550px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 500px;
          background-color: $green;
          transition-property: border-radius, clip-path, scale;
          transition-duration: 1s;
          transition-timing-function: ease-in-out;
        }

        .balance-section__balance {
          top: 45%;
        }

        .house-text{
          display: none;
        }

        .circle-text{
          display: block;
        }
      }

    }

    &__balance{
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: $black;
      max-width: 290px;
      width: 100%;


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
    overflow-x: hidden;
    max-height: 100vh;

    &:global(.snap){

      scroll-snap-type: y mandatory;
    }
  }

  .journey-section{
    min-height: 8000px;
    padding-bottom: 300px;
    height: 100%;
    position: relative;
    width: 100%;

    animation: bigger 1s ease-in-out;
    background-image: radial-gradient(#424242 6px, transparent 9px), radial-gradient(#424242 8px, transparent 8px);
    background-size: 24.5px 23.5px;

    background-position: 50% 0;
    padding-top: 1px;




      z-index: 1;

    &__content{
      margin-top: 200%;
      padding-top: 50%;
      margin-bottom: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      scroll-snap-align: start;

      &--top{
        justify-content: start;
        margin-top: 0;
        padding-top: 0;
        padding-bottom: 50%;
      }

      &--form{
        justify-content: start;
        padding-top: 5%;
        padding-bottom: 20%;
      }
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

        &--top{
          margin-top: 50px;
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
      animation: smaller 1s ease-in-out;
      background-image: radial-gradient(#424242 1.3px, transparent 1px), radial-gradient(#424242 1.3px, transparent 2px);
      background-size: 6px 6px;
      //transition: all 1.5s ease-in-out;
    }
    &:global(.animate-small) {
      //Smaller dots
      animation: smallest 1s ease-in-out;
      background-image: radial-gradient(#424242 1.3px, transparent 1px), radial-gradient(#424242 1.3px, transparent 2px);
      background-size: 2px 2px;
      //transition: all 1.5s ease-in-out;
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
    top: 3.5px;
    left: 50%;
    transform: translateX(-50%) scale(1.04);
    position: absolute;
    background-color: #161616;

    &:global(.show){
      background-color: $green;
    }
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
    max-width: 312px;

    &__smaller{
      gap: 2px;
      margin-top: 12px;
      width: 341px;

      &--1{
        margin-top: 18px;
        margin-left: -4px;
      }

      &--2{
        margin-top: 10px;
        margin-left: -3px;
      }
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

    &--white{
      color: white;
    }
  }


  .amount-section{
    overflow-x: clip;
    pointer-events: none;
    height: 2000px;
    position: relative;
    &__circle{
      display: flex;
      justify-content: center;
      align-items: center;
      &--1, &--2, &--3{
        position: absolute;
        left: 50%;
        width: 630px;
        height: 630px;
        border-radius: 500px;
        transform-origin: bottom;
        transition: all ease-in-out;
      }

      &--1{
        background-color: #424242;
        z-index: 1;
        transform: translateX(-50%) scale(1) translateZ(0);
      }

      &--2{
        background-color: #303030;
        transform: scale(0.1143) translateZ(0);
        bottom: 4px;
        left: 0;
        z-index: 2;
      }

      &--3{
        background-color: $green;
        color: #212121;
        transform: scale(0.02) translateZ(0);
        bottom: 5px;
        left: 0;
        z-index: 3;

        .amount-section__amount {
          &--heading{
            color: #212121;

          }

          &--description{
            color: #212121;
          }
        }
      }
    }

    &__amount {
      max-width: 22rem;
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
    margin-top: 460px;
    font-size: 1.25rem;
    background-color: #212121;
  }

  .download-section{
    background-color: #212121;
    &__heading{
      font-size: 1.875rem;
      padding-top: 40px;
    }

    &__action{
      background-color: #161616;
      border-radius: 40px 40px 0 0;
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
      padding-top: 80px !important;
      padding-bottom: 80px !important;
      background-color: #161616;
      font-size: 14px;

      color: #9E9E9E;
      &--heading{
      }

      &--list{
        padding-left: 15px;
        a{
          color: #9E9E9E;

        }

      }
    }

    &__disclaimer{
      padding-bottom: 80px !important;
      background-color: #161616;
      font-size: 14px;

      color: #9E9E9E;
      &--heading{
        font-weight: bold;
        margin-bottom: 0;
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


  .question-modal{
    background-color: $black;
    border-radius: 1.25rem;
    padding: 1rem;
    padding-bottom: 2rem;
    width: 21.5rem;

    &__info{
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.875rem;
    }

    &__badge{
      background-color: #303030;
      border-radius: 2rem;
      padding: 0.375rem 0.5rem;

    }

    &__label{
      text-transform: uppercase;
      text-align: right;
      color: #BDBDBD;
      margin: 0;

      &--green{
        color: #A7FFA4;
      }
    }

    &__heading{
      margin: 2rem 0 3rem 0;
      font-size: 1.875rem;
      max-width: 17.5rem;
    }

    &__answers{
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      &--block{
        display: flex;
        align-items: center;
        border: 1px solid #616161;
        padding: 2rem 1rem;
        border-radius: 0.5rem;
        font-size: 1.25rem;
        height: 6.875rem;

        &-selected{
          color: #84ACFF;
          border-color: #84ACFF;
        }
      }
    }

    &__correct{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      animation: spin 10s linear infinite;
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }

  @keyframes smaller {
    0% {
      background-size: 24.5px 23.5px;
    }

    100% {
      background-image: radial-gradient(#424242 1.3px, transparent 1px), radial-gradient(#424242 1.3px, transparent 2px);
      background-size: 6px 6px;
    }
  }

  @keyframes smallest {
    0% {
      background-size: 24.5px 23.5px;
    }

    100% {
      background-image: radial-gradient(#424242 1.3px, transparent 1px), radial-gradient(#424242 1.3px, transparent 2px);
      background-size: 2px 2px;
    }
  }

  @keyframes bigger {
    0% {
      background-image: radial-gradient(#424242 1.3px, transparent 1px), radial-gradient(#424242 1.3px, transparent 2px);
      background-size: 6px 6px;

    }

    100% {
      background-size: 24.5px 23.5px;
    }
  }

  @keyframes fadeIn {
    0%{
      opacity: 0;
      transform: translateY(10%);
    }

    100%{
      opacity: 1;
      transform: translateY(0);
    }
  }

  :global(.hidden){
    opacity: 0;
    transition: opacity 1s;
  }

  :global(.show){
    opacity: 1;
  }

  .reference{
    vertical-align: super;
    font-size: 60%;
  }

  .text-muted{
    color: #9E9E9E;
  }

</style>
