import projectsData from '@/videos/projects.json'

export type Project = {
  name: string
  description: string
  link: string
  video?: string
  id: string
  muxPlaybackId?: string
  note?: string
  category: string
  portrait?: boolean
  image?: string
}

export function useProjects() {
  return { projects: projectsData.projects as Project[] }
}
