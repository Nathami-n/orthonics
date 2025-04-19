import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function GettingStartedPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="flex items-center">
          <Link href="/education">
            <Button variant="outline" size="sm" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Education
            </Button>
          </Link>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Getting Started with Your Prosthetic</h1>
          <p className="text-gray-500">A comprehensive guide for new prosthetic users</p>
        </div>

        <div className="aspect-video relative overflow-hidden rounded-lg">
          <Image
            src="/images/prosthetic-leg.png"
            alt="Prosthetic device"
            width={800}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="prose prose-blue max-w-none">
          <h2>Introduction</h2>
          <p>
            Welcome to your guide on getting started with your new prosthetic device. This resource is designed to help
            you understand the basics of using and caring for your prosthesis, ensuring a smooth transition and optimal
            experience.
          </p>

          <h2>Understanding Your Prosthetic</h2>
          <p>Your prosthetic device is custom-made to fit your specific needs. It consists of several components:</p>
          <ul>
            <li>
              <strong>Socket:</strong> The part that connects to your residual limb
            </li>
            <li>
              <strong>Suspension System:</strong> Keeps the prosthesis attached to your body
            </li>
            <li>
              <strong>Components:</strong> Joints, pylons, and other functional parts
            </li>
            <li>
              <strong>Terminal Device:</strong> The end part (foot, hand, etc.)
            </li>
          </ul>

          <h2>Putting On Your Prosthesis (Donning)</h2>
          <p>Proper donning is crucial for comfort and function. Follow these general steps:</p>
          <ol>
            <li>Ensure your residual limb is clean and dry</li>
            <li>Apply any prescribed skin products or liners</li>
            <li>Position the prosthesis correctly</li>
            <li>Secure all straps, locks, or other suspension mechanisms</li>
            <li>Check for proper fit before standing or walking</li>
          </ol>

          <div className="my-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <FileText className="h-8 w-8 text-blue-600 mr-4" />
                  <div>
                    <h3 className="text-lg font-medium">Download Guide</h3>
                    <p className="text-gray-500">Get a printable version of this guide for reference</p>
                    <Button variant="outline" className="mt-2">
                      Download PDF
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2>Taking Off Your Prosthesis (Doffing)</h2>
          <p>At the end of the day or when needed, follow these steps to remove your prosthesis:</p>
          <ol>
            <li>Sit in a secure location</li>
            <li>Release any locks, straps, or suspension mechanisms</li>
            <li>Gently remove the prosthesis</li>
            <li>Inspect your skin for any areas of concern</li>
            <li>Clean both your residual limb and prosthesis as directed</li>
          </ol>

          <h2>Initial Adjustment Period</h2>
          <p>It's normal to experience an adjustment period with your new prosthesis:</p>
          <ul>
            <li>Start with short wearing periods (1-2 hours) and gradually increase</li>
            <li>Follow your clinician's wearing schedule</li>
            <li>Expect some mild discomfort initially, but pain is not normal</li>
            <li>Keep track of any issues to discuss with your prosthetist</li>
          </ul>

          <h2>When to Contact Your Prosthetist</h2>
          <p>Contact your prosthetist immediately if you experience:</p>
          <ul>
            <li>Pain or discomfort that doesn't improve</li>
            <li>Skin irritation, blisters, or breakdown</li>
            <li>Changes in fit (too loose or too tight)</li>
            <li>Mechanical issues with the prosthesis</li>
            <li>Unusual noises or movement</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
