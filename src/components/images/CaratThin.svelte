<script>
  export let colour = "#212121";
  export let direction = "right";
</script>

<svg
  class={direction}
  viewBox="0 0 21 37"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M17.7719 18.5002L0.885986 1.61426L2.44751 0.0527344L20.1142 17.7194L20.1142 19.2809L2.44751 36.9476L0.885985 35.3861L17.7719 18.5002Z"
    fill={colour}
  />
</svg>

<style lang="scss">
  svg {
    width: 100%;
    &.down {
      transform: rotate(90deg);
    }
    &.left {
      transform: rotate(180deg);
    }
    &.up {
      transform: rotate(-90deg);
    }
  }
</style>
