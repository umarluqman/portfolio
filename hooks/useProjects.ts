'use client'

import { useState, useEffect } from 'react'
import projectsData from '@/videos/projects.json'

export type Project = {
  name: string
  description: string
  link: string
  video?: string
  id: string
  muxPlaybackId?: string
  image?: string
}

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, you might want to fetch this from an API
    // but for simplicity, we're using the imported JSON
    setProjects(projectsData.projects)
    setLoading(false)
  }, [])

  return { projects, loading }
}
