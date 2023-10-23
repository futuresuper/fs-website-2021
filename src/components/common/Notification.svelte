<script>
  import Info from "../images/Info.svelte";
</script>

<div class="info-block">
  <div>
    <Info/>
  </div>
  <div>
    <strong>
      Service upgrade October 31 - November 15, 2023:  
    </strong>
    Some account services will be unavailable during this time. <a href="/service-upgrade-nov-2023/">Read more</a>
  </div>
</div>

<style lang="scss">
  @use "../../styles/" as *;

  .info-block {
    display: grid;
    grid-template-columns: 25px 1fr;
    gap: 0.5rem;
  
    background-color: #cedeff;
    padding: 1rem;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    color: $black;
    margin-bottom: 1.375rem;

    a {
      color: $black;
    }
  }
</style>
