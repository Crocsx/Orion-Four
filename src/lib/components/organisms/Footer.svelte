<script lang="ts">
  import { _ } from 'svelte-i18n';
</script>

<footer
  class="flex flex-col lg:flex-row text-xs pt-8 mt-12 mb-12 mx-auto lg:w-3/5 w-5/6 border-t-2 border-white border-opacity-10"
>
  <span class="opacity-70"
    >&copy;{$_('i18n.Copyright.RightsReserved', { default: '&copy; All rights reserved.' })}</span
  >
  <span
    class="opacity-70 mt-4 lg:mt-0 lg:ml-4 lg:pl-4 lg:border-l-2 lg:border-white lg:border-opacity-10"
    >{$_('i18n.Copyright.Design', { default: 'Design Inspiration :' })}<a
      rel="noreferrer"
      href="http://html5up.net">HTML5 UP</a
    ></span
  >
  <span
    class="opacity-70 mt-4 lg:mt-0 lg:ml-4 lg:pl-4 lg:border-l-2 lg:border-white lg:border-opacity-10"
    >{$_('i18n.Copyright.SourceAccess', {
      default: 'All projects are copyrighted and may not be reused without permission.',
    })}</span
  >
</footer>
