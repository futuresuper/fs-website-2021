<script>
  const contact = {
    support: {
      email: "info@futuresuper.com.au",
      phone: {
        number: "1300 658 422",
        openingTime: "9:30am",
        closingTime: "4:30pm",
      },
    },
    media: {
      email: "media@futuresuper.com.au",
    },
  };
</script>

<section>
  <div>
    <h2>Support</h2>
    <p class="intro">
      Check out our
      <a href="/support-and-faqs">Support & FAQs</a>
      page if you think your question might be a common one. Otherwise, feel free
      to reach out to our friendly Member Advocates.
    </p>
  </div>
  <address>
    <h5>Email</h5>
    <a href="mailto:{contact.support.email}">{contact.support.email}</a>
    <hr />
    <h5>Phone</h5>
    <a href="tel:{contact.support.phone.number}">
      {contact.support.phone.number}
    </a>
    <p>
      Monday-Friday, {contact.support.phone.openingTime}-{contact.support.phone
        .closingTime}<br />
      <span class="disclaimer">Sydney local time</span>
    </p>
    <hr />
    <h5>Post</h5>
    <p>PO Box 1282<br />Albury, NSW 2640</p>
  </address>
</section>

<hr />

<section>
  <h2>Media enquiries</h2>
  <div>
    <h5>Email</h5>
    <a href="mailto:{contact.media.email}">{contact.media.email}</a>
  </div>
</section>

<style lang="scss">
  @use "../../styles/" as *;

  section {
    display: flex;
    justify-content: space-between;
    > * {
      width: 40%;
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
