"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Upload, Send } from "lucide-react"

interface FeedbackFormProps {
  className?: string
}

export function FeedbackForm({ className = "" }: FeedbackFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    experience: "",
    screenshot: null as File | null,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData((prev) => ({
      ...prev,
      screenshot: file,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formDataToSend = new FormData()
      formDataToSend.append("name", formData.name)
      formDataToSend.append("experience", formData.experience)
      if (formData.screenshot) {
        formDataToSend.append("screenshot", formData.screenshot)
      }

      const response = await fetch("/feedback-form.php", {
        method: "POST",
        body: formDataToSend,
      })

      if (response.ok) {
        setSubmitMessage("Thank you for your feedback! We'll review it and get back to you soon.")
        setFormData({ name: "", experience: "", screenshot: null })
      } else {
        setSubmitMessage("There was an error submitting your feedback. Please try again.")
      }
    } catch (error) {
      setSubmitMessage("There was an error submitting your feedback. Please try again.")
    }

    setIsSubmitting(false)
  }

  return (
    <Card className={`border-0 shadow-2xl ${className}`}>
      <CardHeader>
        <CardTitle className="text-2xl">Send Your Feedback</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name" className="text-base font-medium">
              Name *
            </Label>
            <Input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Your full name"
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="experience" className="text-base font-medium">
              Tell Us Your Experience *
            </Label>
            <Textarea
              id="experience"
              required
              value={formData.experience}
              onChange={(e) => handleInputChange("experience", e.target.value)}
              placeholder="Share your experience with our website, any issues you encountered, or suggestions for improvement..."
              rows={6}
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="screenshot" className="text-base font-medium">
              Do you have any screenshots about the issue? Upload Here (optional)
            </Label>
            <div className="mt-2">
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="screenshot"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-8 h-8 mb-4 text-gray-500" />
                    <p className="mb-2 text-sm">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs">PNG, JPG, GIF up to 10MB</p>
                  </div>
                  <input id="screenshot" type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                </label>
              </div>
              {formData.screenshot && (
                <p className="mt-2 text-sm text-gray-600 p-2 rounded hover:bg-primary hover:text-white transition-all duration-300 border border-gray-100">
                  Selected: {formData.screenshot.name}
                </p>
              )}
            </div>
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Sending...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Send className="w-5 h-5" />
                Send Now
              </div>
            )}
          </Button>

          {submitMessage && (
            <div
              className={`p-4 rounded-lg text-center ${
                submitMessage.includes("Thank you")
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              {submitMessage}
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
