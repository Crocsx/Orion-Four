<script lang="ts">
  import Fa from 'svelte-fa';

  import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

  export let show = false;
  export let size: 's' | 'm' | 'l' = 'm';
  export let backdropClose = true;

  function close() {
    if (backdropClose) {
      show = false;
    }
  }
</script>

{#if show}
  <div role="dialog" class="flex top-0 left-0 z-50 fixed w-full h-full">
    <div
      class="relative mx-auto flex z-50 justify-items-center self-center w-9/12 {size !== 's'
        ? size === 'l'
          ? 'lg:w-9/12'
          : ' lg:w-6/12'
        : 'lg:w-3/12'}"
    >
      <button
        class="transition-opacity duration-200 hover:opacity-80 absolute -mt-10 right-0 cursor-pointer"
        on:click={close}
      >
        <Fa size="2x" icon={faWindowClose} />
      </button>
      <slot />
    </div>
    <button class="bg-black z-40 opacity-30 w-full h-full absolute" on:click={close} />
  </div>
{/if}
