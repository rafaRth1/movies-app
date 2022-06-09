interface Props {
   htmlFor: string;
   label: string;
   type: string;
}

const Input = ({ htmlFor, label, type }: Props) => {
   return (
      <div className='lg:flex items-center mb-5'>
         <label htmlFor={htmlFor} className='text-white text-sm mr-20 w-2/6'>
            {label}
         </label>
         <input
            type={type}
            id={htmlFor}
            className='rounded-3xl  outline-none px-3 py-2  bg-neutral-700 text-gray-500 my-2 w-full'
         />
      </div>
   );
};

export default Input;
