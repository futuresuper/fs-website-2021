<script>
  export let onClick;
</script>

<div on:click={onClick} class="card" style={onClick ? "cursor: pointer" : null}>
  <slot />
</div>

<style lang="scss">
  @use "../../../styles/" as *;

  .card {
    width: 100%;
    height: 100%;
    background-color: $black;
    border-radius: 20px;
    padding: 20px;
    border: 1px solid $black600;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
