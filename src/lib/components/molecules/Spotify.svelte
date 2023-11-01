<script lang="ts">
  import Fa from 'svelte-fa';
  import { _ } from 'svelte-i18n';
  import { faMusic } from '@fortawesome/free-solid-svg-icons';

  import LoaderState from '$lib/components/molecules/LoaderState.svelte';
  import { LoadingState, LoaderType } from '$lib/models/loading';

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
      <LoaderState
        state={iframeLoadState}
        type={LoaderType.CIRCULAR}
        sizeX={'300px'}
        sizeY={'80px'}
      />
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
