<script lang="ts">
  import { onMount } from 'svelte'
  import Loader from '$lib/components/atoms/Loader.svelte';

  export let src: string = "";
  export let width: string | undefined = undefined;
  export let height: string | undefined = undefined;
  export let alt: string | undefined = undefined;
  export let className: string | undefined = undefined;
  export let style: string | undefined = undefined;


  let loaded = false;
  let failed = false;
  let loading = false;

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
  })
</script>

{#if loaded}
	<img {style} class={className} {width} {height} {src} {alt} />
{:else if failed}
	<img {style} class={className} {width} {height}  src={`https://placehold.jp/${width}x${height}.png`} alt="Not Found" />
{:else if loading}
  <Loader />
{/if}