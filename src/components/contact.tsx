"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import ContactForm from "./contact-form"
import Link from "next/link"

export function Contact() {
  return (
    <section id="contact" className="py-30 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Bereit für eine<span className="text-primary"> Veränderung?</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6 p-10">
            <div className="mb-10">
              <h3 className="text-2xl font-semibold mb-6">Mach den ersten Schritt!</h3>
              <p className="text-foreground text-lg max-w-2xl mx-auto">
                Kontaktiere mich noch heute für ein kostenloses Erstgespräch!
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="h-5 w-5 text-primary" />
              <Link className="text-white hover:text-primary duration-300" href={"https://maps.app.goo.gl/9ub5LKuiPHpjzZGY9"}>
                Dipoldsau - Schweiz
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-5 w-5 text-primary" />
              <Link className="text-white hover:text-primary duration-300" href={"tel:+41763867705"}>+41 76 386 77 05</Link>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="h-5 w- text-primary" />
              <Link className="text-white hover:text-primary duration-300" href={"mailto:info@jaegerpeak.ch"}>info@jaegerpeak.ch</Link>
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
