<script lang="ts">
  import Fa from 'svelte-fa';
  import { _ } from 'svelte-i18n';

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
    <small class="fz">{$_('i18n.Contact.WorkAddress', { default: 'Work Address' })}</small><br />
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
    class="ml-4"
    href="tel:+8170-4148-5959">
    <small>{$_('i18n.Contact.PhoneNumber', { default: 'Phone Number' })}</small><br />
    +8170-4148-5959</a
  >
</div>
<div class="flex mb-8 items-center">
  <Fa size="lg" icon={faEnvelope} />
  <a
    aria-label={$_('i18n.Contact.EmailAddress', { default: 'Email Address' })}
    target="_blank"
    class="ml-4"
    href="mailto:federicogiacomini@outlook.com"><small>{$_('i18n.Contact.EmailAddress', { default: 'Email Address' })}</small><br />
    federicogiacomini@outlook.com</a
  >
</div>
