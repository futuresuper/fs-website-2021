<script>
  import { getQueryParam } from "../scripts/getQueryParam.js";

  const clientSide = !import.meta.env.SSR;

  if (clientSide) {
    let userId = getQueryParam("id");

    console.log("Resending employer comms for user: " + userId);

    const url =
      "https://67l8qspd50.execute-api.ap-southeast-2.amazonaws.com/prod/addtociolist";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        listId: 159,
        userId,
      }),
    });
  }
</script>
