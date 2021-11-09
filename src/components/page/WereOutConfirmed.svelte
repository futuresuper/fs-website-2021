<script>
  import { getQueryParam } from "../scripts/getQueryParam.js";

  const clientSide = !import.meta.env.SSR;

  let name;
  let first;
  let last;

  if (clientSide) {
    name = getQueryParam("n");
    first = getQueryParam("first");
    last = getQueryParam("last");
    if (first && last) {
      name = (first[0] + "." + last).toUpperCase();
      processOptIn(name);
    }
    if (!name) {
      name = "A.Person";
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

    function processOptIn(billboardName) {
      postData(
        "https://67l8qspd50.execute-api.ap-southeast-2.amazonaws.com/prod/billboard?name=" +
          billboardName
      );
    }
  }
</script>

<p class="center">Here’s how your name will appear:</p>
<h3 id="name" class="bold center">{name}</h3>
<img
  class="billboard-image"
  src="https://res.cloudinary.com/future-super/image/upload/c_scale,w_660/v1626222811/billboard_example_with_zoom_02.png"
  style="width: 100%"
  alt="Billboard mockup showing where your name would appear"
/>
<p>
  If there’s a mistake and you wish to correct your name or not be included,
  email marketing@futuresuper.com.au
</p>
<p class="disclaimer">REVIEW THE TERMS YOU AGREED TO</p>
<p class="disclaimer">
  I consent to Future Super publishing my name (as First Initial. Last Name) in
  print and digital content for Future Super’s ‘We’re Out’ campaign. My name may
  be used for up to twelve months from today. I may withdraw my consent at any
  time by contacting marketing@myfuturesuper.com.au, however I acknowledge that
  printed content cannot be recalled. My information will be handled in line
  with Future Super’s
  <a href="/privacy-policy">Privacy Policy</a>.
</p>
