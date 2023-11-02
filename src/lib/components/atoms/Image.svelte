<script lang="ts">
  import type { HTMLImgAttributes } from 'svelte/elements';
  import { onMount } from 'svelte';

  interface $$Props extends HTMLImgAttributes {
    src: string;
    alt: string;
  }
  export let src: string = '';
  export let alt: string = '';

  let loaded = false;
  let failed = false;
  let loading = true;

  onMount(() => {
    const img = new Image();
    img.src = src;
    loading = true;

    img.onload = () => {
      loading = false;
      loaded = true;
    };
    img.onerror = () => {
      loading = false;
      failed = true;
    };
  });
</script>

{#if loaded}
  <img {...$$restProps} {alt} {src} />
{:else if failed}
  <img
    {...$$restProps}
    src={`https://placehold.jp/${$$restProps?.width}x${$$restProps?.height}.png`}
    alt="Not Found"
  />
{:else if loading}
  <div
    role="status"
    class="space-y-8 animate-pulse md:space-y-0 w-full md:space-x-8 md:flex md:items-center"
  >
    <div
      class={`flex items-center justify-center bg-gray-300 dark:bg-gray-700 ${$$restProps?.class}`}
      style={`height: ${$$restProps?.height}px;`}
    >
      <svg
        class="w-10 h-10 text-gray-200 dark:text-gray-600"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 18"
      >
        <path
          d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"
        />
      </svg>
    </div>
  </div>
{/if}
