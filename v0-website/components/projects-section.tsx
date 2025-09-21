import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ProjectsSection() {
  const projects = [
    {
      title: "Police Agency Characteristics & Lethal Force",
      description:
        "Analyzed how police agency demographics and oversight mechanisms correlate with county-level lethal force incidents, normalized by population and crime rates using LEMAS and SPOTLITE datasets.",
      emoji: "👮‍♀️",
      tags: ["Data Analysis", "Statistical Modeling", "Public Policy", "LEMAS", "SPOTLITE"],
      link: "#",
    },
    {
      title: "Housing & Transportation Affordability in the Midwest",
      description:
        "Developed comprehensive Tableau dashboards using HUD data to evaluate affordability challenges specific to the Midwest region, providing insights for policy makers and urban planners.",
      emoji: "🏠",
      tags: ["Tableau", "HUD Data", "Urban Planning", "Data Visualization", "Policy Analysis"],
      link: "#",
    },
    {
      title: "The Effects of Speech Acts on Real Estate Marketing",
      description:
        "Conducted text mining analysis of 212,000 Dutch property listings, demonstrating that expressive and directive language patterns significantly reduced marketing time. Bachelor's thesis project.",
      emoji: "📄",
      tags: ["Text Mining", "NLP", "Real Estate", "Statistical Analysis", "Dutch Market"],
      link: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative overflow-hidden bg-muted/30">
                <div className="w-full h-48 flex items-center justify-center text-8xl">{project.emoji}</div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors duration-200 text-balance">
                  {project.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed text-pretty">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="text-xs bg-muted hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
