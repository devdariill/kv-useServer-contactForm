import { Button } from '@/components/Button'
import { Input } from '@/components/input'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <main className={`${inter.className} flex flex-col items-center justify-center min-h-screen p-24`}>
      <h2 className='text-4xl font-bold tracking-tight text-center mb-4'>Contact Form</h2>
      <form className='space-y-8 border border-white/10 p-8'>
        <Input id='email' name='email' label='Tu Email:' type='email' placeholder='tuemail@fdoinio.com' />
        <Input id='name' name='name' label='Tu Nombre:' type='text' placeholder='Gonzy Pozzo' />
        <Input id='message' name='message' label='Tu Mensage:' type='text' placeholder='Mensage para enviar.' />
        <Button>Enviar</Button>
      </form>
    </main>
  )
}
