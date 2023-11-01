<script lang="ts">
  import { _ } from 'svelte-i18n';
  import Fa from 'svelte-fa';
  import { faGamepad } from '@fortawesome/free-solid-svg-icons';

  import type { ProjectName } from '$lib/models/projects';
  import { getDeviceWidth } from '$lib/services/breakpoint.service';
  import { debounce } from '$lib/services/debounce.service';
  import Modal from '$lib/components/organisms/Modal.svelte';
  import SlideShow from '$lib/components/molecules/SlideShow.svelte';
  import DiagonalWrapper from '$lib/components/atoms/DiagonalWrapper.svelte';
  import Image from '$lib/components/atoms/Image.svelte';
  import Demo from '$lib/components/molecules/Demo.svelte';
  import { PROJECTS } from '$lib/constants/projects';
  import { SKILLS } from '$lib/constants/skill';
  import { BREAKPOINTS } from '$lib/constants/breakpoints';

  export let projectName: ProjectName;
  const projectInfo = PROJECTS[projectName];

  let isDemoModalOpen = false;
  let isSlideshowModalOpen = false;
  let imageIndex = 0;
  let isMobile = getDeviceWidth() > BREAKPOINTS.sm;

  function openSlideshowModal(index: number) {
    isSlideshowModalOpen = true;
    imageIndex = index;
  }

  function openDemoModal() {
    isDemoModalOpen = true;
  }

  function checkResize() {
    isMobile = getDeviceWidth() > BREAKPOINTS.sm;
  }
</script>

<svelte:window on:resize={debounce(checkResize, 100)} />

<article
  style="background-image: url({projectInfo.background});"
  class="lg:pb-48 lg:pt-48 pt-20 pb-16 bg-cover bg-no-repeat"
>
  <header class="mx-0 lg:mx-auto lg:w-5/6 max-w-5xl pb-16 lg:px-0 px-8">
    <h2
      class="lg:text-4xl lg:mb-8 lg:pb-8 mb-4 pb-4 text-2xl tracking-widest border-b-2 border-white border-opacity-25"
    >
      {$_(`i18n.Project.${projectName}.Title`, { default: projectName })}
    </h2>
    <p class="lg:text-base text-xs tracking-widest uppercase font-extralight leading-loose">
      {$_(`i18n.Project.${projectName}.CatchPhrase`, { default: `${projectName} Catch Phrase` })}
    </p>
    <small class="mb-8">
      {$_(`i18n.Project.${projectName}.Date`, { default: 'Project Date' })}
    </small>
  </header>
  <DiagonalWrapper color="#2e3141">
    <div class="flex mt-4 mx-0 lg:mx-auto lg:w-5/6 max-w-5xl pb-8 lg:px-0 mb-4 lg:mb-0 px-8">
      {#if isMobile}
        {#each projectInfo.illustrationSmall as illustrationSrc, i}
          <button on:click={() => openSlideshowModal(i)} class="rounded px-4 cursor-pointer">
            <Image
              width="300"
              height="200"
              src={illustrationSrc}
              alt="logo"
              className="w-full h-full rounded-lg"
            />
          </button>
        {/each}
      {:else}
        <SlideShow mediaSrcs={projectInfo.illustrationBig} selectedIndex={imageIndex} />
      {/if}
    </div>

    <section class="mx-0 lg:mx-auto lg:w-5/6 max-w-5xl pb-8 lg:px-0 px-8">
      <h2 class="text-lg tracking-widest pb-4 border-b-2 mb-4 border-white border-opacity-10">
        {$_(`i18n.Page.Project.Description`, { default: 'Description' })}
      </h2>
      <p>
        {$_(`i18n.Project.${projectName}.Description`, { default: `${projectName} Description` })}
      </p>
    </section>
    <section class="mx-0 lg:mx-auto lg:w-5/6 max-w-5xl pb-8 lg:px-0 px-8">
      <h2 class="text-lg tracking-widest pb-4 border-b-2 mb-4 border-white border-opacity-10">
        {$_(`i18n.Page.Project.Information`, { default: 'Information' })}
      </h2>
      <p>
        {$_(`i18n.Project.${projectName}.Information`, { default: `${projectName} Information` })}
      </p>
    </section>
    <section class="mx-0 lg:mx-auto lg:w-5/6 max-w-5xl pb-8 lg:px-0 px-8">
      <h2 class="text-lg tracking-widest pb-4 border-b-2 mb-4 border-white border-opacity-10">
        {$_(`i18n.Page.Project.HowToPlay`, { default: 'How To Play' })}
      </h2>
      <p>
        {$_(`i18n.Project.${projectName}.HowToPlay`, { default: `${projectName} How To Play` })}
      </p>
    </section>
    <section class="mx-0 lg:mx-auto lg:w-5/6 max-w-5xl pb-8 lg:px-0 px-8">
      <h2 class="text-lg tracking-widest pb-4 border-b-2 mb-4 border-white border-opacity-10">
        {$_(`i18n.Page.Project.WhereToTry`, { default: 'Where To Play' })}
      </h2>
      {#if projectInfo.demo.openTab}
        <a
          class="flex items-center transition-opacity duration-200 hover:opacity-80 font-bold"
          target="_blank"
          rel="noreferrer"
          href={projectInfo.demo.url}
          ><Fa class="mr-2" size="lg" icon={faGamepad} />
          {$_(`i18n.Page.Project.TryItHere`, { default: 'Play It Here' })}</a
        >
      {:else}
        <button
          class="flex items-center transition-opacity duration-200 hover:opacity-80 font-bold"
          on:click={openDemoModal}
          ><Fa class="mr-2" size="lg" icon={faGamepad} />
          {$_(`i18n.Page.Project.TryItHere`, { default: 'Play It Here' })}</button
        >
      {/if}
    </section>
    <section class="mx-0 lg:mx-auto lg:w-5/6 max-w-5xl pb-8 lg:px-0 px-8">
      <h2 class="text-lg tracking-widest pb-4 border-b-2 mb-4 border-white border-opacity-10">
        {$_(`i18n.Page.Project.MadeWith`, { default: 'Made With' })}
      </h2>
      <div class="flex">
        {#each projectInfo.madeWith as skill, i}
          <Image
            width="24"
            height="24"
            src={SKILLS.ICONS[skill]}
            alt="logo"
            className="w-12 h-12 rounded-lg {i > 0 ? 'ml-2' : ''}"
          />
        {/each}
      </div>
    </section>
  </DiagonalWrapper>
</article>

<Modal bind:show={isSlideshowModalOpen} size="l">
  <SlideShow mediaSrcs={projectInfo.illustrationBig} selectedIndex={imageIndex} />
</Modal>

<Modal bind:show={isDemoModalOpen} size="l">
  <Demo url={projectInfo.demo.url} />
</Modal>
