import { client } from '@/sanity/lib/client';
import { projectsQuery } from '@/sanity/lib/queries';
import { ALL_PROJECTS } from '@/data/projects';
import ProjectsClient from './ProjectsClient';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function ProjectsPage() {
  // Fetch live projects from Sanity
  let liveProjects = [];
  try {
    liveProjects = await client.fetch(projectsQuery);
  } catch (error) {
    console.error("Failed to fetch Sanity projects", error);
  }

  // If there are no projects in Sanity yet, fallback to the hardcoded ones so the site doesn't break
  const initialProjects = liveProjects.length > 0 ? liveProjects : ALL_PROJECTS;

  return <ProjectsClient initialProjects={initialProjects} />;
}
