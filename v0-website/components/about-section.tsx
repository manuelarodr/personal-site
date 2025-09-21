import { Card } from "@/components/ui/card"

export function AboutSection() {
  const interests = [
    { name: "Hiking", icon: "⛰️" },
    { name: "Films", icon: "🎬" },
    { name: "Travel", icon: "✈️" },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left column - Background paragraphs */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              I hold an M.S. in Information Management from the University of Illinois at Urbana-Champaign, where I've
              developed a deep understanding of data systems and analytics. My academic foundation was built with a B.S.
              in Business Administration from the University of Amsterdam, giving me a unique perspective that bridges
              business strategy with technical implementation.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              My passion lies in analytics and business intelligence, where I find excitement in transforming raw data
              into actionable insights. I believe that data has the power to tell compelling stories and drive
              meaningful change in organizations and communities.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              With international experience spanning multiple continents, I bring a global perspective to data analysis.
              This diverse background has taught me to approach problems from different angles and consider various
              cultural and contextual factors in my analytical work.
            </p>
          </div>

          {/* Right column - Personal interests */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">Personal Interests</h3>
              <div className="space-y-4">
                {interests.map((interest, index) => (
                  <Card
                    key={index}
                    className="p-6 bg-card border-border hover:border-primary/50 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-2xl">{interest.icon}</div>
                      <div>
                        <h4 className="text-lg font-medium text-card-foreground">{interest.name}</h4>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Additional visual element */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
