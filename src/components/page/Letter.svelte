<script>
  import JoinNow from "../ui/JoinNow.svelte";
  import { getQueryParam } from "../scripts/getQueryParam.js";
  import { copyTextToClipboard } from "../scripts/clipboard.js";
  import Toast from "../ui/Toast.svelte";
  const clientSide = !import.meta.env.SSR;

  let friendMode = false;
  let copySuccessMessage = "";

  let referCode = "";
  let firstName = "";
  let fund = "";

  let send;

  if (clientSide) {
    // Extract the details from the link code
    // The link code is a base64 encoded json object containing the necessary details
    referCode = getQueryParam("r");
    send = getQueryParam("send")
    
    const details = JSON.parse(window.atob(referCode));
    
    // Get the details to display on the page
    firstName = details.firstName;
    fund = details.fund;

    // By default the page shows the friend sharing mode 
    friendMode = true;

    if(send) {
      // When send is set in the URL it means we want to send the breakup letter to the fund
      // NB: This parameter will only be set from the link in the breakup letter email
      friendMode = false;

      // Identify the user so this page view can be tracked
      const userId = details.userId;
      analytics.identify(userId);
      
      // Send the event that will trigger the Customer.io campaign to send the letter to the fund
      analytics.track("BreakupLetterPage Viewed");
    }
  }

  function handleCopy() {
    const text = "www.futuresuper.com.au/letter?r=" + referCode;
    copyTextToClipboard(text);
    copySuccessMessage = "✅  Copied!";
    setTimeout(function () {
      copySuccessMessage = "";
    }, 2000);
  }
</script>

{#if friendMode}
  <h1>
    Your friend{firstName ? " " + firstName : ""} sent a letter
  </h1>
{:else}
  <h1>
    Nice Work{firstName ? " " + firstName : ""}!<br />
    Your letter has been sent
  </h1>
{/if}

<div class="letter-container">
  <p class="bold">
    Attn: CEO & Executives of {fund ? fund : "my old fund"}
  </p>
  <p>
    It’s time to stop investing in fossil fuels.<br /><br />

    I have chosen to leave your super fund because the way you invest shows that
    you aren’t taking the risk of climate change seriously.<br /><br />

    We need climate action now, not in 2050. So I’m asking your fund to change
    for the benefit of the future we share and stop investing in fossil fuels.<br
    /><br />

    When it comes to fossil fuels - I’m out. Will you be too?
  </p>
  <p class="last">
    {firstName ? "- " + firstName : ""}
  </p>
</div>

{#if friendMode}
  <JoinNow />
{:else}
  <div class="share-container">
    <p>If you’d like to share your letter, here’s your personal link:</p>
    <div class="share-link">
      www.futuresuper.com.au/letter?r={referCode ? referCode : ""}
    </div>
    <button id="copy-button" class="primary" on:click={() => handleCopy()}>
      COPY LINK
    </button>
    <p class="desc">
      We’ll let you know when someone joins Future Super from this link so you
      can see the difference you make.
    </p>
  </div>
{/if}

<Toast message={copySuccessMessage} />

<style lang="scss">
  @use "../../styles/" as *;

  .letter-container {
    background-color: $black200;
    padding: 40px;
  }

  p.last {
    margin-bottom: 0;
  }

  .share-container {
    padding: 40px;
    text-align: center;
  }

  .share-link {
    font-family: $heading;
    font-size: max(10px, 1.2vw);
    margin-bottom: 8px;
  
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .desc {
    margin-top: 20px;
    font-size: max(10px, 1.2vw);
  }

  @media (max-width: 800px) {
    .share-container {
      padding: 40px 0px;
    }
  }
</style>
