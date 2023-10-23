<script>
  import Notification from "@components/common/Notification.svelte";
  export let contact;
</script>

<section>
  <div>
    <h2>Support</h2>
    <div class="intro">
      {@html contact.compiledContent()}
      <!-- {@html contact.} -->
    </div>
  </div>
  <address>
    <Notification />
    <!-- <EndOfYearInfo /> -->
    <hr />
    <h5>Email</h5>
    <a href="mailto:{contact.frontmatter.emailAddress}"
      >{contact.frontmatter.emailAddress}</a
    >
    <p>
      We respond to emails Monday to Friday, {contact.frontmatter
        .emailOpeningTime}-{contact.frontmatter.emailClosingTime}<br />
      <span class="disclaimer">Sydney local time</span>
    </p>
    <hr />
    <h5>Phone</h5>
    <a href="tel:{contact.frontmatter.phone}">
      {contact.frontmatter.phone}
    </a>
    <p>
      We're available to answer calls Monday to Friday, {contact.frontmatter
        .phoneOpeningTime}-{contact.frontmatter.phoneClosingTime}<br />
      <span class="disclaimer">Sydney local time</span>
    </p>
    <hr />
    <h5>Post</h5>
    <p>{contact.frontmatter.postLine1}<br />{contact.frontmatter.postLine2}</p>
  </address>
</section>

<hr />

<section>
  <h2>Media enquiries</h2>
  <div>
    <h5>Email</h5>
    <a href="mailto:{contact.frontmatter.mediaEmail}"
      >{contact.frontmatter.mediaEmail}</a
    >
  </div>
</section>

<hr />

<section>
  <h2>Partnerships</h2>
  <div>
    <p>
      We're always open to connecting with like-minded organisations that share
      our purpose, vision and values, and who are keen to discuss how they can
      partner with Future Super. To find out more please complete
      <a href="https://form.typeform.com/to/Ad4a04G3">this form </a>
      and we'll be in touch!
    </p>
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
