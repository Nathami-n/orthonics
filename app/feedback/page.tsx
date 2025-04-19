"use client"

import type React from "react"

import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

// Define the feedback type
interface Feedback {
  id: string
  name: string
  email: string
  feedbackType: string
  satisfaction: string
  message: string
  createdAt: string
}

export default function FeedbackPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [feedbackList, setFeedbackList] = useState<Feedback[]>([])
  const [showFeedback, setShowFeedback] = useState(false)

  // Form state
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [feedbackType, setFeedbackType] = useState("general")
  const [satisfaction, setSatisfaction] = useState("satisfied")
  const [message, setMessage] = useState("")

  // Load feedback from localStorage on component mount
  useEffect(() => {
    const storedFeedback = localStorage.getItem("feedback")
    if (storedFeedback) {
      setFeedbackList(JSON.parse(storedFeedback))
    }
  }, [])

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    // Validate form
    if (!name || !email || !message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    // Create new feedback
    const newFeedback: Feedback = {
      id: Date.now().toString(),
      name,
      email,
      feedbackType,
      satisfaction,
      message,
      createdAt: new Date().toISOString(),
    }

    // Add to feedback array
    const updatedFeedback = [...feedbackList, newFeedback]
    setFeedbackList(updatedFeedback)

    // Save to localStorage
    localStorage.setItem("feedback", JSON.stringify(updatedFeedback))

    // Show success message
    toast({
      title: "Feedback Submitted",
      description: "Thank you for your feedback. We appreciate your input!",
    })

    setIsSubmitted(true)
  }

  function resetForm() {
    setName("")
    setEmail("")
    setFeedbackType("general")
    setSatisfaction("satisfied")
    setMessage("")
    setIsSubmitted(false)
  }

  if (isSubmitted) {
    return (
      <div className="container py-12 md:py-24 lg:py-32">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Thank You!</CardTitle>
            <CardDescription>Your feedback has been submitted successfully.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-center text-gray-500 mb-4">
              We value your input and will use it to improve our services.
            </p>
            <div className="flex justify-center gap-4">
              <Button onClick={resetForm}>Submit Another Feedback</Button>
              <Button variant="outline" onClick={() => setShowFeedback(true)}>
                View My Feedback
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (showFeedback) {
    return (
      <div className="container py-12 md:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Your Feedback History</h1>
            <Button onClick={() => setShowFeedback(false)}>Submit New Feedback</Button>
          </div>

          {feedbackList.length === 0 ? (
            <Card>
              <CardContent className="py-10">
                <p className="text-center text-gray-500">You haven't submitted any feedback yet.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4">
              {feedbackList.map((feedback) => (
                <Card key={feedback.id}>
                  <CardHeader>
                    <CardTitle>{feedback.feedbackType} Feedback</CardTitle>
                    <CardDescription>Submitted on {new Date(feedback.createdAt).toLocaleDateString()}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2">
                      <div className="grid grid-cols-2">
                        <span className="font-medium">Name:</span>
                        <span>{feedback.name}</span>
                      </div>
                      <div className="grid grid-cols-2">
                        <span className="font-medium">Satisfaction:</span>
                        <span>{feedback.satisfaction}</span>
                      </div>
                      <div className="grid grid-cols-2">
                        <span className="font-medium">Message:</span>
                        <span>{feedback.message}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="max-w-md mx-auto space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Share Your Feedback</h1>
          <p className="text-gray-500">Help us improve our services by sharing your experience.</p>
          {feedbackList.length > 0 && (
            <Button variant="link" onClick={() => setShowFeedback(true)} className="text-blue-600">
              View your feedback history ({feedbackList.length})
            </Button>
          )}
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Feedback Form</CardTitle>
            <CardDescription>Your feedback is valuable to us. Please fill out the form below.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label>Feedback Type</Label>
                <RadioGroup value={feedbackType} onValueChange={setFeedbackType}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="general" id="general" />
                    <Label htmlFor="general">General Feedback</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="appointment" id="appointment" />
                    <Label htmlFor="appointment">Appointment Booking</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="education" id="education" />
                    <Label htmlFor="education">Device Education</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="suggestion" id="suggestion" />
                    <Label htmlFor="suggestion">Suggestion for Improvement</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid gap-2">
                <Label>Overall Satisfaction</Label>
                <RadioGroup value={satisfaction} onValueChange={setSatisfaction}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="very-satisfied" id="very-satisfied" />
                    <Label htmlFor="very-satisfied">Very Satisfied</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="satisfied" id="satisfied" />
                    <Label htmlFor="satisfied">Satisfied</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="neutral" id="neutral" />
                    <Label htmlFor="neutral">Neutral</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="dissatisfied" id="dissatisfied" />
                    <Label htmlFor="dissatisfied">Dissatisfied</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="very-dissatisfied" id="very-dissatisfied" />
                    <Label htmlFor="very-dissatisfied">Very Dissatisfied</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="message">Your Feedback</Label>
                <Textarea
                  id="message"
                  placeholder="Please share your thoughts, suggestions, or concerns..."
                  className="resize-none min-h-[120px]"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Submit Feedback
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
