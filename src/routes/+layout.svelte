<script lang="ts">
  import { browser } from '$app/environment';
  import '$lib/i18n';
  import { locale } from 'svelte-i18n';

  import '../app.css';

  import Spotify from '$lib/components/molecules/Spotify.svelte';
  import Header from '$lib/components/organisms/Header.svelte';
  import Footer from '$lib/components/organisms/Footer.svelte';
  import { Language } from '$lib/models/languages';

  locale.set(Language.ENGLISH);
</script>

<main>
  <Header />
  <slot />
  <Footer />
  <Spotify />
</main>
