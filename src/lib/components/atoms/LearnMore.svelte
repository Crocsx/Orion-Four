<script lang="ts">
  import Fa from 'svelte-fa';
  import { _ } from 'svelte-i18n';

  import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

  export let link: string;
  export let subject = '';
</script>

<a
  href={link}
  aria-label={$_('i18n.Button.MoreAbout', { default: 'More About', values: { subject } })}
>
  <div class="transition-opacity duration-200 hover:opacity-80 flex items-center">
    <Fa class=" ml-4 uppercase font-bold text-sm" size="lg" icon={faChevronCircleRight} />
    <span class="ml-4 uppercase font-bold text-sm"
      >{$_('i18n.Button.LearnMore', { default: 'More' })}</span
    >
  </div>
</a>
