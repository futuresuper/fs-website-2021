<script>
  import moment from "moment";
  export let careers;
</script>

<section>
  <h2>Our current job openings</h2>
  {#if careers.length < 1}
    <p>We don't have any job openings at the moment. Please check back soon!</p>
  {:else}
    {#each careers as career}
      <div class="career">
        <h3>{career.title}</h3>
        <p>Location: {career.location}</p>
        <p>Salary: {career.salary}</p>
        <p>
          Closes: {moment(career.endDate).add(10, "hours").format("D MMM YYYY")}
        </p>
        <a href={career.url} class="button secondary">More info →</a>
      </div>
    {/each}
  {/if}
</section>

<article>
  <h2>Our efforts to make working here fair for all</h2>

  <ul>
    <li>14 weeks paid parental leave</li>
    <li>Flexible working arrangements</li>

    <li>Additional super for staff earning under $80,000 p.a.</li>
    <li>Safe place for trans and non-binary employees</li>
  </ul>
</article>

<style lang="scss">
  article {
    margin-top: 80px;
  }

  section {
    border-bottom: 1px solid black;
  }

  .career {
    border-top: 1px solid black;
    padding: 40px 0;
  }
</style>
