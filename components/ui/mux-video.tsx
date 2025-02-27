'use client'

import { XIcon } from 'lucide-react'
import MuxPlayer from '@mux/mux-player-react'
import Image from 'next/image'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'

type MuxVideoProps = {
  src?: string
  playbackId?: string
  image?: string
}

export function MuxVideo({ src, playbackId, image }: MuxVideoProps) {
  if (image) {
    return (
      <MorphingDialog
        transition={{
          type: 'spring',
          bounce: 0,
          duration: 0.3,
        }}
      >
        <MorphingDialogTrigger>
          <div className="aspect-video w-full cursor-zoom-in overflow-hidden rounded-xl">
            <Image
              src={image}
              alt=""
              width={1200}
              height={675}
              className="h-full w-full object-cover"
            />
          </div>
        </MorphingDialogTrigger>
        <MorphingDialogContainer>
          <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
            <div className="aspect-video h-[50vh] w-full overflow-hidden rounded-xl md:h-[70vh]">
              <Image
                src={image}
                alt=""
                width={1920}
                height={1080}
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
    )
  }

  if (!playbackId && !src) {
    return (
      <div className="flex aspect-video w-full items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Media not available
        </p>
      </div>
    )
  }

  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <div className="aspect-video w-full cursor-zoom-in overflow-hidden rounded-xl">
          {playbackId ? (
            <MuxPlayer
              playbackId={playbackId}
              autoPlay="muted"
              loop
              muted
              thumbnailTime={0}
              style={
                {
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                  '--controls': 'none',
                  '--media-object-fit': 'cover',
                } as React.CSSProperties
              }
              streamType="on-demand"
            />
          ) : src ? (
            <video
              src={src}
              autoPlay
              loop
              muted
              className="h-full w-full object-cover"
            />
          ) : null}
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <div className="aspect-video h-[50vh] w-full overflow-hidden rounded-xl md:h-[70vh]">
            {playbackId ? (
              <MuxPlayer
                playbackId={playbackId}
                autoPlay="muted"
                loop
                muted
                thumbnailTime={0}
                style={
                  {
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                    '--controls': 'none',
                    '--media-object-fit': 'cover',
                  } as React.CSSProperties
                }
                streamType="on-demand"
              />
            ) : src ? (
              <video
                src={src}
                autoPlay
                loop
                muted
                className="h-full w-full object-cover"
              />
            ) : null}
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
  )
}
