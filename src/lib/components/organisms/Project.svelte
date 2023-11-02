<script lang="ts">
  import { _ } from 'svelte-i18n';

  import type { ProjectName } from '$lib/models/projects';
  import { PROJECTS } from '$lib/constants/projects';
  import DiagonalWrapper from '$lib/components/atoms/DiagonalWrapper.svelte';
  import LearnMore from '$lib/components/atoms/LearnMore.svelte';
  import Image from '$lib/components/atoms/Image.svelte';

  export let projectName: ProjectName;
  export let flip: boolean;
  export let color: string;
</script>

<DiagonalWrapper {color} {flip}>
  <div
    class="block lg:flex items-center mx-auto py-4 {flip
      ? 'text-right flex-row-reverse'
      : 'flex-row text-left'} w-4/5 lg:w-3/5"
  >
    <div
      class="inline-block mb-4 lg:mb-8 max-w-4/5 w-4/6 lg:w-3/6 border-0 rounded-full overflow-hidden {flip
        ? 'ml-12'
        : 'mr-12 '}"
    >
      <Image
        width="300"
        height="200"
        class="rounded-100 w-full"
        src={PROJECTS[projectName].logo}
        alt={`${projectName} logo`}
      />
    </div>
    <div class="w-full">
      <h2 class="text-xl tracking-widest pb-4 border-b-2 mb-4 border-white border-opacity-10">
        {$_(`i18n.Project.${projectName}.Title`, { default: 'Project Name' })}
      </h2>
      <p class="mb-8">
        {$_(`i18n.Project.${projectName}.Description`, { default: 'Project Description' })}
      </p>
      <div class="flex {flip ? 'justify-end' : 'justify-start'} items-center">
        <LearnMore link={`/project/${projectName}`} subject={projectName} />
      </div>
    </div>
  </div>
</DiagonalWrapper>
