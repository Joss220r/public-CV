export interface Experience {
  company: string
  role: string
  startDate?: string
  endDate?: string
  location?: string
  description?: string[]
  technologies?: string[]
}

export interface Education {
  degree: string
  institution: string
  startDate?: string
  endDate?: string
  details?: string[]
}

export interface SkillGroup {
  name: string
  skills: string[]
}

export interface Project {
  name: string
  description: string
  technologies?: string[]
  liveUrl?: string
  repositoryUrl?: string
}

export interface Contact {
  email?: string
  github?: string
  linkedin?: string
}

export interface CvData {
  name: string
  shortName: string
  role: string
  country: string
  profile: string
  availability?: string
  experience: Experience[]
  education: Education[]
  skillGroups: SkillGroup[]
  projects: Project[]
  contact: Contact
}
