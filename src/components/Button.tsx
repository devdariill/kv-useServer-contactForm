export const Button = ({ children, ...props }: { children: React.ReactNode }) => {
  return (
    <button type='submit' className='px-5 py-3 text-sm font-medium text-center text-white border border-white rounded-full w-full' {...props}>{children}</button>
  )
}
