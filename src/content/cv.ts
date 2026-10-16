import type { CvData, Language } from '../types/cv'

const commonData = {
  name: 'Jose Julian Ayala Flores',
  shortName: 'Jose Ayala',
  availability: '',
  experience: [],
  projects: [],
  contact: {
    email: '',
    github: '',
    linkedin: '',
  },
}

export const cvData: Record<Language, CvData> = {
  es: {
    ...commonData,
    role: 'Desarrollador iOS',
    country: 'Guatemala',
    profile:
      'Desarrollador iOS de Guatemala, enfocado en crear experiencias nativas claras, cuidadas y funcionales con Swift, SwiftUI y UIKit.',
    education: [
      {
        degree: 'Ingeniería en Sistemas',
        institution: 'Universidad Mariano Gálvez de Guatemala',
        startDate: '',
        endDate: '',
        details: [],
      },
    ],
    skillGroups: [
      {
        name: 'Desarrollo iOS',
        skills: ['Swift', 'SwiftUI', 'UIKit'],
      },
    ],
  },
  en: {
    ...commonData,
    role: 'iOS Developer',
    country: 'Guatemala',
    profile:
      'iOS developer based in Guatemala, focused on creating clear, polished, and functional native experiences with Swift, SwiftUI, and UIKit.',
    education: [
      {
        degree: 'Systems Engineering',
        institution: 'Universidad Mariano Gálvez de Guatemala',
        startDate: '',
        endDate: '',
        details: [],
      },
    ],
    skillGroups: [
      {
        name: 'iOS Development',
        skills: ['Swift', 'SwiftUI', 'UIKit'],
      },
    ],
  },
  ja: {
    ...commonData,
    role: 'iOS開発者',
    country: 'グアテマラ',
    profile:
      'グアテマラを拠点とするiOS開発者です。Swift、SwiftUI、UIKitを用いて、分かりやすく洗練された、機能的なネイティブ体験の開発に取り組んでいます。',
    education: [
      {
        degree: 'システム工学',
        institution: 'Universidad Mariano Gálvez de Guatemala',
        startDate: '',
        endDate: '',
        details: [],
      },
    ],
    skillGroups: [
      {
        name: 'iOS開発',
        skills: ['Swift', 'SwiftUI', 'UIKit'],
      },
    ],
  },
}
