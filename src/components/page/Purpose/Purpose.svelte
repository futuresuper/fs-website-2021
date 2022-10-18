<script>
  import ExternalLink from "../../images/ExternalLink.svelte";
  import BCorp from "../Home/BCorp.svelte";

  const policies = [
    {
      title: "Menstrual and menopausal leave",
      description: [
        "We adopt a eNPS score to understand the engagement and overall satisfaction of the Future Super team. We assess eNPS on a quarterly basis by running Engagement Surveys.",
        "Prior to implementing Menstrual and Menopausal Leave, eNPS for women was at 38, while the score for men was 86. Immediately after implementing the leave, we saw eNPS jump to 71 for women, and have since maintained a rolling 12-month average of 68.",
        'Recently, we surveyed our team to better understand what was important to them about Future Super and our culture. For the question, "What sets us apart?", Menstrual and Menopausal Leave came out as one of the top three things that makes Future Super unique.',
        "It has sparked a whole conversation and removed a lot of stigma. One of the men in our team actually made a little bloodied period pad emoji that people now use in their Slack status when they're on menstrual leave. About 42% of our team to whom the policy applies have made use of this leave since it was introduced.",
      ],
      link: "https://docs.google.com/document/d/1M9vaiFBybjmobrb_jYIQDNf6WACJFB-2hFftiQVxC3c/edit?usp=sharing",
    },
    {
      title: "Mental health leave",
      description: [
        "We take mental health and wellbeing seriously at Future Super. Stigma around mental health is rife, especially in the workplace. We want to provide support for anyone experiencing periods of mental health problems, as well as implement proactive measures to prevent the development of mental health problems in the workplace.",
      ],
      link: "https://docs.google.com/document/d/1KCjvwKx2Ds99buy8XB2gw4mVJ2TVw_sY/edit?usp=sharing&ouid=112988675888401080522&rtpof=true&sd=true",
    },
    {
      title: "Baby bump",
      description: [
        "Baby Bump is a refund of the annual dollar-based administration fee for the time you are on parental leave, up to a maximum of 12 months (equivalent to $60).",
        "We created Baby Bump for two reasons:",
        "- Employers don't have to pay super when you take parental leave",
        "- Primary carers (who are historically mostly women) are more likely to take parental leave than other carers",
        "These two factors contribute to the startling gender inequality in super: that, on average, women retire with 42%* less super than men. So Baby Bump is Future Super’s baby step towards making super more fair for our members.",
        "You don't have to be the birth parent to take advantage of our Baby Bump policy. If you have welcomed a new child into your family and taken parental leave or left work to care for that child, you can apply for the Baby Bump regardless of your gender.",
        "You may be eligible for the Baby Bump fee refund if:",
        "- You are a Future Super member",
        "- A new child entered into your care within the past 18 months, whether by birth or adoption, or foster care",
        "- You have taken parental leave or left work to care for your new child.",
      ],
      link: "https://docs.google.com/document/d/1oSPpQIsObuKSlSOLBonDmbs4S4GgPyDsFvML022ZU6g/edit?usp=sharing",
    },
    {
      title: "Ethical and local supplier guidelines",
      description: [
        "Future Super is a member of Australia’s largest national listing of Indigenous businesses. Our supplier list is here for you to steal it.",
      ],
      link: "https://docs.google.com/document/d/15E6Onb8wjHpto-wJ7-N9qVMi5-RjOlLZ5iRWIrZMCMs/edit?usp=sharing",
    },
    {
      title: "Inclusive language policy",
      description: [
        "For a while now, we've been on a journey as a brand and as a business to hold ourselves accountable and do the best we can by our world, and by our people. As a super fund, our people are our members. As an employer, our people are also our employees. As a business, our people are also other business leaders.",
        "Here, we're deciding to share one part of that journey: our learning (and unlearning) of language. How, as a business that prides itself on being ethical and progressive, can we make sure that our language upholds those values? That our language includes, not excludes; welcomes, not dismisses; and witnesses, not ignores?",
        "This is our constantly work-in-progress Inclusive Language Guide. We're sharing it with you not to tell you that you're right, or that you're wrong. Not to chastise or claim superior knowledge of how to not be problematic. No; we're sharing it to let you in on what and how we're thinking about language. To invite you to add your experiences, your thoughts, your knowledge to this piece of work.",
      ],
      link: "https://docs.google.com/document/d/1oMR6EA6thsWsnN61om5EbGajodXNMYaEroFFHMfS6Gc/edit?usp=sharing",
    },
    {
      title: "Anti-racism policy",
      description: [
        "There is zero tolerance for racism and discrimination at Future Super. We exist to build a future free from climate change and inequality, and celebrating differences and creating a psychologically safe space for our team is an important part of that. In particular, we want to create a psychologically safe space for those who have been marginalised by the injustices of systemic racism.",
      ],
      link: "https://docs.google.com/document/d/13Xa49Ox_lWIdBRqoX4_Umg9CXTurowWM/edit?usp=sharing&ouid=112988675888401080522&rtpof=true&sd=true",
    },
    {
      title: "Paid gender affirmation leave",
      description: [
        "Paid gender affirmation leave is a crucial worker’s right for trans and gender diverse people to support their health and wellbeing.",
        "The aim is to ensure people undergoing gender affirmation don’t suffer financial disadvantage when taking the time for these life-changing and often life-saving pathways.",
      ],
      link: "https://docs.google.com/document/d/1LJxpQ08xHo4wEWmga21wdEtG7VF03Yot/edit?usp=sharing&ouid=112988675888401080522&rtpof=true&sd=true",
    },
    {
      title: "Climate emergency leave",
      description: [
        "In the event your home and/or your family has been directly affected or displaced by catastrophic environmental events caused by climate change; or volunteering for organisations that directly manage the response to these events, such as the Australian Red Cross, Rural Fire Service (RFS) and State Emergency Services (SES).",
        "You can access unlimited paid leave.",
      ],
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
      <div>
        {#each item.description as p}
          <p>{p}</p>
        {/each}
      </div>
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
