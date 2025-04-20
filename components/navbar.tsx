"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"> 
      <div className="w-full p-4 flex h-16 items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-md truncate">P&O Portal</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-foreground/80 text-foreground">
            Home
          </Link>
          <Link href="/appointments" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Appointments
          </Link>
          <Link href="/education" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Device Education
          </Link>
          <Link href="/feedback" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Feedback
          </Link>
          <Link href="/admin" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Admin
          </Link>
        </nav>

        <div className="flex items-center space-x-2">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link href="/" className="hover:text-foreground/80" onClick={() => setIsOpen(false)}>
                    Home
                  </Link>
                  <Link href="/appointments" className="hover:text-foreground/80" onClick={() => setIsOpen(false)}>
                    Appointments
                  </Link>
                  <Link href="/education" className="hover:text-foreground/80" onClick={() => setIsOpen(false)}>
                    Device Education
                  </Link>
                  <Link href="/feedback" className="hover:text-foreground/80" onClick={() => setIsOpen(false)}>
                    Feedback
                  </Link>
                  <Link href="/admin" className="hover:text-foreground/80" onClick={() => setIsOpen(false)}>
                    Admin
                    </Link>
                    </nav>
              </SheetContent>
            </Sheet>
            
          <Button className="hidden md:flex bg-blue-600 hover:bg-blue-700">
            <Link href="/appointments">Book Appointment</Link>
          </Button>
          </div>
        </div>
    </header>
  )
}
