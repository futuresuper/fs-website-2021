<script>
  import Toast from "../ui/Toast.svelte";
  import JoinNow from "../ui/JoinNow.svelte";
  import { getQueryParam } from "../scripts/getQueryParam.js";
  import { copyTextToClipboard } from "../scripts/clipboard.js";
  const clientSide = !import.meta.env.SSR;

  let referCode = "";
  let name = "";
  let copySuccessMessage = "";

  if (clientSide) {
    referCode = getQueryParam("r");
    name = getQueryParam("n");
    console.log("REFERER: " + referCode);
    console.log("NAME: " + name);
  }

  function handleCopy() {
    analytics.track("Member ClickedCopyReferCode");
    const text = "www.futuresuper.com.au/?r=" + referCode;
    copyTextToClipboard(text);
    copySuccessMessage = "✅  Copied!";
    setTimeout(function () {
      copySuccessMessage = "";
    }, 2000);
  }
</script>

<div>
  <h1>
    Hi {name}
  </h1>
  <div id="share-with-friend">
    <p>Your referral link is</p>
    <div id="personal-url">
      www.futuresuper.com.au/?r={referCode}
    </div>
    <button on:click={handleCopy}>COPY LINK</button>
    <p>
      Your voice is important in growing the Future Super movement. Start with a
      conversation about why you joined or a personal message before sharing
      your link.
    </p>
    <p>
      We’ll let you know when someone joins Future Super from this link so you
      can see the difference you make.
    </p>
  </div>
  <Toast message={copySuccessMessage} />
</div>

<style lang="scss">
  @use "../../styles/" as *;

  h1 {
    text-align: center;
  }

  #share-with-friend {
    margin: 60px 0;
    width: 100%;
    border: 1px solid $black;
    padding: 40px;
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  #personal-url {
    font-family: $heading;
    user-select: none;
  }

  button {
    margin: 20px 0 40px 0;
  }

  @media (max-width: 800px) {
    #personal-url {
      font-size: 12px;
    }
  }
</style>
