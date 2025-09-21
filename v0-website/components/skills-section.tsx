import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

export function SkillsSection() {
  const skillCategories = [
    {
      category: "Programming & Data Analysis",
      skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "PyTorch", "SQL"],
      color: "bg-primary/10 text-primary border-primary/30",
    },
    {
      category: "Business Intelligence & Visualization",
      skills: ["Tableau", "Power BI", "Power Query", "Excel"],
      color: "bg-accent/10 text-accent border-accent/30",
    },
    {
      category: "Languages",
      skills: ["Spanish (Native)", "English (Native)"],
      color: "bg-secondary/10 text-secondary-foreground border-secondary/30",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-8 bg-card border-border">
              <h3 className="text-xl font-semibold text-card-foreground mb-6">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 hover:scale-105 ${category.color}`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
