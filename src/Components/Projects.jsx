import PropTypes from 'prop-types'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import { motion } from 'motion/react'
import Reveal from '../Animation/Reveal'
import { portfolioStats, projectsData, siteContent } from '../content'

const projectShape = PropTypes.shape({
  category: PropTypes.string.isRequired,
  challenge: PropTypes.string.isRequired,
  delivery: PropTypes.string.isRequired,
  githubRepo: PropTypes.string,
  guided: PropTypes.bool,
  impact: PropTypes.string.isRequired,
  liveDemo: PropTypes.string,
  metrics: PropTypes.arrayOf(PropTypes.string).isRequired,
  stack: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string,
})

function ProjectCaseStudy({ project, index }) {
  const storyPanels = [
    { label: 'Challenge', text: project.challenge, labelClassName: 'text-[#7dd3fc]' },
    { label: 'Delivery', text: project.delivery, labelClassName: 'text-indigo-300' },
    { label: 'Impact', text: project.impact, labelClassName: 'text-violet-300' },
  ]

  return (
    <Reveal delay={index * 0.05} direction="up">
      <motion.article
        className="editorial-card overflow-hidden rounded-[2rem] border border-indigo-300/20 bg-gradient-to-br from-sky-500/10 via-transparent to-violet-500/10 p-5 sm:p-6 lg:p-7"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.24 }}
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className="eyebrow-chip">{project.guided ? 'Guided project' : 'Selected work'}</span>
          <span className="metric-label text-white/50">{project.category}</span>
          {project.year ? <span className="eyebrow-chip">{project.year}</span> : null}
        </div>

        <p className="metric-label mt-5 text-[#7dd3fc]">Project {index + 1}</p>

        <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl xl:text-[2.3rem]">
          {project.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">{project.summary}</p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {storyPanels.map((panel) => (
            <div key={panel.label} className="surface-muted rounded-[1.35rem] p-4">
              <p className={`metric-label ${panel.labelClassName}`}>{panel.label}</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">{panel.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <p className="metric-label text-white/50">Tech stack</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-indigo-200/20 bg-slate-900/40 px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.metrics.map((metric) => (
                <span key={metric} className="skill-pill text-xs">
                  {metric}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.githubRepo?.trim() && (
              <motion.a
                href={project.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiGithub />
                Source
              </motion.a>
            )}

            {project.liveDemo ? (
              <motion.a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiArrowUpRight />
                Live demo
              </motion.a>
            ) : (
              <span className="eyebrow-chip">{project.guided ? 'Guided project' : 'Source on request'}</span>
            )}
          </div>
        </div>
      </motion.article>
    </Reveal>
  )
}

ProjectCaseStudy.propTypes = {
  index: PropTypes.number.isRequired,
  project: projectShape.isRequired,
}

export default function Projects() {
  const projectSummary = [
    {
      label: siteContent.projectsSection.summaryLabels.caseStudies,
      value: String(portfolioStats.projectCount),
    },
    {
      label: siteContent.projectsSection.summaryLabels.liveDemos,
      value: String(portfolioStats.liveDemoCount),
    },
    {
      label: siteContent.projectsSection.summaryLabels.privateBuilds,
      value: String(portfolioStats.privateBuildCount),
    },
  ]

  return (
    <div className="section-inner">
      <div className="section-header max-w-3xl">
        <Reveal>
          <span className="section-label">Projects</span>
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            id="projects-title"
            className="section-title bg-gradient-to-r from-sky-300 via-indigo-300 to-violet-300 bg-clip-text text-transparent"
          >
            {siteContent.projectsSection.title}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="section-copy max-w-2xl">{siteContent.projectsSection.copy}</p>
        </Reveal>
      </div>

      <Reveal delay={0.14} className="mt-8">
        <div className="no-scrollbar flex snap-x gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {projectSummary.map((item) => (
            <div
              key={item.label}
              className="stat-card min-w-[14rem] snap-start border border-indigo-200/20 bg-gradient-to-br from-sky-500/12 via-indigo-500/10 to-violet-500/12 md:min-w-0"
            >
              <p className="metric-value text-white">{item.value}</p>
              <p className="metric-label mt-3 text-indigo-200/75">{item.label}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <div className="mt-10 space-y-8">
        {projectsData.map((project, index) => (
          <ProjectCaseStudy key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  )
}
