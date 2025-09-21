"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { FeedbackCard } from "@/components/feedback-card"
import { supabase, type Feedback } from "@/lib/supabase"
import { useToast } from "@/hooks/use-toast"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    feedback: "",
    rating: 0,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [feedbackList, setFeedbackList] = useState<Feedback[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()

  // Fetch existing feedback
  const fetchFeedback = async () => {
    try {
      const { data, error } = await supabase
        .from('feedback')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        throw error
      }

      setFeedbackList(data || [])
    } catch (error) {
      console.error('Error fetching feedback:', error)
    } finally {
      setIsLoading(false)
    }
  }

  // Set up real-time subscription
  useEffect(() => {
    fetchFeedback()

    const channel = supabase
      .channel('feedback_changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'feedback'
        },
        (payload) => {
          const newFeedback = payload.new as Feedback
          setFeedbackList(prev => [newFeedback, ...prev])
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const { data, error } = await supabase
        .from('feedback')
        .insert([
          {
            name: formData.name,
            feedback: formData.feedback,
            rating: formData.rating,
          }
        ])
        .select()

      if (error) {
        throw error
      }

      // Add new feedback to the list immediately (optimistic update)
      if (data && data[0]) {
        setFeedbackList(prev => [data[0], ...prev])
      }

      // Reset form
      setFormData({
        name: "",
        feedback: "",
        rating: 0,
      })

      toast({
        title: "Feedback submitted successfully!",
        description: "Thank you for your feedback. I really appreciate it!",
      })

      console.log("Feedback submitted successfully:", data)
    } catch (error) {
      console.error("Error submitting feedback:", error)
      toast({
        title: "Error submitting feedback",
        description: "There was an error submitting your feedback. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
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
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-base font-medium transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit Feedback"}
              </Button>
            </form>
          </Card>
        </div>

        {/* Feedback Display Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              What People Are Saying
            </h3>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          ) : feedbackList.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No feedback yet. Be the first to share your thoughts!
              </p>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {feedbackList.map((feedback) => (
                <FeedbackCard key={feedback.id} feedback={feedback} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
