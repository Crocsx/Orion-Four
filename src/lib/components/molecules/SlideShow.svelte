<script lang="ts">
  import Fa from 'svelte-fa';
  import { _ } from 'svelte-i18n';

  import { faCaretSquareRight, faCaretSquareLeft } from '@fortawesome/free-solid-svg-icons';


  import { FileTypes } from '$lib/models/files';
  import { getFileType } from '$lib/services/files.service';

  export let mediaSrcs: string[] = [];
  export let selectedIndex = 0;

  function goPrevious() {
    selectedIndex = selectedIndex === 0 ? mediaSrcs.length - 1 : selectedIndex - 1;
  }

  function goNext() {
    selectedIndex = selectedIndex === mediaSrcs.length - 1 ? 0 : selectedIndex + 1;
  }

  function selectIndex(index: number) {
    selectedIndex = index;
  }
</script>

<div class=" w-full flex flex-col justify-center items-center">
  <div class="w-full mx-auto relative">
    <!-- Slides -->

    {#each mediaSrcs as media, i}
      <div
        class="font-bold text-5xl flex justify-center items-center text-white rounded-lg {selectedIndex !==
        i
          ? 'hidden'
          : 'visible'}"
      >
        {#if typeof media === "object" || getFileType(media) === FileTypes.IMAGE}
          <enhanced:img  src={media} class="w-11/12" alt="Project Illustration" />
        {:else}
          <video controls>
            <source src={media} type="video/mp4" />
            <track kind="captions" />
            {$_(`i18n.SlideShow.VideoNotSupported`, {
              default: "Sorry, your browser doesn't support embedded videos.",
            })}
          </video>
        {/if}
      </div>
    {/each}

    <!-- Prev/Next Arrows -->
    <div class="m-auto h-1/2 absolute inset-0 hidden md:flex">
      <button class="flex items-center justify-start w-1/2" on:click={goPrevious}>
        <div
          class="p-2 h-full flex items-center hover:bg-blue-2 hover:bg-opacity-30 cursor-pointer"
        >
          <Fa size="2x" icon={faCaretSquareLeft} />
        </div>
      </button>
      <button class="flex items-center justify-end w-1/2" on:click={goNext}>
        <div
          class="p-2 h-full flex items-center hover:bg-blue-2 hover:bg-opacity-30 cursor-pointer"
        >
          <Fa size="2x" icon={faCaretSquareRight} />
        </div>
      </button>
    </div>

    <!-- Buttons -->
    <div class="absolute w-full flex items-center justify-center px-4">
      {#each mediaSrcs as _, i}
        <button
          class="flex-1 w-4 h-2 mt-4 mx-2 mb-0 rounded-full overflow-hidden transition-colors duration-200 ease-out hover:bg-blue-7 hover:shadow-lg {i ===
          selectedIndex
            ? 'bg-blue-9'
            : 'bg-blue-2'}"
          on:click={() => selectIndex(i)}
        />
      {/each}
    </div>
  </div>
</div>
