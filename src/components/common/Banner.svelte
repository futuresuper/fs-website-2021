<script>
  import Cross from "../images/Cross.svelte";
  import InfoFilled from "@components/images/InfoFilled.svelte";
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

</script>


<div class="banner">
  <div>
    <InfoFilled colour="#084BD5"/>
  </div>

    <p> <strong>Service Upgrade:</strong> Account services will be limited until November 15, 2023.

      <a
              href="/service-upgrade-nov-2023/"
              target="_blank"
      ><strong>Read more</strong></a
      >
    </p>
</div>


<style lang="scss">
  @use "../../styles/" as *;

  .banner {

    text-align: left;
    color: white;
    background-color: #303030;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    @media (max-width: 768px) {
      padding: 1rem 3rem 1rem 0.5rem;
      align-items: start;
    }
    width: 100%;

    span {
      display: none;
      @media (min-width: 768px) {
        display: inline;
      }
    }

    p{
      margin: 0;
    }
    a{
      color: white;
      @media (max-width: 768px) {
        display: block;
      }
    }
    a:hover {
      color: #3DFA52;
    }

    // Override global _blank link arrow styling
    a[target="_blank"]:after {
      content: "";
    }
  }


</style>
