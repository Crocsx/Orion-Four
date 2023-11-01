<script lang="ts">
  import { _ } from 'svelte-i18n';

  import Social from '$lib/components/molecules/Social.svelte';
  import Contact from '$lib/components/molecules/Contact.svelte';
  import RadarChart from '$lib/components/molecules/RadarChart.svelte';
</script>

<section class="block items-center mx-auto pt-12 pb-4 lg:w-3/5 w-5/6">
  <h2 class="text-xl tracking-widest pb-4 border-b-2 mb-4 border-white border-opacity-10">
    {$_(`i18n.About.Title`, { default: 'About Me :' })}
  </h2>
  <p class="mb-6">
    {$_(`i18n.About.DescriptionLine1`, {
      default:
        'Hello, my name is Federico "Crocsx" Giacomini, I\'m a Game Developer and currently working as an UI Developer.',
    })} <br />
    {$_(`i18n.About.DescriptionLine2`, {
      default:
        'I love competitive Video Games, Languages, Travels, Racing, Music and a lot of other stuff. I currently live in Japan.',
    })}
  </p>
  <div class="grid grid-cols-1 md:grid-cols-2">
    <div>
      <h3 class="mb-4">{$_(`i18n.About.ThingsIKnowTitle`, { default: 'Things I Know :' })}</h3>
      <RadarChart />
    </div>
    <div class="d-flex justify-items-center">
      <h3 class="mb-4">{$_(`i18n.About.ContactTitle`, { default: 'Contact Me At :' })}</h3>
      <Contact />
      <h3 class="mb-4">{$_(`i18n.About.JoinMeTitle`, { default: 'Join Me On :' })}</h3>
      <Social />
    </div>
  </div>
</section>
