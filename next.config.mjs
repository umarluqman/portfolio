import createMDX from '@next/mdx'
import { fileURLToPath } from 'node:url'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: fileURLToPath(new URL('.', import.meta.url)),
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  output: 'standalone',
  outputFileTracingExcludes: {
    '*': [
      'node_modules/@swc/core-linux-x64-gnu',
      'node_modules/@swc/core-linux-x64-musl',
      'node_modules/@esbuild/linux-x64',
    ],
  },
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
})

export default withMDX(nextConfig)
