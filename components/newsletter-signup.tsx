"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle, AlertCircle, Loader2, Mail } from 'lucide-react'

interface NewsletterSignupProps {
  source?: string
  className?: string
  placeholder?: string
  buttonText?: string
}

export function NewsletterSignup({ 
  source = "Website",
  className = "",
  placeholder = "Enter your email",
  buttonText = "Subscribe"
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/newsletter-signup.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          source
        })
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: result.message
        })
        setEmail("") // Reset form
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={className}>
      {/* Status Messages */}
      {submitStatus.type && (
        <div className={`mb-4 p-3 rounded-lg flex items-center gap-2 text-sm ${
          submitStatus.type === 'success' 
            ? 'bg-green-50 text-green-800 border border-green-200' 
            : 'bg-red-50 text-red-800 border border-red-200'
        }`}>
          {submitStatus.type === 'success' ? (
            <CheckCircle className="w-4 h-4 flex-shrink-0" />
          ) : (
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
          )}
          <p>{submitStatus.message}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
        <Input
          type="email"
          placeholder={placeholder}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (submitStatus.type) {
              setSubmitStatus({ type: null, message: '' })
            }
          }}
          className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-white/50"
          required
          disabled={isSubmitting}
        />
        <Button 
          type="submit"
          disabled={isSubmitting}
          className="bg-white text-primary hover:bg-gray-100 whitespace-nowrap disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Subscribing...
            </>
          ) : (
            <>
              <Mail className="mr-2 h-4 w-4" />
              {buttonText}
            </>
          )}
        </Button>
      </form>
    </div>
  )
}
