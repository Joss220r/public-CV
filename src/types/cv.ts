export type Language = 'es' | 'en' | 'ja'

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

export interface SiteCopy {
  languageName: string
  header: {
    mainNavigation: string
    mobileNavigation: string
    language: string
    openMenu: string
    closeMenu: string
    home: string
  }
  navigation: {
    profile: string
    experience: string
    education: string
    skills: string
    projects: string
    contact: string
  }
  skipToContent: string
  hero: {
    description: string
    profileAction: string
    skillsAction: string
    nativeLabel: string
  }
  profile: {
    title: string
    specialty: string
    location: string
    availability: string
  }
  experience: {
    title: string
    technologies: string
  }
  education: {
    title: string
  }
  skills: {
    title: string
    technologies: string
  }
  projects: {
    title: string
    item: string
    technologies: string
    liveLink: string
    repositoryLink: string
  }
  contact: {
    title: string
    description: string
    email: string
    githubValue: string
    linkedinValue: string
  }
}
