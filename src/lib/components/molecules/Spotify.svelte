<script lang="ts">
  import Fa from 'svelte-fa';
  import { _ } from 'svelte-i18n';

  import { faMusic } from '@fortawesome/free-solid-svg-icons';

  import Error from '$lib/components/atoms/Error.svelte';
  import { LoadingState } from '$lib/models/loading';

  let opened = false;
  let requested = false;
  let iframeLoadState = LoadingState.INITIAL;

  function toggleMusic() {
    opened = !opened;
    if (!requested) {
      iframeLoadState = LoadingState.LOADING;
      requested = true;
    }
  }
</script>

<div
  class="fixed bottom-0 duration-200 transition-transform transform z-1 {opened
    ? ''
    : 'translate-y-full'}"
>
  <button
    aria-label={$_('i18n.Playlist.ButtonLabel', { default: 'Show Playlist' })}
    on:click={toggleMusic}
    class="focus:outline-none bg-blue-2 hover:bg-blue-1 fixed border border-b-0 transform -translate-y-full rounded-tr-lg p-2 flex justify-center items-center"
  >
    <Fa class="lg:mr-2 lg:ml-0 mx-2" icon={faMusic} /><span
      class="font-semibold uppercase hidden lg:block"
      >{$_('i18n.Button.Music', { default: 'Music' })}</span
    >
  </button>
  <div class="relative border">
    {#if requested}
      {#if iframeLoadState === LoadingState.INITIAL || iframeLoadState === LoadingState.LOADING}
        <div class="bg-blue-8 absolute w-full h-full">
          <div role="status" class="animate-pulse">
            <div class="p-2 flex space-x-2">
              <div
                class="flex items-center w-16 h-16 justify-center bg-gray-300 rounded dark:bg-gray-700"
              >
                <svg
                  class="w-16 h-16 text-gray-200 dark:text-gray-600"
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
              <div class="w-full">
                <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4 mt-2" />
                <div class="flex w-full space-x-2">
                  <div class="flex-1">
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                    <div class="flex space-x-2">
                      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-10" />
                      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 flex-1" />
                    </div>
                  </div>
                  <div>
                    <div class="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-6" />
                  </div>
                </div>
              </div>
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      {/if}
      {#if iframeLoadState === LoadingState.ERROR}
        <Error />
      {/if}
      <iframe
        on:load={() => (iframeLoadState = LoadingState.SUCCESS)}
        on:error={() => (iframeLoadState = LoadingState.ERROR)}
        title={$_('i18n.Playlist.WidgetTitle', { default: 'Get to know me with music' })}
        src="https://open.spotify.com/embed/playlist/7jbn7okyau3cUqg2Xp9WxH"
        width="300"
        height="80"
        frameborder="0"
        allowtransparency={true}
        class="bg-blue-8"
        allow="encrypted-media"
      />
    {/if}
  </div>
</div>
