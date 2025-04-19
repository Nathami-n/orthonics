"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Define the types
interface Appointment {
  id: string
  name: string
  email: string
  phone: string
  date: string
  time: string
  appointmentType: string
  notes: string
  createdAt: string
}

interface Feedback {
  id: string
  name: string
  email: string
  feedbackType: string
  satisfaction: string
  message: string
  createdAt: string
}

export default function AdminPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [feedback, setFeedback] = useState<Feedback[]>([])

  // Load data from localStorage on component mount
  useEffect(() => {
    const storedAppointments = localStorage.getItem("appointments")
    if (storedAppointments) {
      setAppointments(JSON.parse(storedAppointments))
    }

    const storedFeedback = localStorage.getItem("feedback")
    if (storedFeedback) {
      setFeedback(JSON.parse(storedFeedback))
    }
  }, [])

  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <Link href="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
        </div>

        <Tabs defaultValue="appointments" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="appointments">Appointments ({appointments.length})</TabsTrigger>
            <TabsTrigger value="feedback">Feedback ({feedback.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="appointments" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>All Appointments</CardTitle>
                <CardDescription>View and manage all patient appointments</CardDescription>
              </CardHeader>
              <CardContent>
                {appointments.length === 0 ? (
                  <p className="text-center text-gray-500 py-4">No appointments have been booked yet.</p>
                ) : (
                  <div className="grid gap-4">
                    {appointments.map((appointment) => (
                      <Card key={appointment.id}>
                        <CardHeader>
                          <CardTitle>{appointment.appointmentType} Appointment</CardTitle>
                          <CardDescription>
                            {format(new Date(appointment.date), "PPP")} at {appointment.time}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="grid gap-2">
                            <div className="grid grid-cols-2">
                              <span className="font-medium">Name:</span>
                              <span>{appointment.name}</span>
                            </div>
                            <div className="grid grid-cols-2">
                              <span className="font-medium">Email:</span>
                              <span>{appointment.email}</span>
                            </div>
                            <div className="grid grid-cols-2">
                              <span className="font-medium">Phone:</span>
                              <span>{appointment.phone}</span>
                            </div>
                            {appointment.notes && (
                              <div className="grid grid-cols-2">
                                <span className="font-medium">Notes:</span>
                                <span>{appointment.notes}</span>
                              </div>
                            )}
                            <div className="grid grid-cols-2">
                              <span className="font-medium">Booked on:</span>
                              <span>{format(new Date(appointment.createdAt), "PPP")}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="feedback" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>All Feedback</CardTitle>
                <CardDescription>View all patient feedback and suggestions</CardDescription>
              </CardHeader>
              <CardContent>
                {feedback.length === 0 ? (
                  <p className="text-center text-gray-500 py-4">No feedback has been submitted yet.</p>
                ) : (
                  <div className="grid gap-4">
                    {feedback.map((item) => (
                      <Card key={item.id}>
                        <CardHeader>
                          <CardTitle>{item.feedbackType} Feedback</CardTitle>
                          <CardDescription>Submitted on {format(new Date(item.createdAt), "PPP")}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="grid gap-2">
                            <div className="grid grid-cols-2">
                              <span className="font-medium">Name:</span>
                              <span>{item.name}</span>
                            </div>
                            <div className="grid grid-cols-2">
                              <span className="font-medium">Email:</span>
                              <span>{item.email}</span>
                            </div>
                            <div className="grid grid-cols-2">
                              <span className="font-medium">Satisfaction:</span>
                              <span>{item.satisfaction}</span>
                            </div>
                            <div className="grid grid-cols-2">
                              <span className="font-medium">Message:</span>
                              <span>{item.message}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
