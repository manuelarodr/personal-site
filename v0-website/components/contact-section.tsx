"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    feedback: "",
    rating: 0,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Feedback submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleRatingChange = (rating: number) => {
    setFormData({
      ...formData,
      rating,
    })
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Leave Feedback</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto text-pretty">
            I'd love to hear your thoughts about my work and portfolio. Your feedback helps me improve and grow as a
            data analyst.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-8 bg-card border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-card-foreground">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-input border-border focus:border-primary focus:ring-primary"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-card-foreground">Rating</Label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleRatingChange(star)}
                      className={`text-2xl transition-colors duration-200 hover:scale-110 ${
                        star <= formData.rating ? "text-yellow-400" : "text-muted-foreground hover:text-yellow-400"
                      }`}
                    >
                      ★
                    </button>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">
                  {formData.rating > 0 ? `${formData.rating} out of 5 stars` : "Click to rate"}
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="feedback" className="text-sm font-medium text-card-foreground">
                  Feedback
                </Label>
                <Textarea
                  id="feedback"
                  name="feedback"
                  required
                  value={formData.feedback}
                  onChange={handleChange}
                  className="bg-input border-border focus:border-primary focus:ring-primary min-h-32 resize-none"
                  placeholder="Share your thoughts about my portfolio, projects, or any suggestions for improvement..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-base font-medium transition-all duration-200 hover:scale-105"
              >
                Submit Feedback
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
