import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, BarChart2, ShoppingCart, TrendingUp } from "lucide-react"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to Conversion</h1>
        <p className="text-xl mb-8">Boost your e-commerce conversion rates with data-driven insights</p>
        <Button asChild>
          <Link href="/dashboard">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-16">
        <Card>
          <CardHeader>
            <CardTitle>Data Integration</CardTitle>
            <CardDescription>Connect to various e-commerce platforms</CardDescription>
          </CardHeader>
          <CardContent>
            <ShoppingCart className="h-12 w-12 mb-4" />
            <p>Seamlessly integrate data from Amazon, Shopify, WooCommerce, and more.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Visualization</CardTitle>
            <CardDescription>See your data come to life</CardDescription>
          </CardHeader>
          <CardContent>
            <BarChart2 className="h-12 w-12 mb-4" />
            <p>Interactive charts and graphs to help you understand your conversion funnel.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Analysis</CardTitle>
            <CardDescription>Gain actionable insights</CardDescription>
          </CardHeader>
          <CardContent>
            <TrendingUp className="h-12 w-12 mb-4" />
            <p>Advanced analytics to identify opportunities for improvement.</p>
          </CardContent>
        </Card>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to optimize your conversions?</h2>
        <Button asChild>
          <Link href="/signup">Sign Up Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </section>
    </main>
  )
}