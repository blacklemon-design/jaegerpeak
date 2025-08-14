"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import ContactForm from "./contact-form"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to <span className="text-primary">Get Started?</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6 p-10">
            <div className="mb-10">
              <h3 className="text-2xl font-semibold mb-6">Bereit für eine Veränderung?</h3>
              <p className="text-foreground text-lg max-w-2xl mx-auto">
                Take the first step towards your fitness transformation. Contact me today for a free consultation.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="h-5 w-5 text-primary" />
              <p className="text-white">
                123 Fitness Street
                New York, NY 10001
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-5 w-5 text-primary" />
              <p className="text-white">+41 763867705</p>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="h-5 w- text-primary" />
              <p className="text-white">info@jaegerpeak.ch</p>
            </div>

          </div>
          <Card className="bg-card-dark border-card">
            <CardHeader>
              <CardTitle className="text-white">Kontaktiere mich</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  )
}
