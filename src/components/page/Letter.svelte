<script>
  import JoinNow from "../ui/JoinNow.svelte";
  import { getQueryParam } from "../scripts/getQueryParam.js";
  import { postData } from "../scripts/postData.js";
  import { getData } from "../scripts/getData.js";
  import { copyTextToClipboard } from "../scripts/clipboard.js";
  import Toast from "../ui/Toast.svelte";
  const clientSide = !import.meta.env.SSR;

  let friendMode = false;
  let copySuccessMessage = "";

  let referCode = "";
  let firstName = "";
  let fund = "";

  let share;

  if (clientSide) {
    // Extract the details from the link code
    // The link code is a base64 encoded json object containing the necessary details
    const code = getQueryParam("r");
    const details = JSON.parse(window.atob(code));
    
    // Get the details to display on the page
    firstName = details.firstName;
    fund = details.fund;

    // Identify the user so this page view can be tracked
    const userId = details.userId;
    analytics.identify(userId);
    analytics.track("BreakupLetterPage Viewed");

    // With details in the URL
    // const userId = getQueryParam("i");
    // firstName = getQueryParam("first");
    // fund = getQueryParam("fund");
    // analytics.identify(userId);
    // analytics.track("BreakupLetterPage Viewed");
      
    // PREVIOUS IMPLEMENTATION
    // referCode = getQueryParam("r");
    // firstName = getQueryParam("first");
    // fund = getQueryParam("fund");
    // share = getQueryParam("share");
    // if (share) {
    //   postData(
    //     "https://67l8qspd50.execute-api.ap-southeast-2.amazonaws.com/prod/letter?rcode=" +
    //       referCode
    //   );
    // } else {
    //   friendMode = true;
    //   getData(
    //     "https://67l8qspd50.execute-api.ap-southeast-2.amazonaws.com/prod/letterdetails?rcode=" +
    //       referCode
    //   ).then((data) => {
    //     console.log(data);
    //     firstName = data.firstName;
    //     fund = data.oldFund;
    //   });
    // }
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
