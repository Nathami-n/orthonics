import Link from "next/link"
import Image from "next/image"
import { FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EducationPage() {
  return (
    <div className="h-screen  p-4">
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Device Education</h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
            Learn how to properly use and care for your prosthetic or orthotic device.
          </p>
        </div>

        <Tabs defaultValue="prosthetics" className="max-w-[89%] mx-auto">
          <TabsList className="w-full gap-x-8 bg-white">
            <TabsTrigger value="prosthetics" className="data-[state:active]:text-primary">Prosthetics</TabsTrigger>
            <TabsTrigger value="orthotics">Orthotics</TabsTrigger>
          </TabsList>
          <TabsContent value="prosthetics" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle>Getting Started with Your Prosthetic</CardTitle>
                  <CardDescription>Basic information for new prosthetic users</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative mb-4 overflow-hidden rounded-lg">
                    <Image
                      src="started.avif"
                      alt="Prosthetic device"
                      width={400}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-sm text-gray-500">
                    Learn the basics of using your new prosthetic device, including putting it on, taking it off, and
                    initial adjustments.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/education/prosthetics/getting-started">
                    <Button variant="outline" className="w-full">
                      Read Guide
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle>Daily Care & Maintenance</CardTitle>
                  <CardDescription>How to keep your prosthetic in optimal condition</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative mb-4 overflow-hidden rounded-lg">
                    <Image
                      src="prosthetic.avif"
                      alt="Prosthetic maintenance"
                      width={400}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-sm text-gray-500">
                    Proper daily care and maintenance routines to ensure the longevity and functionality of your
                    prosthetic device.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/education/prosthetics/maintenance">
                    <Button variant="outline" className="w-full">
                      Read Guide
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle>Skin Care & Hygiene</CardTitle>
                  <CardDescription>Preventing skin issues and maintaining hygiene</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative mb-4 overflow-hidden rounded-lg">
                    <Image
                      src="skin.avif"
                      alt="Skin care"
                      width={400}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-sm text-gray-500">
                    Essential information on skin care, hygiene practices, and preventing common skin issues associated
                    with prosthetic use.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/education/prosthetics/skin-care">
                    <Button variant="outline" className="w-full">
                      Read Guide
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Downloadable Resources</h2>
              <div className="grid gap-4">
                <Card className="border-blue-100">
                  <CardContent className="p-4 flex items-center">
                    <FileText className="h-8 w-8 text-blue-600 mr-4" />
                    <div className="flex-1">
                      <h3 className="font-medium">Prosthetic Care Guide</h3>
                      <p className="text-sm text-gray-500">Comprehensive guide for daily care and maintenance</p>
                    </div>
                    <Button variant="ghost" size="sm" className="ml-auto">
                      Download PDF
                    </Button>
                  </CardContent>
                </Card>
                <Card className="border-blue-100">
                  <CardContent className="p-4 flex items-center">
                    <FileText className="h-8 w-8 text-blue-600 mr-4" />
                    <div className="flex-1">
                      <h3 className="font-medium">Skin Care Checklist</h3>
                      <p className="text-sm text-gray-500">Daily checklist for maintaining healthy skin</p>
                    </div>
                    <Button variant="ghost" size="sm" className="ml-auto">
                      Download PDF
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="orthotics" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle>Getting Started with Your Orthotic</CardTitle>
                  <CardDescription>Basic information for new orthotic users</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative mb-4 overflow-hidden rounded-lg">
                    <Image
                      src="orth-1.jpg"
                      alt="Orthotic device"
                      width={400}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-sm text-gray-500">
                    Learn the basics of using your new orthotic device, including proper fitting, wearing schedules, and
                    initial adjustments.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/education/orthotics/getting-started">
                    <Button variant="outline" className="w-full">
                      Read Guide
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle>Daily Care & Maintenance</CardTitle>
                  <CardDescription>How to keep your orthotic in optimal condition</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative mb-4 overflow-hidden rounded-lg">
                    <Image
                      src="orth-2.webp"
                      alt="Orthotic maintenance"
                      width={400}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-sm text-gray-500">
                    Proper daily care and maintenance routines to ensure the longevity and functionality of your
                    orthotic device.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/education/orthotics/maintenance">
                    <Button variant="outline" className="w-full">
                      Read Guide
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle>Skin Care & Hygiene</CardTitle>
                  <CardDescription>Preventing skin issues and maintaining hygiene</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative mb-4 overflow-hidden rounded-lg">
                    <Image
                      src="/orth-3.jpeg"
                      alt="Skin care"
                      width={400}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-sm text-gray-500">
                    Essential information on skin care, hygiene practices, and preventing common skin issues associated
                    with orthotic use.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/education/orthotics/skin-care">
                    <Button variant="outline" className="w-full">
                      Read Guide
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
