"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, FileText, Mail } from "lucide-react"

interface Job {
  title: string
  description: string
  location: string
  type: string
  experience: string
  requirements?: string[]
  responsibilities?: string[]
}

interface JobModalProps {
  job: Job
}

export function JobModal({ job }: JobModalProps) {
  const handleApplyNow = () => {
    const subject = encodeURIComponent(`Application For ${job.title} via HC360 Career Page`)
    const body = encodeURIComponent(`Dear Hiring Manager,

I am writing to express my interest in the ${job.title} position at Human Capital 360°.

[Please include your cover letter and qualifications here]

Best regards,
[Your Name]`)

    window.open(`mailto:careers@humancapital360.com?subject=${subject}&body=${body}`)
  }

  return (
    <Dialog>
      <div className="flex gap-2">
        <DialogTrigger asChild>
          <Button variant="outline" size="sm" className="flex-1 bg-white text-primary hover:bg-primary hover:text-white">
            <FileText className="mr-2 w-4 h-4" />
            View JD
          </Button>
        </DialogTrigger>
        <Button onClick={handleApplyNow} className="bg-primary hover:bg-primary/90 flex-1" size="sm">
          <Mail className="mr-2 w-4 h-4" />
          Apply Now
        </Button>
      </div>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">{job.title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-primary/100 text-white border-primary/20">
              <MapPin className="w-3 h-3 mr-1" />
              {job.location}
            </Badge>
            <Badge className="bg-secondary/100 text-white border-secondary/20">
              <Clock className="w-3 h-3 mr-1" />
              {job.type}
            </Badge>
            <Badge className="bg-accent/100 text-white border-accent/20">{job.experience}</Badge>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Job Description</h3>
            <p className="text-gray-600 leading-relaxed">{job.description}</p>
          </div>

          {job.responsibilities && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Key Responsibilities</h3>
              <ul className="space-y-2">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {job.requirements && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Requirements</h3>
              <ul className="space-y-2">
                {job.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex gap-4 pt-4">
            <Button onClick={handleApplyNow} className="bg-primary hover:bg-primary/90 flex-1" size="lg">
              <Mail className="mr-2 w-4 h-4" />
              Apply Now
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
