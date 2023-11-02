<script lang="ts">
  import { locale, _, isLoading } from 'svelte-i18n';
  import Select from 'svelte-select';

  import { Language } from '$lib/models/languages';
  import { fromI18nLanguage } from '$lib/services/language.service';

  let allLocales = Object.values(Language).map((local) => ({
    label: $_('i18n.Enum.Language', {
      default: 'English',
      values: { language: local },
    }),
    value: local,
  }));

  function setLanguage(event: { detail: { value: Language; label: string } }) {
    localStorage.setItem('language', event.detail?.value);
    locale.set(event.detail?.value);
  }
</script>

<div class="dropdown first-line:inline-block relative themed">
  <Select
    items={allLocales}
    value={allLocales.find((local) => local.value === fromI18nLanguage($locale))}
    clearable={false}
    searchable={false}
    loading={$isLoading}
    on:select={setLanguage}
  />
</div>

<style>
  .themed {
    --selected-item-color: #2e3141;
    --item-color: #2e3141;
    --item-hover-color: #2e3141;
    --item-active-background: #555867;
    --item-is-active-color: white;
    --group-title-font-weight: 600;
  }
</style>
