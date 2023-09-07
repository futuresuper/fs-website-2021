<script>
  import { getQueryParam } from "../scripts/getQueryParam.js";

  const clientSide = !import.meta.env.SSR;

  let message = "";
  let title = "";

  if (clientSide) {
    let listId = getQueryParam("list");
    let userId = getQueryParam("id");
    message = getQueryParam("message") ?? "Message received";
    title = getQueryParam("title") ?? "Thanks";
    if (listId && userId) {
      const url =
        "https://67l8qspd50.execute-api.ap-southeast-2.amazonaws.com/prod/addtociolist";
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          listId,
          userId,
        }),
      });
    }
  }
</script>

<h1>{title ?? "Thanks"}</h1>
<h3>{message}</h3>
