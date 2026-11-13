import type { Metadata } from 'next'
import { Services } from './services'

export const metadata: Metadata = {
  title: 'Laman Web & Aplikasi untuk Pusat Dialisis | Umar Luqman',
  description:
    'Pakej laman web dan aplikasi mudah alih untuk pusat dialisis di Malaysia. Harga bermula RM1,500.',
}

export default function Page() {
  return <Services />
}
