import React from 'react'
import { useId } from 'react'
function Select({
    options,
    label,
    className="",
    ...props
},ref) {
    const id = useId();
      return (
    <div className='w-full'>
        {label && <label htmlFor={id} className=''> </label>}
         <select {...props}
         id ={id}
         ref={ref}
         className={`px-3 py-2 rounded-l bg-white
            text-black outline-none focus:bg-ray-50
            duration-200 border border-gray-200 w-full ${className}`}
         >
            {options?.map((option)=>(
                <option key={option} value={option} className=''>{option}</option>
            ))} 
            {/* options?.map():() if options have any length in it than map will run else wont helps to prevent from crash */}
         </select>
    </div>
  )
}

export default React.forwardRef(Select)
