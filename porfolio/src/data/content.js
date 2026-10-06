// All copy for the site lives here so updates never touch the components.

export const profile = {
  name: 'Godwin Alamu',
  role: 'Back-End & Full-Stack Developer',
  tagline: 'I build practical back ends and AI-powered web apps that feel simple to use.',
  location: 'London, UK',
  email: 'alamugodwin@gmail.com',
  socials: [
    { label: 'GitHub', href: 'https://github.com/Cupidx0' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mamba-drawing-280912265' },
    { label: 'Email', href: 'mailto:alamugodwin@gmail.com' },
  ],
}

export const about = [
  "I'm a developer who enjoys turning complex AI workflows into calm, human-first products. Most of my work sits where a clean React front end meets a Python back end and a dependable data layer.",
  "Right now I'm studying for an HNC/HND in Computing and building tools that make everyday life easier for students and small teams — from outfit planning to goal tracking.",
  "I care about clarity, performance and shipping things people actually use. I'm open to internships, apprenticeships and collaborative projects.",
]

export const journey = [
  {
    period: 'Now',
    title: 'HNC/HND in Computing',
    org: 'Higher education',
    description:
      'Studying computing and software development, alongside building AI-powered side projects.',
    tags: ['Computing', 'Software development', 'Back-end'],
  },
  {
    period: 'Certificate',
    title: 'Meta Front-End Developer Professional Certificate',
    org: 'Coursera',
    description: 'Professional certificate covering React, JavaScript, HTML, CSS, UX/UI and version control.',
    tags: ['React', 'JavaScript', 'UX/UI'],
    // Paste the Coursera credential URL here to make the title a link.
    link: '',
  },
  {
    period: 'Ongoing',
    title: 'Independent projects',
    org: 'Self-directed',
    description:
      'Designing and shipping full-stack apps end to end: React interfaces, Flask APIs, Firebase auth and Firestore data, and third-party AI and weather APIs.',
    tags: ['React', 'Python', 'Flask', 'Firebase', 'LLM APIs'],
  },
]

// Add `github` and `demo` URLs once a project is public; links only render when set.
export const projects = [
  {
    title: 'AI Outfit Generator',
    description:
      'Weather-aware outfit recommendations that blend a personal style profile with AI suggestions, so planning what to wear takes seconds.',
    stack: ['React', 'Python', 'Flask', 'Firebase', 'OpenAI', 'OpenWeather'],
    github: '',
    demo: '',
  },
  {
    title: 'AI Digital Twin Assistant',
    description:
      'In progress — a productivity and career companion that organises goals, habits and learning plans, with smart reminders powered by open-source LLMs.',
    stack: ['React', 'Python', 'Flask', 'Firebase', 'Open-source LLMs'],
    github: '',
    demo: '',
  },
]

export const skills = [
  { title: 'Frontend', items: ['React', 'JavaScript', 'HTML', 'CSS', 'Vite'] },
  { title: 'Backend', items: ['Python', 'Flask', 'Node.js', 'REST APIs'] },
  { title: 'Data & Cloud', items: ['Firebase', 'Firestore', 'SQL'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'ESLint'] },
]
