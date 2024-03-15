import { Button } from '@/components/ui/button'
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Menu } from 'lucide-react'
import React from 'react'
import { MobileNav } from './mobile-nav'
import { ThemeToggler } from '@/components/shared/theme-toggler'
import Link from 'next/link'
import { NavItems } from './nav-items'

export const Navbar = () => {

    return (
        <nav className='w-full shadow-md'>
            <div className='container mx-auto p-5'>
                <div className='w-full flex items-center gap-x-4 justify-between'>

                    <Link href="/" className='flex gap-x-2 items-center'>
                        <span>Logo</span>
                        <span>Name</span>
                    </Link>

                    <div className='md:flex hidden items-center gap-x-5'>
                        <NavItems />
                    </div>

                    <div className='md:flex gap-x-2 items-center hidden'>
                        <SignedOut>
                            <SignUpButton mode='modal'>
                                <Button>Sign Up</Button>
                            </SignUpButton>
                            <SignInButton mode='modal'>
                                <Button>Sign In</Button>
                            </SignInButton>
                        </SignedOut>

                        <SignedIn>
                            <Button>Order Now!</Button>
                        </SignedIn>

                        <ThemeToggler />

                        <UserButton afterSignOutUrl='/' />
                    </div>

                    <div className='block md:hidden'>
                        <MobileNav>
                            <Menu />
                        </MobileNav>
                    </div>

                </div>
            </div>
        </nav>
    )
};