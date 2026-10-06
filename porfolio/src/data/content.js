// All copy for the site lives here so updates never touch the components.

export const profile = {
  name: 'Godwin Alamu',
  role: 'BackEnd & FullStack Developer',
  tagline: 'I build backend systems and full-stack applications.',
  location: 'London, UK',
  email: 'alamugodwin@gmail.com',
  socials: [
    { label: 'GitHub', href: 'https://github.com/Cupidx0' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mamba-drawing-280912265' },
    { label: 'Email', href: 'mailto:alamugodwin@gmail.com' },
  ],
}

export const about = [
  "I'm a developer who enjoys turning complex workflows into calm, user-friendly products. Most of my work sits where a clean React front end meets a Python back end and a dependable data layer.",
  "i also have experience in languages like JavaScript, TypeScript, Go, and frameworks like Flask and Node.js. I have a strong understanding of databases, RESTful APIs, and cloud services like Firebase.",
  "Right now I'm studying for an HNC/HND in Computing and building tools that make everyday life easier for students and small teams from outfit planning to goal tracking.",
  "I care about clarity, performance and shipping things people actually use. I'm open to internships, apprenticeships and collaborative projects.",
]

export const journey = [
  {
    period: 'Now',
    title: 'HNC/HND in Computing',
    org: 'Higher education',
    description:
      'Studying computing and software development, alongside building AI powered side projects.',
    tags: ['Computing', 'Software development', 'Backend'],
  },
  {
    period: 'Certificate',
    title: 'Meta Front End Developer Professional Certificate',
    org: 'Coursera',
    description: 'Professional certificate covering React, JavaScript, HTML, CSS, UX/UI and version control.',
    tags: ['React', 'JavaScript', 'UX/UI'],
    // Paste the Coursera credential URL here to make the title a link.
    link: '',
  },
  {
    period: 'Certificate',
    title: 'Google crash course on Python',
    org: 'Coursera',
    description: 'Comprehensive course covering Python programming fundamentals and applications.',
    tags: ['Python', 'Programming'],
    // Paste the Coursera credential URL here to make the title a link.
    link: 'https://www.coursera.org/account/accomplishments/verify/CIHI8462JWV1?utm_source=mobile&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course',
  },
  {
    period: 'Ongoing',
    title: 'Independent projects',
    org: 'Self directed',
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
      'Weather aware outfit recommendations that blend a personal style profile with AI suggestions, so planning what to wear takes seconds.',
    stack: ['React', 'Python', 'Flask', 'Firebase', 'OpenAI', 'OpenWeather'],
    github: '',
    demo: '',
  },
  {
    title: 'AI Digital Twin Assistant',
    description:
      'In progress a productivity and career companion that organises goals, habits and learning plans, with smart reminders powered by open source LLMs.',
    stack: ['React', 'Python', 'Flask', 'Firebase', 'Open source LLMs'],
    github: '',
    demo: '',
  },
]

export const skills = [
  { title: 'Frontend', items: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Vite'] },
  { title: 'Backend', items: ['Python', 'Flask', 'Go', 'Node.js', 'REST APIs'] },
  { title: 'Data & Cloud', items: ['Firebase', 'Firestore','Supabase', 'SQL'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'ESLint'] },
]
