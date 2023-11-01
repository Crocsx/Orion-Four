<script lang="ts">
  import { _ } from 'svelte-i18n';
  import Fa from 'svelte-fa';
  import { faPhone, faEnvelope, faBriefcase } from '@fortawesome/free-solid-svg-icons';
</script>

<div class="flex mb-8 items-center">
  <Fa size="lg" icon={faBriefcase} />
  <a
    aria-label={$_('i18n.Contact.WorkAddress', { default: 'Work Address' })}
    target="_blank"
    rel="noreferrer"
    href="https://goo.gl/maps/gYqeHnonb7fnsaSt6"
    class="ml-4"
  >
    AnyMind Group <br />
    31/F Roppongi Hills Mori Tower, <br />
    6-10-1, 10 Roppongi, Minato City, <br />
    Tokyo 106-0032 <br />
  </a>
</div>
<div class="flex mb-8 items-center">
  <Fa size="lg" icon={faPhone} />
  <a
    aria-label={$_('i18n.Contact.PhoneNumber', { default: 'Phone Number' })}
    target="_blank"
    class="ml-4 "
    href="tel:+8170-4148-5959">+8170-4148-5959</a
  >
</div>
<div class="flex mb-8 items-center">
  <Fa size="lg" icon={faEnvelope} />
  <a
    aria-label={$_('i18n.Contact.EmailAddress', { default: 'Email Address' })}
    target="_blank"
    class="ml-4"
    href="mailto:federicogiacomini@outlook.com">federicogiacomini@outlook.com</a
  >
</div>
