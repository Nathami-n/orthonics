"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

// Define the appointment type
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

export default function AppointmentsPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [showAppointments, setShowAppointments] = useState(false)

  // Form state
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [appointmentType, setAppointmentType] = useState("")
  const [notes, setNotes] = useState("")

  // Load appointments from localStorage on component mount
  useEffect(() => {
    const storedAppointments = localStorage.getItem("appointments")
    if (storedAppointments) {
      setAppointments(JSON.parse(storedAppointments))
    }
  }, [])

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    // Validate form
    if (!name || !email || !phone || !date || !time || !appointmentType) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    // Create new appointment
    const newAppointment: Appointment = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      date,
      time,
      appointmentType,
      notes,
      createdAt: new Date().toISOString(),
    }

    // Add to appointments array
    const updatedAppointments = [...appointments, newAppointment]
    setAppointments(updatedAppointments)

    // Save to localStorage
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments))

    // Show success message
    toast({
      title: "Appointment Booked",
      description: `Your appointment has been scheduled for ${format(new Date(date), "PPP")} at ${time}.`,
    })

    setIsSubmitted(true)
  }

  function resetForm() {
    setName("")
    setEmail("")
    setPhone("")
    setDate("")
    setTime("")
    setAppointmentType("")
    setNotes("")
    setIsSubmitted(false)
  }

  if (isSubmitted) {
    return (
      <div className="py-12 md:py-24 lg:py-32">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Appointment Confirmed</CardTitle>
            <CardDescription>Thank you for booking your appointment.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-center text-gray-500 mb-4">
              We have saved your appointment details. You can view all your appointments below.
            </p>
            <div className="flex justify-center gap-4">
              <Button onClick={resetForm}>Book Another Appointment</Button>
              <Button variant="outline" onClick={() => setShowAppointments(true)}>
                View My Appointments
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (showAppointments) {
    return (
      <div className="container py-12 md:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Your Appointments</h1>
            <Button onClick={() => setShowAppointments(false)}>Book New Appointment</Button>
          </div>

          {appointments.length === 0 ? (
            <Card>
              <CardContent className="py-10">
                <p className="text-center text-gray-500">You don't have any appointments yet.</p>
              </CardContent>
            </Card>
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
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => {
                        const updatedAppointments = appointments.filter((a) => a.id !== appointment.id)
                        setAppointments(updatedAppointments)
                        localStorage.setItem("appointments", JSON.stringify(updatedAppointments))
                        toast({
                          title: "Appointment Cancelled",
                          description: "Your appointment has been cancelled.",
                        })
                      }}
                    >
                      Cancel Appointment
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="h-screen md:py-24 flex items-center justify-center lg:py-32">
      <div className="max-w-md mx-auto space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Book Your Appointment</h1>
          <p className="text-gray-500">Schedule a visit with your prosthetics and orthotics specialist.</p>
          {appointments.length > 0 && (
            <Button variant="link" onClick={() => setShowAppointments(true)} className="text-blue-600">
              View your existing appointments ({appointments.length})
            </Button>
          )}
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Appointment Details</CardTitle>
            <CardDescription>Fill out the form below to schedule your appointment.</CardDescription>
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
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  placeholder="(123) 456-7890"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="date">Preferred Date</Label>
                <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="time">Preferred Time</Label>
                <Select onValueChange={setTime} value={time}>
                  <SelectTrigger id="time">
                    <SelectValue placeholder="Select a time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="9:00 AM">9:00 AM</SelectItem>
                    <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                    <SelectItem value="11:00 AM">11:00 AM</SelectItem>
                    <SelectItem value="1:00 PM">1:00 PM</SelectItem>
                    <SelectItem value="2:00 PM">2:00 PM</SelectItem>
                    <SelectItem value="3:00 PM">3:00 PM</SelectItem>
                    <SelectItem value="4:00 PM">4:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="type">Appointment Type</Label>
                <Select onValueChange={setAppointmentType} value={appointmentType}>
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Select appointment type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Initial Consultation">Initial Consultation</SelectItem>
                    <SelectItem value="Follow-up Visit">Follow-up Visit</SelectItem>
                    <SelectItem value="Device Adjustment">Device Adjustment</SelectItem>
                    <SelectItem value="Device Repair">Device Repair</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="Please provide any additional information about your visit"
                  className="resize-none"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Book Appointment
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
