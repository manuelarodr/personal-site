import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function CertificationsSection() {
  const certifications = [
    {
      title: "Microsoft Power BI Data Analyst Associate",
      issuer: "Microsoft",
      year: "2023",
      description:
        "Comprehensive certification covering data modeling, visualization, and advanced analytics in Power BI.",
      badge: "Professional Certification",
    },
    {
      title: "Practical Machine Learning Seminar Series",
      issuer: "University of Illinois at Urbana-Champaign",
      year: "2024",
      description:
        "Advanced training in machine learning techniques, algorithms, and practical applications in data science.",
      badge: "Academic Training",
    },
    {
      title: "Core IRB Training",
      issuer: "CITI Program",
      year: "2024",
      description:
        "Ethics training for research involving human subjects, essential for data collection and analysis in social research.",
      badge: "Ethics Certification",
    },
  ]

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Certifications & Trainings
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <Badge variant="secondary" className="text-xs">
                    {cert.year}
                  </Badge>
                  <Badge variant="outline" className="text-xs border-primary/30 text-primary group-hover:bg-primary/10">
                    {cert.badge}
                  </Badge>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-200 text-balance">
                    {cert.title}
                  </h3>
                  <p className="text-primary font-medium text-sm">{cert.issuer}</p>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed text-pretty">{cert.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
