<script>
  import Policy from "./Policy.svelte";

  const policies = [
    {
      title: "Fairer hiring",
      description: `We aim to create an employee experience that aligns with our purpose and values from the very beginning. That’s why we use [Applied](https://www.beapplied.com/) for job applications. By using Applied, we don’t know the names of applicants and we often don’t know the brand names of the places they’ve worked before until later in the interview process. Applied [doesn’t rely on traditional resumes and cover letters](https://www.futuresuper.com.au/blog/how-de-identified-recruitment-is-improving-the-diversity-of-our-team/), instead asking candidates to answer questions that are really relevant to the job they will be doing. This aims to remove bias in the hiring process. It’s the first step in creating a more equal workplace. As an added bonus, when you’re applying for a job with Future Super Group you won’t have to write one of those dreaded cover letters. `,
    },
    {
      title: "Remuneration",
      description: `Our remuneration policies aim to be fair, consistent and transparent and to remove inequality on the basis of gender and cultural diversity. Our salaries are benchmarked to the industry and are competitive.

At Future Super Group, we cap our pay ratio of highest salary to lowest salary at 5 to 1. To offer some context, in 2021 the [ABC reported](https://www.abc.net.au/news/2021-08-23/ceo-pay-ratio-the-small-number-that-could-change-a-lot/100215434) that the chief executive of Woolworth’s out-earned the company’s average worker 143 to 1. In 2022, it was reported that Amazon’s [chief executive to worker pay gap was 6474 to 1](https://www.businessinsider.com/these-20-companies-have-biggest-ceo-to-worker-pay-ratios-2022-7#:~:text=Amazon%20had%20the%20biggest%20CEO,a%20mile%3A%206%2C474%20to%201.). 

On top of capping our pay ratio and to further our commitment to treating those on lower salaries with the fairness everyone deserves, Future Super Group pays all full time employees earning less than $120,000 an extra 1% in superannuation. 

To address the gender pay gap and improve diversity, Future Super Group has a[ diversity dashboard](https://datastudio.google.com/u/0/reporting/7bb60d21-08b1-4236-9207-260f09522ac6/page/iyPsC) and reports on the gender pay gap and on diversity within our business. Our numbers shift and often are not where we would like them to be, but we believe we will improve by being transparent because that’s how we hold ourselves to account. We encourage staff to openly discuss compensation, ask questions and advocate for themselves and others. `,
    },
    {
      title: "Flexible working",
      description: `Future Super Group has a distributed-first workforce, with employees in several states and territories in Australia and some overseas. Most of our team work from home. We have[ Hub Australia](https://www.hubaustralia.com/) memberships in Melbourne, Canberra, Brisbane and Sydney, so teams have the option of working from those offices when it works for them. Future Super Group decided on this policy by surveying the team during and after the pandemic to find out what works best for our employees. Employees are also free to work overseas for up to three weeks a year. 

To set people up for success working from home, we offer a $750 budget to set up a comfortable work space and an ergonomics assessment with a professional. We also wanted to create a more equitable experience for people working from home and so offer a $100 fortnightly work from home allowance to permanent, full-time employees who earn a base annual salary of $120,000 or less.`,
    },
    {
      title: "Menstrual and menopausal leave",
      description: `Future Super Group recognizes that menstrual and menopausal experiences can be debilitating, yet as a society, we have been indoctrinated to [deny its existence publicly](https://www.futuresuper.com.au/blog/a-bloody-good-policy/). All full-time Future Super Group employees who experience menstruation and menopause are entitled to 6 paid days off a year to manage the symptoms. 

This policy also acts as a commitment by Future Super Group that as an organisation we aim to remove the stigma and taboo surrounding menstruation and menopause, and recognize its impact on women and all people that menstruate and experience menopause. `,
      link: "https://docs.google.com/document/d/1M9vaiFBybjmobrb_jYIQDNf6WACJFB-2hFftiQVxC3c/edit",
    },
    {
      title: "Mental health and wellbeing",
      description: `As a response to the COVID-19 outbreak in early 2020, we provided temporary mental health leave entitlements to all permanent employees. The introduction of this initiative proved to be a meaningful benefit for the team and their workplace engagement. In response, Future Super has made mental health leave permanent. 

All permanent employees are entitled to 6 paid days of mental health leave (or half a day a month) each year. This leave expires every 2 months rather than accruing, and that is deliberate because we actively encourage every employee to take it. 

Achieving and maintaining good mental health and wellbeing is important for everyone and is an important part of how we work at Future Super. Mental illness or poor mental health is really common. In 2022, the [ABS reported](https://www.abs.gov.au/statistics/health/mental-health/national-study-mental-health-and-wellbeing/latest-release) that over two in five Australians aged 16-85 years (43.7% or 8.6 million people) had experienced a mental disorder at some time in their life. We acknowledge this and aim to always be a supportive workplace. We do this not only through our leave policy but by encouraging open discussion, making adjustments to work to support the mental health of our employees and treating workers with respect and fairness. `,
      link: "https://drive.google.com/drive/folders/1j486oJO7b9BXI3YCUvry4DydQYnWAap7",
    },
    {
      title: "Ethical and local supplier guidelines",
      description: `Future Super’s investment impact sees members making a direct contribution to reducing climate change and inequality. We acknowledge however that Future Super’s day-to-day business operations can have a direct and indirect impact on environmental and social inequality. 

That’s why we do not use suppliers that profit from, or have strong links to, fossil fuel companies. We also do not use suppliers that have animal cruelty in their supply chain or flout the Modern Slavery Act. 

We prioritise giving our business to Aboriginal and/or Torres Strait Islander owned businesses or those certified with [Supply Nation](https://supplynation.org.au/?gclid=Cj0KCQjwl_SHBhCQARIsAFIFRVVvqwsRfwSrmL4euTn-DewZxeShVWEzbNG9zyIQSupvZHJZPWjCoNsaAmp3EALw_wcB). We also prioritise suppliers that use renewable energy, have environmentally friendly practices and those that are Certified B Corporations, social enterprises or not-for-profit organisations. `,
      link: "https://drive.google.com/drive/folders/1tcvhHbQjkDDSN78qV-bMKzmdjMpHC7vU",
    },
    {
      title: "Inclusive Language Guide",
      description: `Future Super has an inclusive language guide which is constantly updated. The guide forms part of onboarding for all new employees and all employees are encouraged to provide feedback on it. Thinking about inclusive language is one of the ways Future Super aims to uphold its values and ethics. Showing consideration around language is one of the ways all businesses can create a more inclusive culture. The inclusive language guide is frequently updated and we are always learning and open to suggestions in this department. `,
      link: "https://myfuturesuper.atlassian.net/wiki/spaces/Public/pages/1836285953/Inclusive+Language+Guide",
    },
    {
      title: "Anti-racism policy",
      description:
        "There is zero tolerance for racism and discrimination at Future Super. The super fund’s mission statement is to build a future free from climate change and inequality, and celebrating differences and creating a psychologically safe space for employees is an important part of that. Future Super’s anti-racism policy aims to set the foundations for providing a safe space for those who have been marginalised by the injustices of systemic racism. We offer annual anti-racism training to all employees so they’re better informed about the origins of racism and better equipped to counter potential racism in the workplace, or in their personal life. Our training providers have included Hue, Democracy in Colour and Erfan Daliri. ",
      link: "https://docs.google.com/document/d/13Xa49Ox_lWIdBRqoX4_Umg9CXTurowWM/edit",
    },
    {
      title: "Climate emergency leave",
      description: `Future Super introduced this policy as a direct response to the bushfires of 2019/2020. With the impacts of climate change accelerating, we are seeing more and more frequent extreme weather events such as bushfires and floods. In the event a member of the team has been directly affected or displaced by catastrophic environmental events caused by climate change - or are volunteering for organisations that directly manage the response to these events, such as the Australian Red Cross, Rural Fire Service (RFS) and State Emergency Services (SES) - they can access unlimited paid leave.`,
      link: "https://docs.google.com/document/d/1PyWWpfDu9_1YuSOC8VTgbKFoGMin1KtXN9CABSOJp_Y/edit",
    },
    {
      title: "Parental leave",
      description: `We’re currently in the process of refreshing our parental leave policy to make it as good as possible. We’ve always offered paid parental leave of 14 weeks to all workers regardless of gender or carer status, and we will continue to do that. 

When taking parental leave, Future Super employees will continue to receive superannuation payments during the period of leave, for up to 12 months. If you start working part-time in a role that would otherwise be full-time were it not for your parenting responsibilities, or return to work part-time after parental leave, then you will receive super contributions as if you were working full-time. We do this so that people who take parental leave or work part-time due to parenting responsibilities - often women - don’t take a hit to their superannuation as a result. According to[ 2022 statistics](https://humanrights.gov.au/our-work/gender-gap-retirement-savings), the average superannuation payout for women is a third of the payout for men - $37,000 compared with $110, 000.

According to the legislation around long service leave, parental leave doesn’t break your continuity of service with an employer, but also  doesn’t count towards your continuous service, which ultimately entitles you to long service leave. The Future Super team thinks this is another old fashioned policy that creates gender inequality, so we do count parental leave towards service - that means carers can access long service leave sooner. 

We also refund the administration fee for Future Super members while they are on parental leave under our [Baby Bump](https://www.futuresuper.com.au/baby-bump/#:~:text=Baby%20Bump%20is%20a%20refund,when%20you%20take%20parental%20leave) policy. `,
    },
    {
      title: "Gender affirmation leave",
      description: `This policy is still a work in progress. The reality for transgender and gender diverse people is that they still experience discrimination, a lack of acceptance, stigma and abuse from broader society, resulting in them experiencing worse mental health than the general population, facing barriers to employment and barriers to health care.  

We encourage employees to state their preferred pronouns and we expect employees to be respectful of preferred pronouns (while also being kind about any honest mistakes). Leadership is expected to model appropriate standards of behaviour and to be supportive of transgender and gender diverse employees. 

Future Super will offer flexible working arrangements and collaborate on a workplace plan for any employee undergoing any aspect of a gender affirmation process. We offer up to 30 paid days (6 weeks) leave and unlimited unpaid leave in these circumstances. `,
      link: "https://docs.google.com/document/d/1AZ7S16Y7dwDhaklMr_w-QBTMJ2jKqpsn/edit",
    },
  ];
</script>

<section>
  {#each policies as policy}
    <Policy {policy} />
  {/each}
</section>
