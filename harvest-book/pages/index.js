import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div>
        <Layout />
        Index file
      </div>
    </>
  )
}
