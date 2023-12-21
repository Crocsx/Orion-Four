import { init, register } from 'svelte-i18n';

import { Language } from '$lib/models';

import { browser } from '$app/environment';

register(Language.ENGLISH, () => import('./translations/en.json'));
register(Language.FRENCH, () => import('./translations/fr.json'));
register(Language.ITALIAN, () => import('./translations/it.json'));

init({
  fallbackLocale: Language.ENGLISH,
  initialLocale: browser ? window.navigator.language : Language.ENGLISH,
})?.catch((e: Error) => console.error(e));
