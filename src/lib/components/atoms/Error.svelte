<script lang="ts">
  import Fa from 'svelte-fa';
  import { _ } from 'svelte-i18n';

  import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
  export let sizeX = '100%';
  export let sizeY = '100%';

  export let message = 'i18n.Error.Generic';
</script>

<div
  style="width: {sizeX}; height: {sizeY};"
  class="flex justify-items-center align-middle text-red-600 fill-current"
>
  <div class="flex flex-col w-1/2 h-1/2 justify-center items-center text-center m-auto">
    <Fa class="mb-4" size="lg" icon={faExclamationTriangle} />
    <p>{$_(message, { default: 'Something went wrong.' })}</p>
  </div>
</div>
