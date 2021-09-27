<script>
  import Logo from "$/components/images/Logo.svelte";

  const menu = {
    whyUs: [
      ["How We Invest", "/how-we-invest"],
      ["Investment Options", "/investment-options"],
      ["Performance and Returns", "/performance-and-returns"],
    ],
    resources: [
      ["Support And FAQs", "/support-and-faqs"],
      ["Documents and Forms", "/documents-and-forms"],
      ["Employers", "/employers"],
    ],
  };
</script>

<header class="container">
  <div class="sticky-header">
    <div class="left">
      <a href="/">
        <div class="logo">
          <Logo colour="white" size="54" />
        </div>
      </a>
      <div class="menu-head">Why us?</div>
      <div class="menu-head">Resources</div>
    </div>
    <div class="right">
      <button class="secondary">Login</button>
      <button>Join now</button>
    </div>
  </div>
</header>

<style lang="scss">
  @use "../styles/" as *;

  header {
    color: $white;
    width: 100%;
    position: fixed;
  }

  .sticky-header {
    margin: -20px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    border: 2px solid $black800;
    border-radius: 47px;
    background-color: $black;
  }

  .logo {
    height: 54px;
    width: 54px;
    margin: -7px;
    margin-right: 7px;
  }

  .left {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .right {
    display: flex;
    flex-direction: row;
    align-items: center;

    button {
      margin-left: 20px;
      height: 40px;
    }
  }

  .menu-head {
    margin-left: 30px;
  }
</style>
