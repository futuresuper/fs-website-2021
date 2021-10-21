<script>
  import { getQueryParam } from "../scripts/getQueryParam.js";

  const clientSide = !import.meta.env.SSR;

  let apList = "";
  let email = "";
  let message = "";

  if (clientSide) {
    apList = getQueryParam("aplist") ? getQueryParam("aplist") : "";
    email = getQueryParam("email") ? getQueryParam("email") : "";
    message = getQueryParam("message")
      ? getQueryParam("message")
      : "Message received";
    if (apList && email) {
      const url =
        "https://67l8qspd50.execute-api.ap-southeast-2.amazonaws.com/prod/addtoaplist";
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          apList,
          email,
        }),
      });
    }
  }
</script>

<h3>{message}</h3>
