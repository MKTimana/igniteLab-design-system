import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement>{}
export interface TextInputInProps extends InputHTMLAttributes<HTMLInputElement>{}

export interface TextInputRootProps{
    children: ReactNode;
}
TextInputRoot.displayName ='TextInput.Root'
TextInputIcon.displayName ='TextInput.Icon'
TextInputIn.displayName ='TextInput.Input'
function TextInputRoot(props: TextInputRootProps){
return(
    <div className='flex items-center gap-3 h-12 py-4 px-3 rounded bg-grey-800 w-full focus-within:ring-2 ring-cyan-300'>
        {props.children}
    </div>
)
}

export interface TextInputIconProps{
    children : ReactNode;
}

 function TextInputIcon(props : TextInputIconProps){
    return(
        <Slot className='w-6 h-6 text-grey-400'>
            {props.children}
        </Slot>
    )
 }

function TextInputIn(props : TextInputInProps){
    return(

        <input className='bg-transparent flex-1  text-grey-100 text-xs placeholder:text-grey-400 outline-none'
            {...props}
        />
    )
}

export const TextInput ={
    Root : TextInputRoot,
    Input : TextInputIn,
    Icon : TextInputIcon
}