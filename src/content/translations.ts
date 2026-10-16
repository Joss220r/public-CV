import type { Language, SiteCopy } from '../types/cv'

export const supportedLanguages: Language[] = ['es', 'en', 'ja']

export const siteCopy: Record<Language, SiteCopy> = {
  es: {
    languageName: 'Español',
    header: {
      mainNavigation: 'Navegación principal',
      mobileNavigation: 'Navegación móvil',
      language: 'Idioma',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      home: 'volver al inicio',
    },
    navigation: {
      profile: 'Perfil',
      experience: 'Experiencia',
      education: 'Estudios',
      skills: 'Habilidades',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    skipToContent: 'Ir al contenido',
    hero: {
      description: 'Desarrollo experiencias nativas para el ecosistema Apple con una atención especial al detalle y la claridad.',
      profileAction: 'Conocer mi perfil',
      skillsAction: 'Ver tecnologías',
      nativeLabel: 'Swift nativo',
    },
    profile: {
      title: 'Código nativo, experiencias claras.',
      specialty: 'Especialidad',
      location: 'Ubicación',
      availability: 'Disponibilidad',
    },
    experience: {
      title: 'Trabajo y evolución profesional.',
      technologies: 'Tecnologías utilizadas',
    },
    education: {
      title: 'Formación académica.',
    },
    skills: {
      title: 'Habilidades, lenguajes y herramientas.',
      technologies: 'Tecnologías de',
    },
    projects: {
      title: 'Productos y exploraciones.',
      item: 'Proyecto',
      technologies: 'Tecnologías de',
      liveLink: 'Ver proyecto',
      repositoryLink: 'Ver código',
    },
    contact: {
      title: 'Conectemos y conversemos.',
      description: 'Encontrá mis canales profesionales a continuación.',
      email: 'Correo',
      phone: 'Teléfono',
      githubValue: 'Perfil de GitHub',
      linkedinValue: 'Perfil de LinkedIn',
    },
  },
  en: {
    languageName: 'English',
    header: {
      mainNavigation: 'Main navigation',
      mobileNavigation: 'Mobile navigation',
      language: 'Language',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      home: 'return to the top',
    },
    navigation: {
      profile: 'Profile',
      experience: 'Experience',
      education: 'Education',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    skipToContent: 'Skip to content',
    hero: {
      description: 'I build native experiences for the Apple ecosystem with special attention to detail and clarity.',
      profileAction: 'View my profile',
      skillsAction: 'View technologies',
      nativeLabel: 'Native Swift',
    },
    profile: {
      title: 'Native code, clear experiences.',
      specialty: 'Specialty',
      location: 'Location',
      availability: 'Availability',
    },
    experience: {
      title: 'Work and professional growth.',
      technologies: 'Technologies used',
    },
    education: {
      title: 'Academic background.',
    },
    skills: {
      title: 'Skills, languages, and tools.',
      technologies: 'Technologies in',
    },
    projects: {
      title: 'Products and explorations.',
      item: 'Project',
      technologies: 'Technologies in',
      liveLink: 'View project',
      repositoryLink: 'View code',
    },
    contact: {
      title: 'Let’s connect and talk.',
      description: 'Find my professional channels below.',
      email: 'Email',
      phone: 'Phone',
      githubValue: 'GitHub profile',
      linkedinValue: 'LinkedIn profile',
    },
  },
  ja: {
    languageName: '日本語',
    header: {
      mainNavigation: 'メインナビゲーション',
      mobileNavigation: 'モバイルナビゲーション',
      language: '言語',
      openMenu: 'メニューを開く',
      closeMenu: 'メニューを閉じる',
      home: 'トップへ戻る',
    },
    navigation: {
      profile: 'プロフィール',
      experience: '職歴',
      education: '学歴',
      skills: 'スキル',
      projects: 'プロジェクト',
      contact: 'お問い合わせ',
    },
    skipToContent: '本文へ移動',
    hero: {
      description: '細部と分かりやすさを大切にしながら、Appleエコシステム向けのネイティブ体験を開発しています。',
      profileAction: 'プロフィールを見る',
      skillsAction: '技術を見る',
      nativeLabel: 'Swiftネイティブ',
    },
    profile: {
      title: 'ネイティブコードで、明快な体験を。',
      specialty: '専門分野',
      location: '所在地',
      availability: '対応状況',
    },
    experience: {
      title: '職務経験と成長。',
      technologies: '使用技術',
    },
    education: {
      title: '学歴。',
    },
    skills: {
      title: 'スキル、言語、ツール。',
      technologies: '技術',
    },
    projects: {
      title: 'プロダクトと探求。',
      item: 'プロジェクト',
      technologies: '技術',
      liveLink: 'プロジェクトを見る',
      repositoryLink: 'コードを見る',
    },
    contact: {
      title: 'お気軽にご連絡ください。',
      description: '以下の連絡先からお問い合わせいただけます。',
      email: 'メール',
      phone: '電話',
      githubValue: 'GitHubプロフィール',
      linkedinValue: 'LinkedInプロフィール',
    },
  },
}

export function isSupportedLanguage(value: string | null): value is Language {
  return supportedLanguages.includes(value as Language)
}

export function detectLanguage(browserLanguage: string): Language {
  const language = browserLanguage.toLowerCase().split('-')[0]
  return isSupportedLanguage(language) ? language : 'en'
}
