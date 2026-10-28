import introBg from '../assets/intro_bg.webp'
import portfolio from './portfolio.json'

const projectImages = {
  intro: introBg,
}

const resolveProjectImage = (project) => ({
  ...project,
  image: projectImages[project.imageKey] ?? project.image ?? introBg,
})

export const siteContent = portfolio
export const navigationSections = portfolio.navigation
export const socialLinks = portfolio.socialLinks
export const projectsData = portfolio.projects.map(resolveProjectImage)
export const experiencesData = portfolio.experiences

const workExperiences = experiencesData.filter((experience) => experience.type === 'Work')

export const currentWork = workExperiences[0] ?? null
export const latestEducation =
  experiencesData.find((experience) => experience.type === 'Education') ?? null
export const currentLeadership =
  experiencesData.find(
    (experience) =>
      experience.type === 'Leadership' && experience.period.toLowerCase().includes('present')
  ) ?? null

export const experienceCounts = experiencesData.reduce((counts, experience) => {
  counts[experience.type] = (counts[experience.type] ?? 0) + 1
  return counts
}, {})

const publicRepoCount = projectsData.filter((project) => Boolean(project.githubRepo)).length
const guidedProjectCount = projectsData.filter((project) => project.guided).length

export const portfolioStats = {
  projectCount: projectsData.length,
  liveDemoCount: publicRepoCount,
  privateBuildCount: guidedProjectCount,
  coreLaneCount: siteContent.site.coreLanes.length,
  firstWorkYear: siteContent.site.graduationYear ?? 2026,
}
