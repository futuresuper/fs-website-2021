<script>
  import Logo from "@components/images/Logo.svelte";
  import pages from "@data/pages.json";
  import MenuDropdown from "./MenuDropdown.svelte";
  import MenuButton from "../../images/MenuButton.svelte";
  import Cross from "../../images/Cross.svelte";
  import MobileMenu from "./MobileMenu.svelte";
  import { onMount } from "svelte";
  import { get } from "svelte/store";
  import {
    headerMenuShowing,
    showHeaderMenuOnLoad,
  } from "../../store/stores.js";

  const menu = [
    {
      heading: "Why us?",
      items: [
        pages.HOW_WE_INVEST,
        pages.INVESTMENT_OPTIONS,
        pages.PERFORMANCE_AND_RETURNS,
      ],
    },
    {
      heading: "Resources",
      items: [
        pages.SUPPORT_AND_FAQS,
        pages.DOCUMENTS_AND_FORMS,
        pages.EMPLOYERS,
        pages.INSURANCE,
        pages.APP,
      ],
    },
  ];

  let mobileMenuOpen = false;

  let showEmergencyNotice = false;

  export let joinPage = false;

  // Hide menu on downward scroll and show on upward
  let showMenu = false;

  let y = 0;
  let yBuffered = 0;
  const sensitivity = 10;
  $: if (y > 100 && Math.abs(y - yBuffered) > sensitivity) {
    showMenu = y < yBuffered;
    headerMenuShowing.update((value) => showMenu);
    yBuffered = y;
  }

  onMount(() => {
    // Determine whether the menu should be shown when page is loaded
    showMenu = get(showHeaderMenuOnLoad);
    headerMenuShowing.update((value) => showMenu);
  });
</script>

<svelte:window bind:scrollY={y} />

<header class="container {showMenu ? 'show' : ''}">
  <div class="sticky-header">
    <div class="left">
      <a href="/">
        <div class="logo">
          <Logo colour="white" size="100%" />
        </div>
      </a>
      <div class="menu-dropdowns hide-on-mobile">
        {#each menu as item}
          <MenuDropdown dropdown={item} />
        {/each}
      </div>
    </div>
    <div class="right">
      <a class="button secondary hide-on-mobile" href={pages.LOGIN[1]}>Login</a>
      {#if !joinPage}
        <a class="button" href={pages.JOIN[1]}
          >Join<span class="hide-on-mobile">&nbsp;now</span></a
        >
      {/if}
      <div
        class="mobile-menu-button"
        on:click={() => {
          mobileMenuOpen = !mobileMenuOpen;
        }}
      >
        {#if mobileMenuOpen}
          <Cross />
        {:else}
          <MenuButton />
        {/if}
      </div>
    </div>
  </div>
  {#if mobileMenuOpen}
    <MobileMenu {menu} />
  {/if}
  {#if showEmergencyNotice}
    <div class="notice">
      Our member portal and join form are currently down. We expect them to be
      up again soon.
    </div>
  {/if}
</header>

<style lang="scss">
  @use "../../../styles/" as *;

  .notice {
    width: 100%;
    margin-top: 40px;
    background-color: $black800;
    padding: 4px 40px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  header {
    z-index: 9999;
    color: $white;
    width: 100%;
    position: fixed;
    top: -180px;
    transition: top 0.5s ease-in-out;
    &.show {
      top: 0px;
    }
  }

  .sticky-header {
    margin: -20px 0;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid $black800;
    border-radius: 47px;
    background-color: $black;
  }

  .logo {
    width: 54px;
    height: 54px;
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

    a {
      margin-left: 20px;
      height: 40px;
      font-family: $regular;
    }
  }

  .menu-dropdowns {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 30px;
  }

  .mobile-menu-button {
    display: none;
  }

  @media (max-width: 800px) {
    .notice {
      width: 100%;
      margin-top: 10px;
      background-color: $black800;
      padding: 4px 20px;
      border-radius: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.6rem;
    }

    .sticky-header {
      margin: 0px;
      padding: 0px 20px;
      height: 54px;
    }

    .hide-on-mobile {
      display: none;
    }

    .mobile-menu-button {
      margin-left: 14px;
      display: flex;
      align-items: center;
    }

    .logo {
      width: 34px;
      margin: 0;
      display: flex;
      align-items: center;
      margin-left: -12px;
    }

    .right {
      .button {
        height: 30px;
      }
    }
  }
</style>
