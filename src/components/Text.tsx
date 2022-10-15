import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';
export interface TextProps{
    size?:'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean;
}
export function Text({size = 'md', children, asChild} : TextProps){

    const Comp = asChild ? Slot : 'span';

    return(
        // <span className="text-grey-100 font-sans">Milton Kevin</span>
        <Comp className={
            clsx(
                'text-grey-100 font-sans',
                {
                    'text-xs': size === 'sm',
                    'text-small': size === 'md',
                    'text-medium': size === 'lg',
                }
                
                )}>{children}</Comp>
    )
}