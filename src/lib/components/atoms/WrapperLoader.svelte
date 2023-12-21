<script lang="ts">
  import Loader from '$lib/components/atoms/Loader.svelte';

  export let isLoading = true;
</script>

{#if isLoading}
  <Loader />
{:else}
  <slot />
{/if}
