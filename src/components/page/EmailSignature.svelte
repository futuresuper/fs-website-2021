<script>
  import SitePassword from "../ui/SitePassword.svelte";

  let name = "";
  let pronouns = "";
  let title = "";
  let phone = "";
  let place = "";
  let hours = "";
</script>

<SitePassword>
  <section>
    <div>
      <h3>1. Enter your details</h3>
      <p class="label">Name</p>
      <input bind:value={name} type="text" />
      <p class="label">Pronouns (eg She/Her)</p>
      <input bind:value={pronouns} type="text" />
      <p class="label">Title (eg Member Advocate)</p>
      <input bind:value={title} type="text" />
      <p class="label">Phone (Optional) (eg 0402 123 456)</p>
      <input bind:value={phone} type="text" />
      <p class="label">
        Traditional Custodian of land you work on (eg Gadigal)
      </p>
      <input bind:value={place} type="text" />
      <p class="label">
        Working hours or other info (optional) (eg I work on Mondays and
        Wednesdays)
      </p>
      <input bind:value={hours} type="text" />
    </div>
    <div>
      <h3>2. Copy-paste below</h3>
      <div>
        <p>__</p>
        <p
          style="font-size: 13px; font-family: Helvetica, Arial, sans-serif; margin-bottom: 40px; color: black"
        >
          <strong
            >{name ? name.toUpperCase() : ""}
            {pronouns ? "(" + pronouns + ")" : ""}</strong
          >
          <br />
          {title}<br />
          {#if phone}
            {phone}<br />
          {/if}
          {#if hours}
            <br /><i>{hours}</i><br />
          {/if}
        </p>
        <img
          src="https://content.myfuturesuper.com.au/email/email-sig.gif"
          alt="Future Super logo"
        />
        <p
          style="font-size: 13px; font-family: Helvetica, Arial, sans-serif; margin-top: 40px; color: black"
        >
          1300 658 422<br />
          <a
            href="https://www.futuresuper.com.au?utm_source=staff+email+signature"
            style="color: black">www.futuresuper.com.au</a
          ><br />
        </p>
        <div>
          <a href="https://www.instagram.com/future_super/">
            <img
              style="display: inline-block"
              src="https://content.myfuturesuper.com.au/email/insta.png"
              alt="Instagram Logo"
            />
          </a>
          &nbsp;
          <a href="https://www.facebook.com/myfuturesuper/">
            <img
              style="display: inline-block"
              src="https://content.myfuturesuper.com.au/email/fb.png"
              alt="Facebook Logo"
            />
          </a>
          &nbsp;
          <a href="https://www.linkedin.com/company/future-super">
            <img
              style="display: inline-block"
              src="https://content.myfuturesuper.com.au/email/linkedin.png"
              alt="LinkedIn Logo"
            />
          </a>
        </div>

        <img
          src="https://content.myfuturesuper.com.au/email/email-sig-art.png"
          alt="Gather by Madison Gibbs"
          style="margin-top: 20px"
        />
        <p
          style="font-size: 13px; font-family: Helvetica, Arial, sans-serif; margin-top: 6px; color: black"
        >
          <i>Gather</i> by <i>Maddison Gibbs</i>.
          <a
            href="https://www.futuresuper.com.au/email-signature-art"
            style="color: black">About this artwork</a
          ><br />
        </p>

        {#if place}
          <p
            style="font-size: 11px; font-family: Helvetica, Arial, sans-serif;  margin-top: 20px; max-width: 400px; color: black"
          >
            I work on {place} land.
          </p>
        {/if}

        <p
          style="font-size: 11px; font-family: Helvetica, Arial, sans-serif;  margin-top: 20px; max-width: 400px; color: black"
        >
          Future Super Group acknowledges that we operate on sovereign First
          Nations land. We recognise the ongoing connection Aboriginal and
          Torres Strait Islander people have with Country throughout this
          continent since time immemorial. We stand for a future where First
          Nations people have true justice and redress, and our society has a
          profound respect, understanding and commitment to acknowledging First
          Nations perspectives, culture, languages, histories, country, values
          and ancestors.
        </p>
      </div>
    </div>
    <div>
      <h3>3. Add to Gmail</h3>
      <p>To get to the signature section in Gmail...</p>
      <ul>
        <li>Click on the cog (top right)</li>
        <li>Click 'See all settings'</li>
        <li>Scroll down to 'Signature'</li>
        <li>Click 'Create new' and call it whatever you want</li>
        <li>Paste your new signature in</li>
        <li>
          Change your 'signature defaults' for both of your email addresses
          (@future.. and @myfuture...)
        </li>
        <li>Scroll down and press 'Save changes'</li>
      </ul>
    </div>
  </section>
</SitePassword>

<style lang="scss">
  @use "../../styles/" as *;

  section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
  }

  h3 {
    margin-bottom: 60px;
  }

  p.label {
    margin-bottom: 0;
    font-family: $heading;
    margin-bottom: 6px;
  }

  input {
    display: block;
    padding: 8px;
    border-radius: 8px;
    border: 1px solid $black;
    outline: none;
    margin-top: 2px;
    margin-bottom: 30px;
    width: 100%;
    max-width: 280px;
  }

  .tips {
    margin-top: 40px;
    padding: 40px;
    border-radius: 32px;
    background-color: $black200;
  }

  @media (max-width: 600px) {
    section {
      grid-template-columns: 100%;
    }
  }
</style>
