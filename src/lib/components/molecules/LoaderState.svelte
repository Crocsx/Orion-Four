<script lang="ts">
  import Error from '$lib/components/atoms/Error.svelte';
  import Loader from '$lib/components/atoms/Loader.svelte';
  import { LoadingState, LoaderType } from '$lib/models/loading';

  export let state: LoadingState = LoadingState.INITIAL;
  export let type = LoaderType.CIRCULAR;
  export let sizeX = '100%';
  export let sizeY = '100%';
</script>

<div
  style="width: {sizeX}; height: {sizeY};"
  class="{state === LoadingState.SUCCESS ? 'hidden' : ''} absolute bg-blue-2"
>
  {#if state === LoadingState.INITIAL || state === LoadingState.LOADING}
    <Loader {type} />
  {/if}
  {#if state === LoadingState.ERROR}
    <Error />
  {/if}
</div>
