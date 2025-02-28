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
    title:
      '3 UI / UX Improvements for The Bitcoin Company and How to Implement Them',
    description:
      'This is part of the interview process for Senior Frontend (React Native) Developer position in The Bitcoin Company.',
    link: '/blog/3-ui-ux-improvements-for-the-bitcoin-company-and-how-to-implement-them',
    uid: 'blog-1',
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
