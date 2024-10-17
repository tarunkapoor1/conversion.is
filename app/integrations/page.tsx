"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"

export default function Integrations() {
  const [platform, setPlatform] = useState('')
  const [apiKey, setApiKey] = useState('')
  const { toast } = useToast()

  const handleConnect = () => {
    // Here you would typically send this data to your backend
    console.log('Connecting:', { platform, apiKey })
    toast({
      title: "Integration successful",
      description: `Connected to ${platform}`,
    })
    setPlatform('')
    setApiKey('')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Integrations</h1>
      
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Connect to E-commerce Platform</CardTitle>
          <CardDescription>Choose your platform and enter your API key to connect</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="platform">Platform</Label>
                <Select value={platform} onValueChange={setPlatform}>
                  <SelectTrigger id="platform">
                    <SelectValue placeholder="Select platform" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="amazon">Amazon</SelectItem>
                    <SelectItem value="shopify">Shopify</SelectItem>
                    <SelectItem value="woocommerce">WooCommerce</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="apiKey">API Key</Label>
                <Input id="apiKey" value={apiKey} onChange={(e) => setApiKey(e.target.value)} />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button onClick={handleConnect}>Connect</Button>
        </CardFooter>
      </Card>
    </div>
  )
}