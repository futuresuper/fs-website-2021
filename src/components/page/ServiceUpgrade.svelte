<script>
  import Calendar from "@components/images/Calendar.svelte";

  const dates = [
    {
      date: "October 31 2023 2:00 pm (AEST)",
      points: [
        "Blackout period begins, account services will be limited until November 15, 2023. ",
      ],
    },
    {
      date: "November 1 2023",
      points: [
        "Future Super members will have access to a refreshed member online account.",
      ],
    },
    {
      date: "November 15 2023 09:00 am",
      points: [
        "Blackout period ends, account services to resume.",
        "Contributions and account changes made during the blackout period will be processed.",
        "Pension pay date (no change)",
      ],
    },
    {
      date: "November 16 2023",
      points: [
        "Contributions and account changes will be visible via member online account.",
      ],
    },
  ];
</script>

<div>
  <div class="grey-box">
    <div class="pill">TL;DR</div>
    <p>
      Future Super will undergo a transaction blackout period from <strong
        >October 31, 2023, to November 15, 2023</strong
      >, during which some services will be temporarily unavailable. This is
      part of an essential upgrade to improve system efficiency and enhance
      customer experience. Account services will be limited during this time.
    </p>
  </div>
  <h2>Blackout period:<br />October 31 until November 15, 2023</h2>
  <section>
    <p>
      We are excited to share some important updates regarding our services. 
      Beginning close of business on October 31, 2023, until November 15, 2023,
      Future Super will be undergoing a brief transaction blackout period.
      During this time, some of our services will be temporarily
      unavailable. This change is essential to improve our system’s efficiency
      and ensure an even better experience for our customers.
    </p>
    <h3>What’s changing?</h3>
    <p>
      Earlier this year, we made the decision to upgrade our systems and
      transition to a new administration provider. This upgrade will involve a
      planned migration of the administration systems for Future Super. The
      blackout period is necessary to successfully complete this migration. For
      more information about this change download the PDFs below.
    </p>
    <div class="button-grid">
      <a
        href="https://content.myfuturesuper.com.au/forms-docs/FS_AccumSEN_29092023.pdf"
        class="button"
      >
        Accumulation Accounts
      </a>
      <a
        href="https://content.myfuturesuper.com.au/forms-docs/FS_PensionSEN_29092023.pdf"
        class="button"
      >
        Pension Accounts
      </a>
    </div>
  </section>
  <h2>How it affects you</h2>
  <section>
    <p>
      To facilitate this upgrade, account services will be limited from 14:00 pm
      AEST on October 31, 2023, until November 15, 2023. To make any changes or
      contributions to your Future Super account, we recommend doing so before
      the blackout period starts.
    </p>
    <h3>Affected services:</h3>
    <ul>
      <li>Making personal contributions</li>
      <li>Rollovers</li>
      <li>Making withdrawals</li>
      <li>Switching investment options</li>
      <li>Applying for insurance</li>
      <li>Adding a beneficiary to your account</li>
      <li>Changing the personal details</li>
    </ul>

    <p>
      While contributions and account changes are still possible, please note
      they will be processed once the blackout period ends. Contributions will
      be treated as received on November 15, 2023, without backdating.
    </p>
    <p>
      During the blackout period, you will only be able to view your account
      details as of October 31, 2023. Starting November 1, 2023 you’ll have
      access to a refreshed member online account. Your login details and other
      account information will remain the same.
    </p>
    <p>
      Look for further email communications to stay updated. You can also check
      the Future Super website for more details.
    </p>
  </section>
  <h2>Key dates</h2>
  <section>
    <div class="date-container">
      {#each dates as date}
        <div class="date-box">
          <div class="header">
            <Calendar />
            <h4>{date.date}</h4>
          </div>
          <div class="text">
            {#if date.points.length > 1}
              <ul>
                {#each date.points as point}
                  <li>{point}</li>
                {/each}
              </ul>
            {:else}
              <p>{date.points[0]}</p>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </section>
</div>

<style lang="scss">
  @use "../../styles/" as *;

  section {
    padding: 40px 15% 20px;
  }

  .grey-box {
    background-color: $black100;
    padding: 2rem;
    margin: 2rem 0;
    border-radius: 40px;
  }

  .pill {
    background-color: $black300;
    color: $black;
    padding: 0.5rem 1rem;
    border-radius: 999px;
    display: inline-block;
    margin-bottom: 1rem;
  }

  .button-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    margin-top: 2rem;
  }

  .date-container {
    background-color: $black100;
    padding: 40px;
    border-radius: 40px;
    .date-box {
      border: 1px solid $black;
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
      .header {
        background-color: $black;
        padding: 10px;
        display: flex;
        align-items: center;
        h4 {
          color: $white;
          margin: 0 0 0 10px;
        }
      }
      .text {
        padding: 20px;
        ul {
          margin: 0;
          padding: 0 20px;
        }
        p {
          margin: 0;
        }
      }
    }
  }

  @media (max-width: 900px) {
    section {
      padding: 40px 0 20px;
    }

    .button-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
