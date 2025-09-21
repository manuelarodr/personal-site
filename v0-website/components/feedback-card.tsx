import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { formatDistanceToNow } from "date-fns"
import type { Feedback } from "@/lib/supabase"

interface FeedbackCardProps {
  feedback: Feedback
}

export function FeedbackCard({ feedback }: FeedbackCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${
          i < rating ? "text-yellow-400" : "text-muted-foreground/30"
        }`}
      >
        ★
      </span>
    ))
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <Card className="w-full bg-card border-border hover:shadow-md transition-shadow duration-200">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarFallback className="bg-primary text-primary-foreground text-sm font-medium">
                {getInitials(feedback.name)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-semibold text-card-foreground">{feedback.name}</h4>
              <div className="flex items-center space-x-2">
                <div className="flex">{renderStars(feedback.rating)}</div>
                <Badge variant="secondary" className="text-xs">
                  {feedback.rating}/5
                </Badge>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground">
              {feedback.created_at
                ? formatDistanceToNow(new Date(feedback.created_at), { addSuffix: true })
                : "Just now"}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {feedback.feedback}
        </p>
      </CardContent>
    </Card>
  )
}
