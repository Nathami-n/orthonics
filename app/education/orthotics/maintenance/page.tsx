import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function OrthoticsMaintenancePage() {
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
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Orthotic Care & Maintenance</h1>
          <p className="text-gray-500">How to keep your orthotic in optimal condition</p>
        </div>

        <div className="aspect-video relative overflow-hidden rounded-lg">
          <Image
            src="/orth-2.webp"
            alt="Orthotic maintenance"
            width={800}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="prose prose-blue max-w-none">
          <h2>Introduction</h2>
          <p>
            Proper maintenance of your orthotic device is essential for its longevity, functionality, and your comfort.
            This guide provides comprehensive information on how to care for your orthosis on a daily basis.
          </p>

          <h2>Daily Cleaning</h2>
          <p>Your orthotic should be cleaned regularly to prevent buildup of sweat, dirt, and bacteria:</p>
          <ul>
            <li>
              <strong>Plastic/Hard Components:</strong> Wipe with a damp cloth and mild soap
            </li>
            <li>
              <strong>Fabric Components:</strong> Follow specific care instructions provided by your orthotist
            </li>
            <li>
              <strong>Padding:</strong> Clean according to material type (foam, gel, etc.)
            </li>
            <li>
              <strong>Straps and Fasteners:</strong> Check for wear and clean with a damp cloth
            </li>
          </ul>

          <div className="bg-blue-50 p-4 rounded-lg my-6">
            <p className="font-medium text-blue-800">Important Note:</p>
            <p className="text-blue-700">
              Never submerge your orthotic in water unless specifically instructed to do so by your orthotist. Some
              components may be damaged by excessive moisture.
            </p>
          </div>

          <h2>Weekly Maintenance</h2>
          <p>In addition to daily cleaning, perform these maintenance tasks weekly:</p>
          <ol>
            <li>Check all screws, rivets, and mechanical components</li>
            <li>Inspect for any cracks, chips, or signs of wear</li>
            <li>Clean any hinges or joints thoroughly</li>
            <li>Apply lubricant to moving parts if recommended by your orthotist</li>
            <li>Check the condition of any straps, padding, or soft goods</li>
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
          <p>To prevent damage to your orthotic:</p>
          <ul>
            <li>Keep away from extreme heat sources</li>
            <li>Avoid exposure to harsh chemicals</li>
            <li>Don't use abrasive cleaners</li>
            <li>Store in a clean, dry place when not in use</li>
            <li>Follow weight and activity limitations specified by your orthotist</li>
            <li>Don't attempt to modify or adjust the orthotic yourself</li>
          </ul>

          <h2>Replacing Parts</h2>
          <p>Some orthotic components may need regular replacement:</p>
          <ul>
            <li>Straps and closures (typically every 6-12 months)</li>
            <li>Padding and liners (every 3-6 months depending on use)</li>
            <li>Joints and mechanical components (as needed)</li>
          </ul>
          <p>Your orthotist can provide specific guidance on when and how to replace these items.</p>

          <h2>When to Seek Professional Help</h2>
          <p>Contact your orthotist if you notice:</p>
          <ul>
            <li>Unusual noises (clicking, squeaking, etc.)</li>
            <li>Visible damage to any component</li>
            <li>Changes in fit or comfort</li>
            <li>Loose or broken parts</li>
            <li>Significant wear on any component</li>
          </ul>

          <h2>Regular Check-ups</h2>
          <p>Schedule regular appointments with your orthotist for professional maintenance:</p>
          <ul>
            <li>Every 3-6 months for routine check-ups</li>
            <li>Annually for comprehensive evaluation</li>
            <li>Any time you experience issues with fit or function</li>
          </ul>

          <Separator className="my-8" />

          <p className="text-sm text-gray-500">
            Remember that proper maintenance not only extends the life of your orthotic but also ensures your safety and
            comfort. If you have any questions about caring for your specific device, consult with your orthotist.
          </p>
        </div>
      </div>
    </div>
  )
}
