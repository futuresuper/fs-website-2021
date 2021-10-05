<script>
  import NoSwitchFeeCircle from "../../images/NoSwitchingFeeCircle.svelte";
</script>

<div class="container no-switching-fee">
  <NoSwitchFeeCircle />
  <div class="text-in-middle">
    <h2>Not sure?<br />No stress.</h2>
    <p>
      You can change your investment option as many times as you like with no
      switching fee.
    </p>
  </div>
</div>

<style lang="scss">
  @use "../../../styles/" as *;

  .no-switching-fee {
    max-width: 600px;
    margin-top: 80px;
    display: flex;
    align-items: center;
    justify-content: center;

    .text-in-middle {
      position: absolute;
      text-align: center;
      max-width: 400px;
    }
  }

  @media (max-width: 600px) {
    .no-switching-fee {
      width: 400px;

      .text-in-middle {
        max-width: 220px;
        h2 {
          margin-bottom: 8px;
        }
        p {
          line-height: 125%;
        }
      }
    }
  }

  @media (max-width: 440px) {
    .no-switching-fee {
      width: 100%;

      .text-in-middle {
        max-width: 140px;
        h2 {
          font-size: 14px;
          margin-bottom: 4px;
        }
        p {
          line-height: 110%;
          font-size: 12px;
        }
      }
    }
  }
</style>
