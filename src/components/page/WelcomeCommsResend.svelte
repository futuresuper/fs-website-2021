<script>
  import { postData } from "../scripts/postData";
  import sha256 from "../scripts/sha256";

  function getQueryParam(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      if (decodeURIComponent(pair[0]) == variable) {
        return decodeURIComponent(pair[1]);
      }
    }
  }

  const hashedKey =
    "bb25f7dea21b99cfe85c336b94dd382b2f9b213bafe60860910e2d6494f1e8f7";

  const userId = getQueryParam("id");
  const key = getQueryParam("key");
  const listId = "119";
  const membersOnly = true;

  console.log({ userId, key, listId, membersOnly });

  let message = "Please wait... Attempting to send welcome comms...";

  async function sendIt() {
    await postData(
      "https://67l8qspd50.execute-api.ap-southeast-2.amazonaws.com/prod/addtociolist",
      {
        userId,
        listId,
        membersOnly: true,
      }
    ).then((response) => {
      const url =
        "https://fly.customer.io/env/119417/people/" + userId + "/sent";
      message =
        response.status === 200
          ? "Sent! <a href=" +
            url +
            ">Check customer.io</a> to confirm delivery was successful"
          : "Failed";
    });
  }

  if (sha256(key) === hashedKey) {
    sendIt();
  } else {
    message = "Invalid key";
  }
</script>

<h2>{@html message}</h2>
