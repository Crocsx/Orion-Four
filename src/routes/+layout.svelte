<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment'
  import '$lib/i18n'
  import { locale, waitLocale } from 'svelte-i18n'


  import Spotify from '$lib/components/molecules/Spotify.svelte';
  import Header from '$lib/components/organisms/Header.svelte';
  import Footer from '$lib/components/organisms/Footer.svelte';
  import { isSupportedLanguage } from '$lib/services/language.service';
	import { Language } from '$lib/models/languages';

  export const load = async () => {
    if (browser ) {
      locale.set(isSupportedLanguage(window.navigator.language || '') ? window.navigator.language : Language.ENGLISH)
    }
	await waitLocale()
}
</script>

<main>
  <Header  />
  <slot />
  <Footer />
  <Spotify />
</main>


