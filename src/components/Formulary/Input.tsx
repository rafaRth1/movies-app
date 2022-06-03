interface Props {
   htmlFor: string;
   label: string;
   type: string;
}

const Input = ({ htmlFor, label, type }: Props) => {
   return (
      <div className='p-5 flex items-center'>
         <label htmlFor={htmlFor} className='text-white text-sm font-bold mr-20 w-1/4'>
            {label}
         </label>
         <input
            type={type}
            id={htmlFor}
            className='rounded-3xl  outline-none px-3 py-1 w-3/4  bg-neutral-700 text-gray-500'
         />
      </div>
   );
};

export default Input;
