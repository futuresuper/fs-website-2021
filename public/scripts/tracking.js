window.onload = function () {
  const referer = getQueryParam("r");
  const refererCookie = getCookie("fsreferer");
  if (referer) {
    setCookie("fsreferer", referer, 365);
  }
  const referCode = referer || refererCookie;

  // Reddit pixel script
  !(function (w, d) {
    if (!w.rdt) {
      var p = (w.rdt = function () {
        p.sendEvent
          ? p.sendEvent.apply(p, arguments)
          : p.callQueue.push(arguments);
      });
      p.callQueue = [];
      var t = d.createElement("script");
      (t.src = "https://www.redditstatic.com/ads/pixel.js"), (t.async = !0);
      var s = d.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(t, s);
    }
  })(window, document);
  rdt("init", "t2_5k2s1p3", { optOut: false, useDecimalCurrencyValues: true });
  rdt("track", "PageVisit");

  // StackAdapt pixel
  !(function (s, a, e, v, n, t, z) {
    if (s.saq) return;
    n = s.saq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!s._saq) s._saq = n;
    n.push = n;
    n.loaded = !0;
    n.version = "1.0";
    n.queue = [];
    t = a.createElement(e);
    t.async = !0;
    t.src = v;
    z = a.getElementsByTagName(e)[0];
    z.parentNode.insertBefore(t, z);
  })(window, document, "script", "https://tags.srv.stackadapt.com/events.js");
  saq("ts", "g8vKQngwKwiJ17GZcOLEqA");

  // Send a segment event if the user has come from a referral link
  if (referCode) {
    analytics.track("ReferralCode Used", {
      code: referCode,
    });
  }

  // If Join Page
  const refererField = document.getElementById("referer");
  const isJoinPage = Boolean(refererField);
  if (isJoinPage) {
    if (referCode) {
      refererField.value = referCode;
      analytics.track("ReferralCode UsedOnJoinForm", {
        code: referCode,
      });

      // Customer.io form handler
      var t = document.createElement("script"),
        s = document.getElementsByTagName("script")[0];
      t.async = true;
      t.id = "cio-forms-handler";
      t.setAttribute("data-site-id", "7ec51976e7aed714a43e");
      t.setAttribute("data-base-url", "https://customerioforms.com");
      t.src = "https://customerioforms.com/assets/forms.js";
      s.parentNode.insertBefore(t, s);
    }

    // Reddit pixel - track lead
    rdt("track", "Lead");
  }

  // Qualified Lead Event
  // Send an event to Segment if user has visited >1 page and been on site >30 seconds
  const cameToSite = getCookie("fs_ql");

  // if cookie already exists (ie they've visited another page already)
  if (cameToSite && cameToSite !== "ql_event_sent") {
    let timeOnSite = getTimeOnSite(cameToSite);
    if (timeOnSite > 30) {
      sendQualifiedLeadEvent();
    } else {
      const interval = setInterval(function () {
        timeOnSite = getTimeOnSite(cameToSite);
        if (timeOnSite > 30) {
          sendQualifiedLeadEvent();
          clearInterval(interval);
        }
      }, 5000);
    }
  } else {
    setCookie("fs_ql", new Date(), 1);
  }
};

function sendQualifiedLeadEvent() {
  analytics.track("QualifiedLead VisitedSite");
  setCookie("fs_ql", "ql_event_sent", 1);
}

function getTimeOnSite(arrivalTime) {
  return (new Date().valueOf() - new Date(arrivalTime).valueOf()) / 1000;
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return false;
}

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
