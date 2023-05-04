export const Input = ({ id, name, label, type, placeholder, ...props }: { id: string, name: string, label: string, type: string, placeholder: string }) => (
  <fieldset>
    <label className='block mb-2 text-sm font-medium text-gray-300' htmlFor={id}>{label}</label>
    <input className='border text-sm rounded-lg block w-full p-2.5 bg-white/5 border-gray-600 placeholder-gray-400 text-white' id={id} name={name} type={type} placeholder={placeholder} {...props} />
    {/* <label className='block mb-2 text-sm font-medium text-gray-300'>{label}
          <input className='border text-sm rounded-lg block w-full p-2.5 bg-white/5 border-gray-600 placeholder-gray-400 text-white' id={id} name={name} type={type} placeholder={placeholder} {...props} />
        </label> */}
  </fieldset>
)
