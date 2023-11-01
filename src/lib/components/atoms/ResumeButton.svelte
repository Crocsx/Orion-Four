<script lang="ts">
  import Fa from 'svelte-fa';
  import { _ } from 'svelte-i18n';

  import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
</script>

<a
  class="focus:outline-none bg-blue-2 hover:bg-blue-1 border border-b-0 transform fixed bottom-0 right-0 rounded-tl-lg p-2 flex justify-center items-center"
  aria-label={$_('i18n.Resume.Download', { default: 'Download Resume' })}
  target="_blank"
  rel="noreferrer"
  href="$lib/assets/download/Giacomini_Federico.pdf"
>
  <span class="font-semibold uppercase hidden lg:block"
    >{$_('i18n.Button.Resume', { default: 'Resume' })}</span
  ><Fa class="lg:ml-2 lg:mr-0 mx-2" icon={faFileDownload} />
</a>
