<script lang="ts">
  import { page } from '$app/stores';

  import ProjectDetails from '$lib/components/organisms/ProjectDetails.svelte';
  import { PROJECTS } from '$lib/constants/projects';
  import type { ProjectName } from '$lib/models/projects';


  const projectName = $page.params.slug as ProjectName;
  const projectInfo = PROJECTS[projectName];
</script>

<ProjectDetails {projectName} {projectInfo} />
