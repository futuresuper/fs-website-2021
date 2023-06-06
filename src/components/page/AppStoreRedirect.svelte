<script>
  import { getQueryParam } from "@components/scripts/getQueryParam.js";
  const clientSide = !import.meta.env.SSR;

  const linkTypes = {
    button: "Button",
    qrCode: "QR Code",
  };

  const stores = {
    apple: "Apple",
    google: "Google",
    unknown: "Unknown",
  };

  const sources = {
    homePage: "Website - Home Page",
    footer: "Website - Footer",
    appPage: "Website - App Page",
    loginPage: "MOA - Login Page",
    joinForm: "Join Form",
    welcomeEmail: "Welcome Email",
    welcomeSMS: "Welcome SMS",
    emailFooter: "Email Footer",
  };

  const href = {
    [stores.apple]: `https://apps.apple.com/au/app/future-super/id1620110464`,
    [stores.google]: `https://play.google.com/store/apps/details?id=au.com.futuresuper.app`,
    [stores.unknown]: `https://www.futuresuper.com.au/app`,
  };

  const getStore = () => {
    const iOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    const android = navigator.userAgent.toLowerCase().indexOf("android") > -1;

    return iOS ? stores.apple : android ? stores.google : stores.unknown;
  };

  if (clientSide) {
    const linkType = linkTypes[getQueryParam("linktype")];
    let store = stores[getQueryParam("store")] || getStore();
    const source = sources[getQueryParam("source")];

    analytics.track("AppStoreLink Used", {
      linkType,
      store,
      source,
    });

    window.location.replace(href[store]);
  }
</script>

Please wait...
