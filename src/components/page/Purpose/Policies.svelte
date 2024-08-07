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

At Future Super Group, we cap our pay ratio of highest base salary to lowest base salary at 5 to 1. We report this figure to B Corp as part of their rigorous re-certification process.

On top of capping our pay ratio and to further our commitment to treating those on lower salaries with the fairness everyone deserves, Future Super Group pays all full time employees earning less than $120,000 an extra 1% in superannuation. 

To address the gender pay gap and improve diversity, Future Super Group has a[ diversity dashboard](https://lookerstudio.google.com/u/5/reporting/039500c3-eb10-47fd-8303-900b0d4928fc/page/p_cgwbrcgc5c) and reports on the gender pay gap and on diversity within our business. Our numbers shift and often are not where we would like them to be, but we believe we will improve by being transparent because that’s how we hold ourselves to account. We encourage staff to openly discuss compensation, ask questions and advocate for themselves and others. `,
    },
    {
      title: "Flexible working",
      description: `Future Super Group has a distributed-first workforce, with employees in several states and territories in Australia and some overseas. Most of our team work from home. We have[ Hub Australia](https://www.hubaustralia.com/) memberships in Melbourne, Canberra, Brisbane and Sydney, so teams have the option of working from those offices when it works for them. Future Super Group decided on this policy by surveying the team during and after the pandemic to find out what works best for our employees. Employees are also free to work overseas for up to three weeks a year. 

To set people up for success working from home, we offer up to $1,000 budget to set up a comfortable work space and an ergonomics assessment with a professional. We also wanted to create a more equitable experience for people working from home and so offer a $100 fortnightly work from home allowance to permanent, full-time employees who earn a base annual salary of $120,000 or less.`,
    },
    {
      title: "Menstrual and menopausal leave",
      description: `Future Super Group recognizes that menstrual and menopausal experiences can be debilitating, yet as a society, we have been indoctrinated to [deny its existence publicly](https://www.futuresuper.com.au/blog/a-bloody-good-policy/). All full-time Future Super Group employees who experience menstruation and menopause are entitled to 6 paid days off a year to manage the symptoms. 

This policy also acts as a commitment by Future Super Group that as an organisation we aim to remove the stigma and taboo surrounding menstruation and menopause, and recognize its impact on women and all people that menstruate and experience menopause. `,
      link: "https://myfuturesuper.atlassian.net/wiki/spaces/Public/pages/1947730015/Future+Group+s+Open+Source+Policies+and+Guidelines",
    },
    {
      title: "Mental health and wellbeing",
      description: `As a response to the COVID-19 outbreak in early 2020, we provided temporary mental health leave entitlements to all permanent employees. The introduction of this initiative proved to be a meaningful benefit for the team and their workplace engagement. In response, Future Super has made mental health leave permanent. 

All permanent employees are entitled to 6 paid days of mental health leave (or half a day a month) each year. This leave expires every 2 months rather than accruing, and that is deliberate because we actively encourage every employee to take it. 

Achieving and maintaining good mental health and wellbeing is important for everyone and is an important part of how we work at Future Super. Mental illness or poor mental health is really common. In 2022, the [ABS reported](https://www.abs.gov.au/statistics/health/mental-health/national-study-mental-health-and-wellbeing/latest-release) that over two in five Australians aged 16-85 years (43.7% or 8.6 million people) had experienced a mental disorder at some time in their life. We acknowledge this and aim to always be a supportive workplace. We do this not only through our leave policy but by encouraging open discussion, making adjustments to work to support the mental health of our employees and treating workers with respect and fairness. `,
      link: "https://myfuturesuper.atlassian.net/wiki/spaces/Public/pages/1947730015/Future+Group+s+Open+Source+Policies+and+Guidelines",
    },
    {
      title: "Ethical and local supplier guidelines",
      description: `Future Super’s investment impact sees members making a direct contribution to reducing climate change and inequality. We acknowledge however that Future Super’s day-to-day business operations can have a direct and indirect impact on environmental and social inequality. 

That’s why we do not use suppliers that profit from, or have strong links to, fossil fuel companies. We also do not use suppliers that have animal cruelty in their supply chain or flout the Modern Slavery Act. 

We prioritise giving our business to Aboriginal and/or Torres Strait Islander owned businesses or those certified with [Supply Nation](https://supplynation.org.au/?gclid=Cj0KCQjwl_SHBhCQARIsAFIFRVVvqwsRfwSrmL4euTn-DewZxeShVWEzbNG9zyIQSupvZHJZPWjCoNsaAmp3EALw_wcB). We also prioritise suppliers that use renewable energy, have environmentally friendly practices and those that are Certified B Corporations, social enterprises or not-for-profit organisations. `,
      link: "https://myfuturesuper.atlassian.net/wiki/spaces/Public/pages/1947730015/Future+Group+s+Open+Source+Policies+and+Guidelines",
    },
    {
      title: "Inclusive Language Guide",
      description: `Future Super has an inclusive language guide which is constantly updated. The guide forms part of onboarding for all new employees and all employees are encouraged to provide feedback on it. Thinking about inclusive language is one of the ways Future Super aims to uphold its values and ethics. Showing consideration around language is one of the ways all businesses can create a more inclusive culture. The inclusive language guide is frequently updated and we are always learning and open to suggestions in this department. `,
      link: "https://myfuturesuper.atlassian.net/wiki/spaces/Public/pages/1947730015/Future+Group+s+Open+Source+Policies+and+Guidelines",
    },
    {
      title: "Anti-racism policy",
      description:
        "There is zero tolerance for racism and discrimination at Future Super. The super fund’s mission statement is to build a future free from climate change and inequality, and celebrating differences and creating a psychologically safe space for employees is an important part of that. Future Super’s anti-racism policy aims to set the foundations for providing a safe space for those who have been marginalised by the injustices of systemic racism. We offer annual anti-racism training to all employees so they’re better informed about the origins of racism and better equipped to counter potential racism in the workplace, or in their personal life. Our training providers have included Hue, Democracy in Colour and Erfan Daliri. ",
      link: "https://myfuturesuper.atlassian.net/wiki/spaces/Public/pages/1947730015/Future+Group+s+Open+Source+Policies+and+Guidelines",
    },
    {
      title: "Climate emergency leave",
      description: `Future Super introduced this policy as a direct response to the bushfires of 2019/2020. With the impacts of climate change accelerating, we are seeing more and more frequent extreme weather events such as bushfires and floods. In the event a member of the team has been directly affected or displaced by catastrophic environmental events caused by climate change - or are volunteering for organisations that directly manage the response to these events, such as the Australian Red Cross, Rural Fire Service (RFS) and State Emergency Services (SES) - they can access unlimited paid leave.`,
      link: "https://myfuturesuper.atlassian.net/wiki/spaces/Public/pages/1947730015/Future+Group+s+Open+Source+Policies+and+Guidelines",
    },
    {
      title: "Parental leave",
      description: `Future Super Group offers 20 weeks of paid parental leave. In addition, employees may access 5 days of paid pre-adoption, pre-fostering, pre-surrogacy or fertility leave; 5 days of pre-parental leave; and access to 3 x career coaching sessions (before, during and after parental leave). 
      
When taking parental leave, Future Super Group employees will continue to receive superannuation payments during the period of leave, for up to 12 months. If you start working part-time in a role that would otherwise be full-time were it not for your parenting responsibilities, or return to work part-time after parental leave, then you will receive super contributions as if you were working full-time. We do this so that people who take parental leave or work part-time due to parenting responsibilities - often women - don’t take a hit to their superannuation as a result. According to 2022 statistics, the average superannuation payout for women is a third of the payout for men - $37,000 compared with $110, 000.

To acknowledge parents’ need for flexibility, for the first three months after returning to work, parents can work 4 days per week  but be paid for a full 5-day week. If parents return to work and begin working part-time in a role that would otherwise be full-time were it not for their caring responsibilities, then they will receive super contributions as if they were working full-time. 

There’s also no minimum requirement for length of employment to be eligible for parental leave at Future Super Group.`,
      link: "https://myfuturesuper.atlassian.net/wiki/spaces/Public/pages/1947730015/Future+Group+s+Open+Source+Policies+and+Guidelines",
    },
    {
      title: "Gender affirmation leave",
      description: `This policy is still a work in progress. We believe that creating a society that is inclusive and equitable is everyone’s business and, as an employer, Future Super has an opportunity to practice real allyship for Transgender and Gender Diverse people. 
      
Future Super will support Transgender and Gender Diverse employees by creating a workplace plan in conjunction with an employee undergoing any aspect of a gender affirmation process, noting that each process will look different for each person. We will offer flexible working arrangements, up to 30 days paid (6 weeks) leave and 12 months unpaid leave in these circumstances.`,
    },
    {
      title: "Cultural leave (for culturally and/or faith diverse people)",
      description: `This policy is a small part of Future Super Group’s work to decolonise the workplace. Culturally and/or faith diverse people are often underrepresented and marginalised throughout their lives, which contradicts the values of diversity, equity and inclusion which Future Super Group upholds. 

Australia’s history is rooted in colonisation, exploitation, and injustice. Unfortunately, our current systems and norms are a product of historical inequalities, and continue to foster unfair outcomes for culturally and/or faith diverse people.

With this policy, full-time culturally and/or faith diverse employees (either on a permanent or fixed-term contract) are entitled to up to 4 paid cultural leave days per financial year. Cultural leave is pro-rated. Managers are encouraged to facilitate cultural leave.`,
      link: "https://myfuturesuper.atlassian.net/wiki/spaces/Public/pages/1947730015/Future+Group+s+Open+Source+Policies+and+Guidelines",
    },
    {
      title: "Cultural leave (for First Nations peoples)",
      description: `Future Super Group is strongly committed to reconciliation with First Nations peoples and communities. As a business that exists to build a future free from climate change and inequality, it is vital we pursue equity for our staff and stay true to our purpose.

A [Minderoo Foundation study from 2018](https://www.minderoo.org/indigenous-employment-index/), found that racism in the workplace is a common experience for Indigenous employees, with more than 50% of study participants reporting they had experienced direct or indirect racism at work. The study also found that many First Nations employees feel culturally unsafe at work, meaning they cannot practise their cultural identity without discrimination, ridicule or denunciation.

Full-time Aboriginal and Torres Strait Islander employees (either on a permanent or fixed-term contract) are entitled to up to 4 paid cultural leave days per financial year. Cultural leave is pro-rated. Managers are encouraged to facilitate cultural leave.`,
      link: "https://myfuturesuper.atlassian.net/wiki/spaces/Public/pages/1947730015/Future+Group+s+Open+Source+Policies+and+Guidelines",
    },
    {
      title: "Public holiday swapping",
      description: `Another part of extending inclusivity to all employees, and of working to decolonise the workplace, is acknowledging that some public holidays are not only irrelevant to some employees - they may even be offensive. 

All full-time and part-time employees (either on a permanent or fixed-term contract) are entitled to swap any number of public holidays within a calendar year. The public holiday(s) can be swapped for any other working day in the same calendar year.

Christmas Day, Boxing Day and New Year’s Day are currently excluded from this policy, due to the office shutdown period.`,
      link: "https://myfuturesuper.atlassian.net/wiki/spaces/Public/pages/1947730015/Future+Group+s+Open+Source+Policies+and+Guidelines",
    },
    {
      title: "Pay the Rent",
      description: `In acknowledging that the sovereignty of First Nations people was never ceded, we also acknowledge that we conduct business and take shelter on land which was removed from First Nations people. This has created a disproportionate distribution of wealth and marginalised the Aboriginal and Torres Strait Islander owners. 

Paying the Rent is a step towards justice, truth and equality for First Nations people. Future Super Group pays rent through the [Pay The Rent Collective](https://paytherent.net.au/about-us/), which disburses payments to a range of Aboriginal and Torres Strait Islander organisations they partner with across the country.`,
      link: "https://myfuturesuper.atlassian.net/wiki/spaces/Public/pages/1947730015/Future+Group+s+Open+Source+Policies+and+Guidelines",
    },
    {
      title: "Statement of commitment to increase First Nations employment",
      description: `At Future Super Group, we are committed to building on our Reconciliation Action Plan (RAP). We strongly commit to attaining a First Nations employment target of 3.8% by 2025. 

This figure is in-line with the 2021 census statistic that 3.8% of the Australian population are Aboriginal and Torres Strait Islander.

The commitment to increasing First Nations employment was developed in consultation with Arrilla Indigenous Consulting (Arrilla), which created an Aboriginal and Torres Strait Islander Employment Strategy for Future Super Group. We acknowledge that there is a lot of work to be done internally to attract and maintain First Nations employees and, thanks to insights from Arrilla, we have steps in place to meet our target.`,
      link: "https://myfuturesuper.atlassian.net/wiki/spaces/Public/pages/1947730015/Future+Group+s+Open+Source+Policies+and+Guidelines",
    },
  ];
</script>

<section>
  {#each policies as policy}
    <Policy {policy} />
  {/each}
</section>
