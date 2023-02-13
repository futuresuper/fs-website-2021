<script>
  export let onClick;

  export let style = "";
</script>

<div
  on:click={onClick}
  class="card"
  style="{onClick ? 'cursor: pointer' : null}; {style}"
>
  <slot />
</div>

<style lang="scss">
  @use "../../../styles/" as *;

  .card {
    width: 100%;
    min-height: 440px;
    background-color: $black;
    border-radius: 20px;
    padding: 20px;
    border: 1px solid $black600;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
</style>
