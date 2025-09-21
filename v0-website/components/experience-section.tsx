import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Summer Fellow, Bureau of Economic Development",
      company: "Cook County",
      period: "2025 – Present",
      description:
        "Leading requirements gathering for centralized reporting systems, conducting workflow analysis to optimize processes, implementing NLP techniques for text insights, and developing comprehensive BI dashboards for data-driven decision making.",
      highlights: ["Requirements Gathering", "Workflow Analysis", "NLP Implementation", "BI Dashboards"],
    },
    {
      title: "Field Sales Ops Intern",
      company: "Volvo Group North America",
      period: "2023",
      description:
        "Developed Power BI dashboards with Row-Level Security (RLS) for secure data access, prepared and cleaned Salesforce data for analysis, created comprehensive user documentation, and provided technical support to end users.",
      highlights: [
        "Power BI Development",
        "Row-Level Security",
        "Salesforce Integration",
        "User Documentation",
        "Technical Support",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Relevant Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Continuous timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start gap-8">
                {/* Timeline dot */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-primary rounded-full flex-shrink-0 hidden md:flex">
                  <div className="w-8 h-8 bg-primary-foreground rounded-full"></div>
                </div>

                {/* Content card */}
                <Card className="flex-1 p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-semibold text-card-foreground text-balance">{exp.title}</h3>
                        <p className="text-lg text-primary font-medium">{exp.company}</p>
                      </div>
                      <Badge variant="secondary" className="self-start">
                        {exp.period}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground leading-relaxed text-pretty">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, highlightIndex) => (
                        <Badge
                          key={highlightIndex}
                          variant="outline"
                          className="border-primary/30 text-primary hover:bg-primary/10"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
