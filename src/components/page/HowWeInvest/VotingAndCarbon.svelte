<script>
  import Vote from "../../images/Vote.svelte";
  import Carbon from "../../images/Carbon.svelte";
</script>

<div class="voting-and-carbon">
  <div class="col">
    <div>
      <div class="icon">
        <Vote />
      </div>
      <h2>Voting and Engagement</h2>
      <h4>
        Stewardship is an important part of the way we leverage the power of
        your super to create change.
      </h4>
      <p>
        We vote on shareholder resolutions presented at investee Annual General
        Meetings (AGMs), and engage with companies throughout the year to
        improve their ESG policies.
      </p>
    </div>
  </div>
  <!-- <div class="col">
    <div>
      <div class="icon">
        <Carbon />
      </div>
      <h2>Carbon transparency</h2>
      <h4>
        We release an annual report detailing the emissions associated with our
        investments.
      </h4>
    </div>

    <a href="/carbon-transparency-report" class="button"
      >Download carbon transparency report</a
    >
  </div> -->
</div>

<style lang="scss">
  @use "../../../styles/" as *;

  .voting-and-carbon {
    margin: 100px -20px;
    background-color: $black200;
    padding: 10vw;
    border-radius: 32px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .col {
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .icon {
    height: 110px;
  }

  @media (max-width: 700px) {
    .voting-and-carbon {
      padding: 40px;
      flex-direction: column;
    }

    .col {
      width: 100%;
      &:first-of-type {
        margin-bottom: 80px;
      }
    }

    .icon {
      height: 110px;
    }
  }
</style>
