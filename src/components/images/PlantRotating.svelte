<script>
  export let colour = "black";
</script>

<svg viewBox="0 0 97 96" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M48.5001 81.5144C67.0096 81.5144 82.0144 66.5096 82.0144 48.0001C82.0144 29.4907 67.0096 14.4858 48.5001 14.4858C29.9907 14.4858 14.9858 29.4907 14.9858 48.0001C14.9858 66.5096 29.9907 81.5144 48.5001 81.5144Z"
    stroke={colour}
    stroke-width="1.8"
    stroke-linejoin="bevel"
  />
  <path
    d="M48.5 42H42.401C36.665 42 32 35.945 32 28.5H39.2426C44.3614 28.5 48.5 33.8717 48.5 40.5157V42Z"
    stroke={colour}
    stroke-width="1.8"
    stroke-miterlimit="10"
  />
  <path
    d="M48.5 42H55.1535C61.4109 42 66.5 35.945 66.5 28.5H58.599C53.0149 28.5 48.5 33.8717 48.5 40.5157V42Z"
    stroke={colour}
    stroke-width="1.8"
    stroke-miterlimit="10"
  />
  <path
    d="M48.5 63H39.6319C31.2802 63 24.5 56.2789 24.5 48H35.0295C42.4607 48 48.5 53.9866 48.5 61.3531V63Z"
    stroke={colour}
    stroke-width="1.8"
    stroke-miterlimit="10"
  />
  <path
    d="M48.5 63H57.3681C65.7198 63 72.5 56.2789 72.5 48H61.9705C54.5393 48 48.5 53.9866 48.5 61.3531V63Z"
    stroke={colour}
    stroke-width="1.8"
    stroke-miterlimit="10"
  />
  <path d="M48.5 37.5L48.5 72" stroke={colour} stroke-width="1.8" />
  <path
    d="M69.5 75C63.9583 73.1006 56.3105 72 49.25 72C42.1895 72 34.5416 73.1006 29 75"
    stroke={colour}
    stroke-width="1.8"
    stroke-linejoin="bevel"
  />
  <path
    d="M57.5756 55.4243L48.4248 62.2497L39.274 55.4243"
    stroke={colour}
    stroke-width="1.8"
  />
  <path
    d="M55.9997 36.0002L48.3145 42.0973L40.8488 36.3773"
    stroke={colour}
    stroke-width="1.8"
  />
</svg>

<style>
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }
  svg {
    animation: spin 10s linear infinite;
  }
</style>
