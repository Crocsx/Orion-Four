<script lang="ts">
  import { onMount } from 'svelte';
  import { _ } from 'svelte-i18n';

  import Profile from '$lib/assets/images/profile.jpg?enhanced';

  let isMounted = false;
  onMount(() => {
    isMounted = true;
  });
</script>

<section class="h-screen lg:pb-16 md:pt-40 lg:px-0 pt-20 pb-8 px-8">
  <div class="mx-0 lg:mx-auto lg:w-4/6 max-w-4xl">
    <div class="mb-5">
      <enhanced:img
        class={`${
          isMounted ? 'opacity-1' : 'opacity-0'
        } transition-opacity duration-500 rounded-full w-72 profile`}
        src={Profile}
        alt={$_('i18n.Banner.ProfilePicAlt', { default: 'Giacomini Federico Portrait Picture' })}
      />
    </div>
    <h2
      style={isMounted ? 'opacity: 100;' : ''}
      class="opacity-0 transition-opacity duration-700 md:text-4xl lg:mb-8 lg:pb-8 mb-4 pb-4 text-2xl tracking-widest border-b-2 border-white border-opacity-25"
    >
      {$_('i18n.Banner.Name', { default: 'Giacomini Federico' })}
    </h2>
    <p
      style={isMounted ? 'opacity: 100;' : ''}
      class="opacity-0 transition-opacity duration-1000 md:text-xl lg:text-base text-xs tracking-widest uppercase leading-loose"
    >
      {$_('i18n.Banner.Catch', { default: 'Game Developer & Designer - UI Developer' })}
    </p>
  </div>
</section>
