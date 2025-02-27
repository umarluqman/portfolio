type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Satsiger',
    title: 'Freelance Mobile Frontend Engineer',
    start: '2024',
    end: 'Present',
    link: 'https://satsigner.com/',
    id: 'work1',
  },
  {
    company: 'WSAudiology',
    title: 'Front-end Engineer',
    start: '1 / 2024',
    end: '3 / 2024',
    link: 'https://www.wsa.com/',
    id: 'work2',
  },
  {
    company: 'Archisoft Global',
    title: 'Front-end Developer',
    start: '2019',
    end: '2024',
    link: 'https://archisoftglobal.com/',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/umarluqman',
  },
  {
    label: 'Twitter',
    link: 'https://x.com/lokalmaxi',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/umarluqman/',
  },
]

export const EMAIL = 'umarluqman@gmail.com'
