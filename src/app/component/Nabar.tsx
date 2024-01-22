import { buttonVariants } from '@/components/ui/button';
import {KeyRound } from 'lucide-react';
import Link from 'next/link';
import cn from '../lib/utils';
import { MaxWidthWrapper } from './MaxWidthWrapper';

const Navbar = () => {
    return (
        <nav className='lex-no-wrap fixed top-0 backdrop-blur-sm h-[55px] w-full z-30 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 transition-all inset-x-0'>
            <MaxWidthWrapper>
                <div className="flex h-[55px] items-center justify-between">
                    <Link href="/" className='flex font-semibold z-40 text-lg'>
                        <span>InsightPDF</span>
                    </Link>
                    <div className="hidden sm:flex items-center">

                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    );
};  

export default Navbar;
