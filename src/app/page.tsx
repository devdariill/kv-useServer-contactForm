import { Form } from '@/components/Form'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <main className={`${inter.className} flex flex-col min-h-screen p-24`}>
      <h2 className='text-4xl font-bold tracking-tight text-center mb-12'>Contact Form</h2>
      <Form />
    </main>
  )
}
