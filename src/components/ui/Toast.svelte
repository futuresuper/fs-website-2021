<script>
  import { fade } from "svelte/transition";
  import { fly } from "svelte/transition";
  export let message = "";
</script>

{#if message}
  <div transition:fly={{ y: 200, opacity: 1 }} class="toast">
    {message}
  </div>
{/if}

<style lang="scss">
  @use "../../styles/" as *;

  .toast {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 20px;
    background-color: $black;
    color: $white;
    text-align: center;
    transition: height 2s;
  }
</style>
