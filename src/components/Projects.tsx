interface Project {
  title: string
  description: string
  tech: string[]
}

const projects: Project[] = [
  {
    title: 'Project One',
    description: 'A performant web application built with React and TypeScript.',
    tech: ['React', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'Project Two',
    description: 'An interactive data visualization dashboard.',
    tech: ['React', 'D3', 'Vite'],
  },
  {
    title: 'Project Three',
    description: 'A real-time collaborative editing tool.',
    tech: ['React', 'WebSocket', 'Node'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-linkedin-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-linkedin-900 mb-10">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="bg-white rounded-xl p-6 shadow-sm border border-linkedin-100 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-linkedin-900 mb-2">
                {project.title}
              </h3>
              <p className="text-linkedin-600 text-sm mb-4">
                {project.description}
              </p>
              <div className="flex gap-2 flex-wrap">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-linkedin-100 text-linkedin-700 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
