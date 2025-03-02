'use client'
import { motion } from 'motion/react'
import { XIcon } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import { MuxVideo } from '@/components/ui/mux-video'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { useProjects } from '@/hooks/useProjects'
import { WORK_EXPERIENCE, BLOG_POSTS, EMAIL, SOCIAL_LINKS } from './data'

const TALKS = [
  {
    id: 1,
    title: 'Decentralized Sound Money #1',
    description: 'Introduction to Bitcoin as Sound Money',
    image: '/images/sound-money-1.jpeg',
  },
  {
    id: 2,
    title: 'Decentralized Sound Money Talk #2',
    description: "Understanding Bitcoin's Monetary Properties",
    image: '/images/sound-money-2.jpeg',
  },
  {
    id: 3,
    title: 'Decentralized Sound Money Talk #3',
    description: "Bitcoin's Role in the Future of Money",
    image: '/images/sound-money-3.png',
  },
]

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  const { projects, loading } = useProjects()

  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1">
          <p className="text-zinc-600 dark:text-zinc-400">
            Focused on creating intuitive and performant mobile/web experiences.
            Member of{' '}
            <a
              href="https://plebnet.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-base group relative inline-block px-0 font-[450] text-zinc-900 dark:text-zinc-50"
            >
              Plebnet.dev
              <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full dark:bg-zinc-50"></span>
            </a>
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Selected Projects</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {loading ? (
            <p>Loading projects...</p>
          ) : (
            <>
              {/* First column: UTXO Bubbles and Focus Mode */}
              <div className="flex flex-col gap-6">
                {/* UTXO Bubbles */}
                <div className="space-y-2">
                  <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                    <MuxVideo
                      playbackId={
                        projects[0].muxPlaybackId !==
                        'YOUR_MUX_PLAYBACK_ID_HERE'
                          ? projects[0].muxPlaybackId
                          : undefined
                      }
                      image={projects[0].image}
                    />
                  </div>
                  <div className="px-1">
                    <a
                      className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                      href={projects[0].link}
                      target="_blank"
                    >
                      {projects[0].name}
                      <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full"></span>
                    </a>
                    <p className="text-base text-zinc-600 dark:text-zinc-400">
                      {projects[0].description}
                    </p>
                  </div>
                </div>

                {/* Focus Mode */}
                <div className="space-y-2">
                  <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                    <MuxVideo
                      playbackId={
                        projects[2].muxPlaybackId !==
                        'YOUR_MUX_PLAYBACK_ID_HERE'
                          ? projects[2].muxPlaybackId
                          : undefined
                      }
                      image={projects[2].image}
                    />
                  </div>
                  <div className="px-1">
                    <a
                      className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                      href={projects[2].link}
                      target="_blank"
                    >
                      {projects[2].name}
                      <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full"></span>
                    </a>
                    <p className="text-base text-zinc-600 dark:text-zinc-400">
                      {projects[2].description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Second column: Guna Bitcoin and Dialisis MY */}
              <div className="flex flex-col gap-6">
                {/* Guna Bitcoin */}
                <div className="space-y-2">
                  <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                    <MuxVideo
                      playbackId={
                        projects[1].muxPlaybackId !==
                        'YOUR_MUX_PLAYBACK_ID_HERE'
                          ? projects[1].muxPlaybackId
                          : undefined
                      }
                      image={projects[1].image}
                    />
                  </div>
                  <div className="px-1">
                    <a
                      className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                      href={projects[1].link}
                      target="_blank"
                    >
                      {projects[1].name}
                      <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full"></span>
                    </a>
                    <p className="text-base text-zinc-600 dark:text-zinc-400">
                      {projects[1].description}
                    </p>
                  </div>
                </div>

                {/* Dialisis MY */}
                <div className="space-y-2">
                  <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                    <MuxVideo
                      playbackId={
                        projects[3].muxPlaybackId !==
                        'YOUR_MUX_PLAYBACK_ID_HERE'
                          ? projects[3].muxPlaybackId
                          : undefined
                      }
                      image={projects[3].image}
                    />
                  </div>
                  <div className="px-1">
                    <a
                      className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                      href={projects[3].link}
                      target="_blank"
                    >
                      {projects[3].name}
                      <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full"></span>
                    </a>
                    <p className="text-base text-zinc-600 dark:text-zinc-400">
                      {projects[3].description}
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
        <div className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.map((job) => (
            <a
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              key={job.id}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-row justify-between">
                  <div>
                    <h4 className="font-normal dark:text-zinc-100">
                      {job.title}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {job.company}
                    </p>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {job.start} - {job.end}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.section>
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-2 text-lg font-medium">Bitcoin Talks</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          I've been speaking at Bitcoin local community
          <a
            href="https://senjihouse.com.my/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-base group relative inline-block px-1 font-[450] text-zinc-900 dark:text-zinc-50"
          >
            senjihouse
            <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full dark:bg-zinc-50"></span>
          </a>
          since last year to get people to learn and understand Bitcoin. Here
          are some of my talks.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {TALKS.map((talk) => (
            <MorphingDialog
              key={talk.id}
              transition={{
                type: 'spring',
                bounce: 0,
                duration: 0.3,
              }}
            >
              <MorphingDialogTrigger>
                <div className="space-y-2">
                  <div className="aspect-auto w-full cursor-zoom-in overflow-hidden rounded-xl">
                    <img
                      src={talk.image}
                      alt={talk.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="px-1">
                    <h4 className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50">
                      {talk.title}
                    </h4>
                  </div>
                </div>
              </MorphingDialogTrigger>
              <MorphingDialogContainer>
                <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
                  <div className="aspect-video h-[50vh] w-full overflow-hidden rounded-xl md:h-[70vh]">
                    <img
                      src={talk.image}
                      alt={talk.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </MorphingDialogContent>
                <MorphingDialogClose
                  className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
                  variants={{
                    initial: { opacity: 0 },
                    animate: {
                      opacity: 1,
                      transition: { delay: 0.3, duration: 0.1 },
                    },
                    exit: { opacity: 0, transition: { duration: 0 } },
                  }}
                >
                  <XIcon className="h-5 w-5 text-zinc-500" />
                </MorphingDialogClose>
              </MorphingDialogContainer>
            </MorphingDialog>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-medium">Blog</h3>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.uid}
                className="-mx-3 rounded-xl px-3 py-3"
                href={post.link}
                data-id={post.uid}
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-normal dark:text-zinc-100">
                    {post.title}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Connect</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Feel free to contact me at{' '}
          <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
        <div className="flex items-center justify-start space-x-3">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
