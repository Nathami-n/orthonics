import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle } from "lucide-react"

export default function SkinCarePage() {
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
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Skin Care & Hygiene</h1>
          <p className="text-gray-500">Preventing skin issues and maintaining hygiene with your prosthetic</p>
        </div>

        <div className="aspect-video relative overflow-hidden rounded-lg">
          <Image
            src="/skin.avif"
            alt="Skin care"
            width={800}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="prose prose-blue max-w-none">
          <h2>Introduction</h2>
          <p>
            Proper skin care is one of the most important aspects of prosthetic use. The interface between your residual
            limb and prosthesis creates a unique environment that requires special attention to prevent skin problems
            and ensure comfort.
          </p>

          <Alert className="my-6">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Important</AlertTitle>
            <AlertDescription>
              If you notice persistent redness, open sores, unusual swelling, or severe pain, contact your healthcare
              provider immediately.
            </AlertDescription>
          </Alert>

          <h2>Daily Skin Care Routine</h2>
          <p>Follow these steps daily to maintain healthy skin:</p>
          <ol>
            <li>
              <strong>Cleansing:</strong> Wash your residual limb with mild, fragrance-free soap and lukewarm water at
              least once daily, preferably in the evening.
            </li>
            <li>
              <strong>Rinsing:</strong> Thoroughly rinse away all soap to prevent irritation.
            </li>
            <li>
              <strong>Drying:</strong> Pat dry gently with a clean towel. Ensure the skin is completely dry before
              donning your prosthesis.
            </li>
            <li>
              <strong>Moisturizing:</strong> Apply a recommended moisturizer at night, but never immediately before
              wearing your prosthesis.
            </li>
            <li>
              <strong>Inspection:</strong> Check your skin daily for any signs of irritation, redness, or breakdown.
            </li>
          </ol>

          <h2>Common Skin Issues and Prevention</h2>
          <p>Prosthesis users commonly experience these skin issues:</p>
          <ul>
            <li>
              <strong>Pressure Sores:</strong> Caused by excessive pressure or friction. Ensure proper fit and use
              appropriate socks or liners.
            </li>
            <li>
              <strong>Contact Dermatitis:</strong> Allergic reaction to materials. Use hypoallergenic products and
              discuss alternative materials with your prosthetist.
            </li>
            <li>
              <strong>Folliculitis:</strong> Hair follicle inflammation. Maintain good hygiene and consider gentle hair
              removal methods recommended by your healthcare provider.
            </li>
            <li>
              <strong>Hyperhidrosis (Excessive Sweating):</strong> Use antiperspirants specifically designed for
              prosthesis users and change socks throughout the day if needed.
            </li>
          </ul>

          <div className="my-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <FileText className="h-8 w-8 text-blue-600 mr-4" />
                  <div>
                    <h3 className="text-lg font-medium">Skin Care Guide</h3>
                    <p className="text-gray-500">Download our comprehensive skin care guide</p>
                    <Button variant="outline" className="mt-2">
                      Download PDF
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2>Managing Perspiration</h2>
          <p>Excessive sweating can lead to skin maceration and increased risk of infection:</p>
          <ul>
            <li>Use prosthetic-safe antiperspirants as directed by your healthcare provider</li>
            <li>Change prosthetic socks throughout the day if they become damp</li>
            <li>Consider using moisture-wicking socks or liners</li>
            <li>Allow your residual limb to "breathe" by removing your prosthesis periodically when possible</li>
            <li>Maintain good overall hydration, which can actually help regulate perspiration</li>
          </ul>

          <h2>Sock and Liner Care</h2>
          <p>Proper care of prosthetic socks and liners is essential for skin health:</p>
          <ul>
            <li>Wash prosthetic socks daily according to manufacturer instructions</li>
            <li>Have multiple sets of socks to ensure you always have clean ones available</li>
            <li>Replace worn or thinning socks promptly</li>
            <li>Clean liners daily with mild soap, rinse thoroughly, and allow to completely dry</li>
            <li>Inspect liners regularly for signs of wear and replace as needed</li>
          </ul>

          <h2>When to Seek Medical Attention</h2>
          <p>Contact your healthcare provider immediately if you notice:</p>
          <ul>
            <li>Open wounds or sores</li>
            <li>Skin that remains red for more than 15 minutes after removing your prosthesis</li>
            <li>Unusual swelling or warmth</li>
            <li>Signs of infection (increased pain, redness, warmth, swelling, discharge, or fever)</li>
            <li>Persistent rash or irritation that doesn't improve with basic care</li>
          </ul>

          <Separator className="my-8" />

          <p className="text-sm text-gray-500">
            Remember that prevention is always better than treatment. Establishing a good skin care routine from the
            beginning will help you avoid many common problems and ensure a comfortable experience with your prosthesis.
          </p>
        </div>
      </div>
    </div>
  )
}
