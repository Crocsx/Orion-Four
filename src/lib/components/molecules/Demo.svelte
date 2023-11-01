<script lang="ts">
  import { onMount } from 'svelte';
  import { _ } from 'svelte-i18n';

  import LoaderState from '$lib/components/molecules/LoaderState.svelte';
  import { urlExists } from '$lib/services/url.service';

  import { LoadingState } from '$lib/models/loading';

  export let url: string;
  let urlExist = false;
  let iframeLoadState = LoadingState.INITIAL;

  onMount(() => {
    urlExists(url, (exist) => {
      if (!exist) {
        iframeLoadState = LoadingState.ERROR;
      }
      urlExist = exist;
    });
  });
</script>

<div class="container bg-blue-7">
  {#if !urlExist || iframeLoadState !== LoadingState.SUCCESS}
    <LoaderState state={iframeLoadState} />
    {#if iframeLoadState !== LoadingState.ERROR}
      <p class="ml-4 absolute bottom-0 mb-4 text-red-500">
        {$_('i18n.Demo.LoadingWarning', { default: 'Something went wrong.' })}
      </p>
    {/if}
  {/if}
  {#if urlExist}
    <iframe
      on:load={(e) => {
        iframeLoadState = LoadingState.SUCCESS;
      }}
      on:error={() => {
        iframeLoadState = LoadingState.ERROR;
      }}
      title={$_('i18n.ProjectDemo.Title', { default: 'Project Demo' })}
      src={url}
      width="100%"
      height="100%"
      frameborder="0"
      allowtransparency={true}
      allow="encrypted-media"
    />
  {/if}
</div>

<style lang="scss">
  .container {
    width: 80vw;
    height: 80vh;
  }
</style>
