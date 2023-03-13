<script>
  import moment from "moment";
  import Arrow from "../images/Arrow.svelte";
  import BCorpLogo from "../images/BCorpLogo.svelte";
  import Policies from "./Purpose/Policies.svelte";

  export let careers;
</script>

<section>
  <h2>Our current job openings</h2>
  {#if careers.length < 1}
    <p>We don't have any job openings at the moment. Please check back soon!</p>
  {:else}
    {#each careers as career}
      <a href={career.url}>
        <div class="career">
          <div>
            <h3>{career.title}</h3>
            <div class="career-details">
              <div class="career-item">
                <h4>Salary</h4>
                <p>{career.salary}</p>
              </div>
              <div class="career-item">
                <h4>Location</h4>
                <p>{career.location}</p>
              </div>
              <div class="career-item">
                <h4>Closes</h4>
                <p>
                  {moment(career.endDate)
                    .add(10, "hours")
                    .format("Do of MMMM, YYYY")}
                </p>
              </div>
            </div>
          </div>
          <div class="arrow">
            <Arrow direction="right" />
          </div>
        </div>
      </a>
    {/each}
  {/if}
</section>

<article>
  <h3 style="max-width: 300px">The movement is people powered</h3>

  <div>
    <p>
      At Future Super Group, we believe money can be a force for good. We direct
      member’s superannuation savings towards companies and investments that are
      helping to create a future free from climate change and inequality.
    </p>

    <p>
      At Future Super Group we have created progressive workplace policies to
      make sure we’re walking the talk.
    </p>

    <p>
      Future Super Group has also made these policies open source, meaning any
      workplace is free to take these policies and adapt them for themselves. We
      consider ourselves part of a bigger movement for positive change, and
      making workplaces better is an integral part of that.
    </p>
  </div>
</article>

<div class="marquee-container">
  <div class="marquee">
    PEOPLE POWERED. PEOPLE POWERED. PEOPLE POWERED. PEOPLE POWERED. PEOPLE
    POWERED. PEOPLE POWERED. PEOPLE POWERED. PEOPLE POWERED. PEOPLE POWERED.
    PEOPLE POWERED.
  </div>
</div>

<img
  src="https://res.cloudinary.com/future-super/image/upload/v1675833009/fs-staff-at-climate-rally.png"
  alt="Future Super team at a Climate Rally"
  style="border-radius: 40px; margin-bottom: 80px"
/>

<div class="policies">
  <h2>Our policies</h2>
  <Policies />
</div>

<h2 style="margin-top: 80px">What to expect</h2>
<div class="what-expect">
  <h3 style="padding-right: 80px">
    Here’s what you can expect from working at Future Super Group…
  </h3>
  <div class="expect-text">
    <p>
      As a Future Super Group employee you’ll be working to build a future free
      from climate change and inequality. Working for a purpose driven business
      doesn’t mean putting your own needs aside though. We can lead by example
      by creating a workplace that treats people as they deserve to be treated.
    </p>
    <p>
      A big part of that is taking feedback from our team seriously. Creating a
      great place to work is a constant work in progress. We’re always learning,
      always tweaking our policies and we learn from our team. We track employee
      Net Promoter Score (eNPS) to understand the engagement and overall
      satisfaction of the Future Super Group team. We assess eNPS on a quarterly
      basis by running Engagement Surveys.
    </p>
  </div>
  <div class="box">
    <div class="logo">
      <div style="width: 100px">
        <BCorpLogo />
      </div>
    </div>
    <p>
      Future Super Group has been awarded Best For The World™ for Customers
      status by B Corp for 2022
    </p>
  </div>
  <div class="box">
    <div class="logo">
      <img
        src="https://res.cloudinary.com/future-super/image/upload/v1675833469/BestPlaceToWork_Logo_RGB_White_1.png"
        alt="Best Places To Work logo"
        style="width: 300px"
      />
    </div>
    <p>
      Future Super Group is ranked #1 in the AFR BOSS Best Places to Work 2022
      in the category of financial services
    </p>
  </div>
</div>

<style lang="scss">
  @use "../../styles/" as *;

  article {
    margin-top: 80px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  section {
    border-bottom: 1px solid black;
  }

  h2 {
    margin: 20px 0 60px 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .career {
    border-top: 1px solid black;
    padding: 40px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    &:hover {
      background-color: $black100;
      cursor: pointer;
    }
  }

  .career-details {
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding-top: 20px;
  }

  .career-item {
    padding: 0 60px 0 0;
    margin-right: 60px;
    border-right: 1px solid $black;

    h4 {
      font-size: 12px;
      font-family: $regular;
    }

    p {
      font-size: 15px;
      font-family: $heading;
    }
  }

  .marquee-container {
    padding-bottom: $page-header-padding-bottom;
    width: calc(100% + 80px);
    position: relative;
    overflow: hidden;
    margin: 0 -40px;
  }

  .marquee {
    margin: 0 -40px;
    font-family: $feature;
    color: $black;
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

  .what-expect {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
    margin-bottom: 80px;
    .expect-text {
      padding-left: 80px;
    }
  }

  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: $black;
    border-radius: 40px;
    padding: 40px;
    p {
      color: $white;
      text-align: center;
    }
    .logo {
      height: 340px;
      display: grid;
      align-items: center;
    }
  }

  .policies {
    background-color: $black100;
    border-radius: 40px;
    padding: 40px 20px;
  }

  .arrow {
    width: 70px;
  }

  @media (max-width: 700px) {
    .career-details {
      grid-template-columns: 1fr;
    }

    .career-item {
      padding: 0;
      border-right: none;
    }

    .career {
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
    }

    .arrow {
      width: 30px;
    }

    article {
      grid-template-columns: 1fr;
    }

    .what-expect {
      grid-template-columns: 1fr;
      .expect-text {
        padding-left: 0px;
      }
    }

    .box {
      .logo {
        height: 200px;
      }
    }

    .marquee-container {
      width: calc(100% + 40px);
      margin: 0 -20px;
    }
  }
</style>
