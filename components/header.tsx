"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Conversion</Link>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <Link href="/dashboard" className={pathname === "/dashboard" ? "font-bold" : ""}>
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/integrations" className={pathname === "/integrations" ? "font-bold" : ""}>
                Integrations
              </Link>
            </li>
            <li>
              <Link href="/reports" className={pathname === "/reports" ? "font-bold" : ""}>
                Reports
              </Link>
            </li>
            <li>
              <ModeToggle />
            </li>
            <li>
              <Button asChild variant="outline">
                <Link href="/login">Login</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}