<script lang="ts">
  import { _ } from 'svelte-i18n';

  import Image from '$lib/components/atoms/Image.svelte';
  import LearnMore from '$lib/components/atoms/LearnMore.svelte';
  import { PROJECTS } from '$lib/constants/projects';
  import type { ProjectName } from '$lib/models/projects';

  export let projectName: ProjectName;
  export let position: 'right' | 'center' | 'left' = 'left';
</script>

<article
  class="relative rounded-lg overflow-hidden bg-blue-4 my-4 {position !== 'center'
    ? position !== 'right'
      ? 'lg:mr-8'
      : 'lg:ml-8'
    : 'lg:mx-4'}"
>
  <Image
    width="300"
    height="200"
    class="image mb-4 w-full"
    src={PROJECTS[projectName].logo}
    alt={`${projectName} logo`}
  />
  <div class="px-4 pb-8">
    <h3 class="text-lg tracking-widest pb-4 border-b-2 mb-4 border-white border-opacity-10">
      {$_(`i18n.Project.${projectName}.Title`, { default: projectName })}
    </h3>
    <p class="text-sm mb-8">
      {$_(`i18n.Project.${projectName}.Description`, { default: `${projectName} Description` })}
    </p>
    <div class="flex mb-4 items-center bottom-0 absolute">
      <LearnMore link={`/project/${projectName}`} subject={projectName} />
    </div>
  </div>
</article>
