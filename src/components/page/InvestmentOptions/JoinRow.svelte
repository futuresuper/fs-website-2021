<script>
  export let includePension = false;
</script>

<div class="join-row {includePension ? 'pension' : ''}">
  <div class="blank3 {includePension ? 'pension' : ''}" />
  <button class="full-width secondary"> JOIN </button>
  <button class="full-width blue-button"> JOIN </button>
  <button class="full-width"> JOIN </button>
  {#if includePension}
    <button class="full-width pink-button"> JOIN </button>
  {/if}
</div>

<style lang="scss">
  @use "../../../styles/" as *;

  .join-row {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(6, 1fr);
    padding: 20px;
    align-items: center;
  }

  .blank3 {
    grid-column: span 3;
  }

  .blank3.pension {
    grid-column: span 2;
  }

  .blue-button {
    background-color: $blue;
    color: $white;
    border-color: $blue;
  }

  .pink-button {
    background-color: $pink;
    color: $white;
    border-color: $pink;
  }

  @media (max-width: 760px) {
    .blank3 {
      display: none;
    }

    .join-row {
      grid-template-columns: repeat(3, 1fr);
    }

    .join-row.pension {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (max-width: 600px) {
    button {
      font-size: 10px;
      padding: 4px;
    }

    .join-row {
      grid-gap: 10px;
    }
  }
</style>
