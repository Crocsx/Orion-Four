import { Language } from '$lib/models/languages';

const fromI18nLanguage = (language?: string | null): Language => {
  const lg = language?.toUpperCase();
  return isSupportedLanguage(lg) ? lg : Language.ENGLISH;
};

const isSupportedLanguage = (language = ''): language is Language => {
  return (Object.values(Language) as string[]).includes(language);
};

export { fromI18nLanguage, isSupportedLanguage };
