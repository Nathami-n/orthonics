import Link from "next/link"
import Image from "next/image"
import { Calendar, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image src="/images/hero-image.png" alt="Background pattern" fill className="object-cover" />
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Prosthetics & Orthotics Patient Portal
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Improving patient-clinician interaction and device education for better outcomes.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/appointments">
                <Button className="bg-blue-600 hover:bg-blue-700">Book Appointment</Button>
              </Link>
              <Link href="/education">
                <Button variant="outline">Learn About Your Device</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
            <Card className="border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <Calendar className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle className="text-2xl">Appointment Booking</CardTitle>
                <CardDescription>Schedule appointments with your clinician at your convenience.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/prosthetic-leg.png"
                    alt="Prosthetic fitting appointment"
                    width={500}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-gray-500">
                  Our easy-to-use booking system allows you to select your preferred date and time, specify the reason
                  for your visit, and receive confirmation instantly.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/appointments">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Book Now</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <Info className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle className="text-2xl">Device Education</CardTitle>
                <CardDescription>
                  Learn how to properly use and care for your prosthetic or orthotic device.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/orthotic-brace.png"
                    alt="Orthotic device education"
                    width={500}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-gray-500">
                  Access comprehensive guides, videos, and tips on device usage, maintenance, and hygiene to ensure
                  optimal function and longevity of your device.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/education">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Learn More</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-100 mt-auto">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <p className="text-gray-500">
                © {new Date().getFullYear()} Prosthetics & Orthotics Patient Portal. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
