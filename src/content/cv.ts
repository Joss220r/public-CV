import type { CvData, Language } from '../types/cv'

const commonData = {
  name: 'José Julián Ayala Flores',
  shortName: 'José Ayala',
  experience: [],
  projects: [],
  contact: {
    email: 'j.ayalaf26@gmail.com',
    phone: '4977 7814',
    github: '',
    linkedin: '',
  },
}

export const cvData: Record<Language, CvData> = {
  es: {
    ...commonData,
    role: 'Desarrollador iOS',
    country: 'El Progreso, Guatemala',
    profile:
      'Desarrollador iOS de El Progreso, Guatemala, enfocado en crear experiencias nativas claras y funcionales con Swift, SwiftUI y UIKit. Cuento con conocimientos en Python, Java y HTML, además de interés en ciberseguridad, privacidad y ética tecnológica.',
    availability: 'Disponible para viajar',
    education: [
      {
        degree: 'Ingeniería en Sistemas de Información y Ciencias de la Computación',
        institution: 'Universidad Mariano Gálvez de Guatemala',
        startDate: '',
        endDate: '',
        details: ['El Progreso, Guatemala'],
      },
    ],
    skillGroups: [
      {
        name: 'Desarrollo iOS',
        skills: ['Swift', 'SwiftUI', 'UIKit'],
      },
      {
        name: 'Programación web y general',
        skills: ['Python', 'Java', 'HTML'],
      },
      {
        name: 'Herramientas',
        skills: [
          'Visual Studio Code · intermedio',
          'Microsoft Office · intermedio',
          'OBS Studio · intermedio',
          'CapCut · intermedio',
          'Photoshop · básico',
          'Audacity · básico',
        ],
      },
      {
        name: 'Aptitudes',
        skills: ['Autodidacta', 'Flexibilidad', 'Paciencia', 'Concentración', 'Resistencia al estrés'],
      },
      {
        name: 'Idiomas',
        skills: ['Inglés · nivel básico'],
      },
    ],
  },
  en: {
    ...commonData,
    role: 'iOS Developer',
    country: 'El Progreso, Guatemala',
    profile:
      'iOS developer based in El Progreso, Guatemala, focused on creating clear and functional native experiences with Swift, SwiftUI, and UIKit. I also have knowledge of Python, Java, and HTML, along with an interest in cybersecurity, privacy, and technology ethics.',
    availability: 'Available to travel',
    education: [
      {
        degree: 'Information Systems and Computer Science Engineering',
        institution: 'Universidad Mariano Gálvez de Guatemala',
        startDate: '',
        endDate: '',
        details: ['El Progreso, Guatemala'],
      },
    ],
    skillGroups: [
      {
        name: 'iOS Development',
        skills: ['Swift', 'SwiftUI', 'UIKit'],
      },
      {
        name: 'Web and General Programming',
        skills: ['Python', 'Java', 'HTML'],
      },
      {
        name: 'Tools',
        skills: [
          'Visual Studio Code · intermediate',
          'Microsoft Office · intermediate',
          'OBS Studio · intermediate',
          'CapCut · intermediate',
          'Photoshop · basic',
          'Audacity · basic',
        ],
      },
      {
        name: 'Strengths',
        skills: ['Self-taught', 'Adaptability', 'Patience', 'Concentration', 'Stress tolerance'],
      },
      {
        name: 'Languages',
        skills: ['English · basic level'],
      },
    ],
  },
  ja: {
    ...commonData,
    role: 'iOS開発者',
    country: 'グアテマラ、エル・プログレソ',
    profile:
      'グアテマラのエル・プログレソを拠点とするiOS開発者です。Swift、SwiftUI、UIKitを用いた分かりやすく機能的なネイティブ体験の開発に取り組んでいます。Python、Java、HTMLの知識もあり、サイバーセキュリティ、プライバシー、技術倫理にも関心があります。',
    availability: '出張可能',
    education: [
      {
        degree: '情報システム・コンピューターサイエンス工学',
        institution: 'Universidad Mariano Gálvez de Guatemala',
        startDate: '',
        endDate: '',
        details: ['グアテマラ、エル・プログレソ'],
      },
    ],
    skillGroups: [
      {
        name: 'iOS開発',
        skills: ['Swift', 'SwiftUI', 'UIKit'],
      },
      {
        name: 'Web・一般プログラミング',
        skills: ['Python', 'Java', 'HTML'],
      },
      {
        name: 'ツール',
        skills: [
          'Visual Studio Code · 中級',
          'Microsoft Office · 中級',
          'OBS Studio · 中級',
          'CapCut · 中級',
          'Photoshop · 初級',
          'Audacity · 初級',
        ],
      },
      {
        name: '強み',
        skills: ['独学力', '柔軟性', '忍耐力', '集中力', 'ストレス耐性'],
      },
      {
        name: '言語',
        skills: ['英語 · 初級'],
      },
    ],
  },
}
