import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle } from "lucide-react"

export default function OrthoticsSkinCarePage() {
  return (
    <div className="container  max-sm:px-4 mx-auto py-12 md:py-24 lg:py-32">
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
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Skin Care with Orthotics</h1>
          <p className="text-gray-500">Preventing skin issues and maintaining hygiene with your orthotic device</p>
        </div>

        <div className="aspect-video relative overflow-hidden rounded-lg">
          <Image
            src="/orth-3.jpeg"
            alt="Skin care"
            width={800}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="prose prose-blue max-w-none">
          <h2>Introduction</h2>
          <p>
            Proper skin care is essential when using orthotic devices. The interface between your skin and the orthotic
            creates pressure and friction that, if not properly managed, can lead to skin problems. This guide will help
            you maintain healthy skin while using your orthotic.
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
              <strong>Cleansing:</strong> Wash the skin that contacts your orthotic with mild, fragrance-free soap and
              lukewarm water daily.
            </li>
            <li>
              <strong>Rinsing:</strong> Thoroughly rinse away all soap to prevent irritation.
            </li>
            <li>
              <strong>Drying:</strong> Pat dry gently with a clean towel. Ensure the skin is completely dry before
              applying your orthotic.
            </li>
            <li>
              <strong>Moisturizing:</strong> Apply a recommended moisturizer at night, but never immediately before
              wearing your orthotic unless directed by your healthcare provider.
            </li>
            <li>
              <strong>Inspection:</strong> Check your skin daily for any signs of irritation, redness, or breakdown.
            </li>
          </ol>

          <h2>Common Skin Issues and Prevention</h2>
          <p>Orthotic users commonly experience these skin issues:</p>
          <ul>
            <li>
              <strong>Pressure Sores:</strong> Caused by excessive pressure. Ensure proper fit and use appropriate
              padding as recommended.
            </li>
            <li>
              <strong>Friction Blisters:</strong> Caused by rubbing. Use appropriate socks or liners and ensure proper
              fit.
            </li>
            <li>
              <strong>Contact Dermatitis:</strong> Allergic reaction to materials. Use hypoallergenic products and
              discuss alternative materials with your orthotist.
            </li>
            <li>
              <strong>Heat Rash:</strong> Caused by excessive sweating and heat. Ensure proper ventilation and use
              moisture-wicking materials when possible.
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
            <li>Use moisture-wicking socks or liners when appropriate</li>
            <li>Change socks or liners if they become damp</li>
            <li>Allow your skin to "breathe" by removing your orthotic periodically when possible</li>
            <li>Consider using cornstarch or talcum powder if recommended by your healthcare provider</li>
            <li>Maintain good overall hydration</li>
          </ul>

          <h2>Padding and Protection</h2>
          <p>Strategic padding can help prevent skin issues:</p>
          <ul>
            <li>Use only padding recommended by your orthotist</li>
            <li>Replace padding regularly as it compresses and loses effectiveness</li>
            <li>Never add extra padding without consulting your orthotist, as it may affect fit and function</li>
            <li>Keep padding clean and dry</li>
          </ul>

          <h2>Monitoring Skin Tolerance</h2>
          <p>Pay attention to how your skin responds to the orthotic:</p>
          <ul>
            <li>After removing your orthotic, skin may be red in pressure areas</li>
            <li>This redness should fade within 15-30 minutes</li>
            <li>If redness persists longer, it may indicate excessive pressure</li>
            <li>Document any persistent red areas with photos to show your healthcare provider</li>
          </ul>

          <h2>When to Seek Medical Attention</h2>
          <p>Contact your healthcare provider immediately if you notice:</p>
          <ul>
            <li>Open wounds or sores</li>
            <li>Skin that remains red for more than 30 minutes after removing your orthotic</li>
            <li>Unusual swelling or warmth</li>
            <li>Signs of infection (increased pain, redness, warmth, swelling, discharge, or fever)</li>
            <li>Persistent rash or irritation that doesn't improve with basic care</li>
          </ul>

          <Separator className="my-8" />

          <p className="text-sm text-gray-500">
            Remember that prevention is always better than treatment. Establishing a good skin care routine from the
            beginning will help you avoid many common problems and ensure a comfortable experience with your orthotic.
          </p>
        </div>
      </div>
    </div>
  )
}
