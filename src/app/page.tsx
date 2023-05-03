import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Input = ({ id, name, label, type, placeholder, ...props }: { id: string, name: string, label: string, type: string, placeholder: string }) => {
  return (
    <fieldset>
      <label className='block mb-2 text-sm font-medium text-gray-300' htmlFor={id}>{label}</label>
      <input className='border text-sm rounded-lg block w-full p-2.5 bg-white/5 border-gray-600 placeholder-gray-400 text-white' id={id} name={name} type={type} placeholder={placeholder} {...props} />
      {/* <label className='block mb-2 text-sm font-medium text-gray-300'>{label}
        <input className='border text-sm rounded-lg block w-full p-2.5 bg-white/5 border-gray-600 placeholder-gray-400 text-white' id={id} name={name} type={type} placeholder={placeholder} {...props} />
      </label> */}
    </fieldset>
  )
}

export default function Home () {
  return (
    <main className={`${inter.className} flex flex-col items-center justify-center min-h-screen p-24`}>
      <h2 className='text-4xl font-bold tracking-tight text-center mb-4'>Contact Form</h2>
      <form action=''>
        <Input id='email' name='email' label='Tu Email:' type='email' placeholder='tuemail@fdoinio.com' />
        <Input id='name' name='name' label='Tu Nombre:' type='text' placeholder='Gonzy Pozzo' />
        <Input id='message' name='message' label='Tu Mensage:' type='text' placeholder='Mensage para enviar.' />
      </form>
    </main>
  )
}
