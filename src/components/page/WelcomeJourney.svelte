<script>
  import { onMount } from "svelte";

  //Green dots
  const firstActiveSet = 37;
  const secondActiveSet = 11;
  const thirdActiveSet = 273;
  const fourthActiveSet = 99;

  let guess = null;

  let scrollTop = 0;

  let scrollSection;

  let downArrow;

  let explainSectionLast;

  function scrollToNextSection(section){
    scrollSection.classList.add('snap');
    let el = document.querySelector(section);
    el.scrollIntoView({behavior: "smooth"});
  }

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
    let timer = null;

    const observerArrow = new IntersectionObserver((entries) =>{
      entries.forEach((entry) =>{
        if(entry.isIntersecting){
          if(timer){
            clearTimeout(timer);
            timer = null;
          }
          timer = setTimeout(() =>{
            entry.target.parentElement.classList.add('show-arrow')
          }, 4000);

        }else{
          entry.target.parentElement.classList.remove('show-arrow')
        }
      })
    })
    const arrowElements = document.querySelectorAll('.hasArrow');
    arrowElements.forEach((el) => observerArrow.observe(el));

    downArrow = document.querySelector('.down-arrow');


    scrollSection = document.querySelector('.scroll-section');

    const heroSectionHeight = (document.querySelector('.hero-section').clientHeight);
    const balanceSection = document.querySelector('.balance-section');
    const balanceSectionHeight = (document.querySelector('.balance-section').clientHeight);
    const amountSection = (document.querySelector('.amount-section'));
    const smallerDotsSection = (document.querySelector('.smaller-dots-bg'));
    const smallestDotsSection = (document.querySelector('.smallest-dots-bg'));

    scrollSection.addEventListener('scroll', function(e) {
      let circle = document.querySelector('.balance-section__circle');
      let circleText = document.querySelector('.balance-section__balance');
      let scale = Math.max(0.028, 1 - (e.target.scrollTop - (balanceSection.offsetTop)) / 400);


      const singleCircle = document.querySelector('.top-dot');
      const circleTop = circle.getBoundingClientRect().top;
      const dotGrid = document.querySelector('.journey-section');
      const dotGridTop = dotGrid.getBoundingClientRect().top;

      // const test = document.getElementById('journeySection11');
      //
      // console.log(test.offsetTop);


      const firstBigCircle = document.querySelector('.amount-section__circle--1');
      const secondBigCircle = document.querySelector('.amount-section__circle--2 > div');
      const thirdBigCircle = document.querySelector('.amount-section__circle--3 > div');


      const scrollSectionContentLast = document.querySelector('.journey-section__content--last');

      const explainSectionFirst = document.querySelector('.explain-section--first');
      const explainSectionSecond = document.querySelector('.explain-section--second');
      explainSectionLast = document.querySelector('.explain-section--last')


      const counterHundreds = document.querySelector('.counter__sets--hundreds');
      const counterTens = document.querySelector('.counter__sets--tens');
      const counterSingles = document.querySelector('.counter__sets--singles');


      scrollTop = e.target.scrollTop;

      // e.target.scrollTop >= (heroSectionHeight - (balanceSectionHeight - circle.clientHeight - 200))

      if(e.target.scrollTop >= balanceSection.offsetTop ){
        //Start the counter
        counterSingles.style.transform = 'translateY(-520px)';
        counterTens.style.transform = 'translateY(-520px)';
        counterHundreds.style.transform = 'translateY(-104px)';

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
      }else{
        dotGrid.classList.remove('animate');
      }


      if(e.target.scrollTop >= (smallestDotsSection.offsetTop - 600)){
        dotGrid.classList.add('animate-small');
        firstBigCircle.style.opacity = '1';
      }else{
        dotGrid.classList.remove('animate-small');
        firstBigCircle.style.opacity = '0';
      }


      // let circlePosition = amountSection.offsetTop + amountSection.clientHeight + heroSectionHeight;
      let scrollTopOffset = e.target.scrollTop - (amountSection.offsetTop - 175);


      let scaleOne = Math.max(1, 1 + (scrollTopOffset / 50));
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
      if((e.target.scrollTop >= (amountSection.offsetTop -  175)) && top < 20){
        //Ramp up the zoom speed for the last circle as there is quite a bit of scrolling required to get to the end
        firstBigCircle.style.transform = `translateX(-50%) scale(${scaleOne <= 16 ? scaleOne : scaleTwo})  translateZ(0)`;
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

      let snapSectionWithDots = e.target.scrollTop > dotGrid.offsetTop && e.target.scrollTop <= (scrollSectionContentLast.offsetTop + dotGrid.offsetTop + 20);
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

      <div class="container">
        <div class="explain-section explain-section--first">
          <div class="explain-section__content hasArrow">
            <div>
              <svg width="24" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12L12 5L21 12V23C21 23.5304 20.7893 24.0391 20.4142 24.4142C20.0391 24.7893 19.5304 25 19 25H5C4.46957 25 3.96086 24.7893 3.58579 24.4142C3.21071 24.0391 3 23.5304 3 23V12Z" stroke="#3DFA52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 25V17H15V25" stroke="#3DFA52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>


            <div class=" ">
              <p class="explain-section__content--heading">$1.3 million</p>
              <p class="explain-section__content--text">It’s the median house price in Sydney</p>
            </div>
          </div>

          <svg on:click="{() => scrollToNextSection('#explainSection2')}" class="down-arrow" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Arrow Down">
              <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M21.0831 32.6992L16.2743 27.1759L14.8916 28.3798L21.3083 35.7498L22.691 35.7498L29.1076 28.3798L27.7249 27.1759L22.9165 32.6988L22.9165 8.25269L21.0831 8.25269L21.0831 32.6992Z" fill="#3DFA52"/>
            </g>
          </svg>
        </div>

        <div id="explainSection2" class="explain-section explain-section--second">
          <div class="explain-section__content hasArrow">
            <div>
              <svg width="24" height="28" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          </div>


          <svg on:click="{() => scrollToNextSection('#explainSection3')}" class="down-arrow" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Arrow Down">
              <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M21.0831 32.6992L16.2743 27.1759L14.8916 28.3798L21.3083 35.7498L22.691 35.7498L29.1076 28.3798L27.7249 27.1759L22.9165 32.6988L22.9165 8.25269L21.0831 8.25269L21.0831 32.6992Z" fill="#3DFA52"/>
            </g>
          </svg>
        </div>

        <div id="explainSection3" class="explain-section explain-section--last">
          <div class="explain-section__content hasArrow">
            <div>
              <svg width="24" height="28" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          </div>

          <svg on:click="{() => scrollToNextSection('#bigCircle')}" class="down-arrow" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Arrow Down">
              <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M21.0831 32.6992L16.2743 27.1759L14.8916 28.3798L21.3083 35.7498L22.691 35.7498L29.1076 28.3798L27.7249 27.1759L22.9165 32.6988L22.9165 8.25269L21.0831 8.25269L21.0831 32.6992Z" fill="#3DFA52"/>
            </g>
          </svg>
        </div>
      </div>

      <span id="bigCircle"></span>
    </section>

    <section  class="balance-section">
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
    </section>

    <div class="journey-section">
      <div class="journey-section__content journey-section__content--top">
        <div class="active-dot top-dot"></div>
        <div class="journey-section__block journey-section__block--top hasArrow">
          <p>
            That's a lot of money right? But Australian's have more in their super, way more. <span class="highlighted--white"><strong>$3.4 trillion</strong> <span class="reference text-muted">3</span></span> to be precise. We can use that super to fight back against climate change.
            <br><br>That makes <span class="highlighted">$1.3 million</span> look like just a tiny dot.
        </div>

        <svg on:click="{() => scrollToNextSection('#journeySection2')}" class="down-arrow" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Arrow Down">
            <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M21.0831 32.6992L16.2743 27.1759L14.8916 28.3798L21.3083 35.7498L22.691 35.7498L29.1076 28.3798L27.7249 27.1759L22.9165 32.6988L22.9165 8.25269L21.0831 8.25269L21.0831 32.6992Z" fill="#3DFA52"/>
          </g>
        </svg>
      </div>

      <div id="journeySection2" class="journey-section__content">
        <div class="journey-section__block journey-section__block--all hasArrow">
          <p>
            First up, let’s have a think about what <span class="highlighted--white"><strong>$3.4 trillion</strong></span> could do!</p>
        </div>

        <svg on:click="{() => scrollToNextSection('#journeySection3')}" class="down-arrow" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Arrow Down">
            <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M21.0831 32.6992L16.2743 27.1759L14.8916 28.3798L21.3083 35.7498L22.691 35.7498L29.1076 28.3798L27.7249 27.1759L22.9165 32.6988L22.9165 8.25269L21.0831 8.25269L21.0831 32.6992Z" fill="#3DFA52"/>
          </g>
        </svg>
      </div>


      <div  id="journeySection3" class="journey-section__content  journey-section__content--form">
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
          <section class="journey-section__block journey-section__block--all hasArrow">

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

          <svg on:click="{() => scrollToNextSection('#journeySection4')}" class="down-arrow" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Arrow Down">
              <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M21.0831 32.6992L16.2743 27.1759L14.8916 28.3798L21.3083 35.7498L22.691 35.7498L29.1076 28.3798L27.7249 27.1759L22.9165 32.6988L22.9165 8.25269L21.0831 8.25269L21.0831 32.6992Z" fill="#3DFA52"/>
            </g>
          </svg>
        </div>



      <div id="journeySection4" class="journey-section__content">
        <section class="journey-section__block hasArrow">
          <p>
            If we wanted to do even better than 100% renewable energy, and decarbonise the entire Australian economy - including transitioning transport and industry away from fossil fuels - the bill would be bigger, but maybe not by as much as you think. <span class="reference text-muted">6</span>
          </p>
        </section>

        <svg on:click="{() => scrollToNextSection('#journeySection5')}" class="down-arrow" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Arrow Down">
            <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M21.0831 32.6992L16.2743 27.1759L14.8916 28.3798L21.3083 35.7498L22.691 35.7498L29.1076 28.3798L27.7249 27.1759L22.9165 32.6988L22.9165 8.25269L21.0831 8.25269L21.0831 32.6992Z" fill="#3DFA52"/>
          </g>
        </svg>
      </div>

        <div id="journeySection5" class="journey-section__content">
          <section class="journey-section__block journey-section__block--2 hasArrow">
            <p>
              It would take about 9.5% of that $3.4 trillion. Just <span class="highlighted">2.3%</span> more. <span class="reference text-muted">7</span>
            </p>
          </section>
          <div class="active-dot-set">
            {#each Array(secondActiveSet) as _, index (index)}
              <div style="transition-delay: {index * 100}ms" class="active-dot hidden"></div>
            {/each}
          </div>

          <svg on:click="{() => scrollToNextSection('#journeySection6')}" class="down-arrow" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Arrow Down">
              <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M21.0831 32.6992L16.2743 27.1759L14.8916 28.3798L21.3083 35.7498L22.691 35.7498L29.1076 28.3798L27.7249 27.1759L22.9165 32.6988L22.9165 8.25269L21.0831 8.25269L21.0831 32.6992Z" fill="#3DFA52"/>
            </g>
          </svg>
        </div>

        <div id="journeySection6" class="journey-section__content">
          <section class="journey-section__block journey-section__block--all hasArrow">
            <p>
              For decades now, climate activists have been fighting to get institutions all over the world - including super funds - to divest. <span class="reference text-muted">8</span>
            </p>
          </section>

          <svg on:click="{() => scrollToNextSection('#journeySection7')}" class="down-arrow" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Arrow Down">
              <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M21.0831 32.6992L16.2743 27.1759L14.8916 28.3798L21.3083 35.7498L22.691 35.7498L29.1076 28.3798L27.7249 27.1759L22.9165 32.6988L22.9165 8.25269L21.0831 8.25269L21.0831 32.6992Z" fill="#3DFA52"/>
            </g>
          </svg>
        </div>

        <div id="journeySection7" class="journey-section__content">
          <section class="journey-section__block journey-section__block--all hasArrow">
            <p>
              What is divestment? It’s refusing to invest in the fossil fuel companies that are causing catastrophic climate change. <span class="reference text-muted">9</span>
            </p>
          </section>

          <svg on:click="{() => scrollToNextSection('#journeySection8')}" class="down-arrow" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Arrow Down">
              <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M21.0831 32.6992L16.2743 27.1759L14.8916 28.3798L21.3083 35.7498L22.691 35.7498L29.1076 28.3798L27.7249 27.1759L22.9165 32.6988L22.9165 8.25269L21.0831 8.25269L21.0831 32.6992Z" fill="#3DFA52"/>
            </g>
          </svg>
        </div>
        <div id="journeySection8" class="journey-section__content">
          <section class="journey-section__block journey-section__block--all hasArrow">
            <p>
              In Australia, some super funds invest in fossil fuel companies but say they’ll pressure them to behave responsibly. <span class="reference text-muted">10</span> But at Future Super, we screen out fossil fuel companies from what we call our “investable universe”. <span class="reference text-muted">11</span>
            </p>
          </section>

          <svg on:click="{() => scrollToNextSection('#journeySection9')}" class="down-arrow" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Arrow Down">
              <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M21.0831 32.6992L16.2743 27.1759L14.8916 28.3798L21.3083 35.7498L22.691 35.7498L29.1076 28.3798L27.7249 27.1759L22.9165 32.6988L22.9165 8.25269L21.0831 8.25269L21.0831 32.6992Z" fill="#3DFA52"/>
            </g>
          </svg>
        </div>
        <div id="journeySection9" class="journey-section__content">
          <section class="journey-section__block journey-section__block--all hasArrow">
            <p>
              Future Super is just a tiny drop in the global divestment movement.
            </p>
          </section>

          <svg on:click="{() => scrollToNextSection('#journeySection10')}" class="down-arrow" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Arrow Down">
              <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M21.0831 32.6992L16.2743 27.1759L14.8916 28.3798L21.3083 35.7498L22.691 35.7498L29.1076 28.3798L27.7249 27.1759L22.9165 32.6988L22.9165 8.25269L21.0831 8.25269L21.0831 32.6992Z" fill="#3DFA52"/>
            </g>
          </svg>
        </div>
        <div id="journeySection10" class="journey-section__content">
          <section class="journey-section__block journey-section__block--all hasArrow">
            <p>
              After so much scrolling, you might have forgotten - all these tiny dots are still representing that <span class="highlighted--white"><strong>$3.4 trillion</strong></span> pool of super. And yep, that’s a lot of dots!
            </p>
          </section>

          <svg on:click="{() => scrollToNextSection('#journeySection11')}" class="down-arrow" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Arrow Down">
              <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M21.0831 32.6992L16.2743 27.1759L14.8916 28.3798L21.3083 35.7498L22.691 35.7498L29.1076 28.3798L27.7249 27.1759L22.9165 32.6988L22.9165 8.25269L21.0831 8.25269L21.0831 32.6992Z" fill="#3DFA52"/>
            </g>
          </svg>
        </div>
        <div id="journeySection11" class="journey-section__content">
          <section class="journey-section__block journey-section__block--all hasArrow">
            <p>
              But <span class="highlighted--white"><strong>$3.4 trillion</strong></span> is about to look like nothing. Wait until you see how big the divestment movement is....
            </p>
          </section>

          <svg on:click="{() => scrollToNextSection('#journeySection12')}" class="down-arrow" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Arrow Down">
              <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M21.0831 32.6992L16.2743 27.1759L14.8916 28.3798L21.3083 35.7498L22.691 35.7498L29.1076 28.3798L27.7249 27.1759L22.9165 32.6988L22.9165 8.25269L21.0831 8.25269L21.0831 32.6992Z" fill="#3DFA52"/>
            </g>
          </svg>
        </div>

      <div id="journeySection12" class="journey-section__content">
        <section class="journey-section__block journey-section__block--all hasArrow">
          <p>
            The Divestment Database keeps track of all the institutions - like universities, charities and international pension funds - that have committed to divesting fossil fuels. <span class="reference text-muted">12</span>
          </p>
        </section>

        <svg on:click="{() => scrollToNextSection('#journeySection13')}" class="down-arrow" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Arrow Down">
            <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M21.0831 32.6992L16.2743 27.1759L14.8916 28.3798L21.3083 35.7498L22.691 35.7498L29.1076 28.3798L27.7249 27.1759L22.9165 32.6988L22.9165 8.25269L21.0831 8.25269L21.0831 32.6992Z" fill="#3DFA52"/>
          </g>
        </svg>
      </div>

        <div id="journeySection13" class="journey-section__content">
          <section class="journey-section__block journey-section__block--all hasArrow">
            <p>
              To offer some perspective - the wealth of Elon Musk, Jeff Bezos and Bill Gates combined is about <span class="highlighted">$600 billion</span>, that’s those green dots. <span class="reference text-muted">13</span>
            </p>
          </section>
          <div class="active-dot-set active-dot-set__smaller active-dot-set__smaller--1">
            {#each Array(thirdActiveSet) as _, index (index)}
              <div style="transition-delay: {index * 15}ms" class="active-dot hidden active-dot__smaller"></div>
            {/each}
          </div>

          <svg on:click="{() => scrollToNextSection('#journeySection14')}" class="down-arrow" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Arrow Down">
              <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M21.0831 32.6992L16.2743 27.1759L14.8916 28.3798L21.3083 35.7498L22.691 35.7498L29.1076 28.3798L27.7249 27.1759L22.9165 32.6988L22.9165 8.25269L21.0831 8.25269L21.0831 32.6992Z" fill="#3DFA52"/>
            </g>
          </svg>
        </div>


        <div id="journeySection14" class="journey-section__content smaller-dots-bg">
          <section class="journey-section__block journey-section__block--all hasArrow">
            <p>
              What does the fortune of the world’s richest man look like? Here’s Bernard Arnault’s <span class="highlighted">$316 billion.</span> <span class="reference text-muted">14</span>
            </p>
          </section>
          <div class="active-dot-set active-dot-set__smaller active-dot-set__smaller--2">
            {#each Array(fourthActiveSet) as _, index (index)}
              <div style="transition-delay: {index * 15}ms" class="active-dot hidden active-dot__smaller"></div>
            {/each}
          </div>

          <svg on:click="{() => scrollToNextSection('#journeySection15')}" class="down-arrow" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Arrow Down">
              <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M21.0831 32.6992L16.2743 27.1759L14.8916 28.3798L21.3083 35.7498L22.691 35.7498L29.1076 28.3798L27.7249 27.1759L22.9165 32.6988L22.9165 8.25269L21.0831 8.25269L21.0831 32.6992Z" fill="#3DFA52"/>
            </g>
          </svg>
        </div>

        <div id="journeySection15" class="journey-section__content journey-section__content--last">
          <section class="journey-section__block journey-section__block--all hasArrow">
            <p>
              You’re probably starting to wonder... what do all those tiny dots add up to?
            </p>
          </section>
          <svg on:click="{() => scrollToNextSection('#amountSection')}" class="down-arrow" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Arrow Down">
              <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M21.0831 32.6992L16.2743 27.1759L14.8916 28.3798L21.3083 35.7498L22.691 35.7498L29.1076 28.3798L27.7249 27.1759L22.9165 32.6988L22.9165 8.25269L21.0831 8.25269L21.0831 32.6992Z" fill="#3DFA52"/>
            </g>
          </svg>
        </div>

    </div>

    <section id="amountSection" class="amount-section journey-section__block--all smallest-dots-bg">
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
          <li> Value of Apple shares (market c ap) from <a href="https://finance.yahoo.com/quote/AAPL/" target="_blank">Yahoo Finance</a> on 5 July 2023.</li>
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
      bottom: -5%;
      left: 0;
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

      position: relative;

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
      }

    }
  }

  .explain-section{
    display: flex;
    align-items: center;
    min-height: 100vh;
    position: relative;

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
      }
    }

    &--last{
    }

    &__content{
      display: flex;
      align-items: start;
      gap: 0.5rem;

      &--heading{
        cursor: pointer;
        margin: 0;
        font-size: 28px;
        font-weight: bold;
        font-family: 'FutureSuperFeature';
      }

      &--text{
        font-size: 20px;
      }
    }
  }

  .balance-section{
    position: relative;
    min-height: 750px;
    display: flex;
    flex-direction: column-reverse;
    overflow-x: clip;
    pointer-events: none;
    scroll-snap-align: start;

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
    background-image: radial-gradient(#424242 8px, transparent 9px);
    background-size: 24.5px 23.5px;

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
      height: 100%;
      margin-top: 100%;
      padding-top: 50%;
      padding-bottom: 100%;

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

        opacity: 0;
        transition: opacity 1s ease-in-out;
      }

      &--2{
        background-color: #303030;
        transform: scale(0.0567) translateZ(0);
        bottom: 4px;
        left: 0;
        z-index: 2;
       & > div {
          transition: opacity 1s ease-in-out;
        }

      }

      &--3{
        background-color: $green;
        color: #212121;
        transform: scale(0.0126) translateZ(0);
        bottom: 5px;
        left: 0;
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
    position: relative;
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
    }
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

  .down-arrow{
    position: absolute;
    top: 70%;
    right: 0;
    animation: bounce 1s infinite;
    z-index: 100;
    cursor: pointer;
    padding: 5px;
    display: none;

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
    margin: 48px 0;
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
        transition: transform 6s ease-in-out;
        transform: translateY(-52px);
      }

      &--tens{
        transition: transform 4s ease-in-out;
        transform: translateY(-260px);
      }

      &--singles{
        transition: transform 2s ease-in-out;
        transform: translateY(0);
      }
    }

  }

</style>
