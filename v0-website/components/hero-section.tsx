import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Hi, I'm <span className="text-primary">Manuela Rodríguez</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
                Data Analyst | Data Science Enthusiast
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl text-pretty">
              I'm passionate about using data to understand people, improve processes, and support better
              decision-making.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-base font-medium rounded-lg transition-all duration-200 hover:scale-105"
                asChild
              >
                <a href="#projects">View My Work</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-base font-medium rounded-lg transition-all duration-200 hover:scale-105 bg-transparent"
                asChild
              >
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>

          {/* Right column - Cartoon illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-96 h-96 lg:w-[500px] lg:h-[500px] flex items-center justify-center p-8">
                <img
                  src="/manuela-line-drawing.png"
                  alt="Manuela Rodríguez - Line Drawing Avatar"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
