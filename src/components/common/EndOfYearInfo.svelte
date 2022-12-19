<script>
  import Info from "../images/Info.svelte";
</script>

<div class="info-block">
  <div>
    <Info />
  </div>
  <p>
    <strong>
      Our office will be closed from Friday 23rd of December 2022 to Monday 2nd
      of January 2023, inclusive.
    </strong>
    We will reopen at 10am AEDT Tuesday 3rd January.
    <br />Our Member Advocacy team will continue to monitor our inbox during
    this time to assist with any urgent enquiries.
  </p>
</div>

<style lang="scss">
  @use "../../styles/" as *;

  .info-block {
    background-color: #cedeff;
    padding: 1rem;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    color: $black;
    margin-bottom: 1.375rem;
    p {
      margin: 0;
    }
  }
</style>
