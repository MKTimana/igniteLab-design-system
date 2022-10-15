 import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
 import {Check} from 'phosphor-react'
import { clsx } from 'clsx';
import { ReactNode } from 'react';
export interface CheckboxProps{
}
export function Checkbox({}: CheckboxProps){

    return(
        // <span className="Checkbox-grey-100 font-sans">Milton Kevin</span>
        <CheckboxPrimitive.Root className='h-6 w-6 p-[2px] bg-grey-800 rounded'>
            <CheckboxPrimitive.Indicator asChild>
                <Check weight='bold' className='h-5 w-5 text-cyan-300'/>
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    )
}