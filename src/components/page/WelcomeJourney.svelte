<script>
  import { onMount } from "svelte";

  //Green dots
  const firstActiveSet = 1224;
  const secondActiveSet = 391;
  const thirdActiveSet = 3000;
  const fourthActiveSet = 1580;
  let formModal;

  let guess = null;

  let scrollTop = 0;

  let scrollSection;

  let downArrow;

  let explainSectionLast;

  let appleDevice = true;

  function scrollToNextSection(section){
    scrollSection.classList.add('snap');
    let el = document.querySelector(section);
    el.scrollIntoView({behavior: "smooth"});
  }

  function chooseGuess(val){
    formModal.classList.add('show-arrow');
    guess = val;
  }

  onMount(() => {

    if (window.screen.width <= 864) {
      appleDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    }

    const observer = new IntersectionObserver((entries) =>{
      entries.forEach((entry) =>{
        if(entry.isIntersecting){
          for(let i = 0; i < entry.target.children.length; i++){
            entry.target.children[i].classList.add('show');
          }

        }
      })
    })
    const animateElements = document.querySelectorAll('.active-dot-set');
    animateElements.forEach((el) => observer.observe(el));
    let timer = null;

    const observerArrow = new IntersectionObserver((entries) =>{
      entries.forEach((entry) =>{
        if(entry.isIntersecting){
          let isModal = entry.target.classList.contains('journey-section__content--form');
          if(timer){
            clearTimeout(timer);
            timer = null;
          }
          timer = setTimeout(() =>{
            entry.target.classList.add('show-arrow')
          }, isModal ? 8000 : 1500);

        }else{
          entry.target.classList.remove('show-arrow')
        }
      })
    })
    const arrowElements = document.querySelectorAll('.hasArrow');
    arrowElements.forEach((el) => observerArrow.observe(el));

    downArrow = document.querySelector('.down-arrow');


    scrollSection = document.querySelector('.scroll-section');

    const balanceSection = document.querySelector('.balance-section');
    const balanceSectionHeight = (document.querySelector('.balance-section').clientHeight);
    const amountSection = (document.querySelector('.amount-section'));
    const smallerDotsSection = (document.querySelector('.smaller-dots-bg'));
    const smallestDotsSection = (document.querySelector('.smallest-dots-bg'));

    formModal = (document.querySelector('.journey-section__content--form'));

    scrollSection.addEventListener('scroll', function(e) {
      let circle = document.querySelector('.balance-section__circle');
      let circleText = document.querySelector('.balance-section__balance');
      let scale = Math.max(0.028, 1 - (e.target.scrollTop - (balanceSection.offsetTop)) / 400);


      const singleCircle = document.querySelector('.top-dot');
      const circleTop = circle.getBoundingClientRect().top;
      const dotGrid = document.querySelector('.journey-section');
      const dotGrid2 = document.querySelector('.journey-section-2');
      const dotGridTop = dotGrid.getBoundingClientRect().top;

      //Get 17000 by going 3.4 trillion / 200 million to get how many dots to show
      //then we take the width and divide it by the width of a dot plus the gap to get how many per row
      //then multiply by the amount of rows in 65px
      //then divide the amount of dots by the amount in a 65px window
      //then multiple that to get how many times to show 65px to get the height
      let dotGridHeight = 375;

      if(window.innerWidth >= 500 && window.innerWidth <= 768){
        dotGridHeight = 600;
      }

      if(window.innerWidth > 768 && window.innerWidth < 1024){
        dotGridHeight = 900;
      }

      dotGrid.style.height = (17000 / ((dotGridHeight / 25) * 3) * 75) + 'px';
      dotGrid2.style.height = (300000 / ((dotGridHeight / 6) * 11) * 75) + 'px';

      const firstBigCircle = document.querySelector('.amount-section__circle--1');
      const secondBigCircle = document.querySelector('.amount-section__circle--2 > div');
      const thirdBigCircle = document.querySelector('.amount-section__circle--3 > div');


      const scrollSectionContentLast = document.getElementById('journeySectionEnd');

      const explainSectionFirst = document.querySelector('.explain-section--first');
      const explainSectionSecond = document.querySelector('.explain-section--second');
      explainSectionLast = document.querySelector('.explain-section--last')


      const counterHundreds = document.querySelector('.counter__sets--hundreds');
      const counterTens = document.querySelector('.counter__sets--tens');
      const counterSingles = document.querySelector('.counter__sets--singles');


      scrollTop = e.target.scrollTop;

      // e.target.scrollTop >= (heroSectionHeight - (balanceSectionHeight - circle.clientHeight - 200))

      if(e.target.scrollTop >= balanceSection.offsetTop - (window.innerHeight * 0.90)){
        counterSingles.classList.add('count');
        counterTens.classList.add('count');
        counterHundreds.classList.add('count');
      }

      if(e.target.scrollTop >= balanceSection.offsetTop + 10){
        circle.style.transform = `translateX(-50%) scale(${scale})`;
        circle.style.position = `fixed`;
        circle.style.top = `${balanceSectionHeight - circle.clientHeight - 200}px`;
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
        dotGrid2.classList.add('animate');
      }else{
        dotGrid.classList.remove('animate');
        dotGrid2.classList.remove('animate');
      }

      if(e.target.scrollTop >= (smallestDotsSection.offsetTop - 999)){
        dotGrid2.classList.add('animate-small');
        firstBigCircle.classList.add('animate-small');
      }else{
        dotGrid2.classList.remove('animate-small');
        firstBigCircle.classList.remove('animate-small');
      }

      let scrollTopOffset = e.target.scrollTop - (amountSection.offsetTop + 10);
      let startingScale = 1;

      let scaleOne = Math.max(1, startingScale + (scrollTopOffset / 50));
      let scaleTwo = Math.max(1, -14 + (scrollTopOffset / 25));
      let top = Math.max(1, 1 +(scrollTopOffset / 100));

      if(scaleOne >= 2.4){
        secondBigCircle.classList.remove('hidden');
      }else{
        secondBigCircle.classList.add('hidden');
      }

      if(scaleOne >= 20){
        thirdBigCircle.classList.remove('hidden');
      }else{
        thirdBigCircle.classList.add('hidden');
      }

      //Scale and move big dot as the user scrolls
      if(top <= 1){
        firstBigCircle.style.transform = `translateX(-50%) scale(1)  translateZ(0)`;
      }

      if(top >= 1.4){
        firstBigCircle.classList.add('animate-smallest');
      }else{
        firstBigCircle.classList.remove('animate-smallest');
      }

      if((e.target.scrollTop >= (amountSection.offsetTop + 10)) && top < 20){
        //Ramp up the zoom speed for the last circle as there is quite a bit of scrolling required to get to the end
        firstBigCircle.style.transform = `translateX(-50%) scale(${scaleOne <= 16 ? scaleOne : scaleTwo})  translateZ(0)`;
        firstBigCircle.style.position = `fixed`;
        firstBigCircle.style.top = top + '%';
      }else{
        firstBigCircle.style.position = `absolute`;
        firstBigCircle.style.top = '0.5px';
        if(top > 20){
          firstBigCircle.style.bottom = '0';
          firstBigCircle.style.top = '';
        }
      }

      let snapSectionWithDots = e.target.scrollTop > dotGrid.offsetTop && e.target.scrollTop <= (dotGrid.clientHeight + dotGrid.offsetTop + dotGrid2.clientHeight);
      let snapSectionBalance = e.target.scrollTop > (balanceSection.offsetTop - balanceSectionHeight) && e.target.scrollTop <= (balanceSection.offsetTop + 5);
      let snapSectionExplainIcons = (e.target.scrollTop >= explainSectionFirst.offsetTop) && (e.target.scrollTop <= (balanceSection.offsetTop - balanceSectionHeight) );

      // Blocks with dots to snap to center when scrolling
      if(snapSectionWithDots || snapSectionExplainIcons || snapSectionBalance){
        scrollSection.classList.add('snap');
      }else{
        scrollSection.classList.remove('snap');
      }
    });
  });
</script>

<div class="bg-main">
  <meta name="theme-color" content="#161616">
  <div class="scroll-section">

    <section class="hero-section container container--width bg">
      <h1 class="hero-section__heading center">Welcome <br>to the<br> movement</h1>

      <div class="hero-section__content">
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

      <div class="">
        <div class="explain-section explain-section--first">
          <div class="explain-section__content hasArrow">
            <div class="explain-section__content--icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12L12 5L21 12V23C21 23.5304 20.7893 24.0391 20.4142 24.4142C20.0391 24.7893 19.5304 25 19 25H5C4.46957 25 3.96086 24.7893 3.58579 24.4142C3.21071 24.0391 3 23.5304 3 23V12Z" stroke="#3DFA52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 25V17H15V25" stroke="#3DFA52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>


            <div class=" ">
              <p class="explain-section__content--heading">$1.3 million</p>
              <p class="explain-section__content--text">It’s the median house price in Sydney</p>
            </div>

            <svg on:click="{() => scrollToNextSection('#explainSection2')}" class="down-arrow" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Arrow Down">
                <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M21.0831 32.6992L16.2743 27.1759L14.8916 28.3798L21.3083 35.7498L22.691 35.7498L29.1076 28.3798L27.7249 27.1759L22.9165 32.6988L22.9165 8.25269L21.0831 8.25269L21.0831 32.6992Z" fill="#3DFA52"/>
              </g>
            </svg>
          </div>
        </div>

        <div id="explainSection2" class="explain-section explain-section--second">
          <div class="explain-section__content hasArrow">
            <div class="explain-section__content--icon">
              <svg  viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="dollar-sign">
                  <path id="Vector" d="M12 2V22" stroke="#3DFA52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path id="Vector_2" d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="#3DFA52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
              </svg>

            </div>


            <div class="">
              <p class="explain-section__content--heading">$1.3 million</p>
              <p class="explain-section__content--text">It’s about the same amount that subsidies to fossil fuel companies cost Australia <strong>every hour.</strong></p>
            </div>

            <svg on:click="{() => scrollToNextSection('#explainSection3')}" class="down-arrow" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Arrow Down">
                <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M21.0831 32.6992L16.2743 27.1759L14.8916 28.3798L21.3083 35.7498L22.691 35.7498L29.1076 28.3798L27.7249 27.1759L22.9165 32.6988L22.9165 8.25269L21.0831 8.25269L21.0831 32.6992Z" fill="#3DFA52"/>
              </g>
            </svg>
          </div>

        </div>

        <div id="explainSection3" class="explain-section explain-section--last">
          <div class="explain-section__content hasArrow">
            <div class="explain-section__content--icon">
              <svg viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="calendar-clock">
                  <path id="Vector" d="M21 7.5V6C21 5.46957 20.7893 4.96086 20.4142 4.58579C20.0391 4.21071 19.5304 4 19 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H8.5" stroke="#3DFA52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path id="Vector_2" d="M16 2V6" stroke="#3DFA52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path id="Vector_3" d="M8 2V6" stroke="#3DFA52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path id="Vector_4" d="M3 10H8" stroke="#3DFA52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path id="Vector_5" d="M17.5 17.5L16 16.25V14" stroke="#3DFA52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path id="Vector_6" d="M22 16C22 17.5913 21.3679 19.1174 20.2426 20.2426C19.1174 21.3679 17.5913 22 16 22C14.4087 22 12.8826 21.3679 11.7574 20.2426C10.6321 19.1174 10 17.5913 10 16C10 14.4087 10.6321 12.8826 11.7574 11.7574C12.8826 10.6321 14.4087 10 16 10C17.5913 10 19.1174 10.6321 20.2426 11.7574C21.3679 12.8826 22 14.4087 22 16Z" stroke="#3DFA52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
              </svg>

            </div>


            <div class="">
              <p class="explain-section__content--heading">$1.3 million</p>
              <p class="explain-section__content--text">It’s paid 24 hours a day, 7 days a week. A total of...</p>
            </div>

            <svg on:click="{() => scrollToNextSection('#bigCircle')}" class="down-arrow" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Arrow Down">
                <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M21.0831 32.6992L16.2743 27.1759L14.8916 28.3798L21.3083 35.7498L22.691 35.7498L29.1076 28.3798L27.7249 27.1759L22.9165 32.6988L22.9165 8.25269L21.0831 8.25269L21.0831 32.6992Z" fill="#3DFA52"/>
              </g>
            </svg>
          </div>


        </div>
      </div>

      <span id="bigCircle"></span>
    </section>

    <section  class="balance-section hasArrow  container container--width bg">
      <div class="balance-section__circle">

        <div class="balance-section__balance center">
          <div class="balance-section__balance--heading">
            <div class="counter">
              <span class="counter__sets">$</span>
              <div class="counter__sets">
                <div class="counter__sets--set counter__sets--hundreds">
                  <span>0</span>
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                  <span>6</span>
                  <span>7</span>
                  <span>8</span>
                  <span>9</span>
                  <span>0</span>
                </div>
              </div>
              <div class="counter__sets">
                <div class="counter__sets--set counter__sets--tens">
                  <span>0</span>
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                  <span>6</span>
                  <span>7</span>
                  <span>8</span>
                  <span>9</span>
                  <span>0</span>
                </div>
              </div>
              <div class="counter__sets">
                <div class="counter__sets--set counter__sets--singles">
                  <span>0</span>
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                  <span>6</span>
                  <span>7</span>
                  <span>8</span>
                  <span>9</span>
                  <span>0</span>
                </div>
            </div>
          </div>
            <span>million</span>
          </div>
          <p class="balance-section__balance--description">
            <span class="circle-text">Spent on subsidies to fossil fuel companies <strong>every week.</strong></span>
          </p>


        </div>
      </div>
      <svg on:click="{() => scrollToNextSection('#journeySection1')}" class="down-arrow" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Arrow Down">
          <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M21.0831 32.6992L16.2743 27.1759L14.8916 28.3798L21.3083 35.7498L22.691 35.7498L29.1076 28.3798L27.7249 27.1759L22.9165 32.6988L22.9165 8.25269L21.0831 8.25269L21.0831 32.6992Z" fill="#3DFA52"/>
        </g>
      </svg>
    </section>

    <div class="journey-section bg">
      <div  id="journeySection1" class="journey-section__content journey-section__content--top">
        <div class="active-dot top-dot"></div>
        <div class="journey-section__block journey-section__block--top hasArrow">
          <p>
            That's a lot of money, right? But compared to the <span class="highlighted--white"><strong>$3.4 trillion</strong></span> Australians have in their super,  <span class="highlighted">$200 million</span> looks tiny. And we can use that super to fight back climate change.</p>
          <svg on:click="{() => scrollToNextSection('#journeySection2')}" class="down-arrow" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Arrow Down">
              <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M21.0831 32.6992L16.2743 27.1759L14.8916 28.3798L21.3083 35.7498L22.691 35.7498L29.1076 28.3798L27.7249 27.1759L22.9165 32.6988L22.9165 8.25269L21.0831 8.25269L21.0831 32.6992Z" fill="#3DFA52"/>
            </g>
          </svg>

        </div>
      </div>

      <div id="journeySection2" class="journey-section__content">
        <div class="journey-section__block journey-section__block--all hasArrow">
          <p>
            First up, let’s have a think about what <span class="highlighted--white"><strong>$3.4 trillion</strong></span> could do!</p>
          <svg on:click="{() => scrollToNextSection('#journeySection3')}" class="down-arrow" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Arrow Down">
              <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M21.0831 32.6992L16.2743 27.1759L14.8916 28.3798L21.3083 35.7498L22.691 35.7498L29.1076 28.3798L27.7249 27.1759L22.9165 32.6988L22.9165 8.25269L21.0831 8.25269L21.0831 32.6992Z" fill="#3DFA52"/>
            </g>
          </svg>
        </div>


      </div>


      <div  id="journeySection3" class="journey-section__content  journey-section__content--form hasArrow">
          <div class="question-modal">
            <div class="question-modal__info">
              <div class="question-modal__badge">Let's guess</div>
              <p class="question-modal__label {!guess ? 'question-modal__label--green' : ''}">Select Your Answer </p>
            </div>
            <p class="question-modal__heading ">What percentage of $3.4 trillion is needed to switch Australia to 100% renewable energy? </p>
            <div class="question-modal__answers">
              {#if !guess || guess !== 1}
                <div class="question-modal__answers--block"  on:click={() => chooseGuess(1)}>7.2 %</div>
                <div class="question-modal__answers--block {guess === 2 ? 'question-modal__answers--block-selected' : ''}" on:click={() => chooseGuess(2)}>
                  {#if guess !== 2}
                    18.9%
                  {:else}
                    Good news, we need way less!
                  {/if}
                </div>
                <div class="question-modal__answers--block {guess === 3 ? 'question-modal__answers--block-selected' : ''}" on:click={() => chooseGuess(3)}>
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
        <svg on:click="{() => scrollToNextSection('#journeySection3-5')}" class="down-arrow" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Arrow Down">
            <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M21.0831 32.6992L16.2743 27.1759L14.8916 28.3798L21.3083 35.7498L22.691 35.7498L29.1076 28.3798L27.7249 27.1759L22.9165 32.6988L22.9165 8.25269L21.0831 8.25269L21.0831 32.6992Z" fill="#3DFA52"/>
          </g>
        </svg>

      </div>

        <div id="journeySection3-5" class="journey-section__content { guess && guess === 1 ? 'journey-section__content--right' : 'journey-section__content--wrong'}">
          <section class="journey-section__block journey-section__block--all hasArrow">

            {#if guess && guess === 1}
              <p>
                Yep, that’s right! Here’s what <span class="highlighted">7.2%</span>  of Australia’s pool of super looks like.
              </p>
            {:else}
              <p>
                Good news, we only need <span class="highlighted">7.2%</span> of $3.4 trillion. Here’s what that looks like.
              </p>
            {/if}

            <svg on:click="{() => scrollToNextSection('#journeySection4')}" class="down-arrow" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Arrow Down">
                <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M21.0831 32.6992L16.2743 27.1759L14.8916 28.3798L21.3083 35.7498L22.691 35.7498L29.1076 28.3798L27.7249 27.1759L22.9165 32.6988L22.9165 8.25269L21.0831 8.25269L21.0831 32.6992Z" fill="#3DFA52"/>
              </g>
            </svg>
          </section>
          <div class="active-dot-set">
            {#each Array(firstActiveSet) as _, index (index)}
              <div style="transition-delay: {index * 1.5}ms" class="active-dot hidden"></div>
            {/each}
          </div>


        </div>



      <div id="journeySection4" class="journey-section__content">
        <section class="journey-section__block hasArrow">
          <p>
            If we wanted to do even better than 100% renewable energy, and decarbonise the entire Australian economy - including transitioning transport and industry away from fossil fuels - the bill would be bigger, but maybe not by as much as you think.
          </p>

          <svg on:click="{() => scrollToNextSection('#journeySection5')}" class="down-arrow" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Arrow Down">
              <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M21.0831 32.6992L16.2743 27.1759L14.8916 28.3798L21.3083 35.7498L22.691 35.7498L29.1076 28.3798L27.7249 27.1759L22.9165 32.6988L22.9165 8.25269L21.0831 8.25269L21.0831 32.6992Z" fill="#3DFA52"/>
            </g>
          </svg>
        </section>


      </div>

        <div id="journeySection5" class="journey-section__content journey-section__content--amount-more">
          <section class="journey-section__block journey-section__block--2 hasArrow">
            <p>
              It would take about 9.5% of that $3.4 trillion. Just <span class="highlighted">2.3%</span> more.
            </p>

            <svg on:click="{() => scrollToNextSection('#journeySection6')}" class="down-arrow" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Arrow Down">
                <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M21.0831 32.6992L16.2743 27.1759L14.8916 28.3798L21.3083 35.7498L22.691 35.7498L29.1076 28.3798L27.7249 27.1759L22.9165 32.6988L22.9165 8.25269L21.0831 8.25269L21.0831 32.6992Z" fill="#3DFA52"/>
              </g>
            </svg>
          </section>
          <div class="active-dot-set">
            {#each Array(secondActiveSet) as _, index (index)}
              <div style="transition-delay: {index * 1}ms" class="active-dot hidden"></div>
            {/each}
          </div>
        </div>

        <div id="journeySection6" class="journey-section__content">
          <section class="journey-section__block journey-section__block--all hasArrow">
            <p>
              For decades now, climate activists have been fighting to get institutions all over the world - including super funds - to divest.
            </p>

            <svg on:click="{() => scrollToNextSection('#journeySection7')}" class="down-arrow" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Arrow Down">
                <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M21.0831 32.6992L16.2743 27.1759L14.8916 28.3798L21.3083 35.7498L22.691 35.7498L29.1076 28.3798L27.7249 27.1759L22.9165 32.6988L22.9165 8.25269L21.0831 8.25269L21.0831 32.6992Z" fill="#3DFA52"/>
              </g>
            </svg>
          </section>


        </div>

        <div id="journeySection7" class="journey-section__content">
          <section class="journey-section__block journey-section__block--all hasArrow">
            <p>
              What is divestment? It’s refusing to invest in the fossil fuel companies that are causing catastrophic climate change.
            </p>

            <svg on:click="{() => scrollToNextSection('#journeySection8')}" class="down-arrow" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Arrow Down">
                <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M21.0831 32.6992L16.2743 27.1759L14.8916 28.3798L21.3083 35.7498L22.691 35.7498L29.1076 28.3798L27.7249 27.1759L22.9165 32.6988L22.9165 8.25269L21.0831 8.25269L21.0831 32.6992Z" fill="#3DFA52"/>
              </g>
            </svg>
          </section>


        </div>
        <div id="journeySection8" class="journey-section__content">
          <section class="journey-section__block journey-section__block--all hasArrow">
            <p>
              In Australia, some super funds invest in fossil fuel companies but say they’ll pressure them to behave responsibly. But at Future Super, we screen out fossil fuel companies from what we call our “investable universe”.
            </p>

            <svg on:click="{() => scrollToNextSection('#journeySection9')}" class="down-arrow" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Arrow Down">
                <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M21.0831 32.6992L16.2743 27.1759L14.8916 28.3798L21.3083 35.7498L22.691 35.7498L29.1076 28.3798L27.7249 27.1759L22.9165 32.6988L22.9165 8.25269L21.0831 8.25269L21.0831 32.6992Z" fill="#3DFA52"/>
              </g>
            </svg>
          </section>
        </div>
        <div id="journeySection9" class="journey-section__content">
          <section class="journey-section__block journey-section__block--all hasArrow">
            <p>
              Future Super is just a tiny drop in the global divestment movement.
            </p>

            <svg on:click="{() => scrollToNextSection('#journeySection10')}" class="down-arrow" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Arrow Down">
                <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M21.0831 32.6992L16.2743 27.1759L14.8916 28.3798L21.3083 35.7498L22.691 35.7498L29.1076 28.3798L27.7249 27.1759L22.9165 32.6988L22.9165 8.25269L21.0831 8.25269L21.0831 32.6992Z" fill="#3DFA52"/>
              </g>
            </svg>
          </section>


        </div>
        <div id="journeySection10" class="journey-section__content">
          <section class="journey-section__block journey-section__block--all hasArrow">
            <p>
              After so much scrolling, you might have forgotten - all these tiny dots are still representing that <span class="highlighted--white"><strong>$3.4 trillion</strong></span> pool of super. And yep, that’s a lot of dots!
            </p>

            <svg on:click="{() => scrollToNextSection('#journeySection11')}" class="down-arrow" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Arrow Down">
                <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M21.0831 32.6992L16.2743 27.1759L14.8916 28.3798L21.3083 35.7498L22.691 35.7498L29.1076 28.3798L27.7249 27.1759L22.9165 32.6988L22.9165 8.25269L21.0831 8.25269L21.0831 32.6992Z" fill="#3DFA52"/>
              </g>
            </svg>
          </section>


        </div>

      <div id="journeySection11" class="journey-section__content">
        <section class="journey-section__block journey-section__block--all hasArrow">
          <p>
            But <span class="highlighted--white"><strong>$3.4 trillion</strong></span> is about to look like nothing. Wait until you see how big the divestment movement is....
          </p>

          <svg on:click="{() => scrollToNextSection('#journeySection12')}" class="down-arrow" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Arrow Down">
              <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M21.0831 32.6992L16.2743 27.1759L14.8916 28.3798L21.3083 35.7498L22.691 35.7498L29.1076 28.3798L27.7249 27.1759L22.9165 32.6988L22.9165 8.25269L21.0831 8.25269L21.0831 32.6992Z" fill="#3DFA52"/>
            </g>
          </svg>
        </section>


      </div>

    </div>

    <div class="journey-section-2 smaller-dots-bg bg">

      <div id="journeySection12" class="journey-section__content">
        <section class="journey-section__block journey-section__block--all hasArrow">
          <p>
            The Divestment Database keeps track of all the institutions - like universities, charities and international pension funds - that have committed to divesting fossil fuels.
          </p>

          <svg on:click="{() => scrollToNextSection('#journeySection13')}" class="down-arrow" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Arrow Down">
              <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M21.0831 32.6992L16.2743 27.1759L14.8916 28.3798L21.3083 35.7498L22.691 35.7498L29.1076 28.3798L27.7249 27.1759L22.9165 32.6988L22.9165 8.25269L21.0831 8.25269L21.0831 32.6992Z" fill="#3DFA52"/>
            </g>
          </svg>
        </section>


      </div>

      <div id="journeySection13" class="journey-section__content">
        <section class="journey-section__block journey-section__block--all hasArrow">
          <p>
            To offer some perspective - the wealth of Elon Musk, Jeff Bezos and Bill Gates combined is about <span class="highlighted">$600 billion</span>, that’s those green dots.
          </p>

          <svg on:click="{() => scrollToNextSection('#journeySection14')}" class="down-arrow" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Arrow Down">
              <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M21.0831 32.6992L16.2743 27.1759L14.8916 28.3798L21.3083 35.7498L22.691 35.7498L29.1076 28.3798L27.7249 27.1759L22.9165 32.6988L22.9165 8.25269L21.0831 8.25269L21.0831 32.6992Z" fill="#3DFA52"/>
            </g>
          </svg>
        </section>
        <div class="active-dot-set active-dot-set__smaller active-dot-set__smaller--1">
          {#each Array(thirdActiveSet) as _, index (index)}
            <div style="transition-delay: {index * 1}ms" class="active-dot hidden active-dot__smaller"></div>
          {/each}
        </div>
      </div>

      <div id="journeySection14" class="journey-section__content">
        <section class="journey-section__block journey-section__block--all hasArrow">
          <p>
            What does the fortune of the world’s richest man look like? Here’s Bernard Arnault’s <span class="highlighted">$316 billion.</span>
          </p>
          <svg on:click="{() => scrollToNextSection('#journeySection15')}" class="down-arrow" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Arrow Down">
              <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M21.0831 32.6992L16.2743 27.1759L14.8916 28.3798L21.3083 35.7498L22.691 35.7498L29.1076 28.3798L27.7249 27.1759L22.9165 32.6988L22.9165 8.25269L21.0831 8.25269L21.0831 32.6992Z" fill="#3DFA52"/>
            </g>
          </svg>
        </section>
        <div class="active-dot-set active-dot-set__smaller active-dot-set__smaller--2">
          {#each Array(fourthActiveSet) as _, index (index)}
            <div style="transition-delay: {index * 1}ms" class="active-dot hidden active-dot__smaller"></div>
          {/each}
        </div>


      </div>

      <div id="journeySection15" class="journey-section__content">
        <section class="journey-section__block journey-section__block--all hasArrow">
          <p>
            You’re probably starting to wonder... what do all those tiny dots add up to?
          </p>

          <svg on:click="{() => scrollToNextSection('#journeySectionEnd')}" class="down-arrow" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Arrow Down">
              <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M21.0831 32.6992L16.2743 27.1759L14.8916 28.3798L21.3083 35.7498L22.691 35.7498L29.1076 28.3798L27.7249 27.1759L22.9165 32.6988L22.9165 8.25269L21.0831 8.25269L21.0831 32.6992Z" fill="#3DFA52"/>
            </g>
          </svg>
        </section>

      </div>
    </div>

    <div id="journeySectionEnd" class="journey-section__content">
    </div>
    <div class="container container--width p-0 overflow-x-clip">
      <section id="amountSection" class="amount-section journey-section__block--all smallest-dots-bg">
        <div class="amount-section__circle amount-section__circle--1">
          <div class="amount-section__amount center">
            <p class="amount-section__amount--heading amount-section__amount--heading-1">$60<br> trillion</p>
            <p class="amount-section__amount--description amount-section__amount--description-1">That's how big the divestment movement is!</p>
          </div>

          <div class="amount-section__circle amount-section__circle--2">
            <div class="amount-section__amount center">
              <p class="amount-section__amount--heading">$3.4 trillion</p>
              <p class="amount-section__amount--description">Australia’s collective super savings.</p>
            </div>
          </div>

          <div class="amount-section__circle amount-section__circle--3">
            <div class="amount-section__amount center">
              <p class="amount-section__amount--heading">7.2%</p>
              <p class="amount-section__amount--description">Could 100% fund Australia’s transition to <strong>renewable energy AND decarbonise transport</strong> and industry.</p>
            </div>
          </div>
        </div>
      </section>
    </div>


    <section class="amount-section-info container--width bg">
      <div class="container">
        <p>That’s a lot of money.</p>
        <div class="block-quote">
          <p class="block-quote__content">
            How you invest matters. You might feel like a tiny dot, but you’re part of something huge. 
          </p>
        </div>
        <p>We hope this story has got you thinking about the power of a $.</p>
        <p>After all, just 7.2% of Australia’s combined super savings could transition us to 100% renewable energy.</p>
        <p>When you put it that way, making big changes doesn’t seem so hard!</p>
      </div>

    </section>


    <section class="download-section container--width">
      <div class="download-section__action--wrapper">
        <div class="download-section__action">
          <p class="download-section__heading">Download the <span class="highlighted">Future Super App</span> to learn more about the impact your money is having! </p>

          <div class="download-section__images">
            <div class="download-section__action--phones">
              <img
                      class="download-section__action--phones-mobile"
                      src="/images/download-phones.svg"
                      alt="Download Phones"
              />

              <img
                      class="download-section__action--phones-desktop"
                      src="/images/download-phones-desktop.svg"
                      alt="Download Phones"
              />
            </div>

            <div class="download-section__actions">
              <div class="download-section__actions--buttons">
                <a href="https://apps.apple.com/au/app/future-super/id1620110464" class="download-section__action--button {appleDevice ? '' : 'download-section__action--button-hide'}" target="_blank">
                  <img
                          src="/images/download-button.svg"
                          alt="Download Button"
                  />
                </a>
                <a href="https://play.google.com/store/apps/details?id=au.com.futuresuper.app&pli=1" class="download-section__action--button  {appleDevice ? 'download-section__action--button-hide' : ''}" target="_blank">
                  <img
                          src="/images/download-button-android.svg"
                          alt="Download Button"
                  />
                </a>
              </div>

              <div class="download-section__actions--qr">
                <img
                        src="/images/app-download-qr.svg"
                        alt="QR code"
                />
              </div>

            </div>
          </div>
      </div>




      </div>

      <div class="container  container--width download-section__sources">
        <p class="download-section__sources--heading">Sources:</p>
        <ul class="download-section__sources--list">


          <li>Sydney’s median house price from <a href="https://www.domain.com.au/news/then-and-now-this-time-series-shows-how-much-property-prices-have-changed-in-your-capital-city-in-two-years-1214754/" target="_blank">Domain research</a>.</li>
          <li>The hourly cost of fossil fuel subsidies calculated based on <a href="https://australiainstitute.org.au/post/australian-fossil-fuel-subsidies-surge-to-11-6-billion-in-2021-22/" target="_blank">Australia Institute</a> research.</li>
          <li>$3.4 trillion size of super based on <a href="https://www.apra.gov.au/news-and-publications/apra-releases-superannuation-statistics-for-march-2023" target="_blank">APRA data</a> from 2022 and 2023.</li>
          <li>Statistics on what percentage of superannuation it would take to fund the transition to renewable energy from <a href="https://www.uts.edu.au/isf/news/supercharging-road-100-clean-energy" target="_blank">UTS research, funded by Future Super</a>.</li>
          <li>Find out more about <a href="https://www.futuresuper.com.au/how-we-invest/" target="_blank">how Future Super screens</a> investments and what we invest in.</li>
          <li> Check out the <a href="https://divestmentdatabase.org/" target="_blank">Divestment Database</a>. The database tracks declared commitments to divestment. It’s not an indication of the amount actually divested from fossil fuels already, as investors will be at different stages of divestment. It also may omit some divestment commitments.</li>
          <li> Wealth of Bernard Arnault, Jeff Bezos, Elon Musk and Bill Gates from <a href="https://www.forbes.com/billionaires/" target="_blank">Forbes</a> on 5 July 2023.</li>
          <li> Value of Apple shares (market c ap) from <a href="https://finance.yahoo.com/quote/AAPL/" target="_blank">Yahoo Finance</a> on 5 July 2023.</li>
        </ul>



      </div>

      <div class="container  container--width download-section__disclaimer">
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

    &-main{
      background-color: #161616;
    }
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

      z-index: 10;
    }

    &::after{
      bottom: -5%;
      left: 0;

      @media (min-width: 864px) {
        bottom: 0;
        right: -20%;
        left: auto;
        opacity: 20%;
      }
    }

    &::before{
      top: -5%;
      right: -35%;
      transform: rotate(18deg);

      @media (min-width: 864px) {
        top: 0;
        right: -20%;
        opacity: 20%;
      }
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

      @media (min-width: 864px) {
        font-size: 5.625rem;
        br{
          display: none;
        }
      }
    }

    &__content{
      font-size: 1.25rem;
      margin-bottom: 50px;
      animation: fadeIn 0.5s ease-in-out;

      position: relative;

      @media (min-width: 864px) {
        font-size: 1.75rem;
        p{
          margin: 0;
        }
      }

      &::after{
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

        @media (min-width: 864px) {
          left: -20%;
          opacity: 20%;
        }
      }

    }
  }

  .explain-section{
    display: flex;
    align-items: center;
    min-height: 100vh;
    position: relative;
    justify-content: stretch;

    scroll-snap-align: center;

    &--first{
      position: relative;
      &::before{
        content: "";
        position: absolute;
        width: 400px;
        height: 200px;
        background-color: $green;

        filter: blur(50px);
        opacity: 10%;
      }

      &::before{
        bottom: -5%;
        right: -75%;
        transform: rotate(18deg);

        @media (min-width: 600px) {
          right: -20%;
          opacity: 20%;
        }
      }
    }

    &--second{
      position: relative;
      &::before{
        content: "";
        position: absolute;
        width: 400px;
        height: 200px;
        background-color: $green;

        filter: blur(50px);
        opacity: 10%;
      }

      &::before{
        bottom: -5%;
        left: -75%;
        transform: rotate(-18deg);

        @media (min-width: 864px) {
          left: -20%;
          opacity: 20%;
        }
      }
    }

    &--last{
    }

    &__content{
      display: flex;
      align-items: start;
      gap: 0.5rem;
      width: 100%;

      position: relative;

      &--icon{
        svg{
          width: 24px;
          height: 28px;

          @media (min-width: 864px) {
            width: 30px;
            height: 36px;

          }
        }
      }

      &--heading{
        cursor: pointer;
        margin: 0;
        font-size: 1.75rem;
        font-weight: bold;
        font-family: 'FutureSuperFeature';

        @media (min-width: 864px) {
          font-size: 2.5rem;

        }
      }

      &--text{
        font-size: 1.25rem;

        @media (min-width: 864px) {
          font-size: 1.75rem;
        }
      }
    }
  }

  .balance-section{
    position: relative;
    min-height: 750px;
    display: flex;
    flex-direction: column-reverse;
    overflow-x: clip;

    scroll-snap-align: start;

    & .down-arrow{
      bottom: 200px;
    }

    &__circle{
      pointer-events: none;
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
    }

    &__balance{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: $black;
      max-width: 320px;
      width: 100%;


      &--heading{
        font-size: 3.25rem;
        font-weight: 900;
        font-family: 'FutureSuperFeature';
        display: flex;
        flex-direction: column;
        line-height: 1;
        align-items: center;
        margin-bottom: 0.625rem;
      }
      &--description{
        font-size: 1.44rem;

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
    max-width: 1024px;
    margin: 0 auto;

    &:global(.snap){

      scroll-snap-type: y mandatory;
    }
  }

  #journeySectionEnd{
    padding-top: 0;
    height: 10px;
    margin-top: -10px;
  }

  .journey-section, .journey-section-2{
    position: relative;

    width: 100%;

    max-width: 1024px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    animation: bigger 1s ease-in-out;
    background-image: radial-gradient(#424242 8px, transparent 8px);
    background-size: 24px 24px;

    background-position: 50% 0;
    padding-top: 1px;




      z-index: 1;

    &__content{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      scroll-snap-align: start;
      position: relative;
      //margin-top: auto;
      //padding-top: 60%;
      height: 460px;

      &--top{
        justify-content: start;
        margin-top: 0;
        padding-top: 0;
      }

      &--form{
        justify-content: start;
        padding-top: 100px;
      }

      &--wrong{
        & > .journey-section__block{
        }

        & > .active-dot-set{
          top: 297px;


          @media (min-width: 500px) {
            top: 290px;
          }



          @media (min-width: 769px) {
            top: 292px;
          }


          @media (min-width: 1024px) {
            top: 297px;
          }

        }
      }

      &--right{
        & > .journey-section__block{
          //margin-bottom: -13px;
        }

        & > .active-dot-set{
          top: 297px;


          @media (min-width: 500px) {
            top: 292px;
          }


          @media (min-width: 1024px) {
            top: 297px;
          }
        }
      }

      &--amount-more{

        & > .active-dot-set{
          top: 294px;


          @media (min-width: 500px) {
            top: 300px;
          }



          @media (min-width: 769px) {
            top: 294px;
          }

        }
      }
    }
      &__block{
        position: static;
        top: 0;
        padding: 0.5rem 2.5rem;
        background-color: rgba(21,21,21, 0.85);
        font-size: 1.25rem;
        z-index: 3;
        width: 100%;

        @media (min-width: 864px) {
          font-size: 1.75rem;

        }

        @media (min-width: 768px) {
          text-align: center;
        }

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

        &--wrong{
          margin-bottom: -30px;
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
      animation: smallest 0.4s ease-in-out;
      background-image: radial-gradient(#424242 1px, transparent 2px);
      background-size: 3px 3px;
      //transition: all 1.5s ease-in-out;
    }
    }

  .journey-section{
    justify-content: space-between;
    z-index: 2;
  }

  .journey-section-2{
    justify-content: space-around;
    @media (max-width: 1024px) {
      margin-top: -10px;
    }
    @media (max-width: 768px) {
      margin-top: -13px;
    }
    @media (max-width: 500px) {
      margin-top: -15px;
    }


    @media (min-width: 1024px) {
      margin-top: -16px;
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
    top: 2.7px;
    left: 49.9%;
    transform: translateX(-50%) scale(1.06);
    position: absolute;
    background-color: #161616;

    &:global(.show){
      background-color: $green;
    }

    @media (min-width: 864px) {
      left: 50%;
    }
  }

  .active-dot-set{
    display: flex;
    column-gap: 7.5px;
    row-gap: 7.5px;
    flex-wrap: wrap;
    z-index: 2;
    max-width: 306px;
    width: 100%;

    @media (min-width: 417px) {
      max-width: 354px;
    }

    @media (min-width: 465px) {
      max-width: 401px;
    }

    @media (min-width: 520px) {
      max-width: 449px;
    }

    @media (min-width: 570px) {
      max-width: 497px;
    }

    @media (min-width: 620px) {
      max-width: 545px;
    }

    @media (min-width: 660px) {
      max-width: 593px;
    }

    @media (min-width: 710px) {
      max-width: 641px;
    }

    @media (min-width: 760px) {
      max-width: 689px;
    }
    @media (min-width: 805px) {
      max-width: 737px;
    }

    @media (min-width: 900px) {
      max-width: 833px;
    }

    @media (min-width: 950px) {
      max-width: 881px;
    }

    @media (min-width: 1000px) {
      max-width: 929px;
    }

    position: absolute;
    top: 227px;
    left: 50%;
    transform: translateX(-50%);

    &__smaller{
      gap: 2px;
      margin-top: 12px;
      max-width: 340px;

      @media (min-width: 380px) {
        max-width: 352px;
      }

      @media (min-width: 400px) {
        max-width: 365px;
      }

      @media (min-width: 414px) {
        max-width: 376px;
      }

      @media (min-width: 430px) {
        max-width: 399px;
      }

      @media (min-width: 450px) {
        max-width: 412px;
      }

      @media (min-width: 465px) {
        max-width: 424px;
      }

      @media (min-width: 475px) {
        max-width: 436px;
      }

      @media (min-width: 485px) {
        max-width: 448px;
      }

      @media (min-width: 500px) {
        max-width: 460px;
      }

      @media (min-width: 510px) {
        max-width: 472px;
      }

      @media (min-width: 520px) {
        max-width: 484px;
      }

      @media (min-width: 535px) {
        max-width: 496px;
      }

      @media (min-width: 550px) {
        max-width: 508px;
      }

      @media (min-width: 560px) {
        max-width: 520px;
      }

      @media (min-width: 570px) {
        max-width: 532px;
      }

      @media (min-width: 585px) {
        max-width: 544px;
      }

      @media (min-width: 595px) {
        max-width: 556px;
      }


      @media (min-width: 605px) {
        max-width: 568px;
      }

      @media (min-width: 620px) {
        max-width: 580px;
      }

      @media (min-width: 630px) {
        max-width: 592px;
      }

      @media (min-width: 640px) {
        max-width: 604px;
      }

      @media (min-width: 650px) {
        max-width: 616px;
      }

      @media (min-width: 660px) {
        max-width: 628px;
      }

      @media (min-width: 670px) {
        max-width: 640px;
      }

      @media (min-width: 690px) {
        max-width: 664px;
      }

      @media (min-width: 710px) {
        max-width: 688px;
      }

      @media (min-width: 740px) {
        max-width: 700px;
      }

      @media (min-width: 760px) {
        max-width: 724px;
      }

      @media (min-width: 790px) {
        max-width: 748px;
      }

      @media (min-width: 810px) {
        max-width: 772px;
      }

      @media (min-width: 835px) {
        max-width: 796px;
      }

      @media (min-width: 870px) {
        max-width: 832px;
      }

      @media (min-width: 895px) {
        max-width: 856px;
      }

      @media (min-width: 920px) {
        max-width: 880px;
      }

      @media (min-width: 940px) {
        max-width: 904px;
      }

      @media (min-width: 965px) {
        max-width: 928px;
      }

      @media (min-width: 990px) {
        max-width: 952px;
      }

      @media (min-width: 1015px) {
        max-width: 977px;
      }

      @media (min-width: 1024px) {
        max-width: 988px;
      }

      &--1{
        top: 300px;

        @media (min-width: 393px) {
          top: 288px;
        }

        @media (min-width: 480px) {
          top: 282px;
        }

        @media (min-width: 670px) {
          top: 270px;
        }



        @media (min-width: 769px) {
          top: 271px;
        }

        @media (min-width: 864px) {
          top: 295px;
        }

        @media (min-width: 906px) {
          top: 283px;
        }


        @media (min-width: 1024px) {
          top: 282px;
        }

      }

      &--2{
        top: 290px;

        @media (min-width: 395px) {
          top: 278px;
        }

        @media (min-width: 500px) {
          top: 280px;
        }

        @media (min-width: 505px) {
          top: 268px;
        }

        //@media (min-width: 670px) {
        //  top: 270px;
        //}



        @media (min-width: 769px) {
          top: 271px;
        }

        @media (min-width: 864px) {
          top: 282px;
        }


        @media (min-width: 1024px) {
          top: 278px;
        }
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
    pointer-events: none;
    overflow: clip;
    height: 2600px;
    position: relative;
    margin-top: -1px;
    &__circle{
      display: flex;
      justify-content: center;
      align-items: center;

      &--1, &--2, &--3{
        position: absolute;
        left: 50%;
        height: 100vh;
        aspect-ratio: 1 /1;
        @media (min-width: 900px) {
          aspect-ratio: 1.225 /1;
        }
        border-radius: 500px;
        transform-origin: bottom;
        transition: all ease-in-out;

      }

      &--1{
        background-color: #161616;
        z-index: 1;
        transform: translateX(-50%) scale(1) translateZ(0);
        border-radius: 0 0 50% 50%;
        max-width: 1024px;

        @media (min-width: 600px) {
          transform: translateX(-50%) scale(1.65) translateZ(0);
        }

        background-image:  radial-gradient(#424242 1.3px, transparent 2px);
        background-size: 6px 6px;

        &:global(.animate-small) {
          //Smaller dots
          animation: smallest 0.4s ease-in-out;
          background-image: radial-gradient(#424242 1px, transparent 2px);
          background-size: 3px 3px;

          //transition: all 1.5s ease-in-out;
        }

        &:global(.animate-smallest) {
          //Smaller dots
          background-image: radial-gradient(#424242 1.3px, transparent 2px);
          background-size: 1px 1px;
          //transition: all 1.5s ease-in-out;
        }
        //opacity: 0;
        //transition: opacity 1s ease-in-out;
      }

      &--2{
        @media (min-width: 900px) {
          aspect-ratio: 1 /1;
        }
        background-color: #303030;
        transform: translateX(-50%) scale(0.0567) translateZ(0);
        bottom: 4px;
        z-index: 2;
       & > div {
          transition: opacity 1s ease-in-out;
        }

      }

      &--3{
        @media (min-width: 900px) {
          aspect-ratio: 1 /1;
        }
        background-color: $green;
        color: #212121;
        transform: translateX(-50%) scale(0.0126) translateZ(0);
        bottom: 5px;
        z-index: 3;

        & > div {
          transition: opacity 1s ease-in-out;
        }



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
      z-index: 1;


      &--heading{
        color: $green;
        font-size: 6rem;
        font-weight: 900;
        font-family: 'FutureSuperFeature';

        @media (min-width: 900px) {
          font-size: 6.5rem;
        }

        br{
          display: block;

          @media (min-width: 900px) {
            display: none;
          }
        }

        &-1{
          font-size: 4.5rem;
        }
      }

      &--description{
        max-width: 35rem;
        margin: 0 auto;
        font-size: 2rem;
        color: #E0E0E0;
        font-weight: 400;

        &-1{
          max-width: 22rem;
          @media (min-width: 900px) {
            max-width: 35rem;
          }
        }


      }
    }
  }

  .amount-section-info{
    padding: 10.125rem 0;
    font-size: 1.25rem;
    background-color: #212121;
    position: relative;
    @media (min-width: 864px) {
      font-size: 1.75rem;
    }
    &::before{
      content: "";
      position: absolute;
      width: 400px;
      height: 200px;
      background-color: $green;

      filter: blur(50px);
      opacity: 10%;
      top: 15%;
      right: -55%;

      @media (min-width: 1024px) {
        display: none;
      }
    }
  }

  .download-section{
    border-radius: 40px 40px 0 0;
    background-color: #161616;
    &__heading{
      font-size: 1.875rem;
      color: #E0E0E0;
      padding: 40px 40px 0 40px;

      max-width: 1024px;
      margin-left: auto;
      margin-right: auto;

      @media (min-width: 864px) {
        font-size: 3.375rem;
        max-width: 615px;
        margin-left: 40px;
        padding-left: 0;
        padding-right: 0;
      }

    }

    &__images{
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: center;
      gap: 4rem;

      @media (min-width: 864px) {
        flex-direction: row-reverse;
        justify-content: start;
        gap: 9rem;
        padding: 0 40px 0 40px;
      }
    }

    &__actions{
      display: flex;
      align-items: center;
      gap: 1rem;
      position: relative;
      z-index: 10;
      &--buttons{
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      &--qr{
        @media (max-width: 864px) {
          display: none;
        }
      }

    }

    &__action{
      background-color: #161616;
      border-radius: 40px;
      overflow-y: clip;
      overflow-x: clip;
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
        @media (min-width: 864px) {
          width: fit-content;
        }

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

          @media (min-width: 864px) {
            width: 200%;
            height: 100%;
            top: 40%;
            left: -50%;
            opacity: 70%;
          }

        }

        &-mobile{
          @media (min-width: 864px) {
            display: none;
          }
        }
        &-desktop{
          @media (max-width: 864px) {
            display: none;
          }
        }
      }

      &--button{
        max-width: 230px;

        &-hide{
          @media (max-width: 864px) {
            display: none;
          }

        }
      }

      &--wrapper{
        border-radius: 0 0 40px 40px;
        background-color: #212121;
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


    &--width{
      max-width: 1024px;
      margin-left: auto;
      margin-right: auto;
    }
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
      background-size: 24px 24px;
    }

    100% {
      background-image: radial-gradient(#424242 1.3px, transparent 1px), radial-gradient(#424242 1.3px, transparent 2px);
      background-size: 6px 6px;

    }
  }

  @keyframes smallest {
    0% {
      background-image: radial-gradient(#424242 1.3px, transparent 1px);
      background-size: 6px 6px;
    }

    100% {
      background-image: radial-gradient(#424242 1px, transparent 2px);
      background-size: 3px 3px;

    }
  }

  @keyframes bigger {
    0% {
      background-image: radial-gradient(#424242 1.3px, transparent 1px), radial-gradient(#424242 1.3px, transparent 2px);
      background-size: 6px 6px;

    }

    100% {
      background-size: 24px 24px;
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

  .down-arrow{
    position: absolute;
    bottom: -200px;
    right: 0;
    animation: bounce 1s infinite;
    z-index: 100;
    cursor: pointer;
    padding: 5px;
    display: none;

    @media (min-width: 864px) {
      width: 78px;
      height: 78px;

    }

    //&:global(.hide){
    //  opacity: 0;
    //  transition: opacity 0.1s;
    //}

    //&:global(.show){
    //  opacity: 1;
    //}

  }

  @keyframes bounce {
    0%{
      transform: translateY(10%);
    }

    50%{
      transform: translateY(0);
    }
    100%{
      transform: translateY(10%);
    }
  }

  :global( .show-arrow){
    .down-arrow{
      display: block;
    }
  }

  .block-quote{
    position: relative;
    margin: 68px 0;
    &::before{
      position: absolute;
      content: "";
      border: 2px solid #008400;
      border-radius: 25px;
      height: 100%;
      width: 8px;
      left: -25px;
    }

    &__content{
      font-size: 1.75rem;
      font-weight: bold;

      @media (min-width: 864px) {
        font-size: 3rem;
      }

    }
  }

  .counter{
    display: flex;
    align-items: center;
    font-size: 3.25rem;
    font-weight: 900;
    font-family: 'FutureSuperFeature';
    &__sets{
      max-height: 52px;
      width: 36px;
      overflow: hidden;
      &--set{
        display: flex;
        flex-direction: column;
        align-items: center;
        transform: translateY(0);
        span{
          line-height: 1;
        }
      }

      &--hundreds{
        transform: translateY(-52px);

        &:global(.count){
          transition: transform 0.25s ease-in-out;
          transform: translateY(-104px);
          transition-delay: 1.3s;
        }
      }

      &--tens{
        //animation: fullCount 0s;

        &:global(.count){
          animation: fullCount 1.5s 1;
        }
      }

      &--singles{
        //animation: fullCountSmooth 0s;
        //transform: translateY(0);


        &:global(.count){
          animation: fullCountSmooth 0.15s 10;
        }
      }
    }

  }

  @keyframes fullCount {
    0%{
      transform: translateY(0);
    }

    10%{
      transform: translateY(-52px);
    }

    20%{
      transform: translateY(-104px);
    }
    30%{
      transform: translateY(-156px);
    }
    40%{
      transform: translateY(-208px);
    }
    50%{
      transform: translateY(-260px);
    }
    60%{
      transform: translateY(-312px);
    }
    70%{
      transform: translateY(-364px);
    }
    80%{
      transform: translateY(-416px);
    }
    90%{
      transform: translateY(-468px);
    }
    100%{
      transform: translateY(-520px);
    }
  }

  @keyframes fullCountSmooth {
    0%{
      transform: translateY(0);
    }

    100%{
      transform: translateY(-520px);
    }
  }


  @keyframes countOne {
    0%{
      transform: translateY(-52px);
    }

    50%{
      transform: translateY(-104px);
    }

    100%{
      transform: translateY(-104px);
    }
  }

  .hasArrow{
    //position: relative;
  }

.p-0{
  padding: 0;
}

.overflow-x-clip{
  overflow-x:clip;
}
</style>
