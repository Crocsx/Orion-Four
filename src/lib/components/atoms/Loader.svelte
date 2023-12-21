<script lang="ts">
  import { LoaderType } from '$lib/models/loading';

  export let sizeX = '100%';
  export let sizeY = '100%';

  export let type: LoaderType = LoaderType.CIRCULAR;
</script>

{#if type === LoaderType.CIRCULAR}
  <div style="width: {sizeX}; height: {sizeY};" class="absolute bg-blue-2">
    <div
      class="loader-linear absolute left-2/4 top-2/4 transform -translate-y-2/4 -translate-x-2/4"
    />
  </div>
{:else}
  <div style="width: {sizeX}; height: {sizeY};" class="absolute overflow-hidden">
    <div class="loader-page absolute left-2/4 top-2/4" />
  </div>
{/if}

<style lang="scss">
  .loader-linear {
    width: 124px;
    height: 24px;
    mask: conic-gradient(from 135deg at top, #0000, #000 0.5deg 90deg, #0000 90.5deg) 0 0,
      conic-gradient(from -45deg at bottom, #0000, #000 0.5deg 90deg, #0000 90.5deg) 0 100%;
    mask-size: 25% 50%;
    mask-repeat: repeat-x;
    background: linear-gradient(#2d3a69 0 0) left/0% 100% no-repeat #ddd;
    animation: loader-linear-anim 2s infinite linear;
  }

  @keyframes loader-linear-anim {
    100% {
      background-size: 100% 100%;
    }
  }

  .loader-page {
    width: 50px;
    height: calc(50px * 0.866);
    position: relative;
    background: conic-gradient(from 120deg at 50% 64%, #0000, #4c5c96 1deg 120deg, #0000 121deg);
    transform-origin: 50% 50%;
    animation: loader-page-anim-1 1.5s infinite cubic-bezier(0.3, 1, 0, 1);

    &::before,
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: inherit;
      transform-origin: 50% 66%;
      animation: loader-page-anim-2 1.5s infinite;
    }

    &::after {
      --s: -1;
    }
  }

  @keyframes loader-page-anim {
    0%,
    30% {
      transform: rotate(0);
    }

    70% {
      transform: rotate(120deg);
    }

    70.01%,
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes loader-page-anim-2 {
    0% {
      transform: rotate(calc(var(--s, 1) * 120deg)) translate(0);
    }

    30%,
    70% {
      transform: rotate(calc(var(--s, 1) * 120deg)) translate(calc(var(--s, 1) * -5px), 10px);
    }

    100% {
      transform: rotate(calc(var(--s, 1) * 120deg)) translate(0);
    }
  }
</style>
