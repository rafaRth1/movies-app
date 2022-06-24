const TextInput = ({ label, setstate, setvalidate, ...props }: any) => {
   const classInput =
      'rounded-3xl  outline-none px-3 py-2  bg-neutral-300 dark:bg-neutral-700 text-gray-500 my-2 w-full transition-all';
   const { regularphrase, state } = props;

   const validation = () => {
      if (regularphrase) {
         if (!regularphrase.test(state.value)) {
            setstate({ ...state, hasError: true });
            setvalidate(false);
         } else {
            setstate({ ...state, hasError: false });
            setvalidate(true);
         }
      }
   };

   const handleOnchage = (e: React.FocusEvent<HTMLInputElement, Element>) => {
      setstate({ ...state, value: e.target.value });
   };
   return (
      <div className='lg:flex items-center mb-5'>
         <label htmlFor={props.name} className='text-black dark:text-white text-sm mr-20 w-2/6'>
            {label}
         </label>

         <input
            className={`${classInput} ${state.hasError ? 'border-2 border-red-800 transition-all' : `${classInput}`} `}
            id={props.name}
            value={state.value}
            onBlur={validation}
            onChange={handleOnchage}
            {...props}
         />
      </div>
   );
};

export default TextInput;
