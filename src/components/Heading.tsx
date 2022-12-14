import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface HeadingProps{
    size?:'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean;
}
export function Heading({size = 'md', children, asChild} : HeadingProps){

    const Comp = asChild ? Slot : 'h2';

    return(
        // <span className="text-grey-100 font-sans">Milton Kevin</span>
        <Comp className={
            clsx(
                'text-grey-100 font-bold font-sans',
                {
                    'text-lg': size === 'sm',
                    'text-xl': size === 'md',
                    'text-xxl': size === 'lg',
                }
                
                )}>{children}</Comp>
    )
}