<script lang="ts">
  import { _ } from 'svelte-i18n';
  import Fa from 'svelte-fa';
  import { faBars, faCaretSquareLeft } from '@fortawesome/free-solid-svg-icons';

  import Modal from '$lib/components/organisms/Modal.svelte';
  import Menu from '$lib/components/organisms/Menu.svelte';


  let isHomepage = true;
  let isMenuOpen = false;

  function openMenu() {
    isMenuOpen = true;
  }

  function closeMenu() {
    isMenuOpen = false;
  }


  let scrollY = 0;
  let screenSizeX = 0
  let screenSizeY = 0
</script>

<svelte:window bind:scrollY={scrollY} bind:innerHeight={screenSizeY} bind:innerWidth={screenSizeX}/>

<header
  class="z-50 fixed w-full px-4 py-2 duration-200 transition-background-color ease-in-out justify-between flex items-center opacity-95 {scrollY <
    screenSizeY && isHomepage
    ? 'bg-transparent'
    : 'bg-blue-1'}"
>
  <h1
    class="text-sm md:text-base duration-200 transition-opacity ease-in-out {scrollY <
     screenSizeY && isHomepage
      ? 'opacity-0 invisible'
      : 'opacity-100 visible'}"
  >
    {#if isHomepage}
      <a href="/">{$_('i18n.Header.Title', { default: 'Federico "Crocsx" Giacomini' })}</a>
    {:else}
      <a class="transition-opacity duration-200 hover:opacity-80 flex items-center" href="/"
        ><Fa class="pl-4 pr-2" size="2x" icon={faCaretSquareLeft} />{$_('i18n.Button.Back', {
          default: 'Back',
        })}</a
      >
    {/if}
  </h1>
  <nav>
    <a
      aria-label={$_('i18n.Button.Menu', { default: 'Menu' })}
      class="transition-opacity duration-200 hover:opacity-80 uppercase font-bold tracking-wider flex items-center md:px-4 py-2 rounded md:border-2 md:border-opacity-10 md:border-white"
      on:click={openMenu}
      href="#menu"
    >
      <span class=" text-sm hidden md:block">{$_('i18n.Button.Menu', { default: 'Menu' })}</span>
      <Fa class="md:ml-4" icon={faBars} />
    </a>
  </nav>
</header>

<Modal bind:show={isMenuOpen} size="s">
  <Menu on:click={closeMenu} />
</Modal>
