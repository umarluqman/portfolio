/**
 * This script helps manage the projects.json file
 * Run with: node scripts/update-projects.js
 */

const fs = require('fs')
const path = require('path')

// Path to the videos directory
const videosDir = path.join(__dirname, '../videos')
const projectsJsonPath = path.join(videosDir, 'projects.json')

// Function to read all individual project JSON files and combine them
function combineProjectFiles() {
  // Read the projects.json file if it exists
  let projectsData = { projects: [] }
  if (fs.existsSync(projectsJsonPath)) {
    try {
      projectsData = JSON.parse(fs.readFileSync(projectsJsonPath, 'utf8'))
    } catch (error) {
      console.error('Error reading projects.json:', error)
    }
  }

  // Get all JSON files in the videos directory (except projects.json)
  const files = fs
    .readdirSync(videosDir)
    .filter(
      (file) =>
        file.endsWith('.json') &&
        file !== 'projects.json' &&
        file !== 'README.md',
    )

  // Process each file
  files.forEach((file) => {
    const filePath = path.join(videosDir, file)
    try {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'))
      const id = file.replace('.json', '')

      // Check if this project already exists in the projects.json
      const existingIndex = projectsData.projects.findIndex((p) => p.id === id)
      const existingProject =
        existingIndex >= 0 ? projectsData.projects[existingIndex] : null

      // Create a project object
      const project = {
        name: data.title || id,
        description: data.description || '',
        link: existingProject?.link || data.link || '#',
        video: `/videos/${id}.mp4`,
        id,
        muxPlaybackId: data.muxPlaybackId || '',
      }

      // Update or add the project
      if (existingIndex >= 0) {
        projectsData.projects[existingIndex] = {
          ...existingProject,
          ...project,
          // Preserve the link if it exists in the existing project
          link: existingProject.link || project.link,
        }
      } else {
        projectsData.projects.push(project)
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error)
    }
  })

  // Write the updated projects.json
  fs.writeFileSync(projectsJsonPath, JSON.stringify(projectsData, null, 2))
  console.log(
    `Updated ${projectsJsonPath} with ${projectsData.projects.length} projects`,
  )
}

// Run the function
combineProjectFiles()
