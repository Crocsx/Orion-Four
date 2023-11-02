<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Fa from 'svelte-fa';
  import { _ } from 'svelte-i18n';

  import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

  import LanguagesPicker from '$lib/components/molecules/LanguagesPicker.svelte';

  const dispatch = createEventDispatcher();

  function clickMenuOption(event: MouseEvent) {
    event.preventDefault();
    const link = event.currentTarget as HTMLAnchorElement;
    if (link) {
      const anchorId = new URL(link.href).hash;
      const anchor = document.getElementById(anchorId);
      window.scrollTo({
        top: anchor?.offsetTop,
        behavior: 'smooth',
      });
    }
    dispatch('click');
  }
</script>

<div class="bg-blue-7 text-center pb-4 pt-12 px-8 rounded w-full">
  <h2 class="text-xl tracking-widest pb-4 border-b-2 mb-4 border-white border-opacity-10">
    {$_(`i18n.Menu.Teleport`, { default: 'Teleport' })}
  </h2>
  <nav class="pb-4">
    <a
      on:click={clickMenuOption}
      class="mb-2 block border border-blue-7 rounded py-2 px-4 hover:bg-blue-8 text-white"
      href="/#home">{$_(`i18n.Menu.Home`, { default: 'Home' })}</a
    >
    <a
      on:click={clickMenuOption}
      class="mb-2 block border border-blue-7 rounded py-2 px-4 hover:bg-blue-8 text-white"
      href="/#project">{$_(`i18n.Menu.Project`, { default: 'Project' })}</a
    >
    <a
      on:click={clickMenuOption}
      class="mb-2 block border border-blue-7 rounded py-2 px-4 hover:bg-blue-8 text-white"
      href="/#about">{$_(`i18n.Menu.AboutMe`, { default: 'About Me' })}</a
    >
    <a
      class="flex justify-center items-center border border-blue-7 rounded py-2 px-4 hover:bg-blue-8 text-white"
      target="_blank"
      href="https://crocsx.hashnode.dev/"
      >{$_(`i18n.Menu.Blog`, { default: 'Blog' })}
      <Fa class=" ml-4 uppercase font-bold text-sm" size="sm" icon={faExternalLinkAlt} /></a
    >
  </nav>
  <LanguagesPicker />
</div>
