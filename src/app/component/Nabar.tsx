import { buttonVariants } from '@/components/ui/button';
import {KeyRound } from 'lucide-react';
import Link from 'next/link';
import cn from '../lib/utils';
import { MaxWidthWrapper } from './MaxWidthWrapper';
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/server';

const Navbar = () => {
    return (
        <nav className='lex-no-wrap fixed top-0 backdrop-blur-sm h-[55px] w-full z-30 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 transition-all inset-x-0'>
            <MaxWidthWrapper>
                <div className="flex h-[55px] items-center justify-between">
                    <Link href="/" className='flex font-semibold z-40 text-lg'>
                        <span>InsightPDF</span>
                    </Link>
                    <div className="hidden sm:flex items-center justify-end">
                        <Link 
                            href="/pricing" 
                            className={cn(buttonVariants({
                                variant: "ghost",
                                size: "sm"
                        }),"hover:bg-green-400 hover:text-white text-md duration-300 mr-2")}>Pricing</Link>

                        <LoginLink 
                            className={cn(buttonVariants({
                                variant: "ghost",
                                size: "sm"
                        }), "hover:bg-green-400 hover:text-white text-md durantion-300 mr-2")}>Log In</LoginLink>

                        <RegisterLink 
                            className={cn(buttonVariants({
                                size: "sm"
                        }), "hover:bg-green-400 hover:text-white text-md duration-300")}>Sign Up</RegisterLink>
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    );
};  

export default Navbar;
