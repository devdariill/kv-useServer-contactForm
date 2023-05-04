import { Form } from '@/components/Form'
import { Form as FomrPostgres } from '@/components/FormPostgres'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <main className={`${inter.className} flex flex-col min-h-screen p-24`}>
      <h2 className='text-4xl font-bold tracking-tight text-center mb-12'>Contact Form</h2>
      <section className=''>
        <h3 className='text-center mb-3'>Redis</h3>
        <Form />
      </section>
      <section className=''>
        <h3 className='text-center my-3'>Postgres</h3>
        <FomrPostgres />
      </section>
    </main>
  )
}
