<script lang="ts">
  import { _ } from 'svelte-i18n';

  import Project from '$lib/components/organisms/Project.svelte';
  import Tile from '$lib/components/organisms/Tile.svelte';
  import { ProjectName } from '$lib/models/projects';

  const mainProjects = [
    ProjectName.INSANITY,
    ProjectName.ANYX,
    ProjectName.ANYLOGI,
    ProjectName.I01,
    ProjectName.TRAJECTORY,
    ProjectName.DOGS_REBELLION,
    ProjectName.SUGAR_FIGHT,
  ];
  const secondaryProjects = [
    ProjectName.RUSH,
    ProjectName.SNEAKY_SNAKE,
    ProjectName.HURT,
    ProjectName.DIG_FALL,
    ProjectName.ATRAKCJA,
    ProjectName.FORTIS,
  ];
</script>

<section class="pb-16 lg:pb-32">
  {#each mainProjects as project, i}
    <Project
      projectName={project}
      flip={i % 2 === 0}
      color={i % 3 !== 0 ? (i % 3 !== 1 ? '#3f4e85' : '#45558d') : '#4c5c96'}
    />
  {/each}
</section>

<section class="block items-center mx-auto pt-12 pb-4 lg:w-3/5 w-5/6">
  <h2 class="text-xl tracking-widest pb-4 border-b-2 mb-4 border-white border-opacity-10">
    {$_('i18n.ProjectList.SmallProjectTitle', { default: 'Smaller Projects' })}
  </h2>
  <p class="mb-16">
    {$_('i18n.ProjectList.SmallProjectDescription', {
      default:
        'Here under follow minor projects, often unfinished; I show them anyway because they helped me widen my experience. :)',
    })}
  </p>
  <div class="grid grid-cols-1 lg:grid-cols-3">
    {#each secondaryProjects as project, i}
      <Tile
        projectName={project}
        position={i % 3 !== 0 ? (i % 3 !== 1 ? 'right' : 'center') : 'left'}
      />
    {/each}
  </div>
</section>
