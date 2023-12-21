<script lang="ts">
  import { locale } from 'svelte-i18n';
  import { onMount } from 'svelte';

  import '../app.css';

  import { browser, dev } from '$app/environment';
  import {
    PUBLIC_FIREBASE_API_TOKEN,
    PUBLIC_FIREBASE_PROJECT_ID,
    PUBLIC_FIREBASE_APP_ID,
  } from '$env/static/public';

  import '$lib/i18n';
  import Spotify from '$lib/components/molecules/Spotify.svelte';
  import Footer from '$lib/components/organisms/Footer.svelte';
  import Header from '$lib/components/organisms/Header.svelte';
  import { initFirebase } from '$lib/external/firebase';
  import { Language } from '$lib/models/languages';
  import { isSupportedLanguage } from '$lib/services/language.service';
  import WrapperLoader from '$lib/components/atoms/WrapperLoader.svelte';


  let loading = true;
  onMount(() => loading = false);


  if (!dev) {
    initFirebase({
      apiKey: PUBLIC_FIREBASE_API_TOKEN,
      authDomain: `${PUBLIC_FIREBASE_PROJECT_ID}.firebaseapp.com`,
      projectId: PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: `${PUBLIC_FIREBASE_PROJECT_ID}.appspot.com`,
      messagingSenderId: '736391205860',
      appId: PUBLIC_FIREBASE_APP_ID,
      measurementId: 'G-NY0BQ8RYLM',
    });
  }

  locale.set(Language.ENGLISH);
  if (browser) {
    const language = localStorage.getItem('language') || '';
    locale.set(isSupportedLanguage(language) ? language : Language.ENGLISH);
  }
</script>

<main>   
  <WrapperLoader isLoading={loading}>
    <Header />
    <slot />
    <Footer />
    <Spotify />
  </WrapperLoader>
</main>
