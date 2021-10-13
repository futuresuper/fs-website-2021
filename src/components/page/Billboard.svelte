<script>
  import Toast from "../ui/Toast.svelte";
  import JoinNow from "../ui/JoinNow.svelte";
  import { getQueryParam } from "../scripts/getQueryParam.js";
  import { copyTextToClipboard } from "../scripts/clipboard.js";
  const clientSide = !import.meta.env.SSR;

  let referCode = "";
  let friend = false;
  let copySuccessMessage = "";

  if (clientSide) {
    referCode = getQueryParam("r");
    let share = getQueryParam("share");
    console.log("REFERER: " + referCode);
    friend = share ? false : true;
    console.log("FRIEND: " + friend);
  }

  function handleCopy() {
    const text = "www.futuresuper.com.au/billboard?r=" + referCode;
    copyTextToClipboard(text);
    copySuccessMessage = "✅  Copied!";
    setTimeout(function () {
      copySuccessMessage = "";
    }, 2000);
  }
</script>

<div>
  <div>
    <div>
      <h1>
        Your {friend ? "friend's " : ""}name is in there somewhere… Can you find
        it?
      </h1>
    </div>

    <img
      class="billboard-image"
      src="https://res.cloudinary.com/future-super/image/upload/c_scale,w_1200,f_auto,q_auto/v1623370119/BillboardTempe.jpg"
      alt="Billboard with the names of recently joined Future Super members"
    />
  </div>
  {#if friend}
    <JoinNow />
  {:else}
    <div id="share-with-friend">
      <p>Share the billboard with your personal link</p>
      <div id="personal-url">
        www.futuresuper.com.au/billboard?r={referCode}
      </div>
      <button on:click={handleCopy}>COPY LINK</button>
      <p>
        We’ll let you know when someone joins Future Super from this link so you
        can see the difference you make.
      </p>
    </div>
  {/if}
  <Toast message={copySuccessMessage} />
</div>

<style lang="scss">
  @use "../../styles/" as *;

  img {
    width: 100%;
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
