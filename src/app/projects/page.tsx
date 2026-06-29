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

  // Combine new Sanity projects (top) with the original hardcoded projects (bottom)
  const combinedProjects = [...liveProjects, ...ALL_PROJECTS];

  return <ProjectsClient initialProjects={combinedProjects} />;
}
