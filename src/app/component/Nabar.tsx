import { buttonVariants } from '@/components/ui/button';
import {KeyRound } from 'lucide-react';
import Link from 'next/link';
import cn from '../lib/utils';

const Navbar = () => {
    return (
        <div className='lex-no-wrap fixed top-0 backdrop-blur-sm h-[55px] flex w-full items-center shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-end'>
            <nav className='flex items-center'>
            <Link href='/dashboard' className={cn(buttonVariants(), "bg-green-500 text-white m-2")} target='_blank'>Login<KeyRound className="ml-2 h-4 w-4"/></Link>
            </nav>
        </div>
    );
};

export default Navbar;
