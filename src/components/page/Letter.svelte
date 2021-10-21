<script>
  /*

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (decodeURIComponent(pair[0]) == variable) {
      return decodeURIComponent(pair[1]);
    }
  }
}

function copyShareLink() {
  let rcode = getQueryVariable("r");
  const url = rcode
    ? "https://www.futuresuper.com.au/letter?r=" + rcode
    : "https://www.futuresuper.com.au/letter";
  copyTextToClipboard(url);
  document.getElementById("success-banner").style.display = "flex";
  setTimeout(() => {
    document.getElementById("success-banner").style.display = "none";
  }, 2000);
}

async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

async function getData(url = "") {
  const response = await fetch(url);
  return response.json(); // parses JSON response into native JavaScript objects
}

let referer = getQueryVariable("r");
let fname = getQueryVariable("first");
let fund = getQueryVariable("fund");
let share = getQueryVariable("share") ? true : false;
console.log("REFERER: " + referer);
console.log("SHARE: " + share);
console.log("FIRST: " + fname);
console.log("FUND: " + fund);

if (share) {
  document.getElementById("join").style.display = "none";
  document.getElementById("title-shared").style.display = "none";
  if (referer) {
    document.getElementById("rcode").innerHTML = referer;
    console.log("Posting letter...");
    postData(
      "https://67l8qspd50.execute-api.ap-southeast-2.amazonaws.com/prod/letter?rcode=" +
        referer
    ).then((data) => {
      console.log(data);
    });
  }
  if (fname) {
    document.getElementById("name1").innerHTML = " " + fname;
    document.getElementById("signature").innerHTML = "Signed,<br/>" + fname;
  }
  if (fund) {
    document.getElementById("fund").innerHTML = fund;
  }
} else {
  document.getElementById("share").style.display = "none";
  document.getElementById("title-sender").style.display = "none";
  if (referer) {
    console.log("Getting letter details...");
    getData(
      "https://67l8qspd50.execute-api.ap-southeast-2.amazonaws.com/prod/letterdetails?rcode=" +
        referer
    ).then((data) => {
      console.log(data);
      document.getElementById("name2").innerHTML = " " + data.firstName;
      document.getElementById("signature").innerHTML =
        "Signed,<br/>" + data.firstName;
      document.getElementById("fund").innerHTML = data.oldFund;
    });
  }
}

function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand("copy");
    var msg = successful ? "successful" : "unsuccessful";
    console.log("Fallback: Copying text command was " + msg);
  } catch (err) {
    console.error("Fallback: Oops, unable to copy", err);
  }

  document.body.removeChild(textArea);
}

function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(
    function () {
      console.log("Async: Copying to clipboard was successful!");
    },
    function (err) {
      console.error("Async: Could not copy text: ", err);
    }
  );
}

  */
</script>

<!-- <div class="letter-edit">
  <div class="container">
    <h1 id="title-sender">
      Nice Work<span id="name1" />! Your letter has been sent
    </h1>
    <h1 id="title-shared">Your friend<span id="name2" /> sent a letter</h1>
    <div class="letter-container">
      <div class="letter-holes">
        <div class="hole" />
        <div class="hole" />
        <div class="hole" />
      </div>
      <div class="letter-body">
        <p class="bold">
          Attn: CEO & Executives of <span id="fund">my old fund</span>
        </p>
        <p>
          It’s time to stop investing in fossil fuels.<br /><br />

          I have chosen to leave your super fund because the way you invest
          shows that you aren’t taking the risk of climate change seriously.<br
          /><br />

          We need climate action now, not in 2050. So I’m asking your fund to
          change for the benefit of the future we share and stop investing in
          fossil fuels.<br /><br />

          When it comes to fossil fuels - I’m out. Will you be too?
        </p>
        <p id="signature" />
      </div>
    </div>
  </div>
</div>
<div id="share" class="letter-send">
  <div class="container">
    <p>If you’d like to share your letter, here’s your personal link:</p>
    <div class="share-container">
      <div class="share-link">
        www.futuresuper.com.au/letter?r=<span id="rcode" />
      </div>
      <button id="copy-button" class="primary" onclick="copyShareLink()">
        COPY LINK
      </button>
    </div>
    <p style="margin-top: 2rem; text-align: center; font-size: 0.9rem">
      We’ll let you know when someone joins Future Super from this link so you
      can see the difference you make.
    </p>
  </div>
</div>
<div id="join" class="letter-send">
  <div class="container">
    <p>Not a Future Super member yet?</p>
    <button class="primary join" href="#">JOIN NOW</button>
  </div>
</div>
<div id="success-banner">Link Copied</div> -->
