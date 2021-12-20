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
    <p class="intro bold">
      After a huge year, the Future Super team will be taking a break and
      shutting down the office from 24th December and reopening on 3rd January.
      Our Member Advocacy will still be there for our members during this time,
      but just operating at reduced hours for urgent enquires and withdrawals.
      We’ll be responding to emails and taking phone calls between 10am and 3pm
      on December 24th, 29th, 30th and 31st. For all other enquires, we’ll be
      back on January 4th and will endeavour to get back to you as soon as
      possible.
    </p>
  </div>
  <address>
    <hr />
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
