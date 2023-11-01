<script lang="ts">
  import { _ } from 'svelte-i18n';
  import Fa from 'svelte-fa';
  import {
    faGithub,
    faLinkedin,
    faDev,
    faStackOverflow,
    faXbox,
    faSteam,
  } from '@fortawesome/free-brands-svg-icons';
</script>

<div class="flex mb-4 items-center">
  <a
    aria-label={$_('i18n.Social.Github', { default: 'Github' })}
    target="_blank"
    rel="noreferrer"
    href="https://github.com/Crocsx"
  >
    <Fa class="mr-2" size="2x" icon={faGithub} />
  </a>
  <a
    aria-label={$_('i18n.Social.StackOverflow', { default: 'Stack Overflow' })}
    target="_blank"
    rel="noreferrer"
    href="https://stackoverflow.com/users/3190532/crocsx"
  >
    <Fa class="mx-2" size="2x" icon={faStackOverflow} />
  </a>
  <a
    aria-label={$_('i18n.Social.Linkedin', { default: 'Linkedin' })}
    target="_blank"
    rel="noreferrer"
    href="https://www.linkedin.com/in/federico-giacomini"
  >
    <Fa class="mx-2" size="2x" icon={faLinkedin} />
  </a>
  <a
    aria-label={$_('i18n.Social.DevTo', { default: 'DevTo' })}
    target="_blank"
    rel="noreferrer"
    href="https://dev.to/crocsx"
  >
    <Fa class="mx-2" size="2x" icon={faDev} />
  </a>
  <a
    aria-label={$_('i18n.Social.TrueAchievement', { default: 'True Achievement' })}
    target="_blank"
    rel="noreferrer"
    href="https://www.trueachievements.com/gamer/Crocsx"
  >
    <Fa class="mx-2" size="2x" icon={faXbox} />
  </a>
  <a
    aria-label={$_('i18n.Social.Steam', { default: 'Steam' })}
    target="_blank"
    rel="noreferrer"
    href="https://steamcommunity.com/id/Crocsx/"
  >
    <Fa class="ml-2" size="2x" icon={faSteam} />
  </a>
</div>
