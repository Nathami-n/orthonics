import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function OrthoticsGettingStartedPage() {
  return (
    <div className="container max-sm:px-4 mx-auto py-12 md:py-24 lg:py-32">
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
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Getting Started with Your Orthotic</h1>
          <p className="text-gray-500">A comprehensive guide for new orthotic users</p>
        </div>

        <div className="aspect-video relative overflow-hidden rounded-lg">
          <Image
            src="/orth-1.jpg"
            alt="Orthotic device"
            width={800}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="prose prose-blue max-w-none">
          <h2>Introduction</h2>
          <p>
            Welcome to your guide on getting started with your new orthotic device. This resource is designed to help
            you understand the basics of using and caring for your orthosis, ensuring a smooth transition and optimal
            experience.
          </p>

          <h2>Understanding Your Orthotic</h2>
          <p>
            Your orthotic device is custom-made to fit your specific needs. Orthotics come in many forms, including:
          </p>
          <ul>
            <li>
              <strong>Ankle-Foot Orthoses (AFOs):</strong> Support the ankle and foot
            </li>
            <li>
              <strong>Knee Orthoses:</strong> Provide knee stability and support
            </li>
            <li>
              <strong>Spinal Orthoses:</strong> Support the spine and promote proper alignment
            </li>
            <li>
              <strong>Upper Extremity Orthoses:</strong> Support the arm, wrist, or hand
            </li>
          </ul>

          <h2>Wearing Your Orthotic</h2>
          <p>Proper application of your orthotic is crucial for comfort and function. Follow these general steps:</p>
          <ol>
            <li>Ensure the affected area is clean and dry</li>
            <li>Apply any prescribed socks, liners, or padding</li>
            <li>Position the orthotic correctly according to your orthotist's instructions</li>
            <li>Secure all straps, fasteners, or other mechanisms</li>
            <li>Check for proper fit and comfort before full activity</li>
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

          <h2>Breaking In Your Orthotic</h2>
          <p>Most orthotics require a break-in period:</p>
          <ul>
            <li>Start with short wearing periods (1-2 hours) and gradually increase</li>
            <li>Follow your orthotist's specific wearing schedule</li>
            <li>Expect some mild discomfort initially, but pain is not normal</li>
            <li>Check your skin after removing the orthotic for any areas of concern</li>
            <li>Keep track of any issues to discuss with your orthotist</li>
          </ul>

          <h2>Clothing Considerations</h2>
          <p>Proper clothing can enhance comfort with your orthotic:</p>
          <ul>
            <li>Wear seamless socks or stockings under the orthotic when appropriate</li>
            <li>Choose clothing that accommodates the orthotic comfortably</li>
            <li>Consider slightly larger shoes for foot orthotics</li>
            <li>Avoid clothing that might cause bunching or pressure points</li>
          </ul>

          <h2>Activity Modifications</h2>
          <p>Your orthotic may require some adjustments to your activities:</p>
          <ul>
            <li>Follow your healthcare provider's guidelines about activity restrictions</li>
            <li>Learn proper body mechanics for daily activities while wearing your orthotic</li>
            <li>Gradually return to normal activities as directed</li>
            <li>Be aware of any weight-bearing restrictions</li>
          </ul>

          <h2>When to Contact Your Orthotist</h2>
          <p>Contact your orthotist immediately if you experience:</p>
          <ul>
            <li>Pain or discomfort that doesn't improve</li>
            <li>Skin irritation, blisters, or breakdown</li>
            <li>Changes in fit (too loose or too tight)</li>
            <li>Mechanical issues with the orthotic</li>
            <li>Unusual noises or movement</li>
          </ul>

          <Separator className="my-8" />

          <p className="text-sm text-gray-500">
            Remember that your orthotic is designed to improve your function and quality of life. With proper use and
            care, it will serve you well for its intended lifespan.
          </p>
        </div>
      </div>
    </div>
  )
}
