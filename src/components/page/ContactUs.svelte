<script>
  export let contact;
</script>

<section>
  <div>
    <h2>Support</h2>
    <div class="intro">
      {@html contact.astro.html}
    </div>
  </div>
  <address>
    <hr />
    <h5>Email</h5>
    <a href="mailto:{contact.emailAddress}">{contact.emailAddress}</a>
    <p>
      We respond to emails Monday to Friday, {contact.emailOpeningTime}-{contact.emailClosingTime}<br
      />
      <span class="disclaimer">Sydney local time</span>
    </p>
    <hr />
    <h5>Phone</h5>
    <a href="tel:{contact.phone}">
      {contact.phone}
    </a>
    <p>
      We're available to answer calls Monday to Friday, {contact.phoneOpeningTime}-{contact.phoneClosingTime}<br
      />
      <span class="disclaimer">Sydney local time</span>
    </p>
    <hr />
    <h5>Post</h5>
    <p>{contact.postLine1}<br />{contact.postLine2}</p>
  </address>
</section>

<hr />

<section>
  <h2>Media enquiries</h2>
  <div>
    <h5>Email</h5>
    <a href="mailto:{contact.mediaEmail}">{contact.mediaEmail}</a>
  </div>
</section>

<style lang="scss">
  @use "../../styles/" as *;

  section {
    display: flex;
    justify-content: space-between;
    > * {
      width: 45%;
    }
  }

  h5 {
    margin-top: 0;
  }

  hr {
    margin: 40px 0;
  }
  address > hr {
    margin: 20px 0;
  }

  a {
    color: $black;
  }

  .intro {
    width: 60%;
  }

  @media (max-width: 900px) {
    section {
      > * {
        width: 46%;
      }
    }

    .intro {
      width: 100%;
    }
  }

  @media (max-width: 600px) {
    section {
      flex-direction: column;
      > * {
        width: 100%;
      }
      margin-bottom: 40px;
    }
    hr {
      display: none;
    }
    address > hr {
      display: block;
    }
  }
</style>
