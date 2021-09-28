<div class="join-row">
  <div class="blank3" />
  <button class="full-width secondary"> JOIN </button>
  <button class="full-width blue-button"> JOIN </button>
  <button class="full-width"> JOIN </button>
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

  .blue-button {
    background-color: $blue;
    color: $white;
    border-color: $blue;
  }

  @media (max-width: 760px) {
    .blank3 {
      display: none;
    }

    .join-row {
      grid-template-columns: repeat(3, 1fr);
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
