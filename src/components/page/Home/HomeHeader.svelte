<script>
  import pages from "../../../data/pages.json";

  const marqueeMessage = "Let&rsquo;s put it to work. ";

  import { onMount } from "svelte";

  const testGroups = {
    DOING: "Doing something about climate change",
    PEOPLE: "People power change",
  };

  const topPanelTestGroups = {
    ORIGINAL: "Original Future Super design",
    SIMPLIFIED: "New simplified design with a more obvious join"
  }

  let testGroup;
  let topPanelTestGroup;

  onMount(async () => {
    const rand = Math.random();
    testGroup = rand > 0.5 ? testGroups.DOING : testGroups.PEOPLE;

    topPanelTestGroup = topPanelTestGroups.SIMPLIFIED

    analytics.track("JoinForm ViewedByABTestParticipant", {
      testGroup,
    });
  });
</script>

{#if topPanelTestGroup === topPanelTestGroups.ORIGINAL}
  <div class="container">
    {#if testGroup === testGroups.PEOPLE}
      <h1>People Power Change. So Can Super.</h1>
    {:else}
      <h1>The super fund that’s doing something about climate&nbsp;change.</h1>
    {/if}
    <div class="text">
      <h3>Your super has the power to combat&nbsp;climate&nbsp;change.</h3>
      <a class="button" href={pages.JOIN[1]}>{pages.JOIN[0]}</a>
    </div>
  </div>
  <div class="marquee-container">
    <div class="marquee">
      {@html marqueeMessage}{@html marqueeMessage}{@html marqueeMessage}{@html marqueeMessage}{@html marqueeMessage}{@html marqueeMessage}
    </div>
  </div>
{:else}
  <div class="video-container">
    <div class="text-container">
      <h1>People power change</h1><h1>So can super.</h1>
      <h3 class="feature">Let's put it to work</h3>
      <div class="button-container">
        <a class="button" href={pages.JOIN[1]}>Join now</a>
      </div>
    </div>
    
    <video class="video" muted loop><!--<video autoplay muted loop>-->
        <source src="videos/FS_HomePage_Hero_02.mp4" type="video/mp4" />
    </video>
    
  </div>
{/if}


<style lang="scss">
  @use "../../../styles/" as *;
  h1 {
    max-width: 54%;
    line-height: 100%;
  }

  h3 {
    max-width: 40%;
    margin: 0;
    font-family: $regular;
  }

  .text {
    margin: 70px 0 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .marquee-container {
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  .marquee {
    margin: 0 -40px;
    font-family: $feature;
    color: $green;
    text-transform: uppercase;
    font-size: min(8vw, 160px);
    height: min(10vw, 200px);
    white-space: nowrap;
    overflow: hidden;
    animation: marquee 80s linear infinite;
  }

  @keyframes marquee {
    0% {
      text-indent: 0px;
    }
    100% {
      text-indent: -2000px;
    }
  }

  @media (max-width: 1280px) {
    h1 {
      max-width: 70%;
      font-size: 6vw;
    }
  }

  @media (max-width: 740px) {
    .container {
      padding: 40px;
      
      h1 {
        max-width: 100%;
        font-size: 40px;
      }

      .text {
        flex-direction: column-reverse;
        align-items: flex-start;
        margin: 20px 0 0px 0;
      }

      h3 {
        max-width: 100%;
        margin-top: 60px;
      }
    }
  }

  @media (max-width: 354px) {
    .container {
      h1 {
        font-size: 32px;
      }
    }
  }

  .video-container {
    
    .video {
      width: 100%;
    }

    .text-container {
      position:absolute; 
      width:100%;
      
      display:flex; 
      flex-direction:column; 
      align-items:center;
      text-align:center; 
      justify-content:center;

      h1 {
        margin-bottom: 0;
      }
      h3.feature {
        margin-top: 50px;
        max-width: 100%;
        text-transform: uppercase;
        font-family: $feature;
        font-size: 20px;
      }
    }    

    .button-container {
      width:90%;
      max-width: 313px;
      padding: 10px;
      margin-top: 50px;
    }

    .button-container {
      .button {
        width: 100%;
      }
    }
  }

  @media (max-width: 354px) {
    .video-container {
      height: 100vh;
      h1 {
        font-size:40px;
      }
      h3 {
        font-size: 16px;
      }

      .button-container {
        width: 90%;
        max-width: none;
      }
      
        
        
      
    }
  }
  
  
  
</style>
