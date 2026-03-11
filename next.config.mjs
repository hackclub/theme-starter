import createMDX from '@next/mdx'

const withMDX = createMDX()

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx'],
}

export default withMDX(nextConfig)
