import { error } from '@sveltejs/kit';

import { PROJECTS } from '$lib/constants/projects';
import type { ProjectName } from '$lib/models/projects';

export function load({ params }) {
  const project = PROJECTS[params.slug as ProjectName];

  if (!project) throw error(404);

  return {
    name: params.slug,
    info: project,
  };
}
