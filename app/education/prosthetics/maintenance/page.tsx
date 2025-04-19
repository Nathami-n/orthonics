import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function MaintenancePage() {
  return (
    <div className="container max-sm:px-4  py-12 md:py-24 lg:py-32">
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
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Daily Care & Maintenance</h1>
          <p className="text-gray-500">How to keep your prosthetic in optimal condition</p>
        </div>

        <div className="aspect-video relative overflow-hidden rounded-lg">
          <Image
            src="/prosthetic.avif"
            alt="Prosthetic maintenance"
            width={800}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="prose prose-blue max-w-none">
          <h2>Introduction</h2>
          <p>
            Proper maintenance of your prosthetic device is essential for its longevity, functionality, and your
            comfort. This guide provides comprehensive information on how to care for your prosthesis on a daily basis.
          </p>

          <h2>Daily Cleaning</h2>
          <p>Your prosthesis should be cleaned daily to prevent buildup of sweat, dirt, and bacteria:</p>
          <ul>
            <li>
              <strong>Socket:</strong> Wipe the inside of the socket with a damp cloth and mild soap
            </li>
            <li>
              <strong>Liner:</strong> Hand wash with mild soap, rinse thoroughly, and air dry
            </li>
            <li>
              <strong>External Components:</strong> Wipe with a damp cloth to remove dirt and debris
            </li>
            <li>
              <strong>Foot/Terminal Device:</strong> Clean according to manufacturer's instructions
            </li>
          </ul>

          <div className="bg-blue-50 p-4 rounded-lg my-6">
            <p className="font-medium text-blue-800">Important Note:</p>
            <p className="text-blue-700">
              Never submerge your prosthesis in water unless specifically designed to be waterproof. Electronic
              components should be kept dry at all times.
            </p>
          </div>

          <h2>Weekly Maintenance</h2>
          <p>In addition to daily cleaning, perform these maintenance tasks weekly:</p>
          <ol>
            <li>Check all screws and bolts to ensure they are tight</li>
            <li>Inspect for any cracks, chips, or signs of wear</li>
            <li>Clean any hinges or moving parts</li>
            <li>Apply lubricant to moving parts if recommended by your prosthetist</li>
            <li>Check the condition of any straps, sleeves, or socks</li>
          </ol>

          <div className="my-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <FileText className="h-8 w-8 text-blue-600 mr-4" />
                  <div>
                    <h3 className="text-lg font-medium">Maintenance Checklist</h3>
                    <p className="text-gray-500">Download our weekly maintenance checklist</p>
                    <Button variant="outline" className="mt-2">
                      Download PDF
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2>Avoiding Damage</h2>
          <p>To prevent damage to your prosthesis:</p>
          <ul>
            <li>Keep away from extreme heat (radiators, heaters, direct sunlight)</li>
            <li>Avoid exposure to salt water, chlorine, and other chemicals</li>
            <li>Don't use harsh cleaning agents or solvents</li>
            <li>Store in a clean, dry place when not in use</li>
            <li>Follow weight and activity limitations specified by your prosthetist</li>
          </ul>

          <h2>When to Seek Professional Help</h2>
          <p>Contact your prosthetist if you notice:</p>
          <ul>
            <li>Unusual noises (clicking, squeaking, etc.)</li>
            <li>Visible damage to any component</li>
            <li>Changes in alignment or function</li>
            <li>Loose or broken parts</li>
            <li>Significant wear on the socket or liner</li>
          </ul>

          <h2>Regular Check-ups</h2>
          <p>Schedule regular appointments with your prosthetist for professional maintenance:</p>
          <ul>
            <li>Every 3-6 months for routine check-ups</li>
            <li>Annually for comprehensive evaluation</li>
            <li>Any time you experience issues with fit or function</li>
          </ul>

          <Separator className="my-8" />

          <p className="text-sm text-gray-500">
            Remember that proper maintenance not only extends the life of your prosthesis but also ensures your safety
            and comfort. If you have any questions about caring for your specific device, consult with your prosthetist.
          </p>
        </div>
      </div>
    </div>
  )
}
