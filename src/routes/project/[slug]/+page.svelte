<script lang="ts">
  import ProjectDetails from '$lib/components/organisms/ProjectDetails.svelte';
  import type { ProjectInfo, ProjectName } from '$lib/models/projects';

  export let data: { name: ProjectName; info: ProjectInfo };
</script>

<ProjectDetails projectName={data.name} projectInfo={data.info} />
