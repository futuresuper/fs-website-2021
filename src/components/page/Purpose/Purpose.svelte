<script>
  import ExternalLink from "../../images/ExternalLink.svelte";
  import BCorp from "../Home/BCorp.svelte";

  const policies = [
    {
      title: "Menstrual and menopausal leave",
      description:
        "These Guidelines aim to support employees in their ability to adequately self-care during menstrual periods and menopause, without having their personal leave unduly impacted. ",
      link: "https://docs.google.com/document/d/1M9vaiFBybjmobrb_jYIQDNf6WACJFB-2hFftiQVxC3c/edit?usp=sharing",
    },
    {
      title: "Mental health leave",
      description: "",
      link: "https://docs.google.com/document/d/1KCjvwKx2Ds99buy8XB2gw4mVJ2TVw_sY/edit?usp=sharing&ouid=112988675888401080522&rtpof=true&sd=true",
    },
    {
      title: "Baby bump",
      description: "",
      link: "https://docs.google.com/document/d/1oSPpQIsObuKSlSOLBonDmbs4S4GgPyDsFvML022ZU6g/edit?usp=sharing",
    },
    {
      title: "Ethical and local supplier guidelines",
      description: "",
      link: "https://docs.google.com/document/d/15E6Onb8wjHpto-wJ7-N9qVMi5-RjOlLZ5iRWIrZMCMs/edit?usp=sharing",
    },
    {
      title: "Inclusive language policy",
      description: "",
      link: "https://docs.google.com/document/d/1oMR6EA6thsWsnN61om5EbGajodXNMYaEroFFHMfS6Gc/edit?usp=sharing",
    },
    {
      title: "Anti-racism policy",
      description: "",
      link: "https://docs.google.com/document/d/13Xa49Ox_lWIdBRqoX4_Umg9CXTurowWM/edit?usp=sharing&ouid=112988675888401080522&rtpof=true&sd=true",
    },
    {
      title: "Paid gender affirmation leave",
      description: "",
      link: "https://docs.google.com/document/d/1LJxpQ08xHo4wEWmga21wdEtG7VF03Yot/edit?usp=sharing&ouid=112988675888401080522&rtpof=true&sd=true",
    },
    {
      title: "Climate emergency leave",
      description: "",
      link: "https://docs.google.com/document/d/1PyWWpfDu9_1YuSOC8VTgbKFoGMin1KtXN9CABSOJp_Y/edit?usp=sharing",
    },
  ];
</script>

<section>
  <div class="image-container">
    <img
      src="https://res.cloudinary.com/future-super/image/upload/v1666049366/people-with-climate-banners.png"
      alt="People with climate banners"
    />
  </div>
  <div class="intro-grid">
    <div class="pill">Our purpose</div>
    <div />
    <h2>We’re building a better future from the inside out.</h2>
    <div>
      <p>
        We use business as a force for good - both in terms of how we run our
        super fund, and how we take care of our employees.
      </p>
      <p>
        Our team turn up knowing that they are helping to shape a future free
        from climate change and inequality.
      </p>
      <p>
        As an employer, we offer a number of benefits to employees, including
        Mental Health Leave and Menstrual and Menopausal Leave thanks to the
        Victorian Women’s Trust.
      </p>
    </div>
    <div class="pill">Open Source Policies</div>
    <div />
    <h2>Steal them, they’re awesome.</h2>
    <div>
      <p>
        As a purpose driven business we believe that our work is helped by
        making it accessible and easy for other businesses to adopt no matter
        the size.
      </p>
      <p>
        We are encouraging you all to steal our policies and implement them -
        people power creates the change we all hope for. And if you do implement
        them - let us know
      </p>
    </div>
  </div>
  {#each policies as item}
    <div class="policy">
      <h3>{item.title}</h3>
      <a class="button" href={item.link}>
        <ExternalLink />
      </a>
      <p>{item.description}</p>
    </div>
  {/each}
  <hr />
  <BCorp />
</section>

<style lang="scss">
  @use "../../../styles/" as *;

  div.image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  img {
    width: 100%;
    max-width: 563px;
  }

  .intro-grid {
    margin-top: 60px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
    h2 {
      max-width: 400px;
      font-size: 46px;
    }
  }

  .pill {
    padding: 6px 30px;
    border: 1px solid $black;
    border-radius: 100px;
    margin: 0 auto 0 0;
  }

  .policy {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
    margin-top: 40px;
    border-top: 1px solid $black;
    padding-top: 60px;
    padding-bottom: 20px;
  }

  .button {
    background-color: transparent;
    border: 1px solid $black;
    margin: 0 0 0 auto;
    padding: 6px 30px;
    &:hover {
      background-color: $green;
    }
  }

  hr {
    margin: 40px 0;
  }

  @media (max-width: 800px) {
    .intro-grid,
    .policy {
      grid-template-columns: 100%;
      text-align: center;
      grid-gap: 20px;
      h2 {
        max-width: 100%;
      }
      .button {
        margin: auto;
        grid-row: 3;
      }
    }

    .pill {
      margin: 40px auto 0 auto;
    }
  }
</style>
